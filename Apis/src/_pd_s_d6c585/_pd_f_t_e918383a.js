#!/usr/bin/env node
// Quick SMS test script — sends real OTP to a test number via smslogin.co
// Usage: node test-sms.js

'use strict';

// Load env
require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });

// Force real mode for this test (override demo)
process.env.SMS_DEMO_MODE = 'false';

const { sendPhoneOtp, generateOtp } = require('../services/smsService');

const testPhone = '+919705656070';
const otp = '123456'; // fixed test OTP

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📱 PingDart SMS Test');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`To:      ${testPhone}`);
console.log(`OTP:     ${otp}`);
console.log(`Message: Use OTP ${otp} to complete your login verification. OTP is valid for 10 minutes. Do not share it with anyone. - MEDDYLIST (PingDart)`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('Sending...\n');

sendPhoneOtp(testPhone, otp)
  .then((result) => {
    console.log('\n✅ Result:', result);
    if (result.success) {
      console.log('🎉 SMS sent successfully!');
    } else {
      console.log('❌ SMS failed. Check the raw response above.');
    }
  })
  .catch((err) => {
    console.error('\n❌ Error:', err.message);
  });
