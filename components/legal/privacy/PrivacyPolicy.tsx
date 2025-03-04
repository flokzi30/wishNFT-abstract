import React from 'react';
import Section from '../disclaimer/Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--color-primary-lighter)]">
        <Section title="1. Information Collection and Use">
          <p className="text-[var(--color-grey-600)] mb-4">
            At WishMint, we collect and process information necessary for providing our services. This includes:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Blockchain wallet addresses and connection data</li>
            <li>Transaction history and platform interactions</li>
            <li>NFT minting and transfer records</li>
            <li>User preferences and settings</li>
            <li>Device information and IP addresses</li>
            <li>Usage data and analytics</li>
          </ul>
          <p className="text-[var(--color-grey-600)] mt-4">
            We process this information based on the following legal grounds:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Performance of our contract with you</li>
            <li>Your consent where required</li>
            <li>Our legitimate business interests</li>
            <li>Compliance with legal obligations</li>
          </ul>
        </Section>

        <Section title="2. Data Sharing and Transfers">
          <p className="text-[var(--color-grey-600)] mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Service providers and technical partners</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
            <li>Other users as part of platform functionality</li>
          </ul>
          <p className="text-[var(--color-grey-600)] mt-4">
            International transfers of your data are protected by appropriate safeguards, including:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Standard contractual clauses</li>
            <li>Data processing agreements</li>
            <li>Compliance with data protection laws</li>
          </ul>
        </Section>

        <Section title="3. Your Rights and Choices">
          <p className="text-[var(--color-grey-600)] mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </Section>

        <Section title="4. Security Measures">
          <p className="text-[var(--color-grey-600)] mb-4">
            We implement comprehensive security measures:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>End-to-end encryption for sensitive data</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection</li>
            <li>Incident response procedures</li>
            <li>Continuous monitoring and updates</li>
          </ul>
        </Section>

        <Section title="5. Cookies and Tracking">
          <p className="text-[var(--color-grey-600)] mb-4">
            Our cookie usage includes:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Essential cookies for platform functionality</li>
            <li>Analytics cookies for performance monitoring</li>
            <li>Preference cookies for user experience</li>
            <li>Marketing cookies (with consent)</li>
          </ul>
          <p className="text-[var(--color-grey-600)] mt-4">
            You can manage cookie preferences through your browser settings.
          </p>
        </Section>

        <Section title="6. Children's Privacy">
          <p className="text-[var(--color-grey-600)] mb-4">
            Our services are not intended for users under 18 years of age. We do not knowingly collect or process data from children.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p className="text-[var(--color-grey-600)] mb-4">
            We may update this policy periodically. We will notify you of material changes through:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Platform notifications</li>
            <li>Email communications</li>
            <li>Website announcements</li>
          </ul>
        </Section>

        <Section title="8. Contact Information">
          <p className="text-[var(--color-grey-600)] mb-4">
            For privacy-related inquiries:
          </p>
          <div className="bg-[var(--color-primary-lighter)] rounded-xl p-4">
            <p className="text-[var(--color-primary-dark)]">
              Support<br />
              Email: support@wishmint.xyz<br />
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 