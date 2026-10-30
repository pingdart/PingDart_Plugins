package minikart.in;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.telephony.SubscriptionInfo;
import android.telephony.SubscriptionManager;
import android.telephony.TelephonyManager;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import com.google.android.gms.auth.api.identity.GetPhoneNumberHintIntentRequest;
import com.google.android.gms.auth.api.identity.Identity;
import java.util.List;

@CapacitorPlugin(
    name = "SimCard",
    permissions = {
        @Permission(
            strings = {
                Manifest.permission.READ_PHONE_STATE,
                Manifest.permission.READ_PHONE_NUMBERS
            },
            alias = "phone"
        )
    }
)
public class SimCardPlugin extends Plugin {

    private static final int RC_PHONE_HINT = 10099;
    private PluginCall savedHintCall = null;

    @PluginMethod
    public void getSimInfo(PluginCall call) {
        Context context = getContext();
        if (context == null) {
            call.reject("Context is null");
            return;
        }

        JSObject res = new JSObject();
        JSArray simCards = new JSArray();
        String detectedNumber = "";
        String detectedCountryIso = "";

        boolean hasPhoneState = ContextCompat.checkSelfPermission(context, Manifest.permission.READ_PHONE_STATE) == PackageManager.PERMISSION_GRANTED;
        boolean hasPhoneNumbers = true;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            hasPhoneNumbers = ContextCompat.checkSelfPermission(context, Manifest.permission.READ_PHONE_NUMBERS) == PackageManager.PERMISSION_GRANTED;
        }

        res.put("hasPermission", hasPhoneState && hasPhoneNumbers);

        try {
            TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
            if (tm != null) {
                String simIso = tm.getSimCountryIso();
                if (simIso != null && !simIso.isEmpty()) {
                    detectedCountryIso = simIso;
                } else {
                    String netIso = tm.getNetworkCountryIso();
                    if (netIso != null && !netIso.isEmpty()) {
                        detectedCountryIso = netIso;
                    }
                }
            }

            if (hasPhoneState && hasPhoneNumbers) {
                SubscriptionManager sm = (SubscriptionManager) context.getSystemService(Context.TELEPHONY_SUBSCRIPTION_SERVICE);
                if (sm != null) {
                    List<SubscriptionInfo> subs = sm.getActiveSubscriptionInfoList();
                    if (subs != null && !subs.isEmpty()) {
                        for (SubscriptionInfo info : subs) {
                            JSObject card = new JSObject();
                            int slot = info.getSimSlotIndex() + 1;
                            CharSequence carrier = info.getCarrierName() != null ? info.getCarrierName() : info.getDisplayName();
                            String countryIso = info.getCountryIso() != null ? info.getCountryIso() : "";
                            String number = "";

                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                                try {
                                    number = sm.getPhoneNumber(info.getSubscriptionId());
                                } catch (Throwable ignored) {}
                            }

                            if (number == null || number.isEmpty()) {
                                try {
                                    number = info.getNumber();
                                } catch (Throwable ignored) {}
                            }

                            if (number == null || number.isEmpty()) {
                                if (tm != null) {
                                    try {
                                        number = tm.getLine1Number();
                                    } catch (Throwable ignored) {}
                                }
                            }

                            if (number != null) {
                                number = number.trim();
                            } else {
                                number = "";
                            }

                            card.put("slot", slot);
                            card.put("carrier", carrier != null ? carrier.toString() : ("SIM " + slot));
                            card.put("countryIso", countryIso.toLowerCase());
                            card.put("number", number);
                            simCards.put(card);

                            if (detectedNumber.isEmpty() && !number.isEmpty()) {
                                detectedNumber = number;
                            }
                            if (detectedCountryIso.isEmpty() && !countryIso.isEmpty()) {
                                detectedCountryIso = countryIso;
                            }
                        }
                    }
                }

                if (detectedNumber.isEmpty() && tm != null) {
                    try {
                        String line1 = tm.getLine1Number();
                        if (line1 != null && !line1.trim().isEmpty()) {
                            detectedNumber = line1.trim();
                        }
                    } catch (Throwable ignored) {}
                }
            }
        } catch (SecurityException se) {
            res.put("hasPermission", false);
        } catch (Exception e) {
            // Non-critical fallback
        }

        res.put("simCards", simCards);
        res.put("phoneNumber", detectedNumber);
        res.put("countryIso", detectedCountryIso != null ? detectedCountryIso.toUpperCase() : "");
        call.resolve(res);
    }

    @PluginMethod
    public void getPhoneNumberHint(PluginCall call) {
        Activity activity = getActivity();
        if (activity == null) {
            call.reject("Activity is null");
            return;
        }

        savedHintCall = call;
        try {
            GetPhoneNumberHintIntentRequest request = GetPhoneNumberHintIntentRequest.builder().build();
            Identity.getSignInClient(activity)
                .getPhoneNumberHintIntent(request)
                .addOnSuccessListener(result -> {
                    try {
                        activity.startIntentSenderForResult(result.getIntentSender(), RC_PHONE_HINT, null, 0, 0, 0);
                    } catch (Exception e) {
                        if (savedHintCall != null) {
                            savedHintCall.reject("Failed to launch phone hint: " + e.getMessage());
                            savedHintCall = null;
                        }
                    }
                })
                .addOnFailureListener(e -> {
                    if (savedHintCall != null) {
                        savedHintCall.reject("Phone number hint not available: " + e.getMessage());
                        savedHintCall = null;
                    }
                });
        } catch (Exception e) {
            if (savedHintCall != null) {
                savedHintCall.reject("Error requesting phone number hint: " + e.getMessage());
                savedHintCall = null;
            }
        }
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);
        if (requestCode == RC_PHONE_HINT) {
            if (savedHintCall == null) return;
            if (resultCode == Activity.RESULT_OK && data != null) {
                try {
                    String phoneNumber = Identity.getSignInClient(getActivity()).getPhoneNumberFromIntent(data);
                    JSObject ret = new JSObject();
                    ret.put("phoneNumber", phoneNumber != null ? phoneNumber : "");
                    savedHintCall.resolve(ret);
                } catch (Exception e) {
                    savedHintCall.reject("Failed to parse phone number: " + e.getMessage());
                }
            } else {
                savedHintCall.reject("User cancelled phone hint");
            }
            savedHintCall = null;
        }
    }

    @PluginMethod
    public void requestSimPermission(PluginCall call) {
        if (getPermissionState("phone") == PermissionState.GRANTED) {
            JSObject ret = new JSObject();
            ret.put("granted", true);
            call.resolve(ret);
        } else {
            requestPermissionForAlias("phone", call, "simPermissionCallback");
        }
    }

    @PermissionCallback
    private void simPermissionCallback(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("granted", getPermissionState("phone") == PermissionState.GRANTED);
        call.resolve(ret);
    }
}
