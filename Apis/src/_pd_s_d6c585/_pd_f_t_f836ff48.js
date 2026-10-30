#!/usr/bin/env node
// Quick Gmail SMTP test — sends OTP email to a test address
// Usage: node test-gmail.js [to-email]
'use strict';

require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });
const nodemailer = require('nodemailer');

const to = process.argv[2] || process.env.SMTP_GMAIL_USER;
const code = '123456';

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📧 PingDart Gmail Test');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`From:    ${process.env.SMTP_GMAIL_USER}`);
console.log(`To:      ${to}`);
console.log(`Pass:    ${process.env.SMTP_GMAIL_PASS ? '✅ set' : '❌ MISSING'}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_GMAIL_USER,
    pass: process.env.SMTP_GMAIL_PASS
  }
});

const html = `
  <div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#f9fafb;border-radius:12px">
    <h2 style="text-align:center;color:#1f2937">Login Verification</h2>
    <div style="background:#fff;border-radius:10px;padding:24px;text-align:center;border:1px solid #e5e7eb">
      <p style="color:#6b7280;font-size:14px">Your one-time login code is</p>
      <div style="font-size:40px;font-weight:800;letter-spacing:10px;color:#4f46e5;margin:16px 0">${code}</div>
      <p style="color:#9ca3af;font-size:13px">Valid for 10 minutes. Do not share it.</p>
    </div>
    <p style="text-align:center;color:#d1d5db;font-size:12px;margin-top:24px">— MEDDYLIST (PingDart)</p>
  </div>`;

transporter.sendMail({
  from: `"PingDart" <${process.env.SMTP_GMAIL_USER}>`,
  to,
  subject: 'PingDart Login OTP — Test',
  text: `Use OTP ${code} to complete your login verification. Valid for 10 minutes. - MEDDYLIST (PingDart)`,
  html
}, (err, info) => {
  if (err) {
    console.error('❌ Failed:', err.message);
  } else {
    console.log('✅ Email sent!');
    console.log('   Message ID:', info.messageId);
    console.log('   Response: ', info.response);
  }
});
