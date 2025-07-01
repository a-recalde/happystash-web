import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <h1>Terms of Service</h1>
      <p className="last-updated">Last Updated: July 1, 2025</p>
      
      <h2>Welcome to HappyStash</h2>
      <p>
        By using our app, you agree to these Terms of Service. Please read them carefully. HappyStash is a personal memory storage and sharing application that allows you to securely store and selectively share your memories with friends and family. HappyStash is provided as a completely free service with no in-app purchases or premium features.
      </p>
      
      <h2>Using HappyStash</h2>
      <p>
        You may use HappyStash only if you can form a binding contract with HappyStash, and only in compliance with these Terms and all applicable laws. When you create your HappyStash account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. HappyStash is currently available to users in the United States, Canada, and the United Kingdom.
      </p>
      
      <h2>Your Content</h2>
      <p>
        You retain all rights to the content you upload to HappyStash. By using our service, you grant us a non-exclusive license to access and use your content to provide our services. You are responsible for the content you share and must have the necessary rights to the content you upload.
      </p>
      
      <h2>Privacy and Security</h2>
      <p>
        HappyStash uses AES-GCM 256-bit end-to-end encryption to protect your memories. Your content is encrypted on your device before being uploaded to our servers. We implement the BIP39 standard for mnemonic recovery phrases. We cannot access your unencrypted content, encryption keys, or recovery phrases at any time. Please refer to our Privacy Policy for more information on how we handle your data.
      </p>
      
      <h2>Account Security and Recovery</h2>
      <p>
        You are responsible for safeguarding your account, including your recovery phrase. We cannot recover your encrypted content if you lose your recovery phrase, as we do not have access to your encryption keys. We strongly recommend storing your recovery phrase in a secure location separate from your device.
      </p>
      
      <h2>Prohibited Activities</h2>
      <p>
        You agree not to engage in any of the following prohibited activities:
      </p>
      <ul>
        <li>Copying, distributing, or disclosing any part of the service</li>
        <li>Using any automated system to access the service</li>
        <li>Transmitting content that contains viruses, malware, or other harmful code</li>
        <li>Interfering with the proper working of the service</li>
        <li>Attempting to harm our systems or other users</li>
      </ul>
      
      <h2>Termination and Account Deletion</h2>
      <p>
        We may suspend or terminate your account if you violate these Terms or create risk or legal exposure for us. You may delete your account at any time, which will immediately and permanently remove all your content from our servers.
      </p>
      
      <h2>Disclaimers</h2>
      <p>
        HappyStash is provided "as is" without warranties of any kind. We do not guarantee that the service will always be secure, error-free, or available.
      </p>
      
      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, HappyStash shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
      </p>
      
      <h2>Changes to Terms</h2>
      <p>
        We may modify these Terms from time to time. If we make material changes, we will notify you through the app or by other means.
      </p>
      
      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at support@happystash.app.
      </p>
    </div>
  );
};

export default Terms;
