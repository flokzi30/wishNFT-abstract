import React from 'react';
import Section from './Section';

const LegalDisclaimer: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--color-primary-lighter)]">
        <Section title="1. Risk Acknowledgment">
          <div className="bg-[var(--color-primary-lighter)] rounded-xl p-4 mb-6">
            <p className="text-[var(--color-primary-dark)] font-medium">
              By using WishMint, you expressly acknowledge and accept
              all risks associated with blockchain technology,
              cryptocurrency transactions, and NFT trading. These
              activities involve substantial risk of loss and are not
              suitable for all users.
            </p>
          </div>
          <p className="text-[var(--color-grey-600)] mb-4">
            WishMint explicitly disclaims responsibility for:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Market volatility and price fluctuations</li>
            <li>Loss of access to digital assets</li>
            <li>Smart contract vulnerabilities</li>
            <li>Regulatory changes affecting cryptocurrencies or NFTs</li>
            <li>Tax implications of transactions</li>
            <li>Third-party wallet or service failures</li>
          </ul>
        </Section>

        <Section title="2. Investment Disclaimer">
          <p className="text-[var(--color-grey-600)] mb-4">
            Important notices regarding financial matters:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>No content constitutes financial, investment, or legal advice</li>
            <li>Past performance does not guarantee future results</li>
            <li>NFT valuations are speculative and volatile</li>
            <li>Users should conduct their own research and due diligence</li>
            <li>Consider consulting with professional advisors before making decisions</li>
          </ul>
        </Section>

        <Section title="3. Technical Risks">
          <p className="text-[var(--color-grey-600)] mb-4">
            Users acknowledge the following technical risks:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Blockchain network failures or congestion</li>
            <li>Smart contract bugs or exploits</li>
            <li>Wallet compatibility issues</li>
            <li>Data transmission errors</li>
            <li>Software or hardware malfunctions</li>
            <li>Cybersecurity threats</li>
          </ul>
        </Section>

        <Section title="4. Regulatory Compliance">
          <p className="text-[var(--color-grey-600)] mb-4">
            Users are responsible for:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Compliance with local laws and regulations</li>
            <li>Tax reporting and payment obligations</li>
            <li>Understanding regulatory requirements in their jurisdiction</li>
            <li>Obtaining necessary licenses or permits</li>
            <li>Reporting suspicious activities</li>
          </ul>
        </Section>

        <Section title="5. Third-Party Services">
          <p className="text-[var(--color-grey-600)] mb-4">
            Disclaimer regarding external services:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>We do not control third-party services</li>
            <li>External services are used at your own risk</li>
            <li>We are not responsible for third-party actions</li>
            <li>Service integrations may change without notice</li>
            <li>Users should review third-party terms and policies</li>
          </ul>
        </Section>

        <Section title="6. Intellectual Property">
          <p className="text-[var(--color-grey-600)] mb-4">
            Important notices about intellectual property:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>NFT ownership does not grant underlying IP rights</li>
            <li>Content licenses are limited and non-transferable</li>
            <li>Third-party IP rights may apply</li>
            <li>We do not guarantee uniqueness or originality</li>
          </ul>
        </Section>

        <Section title="7. Limitation of Liability">
          <p className="text-[var(--color-grey-600)] mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>We provide the service &quot;as is&quot; without warranties</li>
            <li>We are not liable for any direct or indirect damages</li>
            <li>Our total liability is limited to fees paid, if any</li>
            <li>Some jurisdictions may not allow these limitations</li>
          </ul>
        </Section>

        <Section title="8. Contact Information">
          <p className="text-[var(--color-grey-600)] mb-4">
            For legal inquiries and notices:
          </p>
          <div className="bg-[var(--color-primary-lighter)] rounded-xl p-4">
            <p className="text-[var(--color-primary-dark)]">
              Support
              <br />
              Email: support@wishmint.xyz
              <br />
            </p>
          </div>
          <p className="text-sm text-[var(--color-grey-500)] mt-4">
            This disclaimer may be updated periodically. Please check
            back regularly for updates.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default LegalDisclaimer; 