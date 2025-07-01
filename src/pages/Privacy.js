import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: July 1, 2025</p>
      
      <h2>Introduction</h2>
      <p>
        HappyStash is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
      </p>
      
      <h2>Information We Collect</h2>
      <p>We collect information in the following ways:</p>
      <ul>
        <li>Account Information: When you create an account, we collect your email address and authentication information.</li>
        <li>User Content: We store the memories, photos, and other content you upload to HappyStash. This content is encrypted on your device before being uploaded using AES-GCM 256-bit encryption.</li>
        <li>Usage Information: We collect analytics data through Firebase to understand how you use the app, including actions you take and features you use. This helps us improve the app experience.</li>
        <li>Crash Reports: We use Firebase Crashlytics to collect crash reports when the app experiences technical issues. These reports help us identify and fix bugs.</li>
        <li>Device Information: We collect information about your device, such as device type, operating system, and unique device identifiers.</li>
      </ul>
      
      <h2>End-to-End Encryption</h2>
      <p>
        HappyStash uses AES-GCM 256-bit end-to-end encryption to protect your memories. Your content is encrypted on your device before being uploaded to our servers using your personal encryption keys. We implement the BIP39 standard for mnemonic recovery phrases, which are generated on your device and stored securely using platform-specific secure storage mechanisms. We do not have access to your encryption keys, recovery phrases, or unencrypted content at any time. If you lose your recovery phrase, we cannot recover your encrypted data, so please store it securely.
      </p>
      
      <h2>How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide, maintain, and improve HappyStash</li>
        <li>Process and complete transactions</li>
        <li>Send you technical notices and support messages</li>
        <li>Respond to your comments and questions</li>
        <li>Develop new products and services</li>
        <li>Monitor and analyze trends and usage</li>
      </ul>
      
      <h2>Sharing Your Information</h2>
      <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
      <ul>
        <li>With your consent, when you choose to share memories with other users</li>
        <li>With service providers who perform services on our behalf</li>
        <li>To comply with legal obligations</li>
        <li>To protect the rights and safety of HappyStash and our users</li>
      </ul>
      
      <h2>Data Retention</h2>
      <p>
        We retain your information for as long as your account is active or as needed to provide you services. When you delete your account, all your data is immediately and permanently deleted from our active systems. For inactive accounts, we may send a notification after 12 months of inactivity and may delete the account after 24 months of continuous inactivity. Before deletion of inactive accounts, we will send multiple notifications to the email address associated with your account.
      </p>
      
      <h2>Your Rights</h2>
      <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
      <ul>
        <li>Access and update your information</li>
        <li>Delete your account and personal information</li>
        <li>Object to or restrict certain processing</li>
        <li>Data portability</li>
      </ul>
      
      <h2>Children's Privacy</h2>
      <p>
        HappyStash is not intended for children under 13. We do not knowingly collect information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.
      </p>
      
      <h2>Data Breach Procedures</h2>
      <p>In the event of a data breach that affects your personal information, we will:</p>
      <ul>
        <li>Notify affected users within 72 hours of discovering the breach</li>
        <li>Provide clear information about what happened and what data was affected</li>
        <li>Offer guidance on steps you can take to protect yourself</li>
        <li>Report the breach to relevant authorities as required by applicable law</li>
      </ul>
      <p>
        Due to our end-to-end encryption model, even in the event of a data breach, your encrypted memories and personal content remain protected by your encryption keys, which are never stored on our servers.
      </p>
      
      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      </p>
      
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at privacy@happystash.app.
      </p>
    </div>
  );
};

export default Privacy;
