import React from 'react';
import Section from '../disclaimer/Section';

const Terms: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--color-primary-lighter)]">
        <Section title="1. Agreement to Terms">
          <p className="text-[var(--color-grey-600)] mb-4">
            By accessing or using WishMint, you agree to be bound by these Terms
            of Service and all applicable laws and regulations. If you do not
            agree with any of these terms, you are prohibited from using the
            service.
          </p>
          <p className="text-[var(--color-grey-600)] mb-4">
            You represent and warrant that:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>You are at least 18 years old</li>
            <li>You have the legal capacity to enter into these terms</li>
            <li>You will provide accurate and complete information</li>
            <li>You will comply with all applicable laws and regulations</li>
            <li>You possess the necessary rights to use blockchain services</li>
          </ul>
        </Section>

        <Section title="2. NFT Services and Blockchain Operations">
          <p className="text-[var(--color-grey-600)] mb-4">
            Important considerations regarding NFT transactions:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>All blockchain transactions are irreversible and final</li>
            <li>Transaction fees are non-refundable</li>
            <li>NFT content must comply with our content guidelines</li>
            <li>We are not responsible for blockchain network issues</li>
            <li>Smart contract interactions are at your own risk</li>
          </ul>
          <p className="text-[var(--color-grey-600)] mt-4">
            Prohibited activities include:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Creating or trading NFTs containing illegal content</li>
            <li>Manipulating platform features or markets</li>
            <li>Using automated systems without authorization</li>
            <li>Interfering with platform security</li>
          </ul>
        </Section>

        <Section title="3. Intellectual Property Rights">
          <p className="text-[var(--color-grey-600)] mb-4">
            Ownership and rights:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Platform content and trademarks belong to WishMint</li>
            <li>NFT ownership grants limited license to the associated content</li>
            <li>Commercial use requires explicit written permission</li>
            <li>You retain ownership of your original content</li>
          </ul>
          <p className="text-[var(--color-grey-600)] mt-4">
            By minting NFTs, you grant us:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Worldwide license to use your content for platform purposes</li>
            <li>Right to promote your NFTs</li>
            <li>Permission to modify content for technical requirements</li>
          </ul>
        </Section>

        <Section title="4. User Responsibilities">
          <p className="text-[var(--color-grey-600)] mb-4">
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Maintaining wallet security and private keys</li>
            <li>All activities under your account</li>
            <li>Reporting unauthorized access</li>
            <li>Backing up your digital assets</li>
            <li>Understanding blockchain technology risks</li>
          </ul>
        </Section>

        <Section title="5. Limitation of Liability">
          <p className="text-[var(--color-grey-600)] mb-4">
            WishMint shall not be liable for:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Loss of profits or digital assets</li>
            <li>Network or smart contract failures</li>
            <li>Third-party services or content</li>
            <li>User errors or misconduct</li>
            <li>Regulatory changes affecting NFTs</li>
          </ul>
        </Section>

        <Section title="6. Dispute Resolution">
          <p className="text-[var(--color-grey-600)] mb-4">
            Any disputes shall be resolved through:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Mandatory arbitration</li>
            <li>Jurisdiction of [Specified Court]</li>
            <li>Class action waiver</li>
            <li>Informal dispute resolution first</li>
          </ul>
        </Section>

        <Section title="7. Modifications and Termination">
          <p className="text-[var(--color-grey-600)] mb-4">
            WishMint reserves the right to:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-grey-600)]">
            <li>Modify these terms at any time</li>
            <li>Suspend or terminate services</li>
            <li>Remove content or users</li>
            <li>Change features or requirements</li>
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
        </Section>
      </div>
    </div>
  );
};

export default Terms; 