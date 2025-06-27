import GradientWrapper from '@/components/shared/GradientWrapper';
import Section from '@/components/legal/disclaimer/Section';

export default function DocsPage() {
  return (
    <GradientWrapper>
      <main className="min-h-screen pt-24 pb-16">
        <div className="custom-screen px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mt-12 text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-grey-900)] mb-4">
                Documentation
              </h1>
              <p className="text-[var(--color-grey-600)]">
                Everything you need to know about WishMint
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--color-primary-lighter)]">
                
                <Section title="Getting Started">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    WishMint is a revolutionary platform that allows you to transform your dreams and wishes into permanent NFTs on the blockchain. Here&apos;s how to get started:
                  </p>
                  <ol className="list-decimal pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li>Connect your wallet (Phantom, Solflare, or any Solana-compatible wallet)</li>
                    <li>Navigate to the &quot;Mint a Wish&quot; page</li>
                    <li>Write your wish (up to 50 characters)</li>
                    <li>Pay the minting fee ($7)</li>
                    <li>Confirm the transaction and your wish becomes an NFT!</li>
                  </ol>
                </Section>

                <Section title="Supported Networks">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    WishMint operates on two blockchain networks:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li><strong>Solana:</strong> Fast, low-cost transactions with eco-friendly proof-of-stake consensus</li>
                    <li><strong>Abstract:</strong> High-performance blockchain optimized for NFTs and digital assets</li>
                  </ul>
                  <p className="text-[var(--color-grey-600)] mt-4">
                    You can switch between networks using the network selector in the app.
                  </p>
                </Section>

                <Section title="Wallet Connection">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    WishMint supports various wallet providers:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li><strong>Phantom:</strong> Popular Solana wallet with browser extension and mobile app</li>
                    <li><strong>Solflare:</strong> Secure Solana wallet with advanced features</li>
                    <li><strong>Backpack:</strong> Multi-chain wallet supporting Solana</li>
                    <li><strong>Other wallets:</strong> Any Solana-compatible wallet adapter</li>
                  </ul>
                  <div className="bg-[var(--color-primary-lighter)] rounded-xl p-4 mt-4">
                    <p className="text-[var(--color-primary-dark)]">
                      <strong>Tip:</strong> Make sure you have some SOL in your wallet to cover transaction fees.
                    </p>
                  </div>
                </Section>

                <Section title="Minting Process">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    When you mint a wish, here&apos;s what happens behind the scenes:
                  </p>
                  <ol className="list-decimal pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li>Your wish text is processed and validated</li>
                    <li>Metadata is created and uploaded to decentralized storage</li>
                    <li>A unique NFT is minted on the blockchain</li>
                    <li>The NFT is transferred to your wallet</li>
                    <li>Your wish becomes part of the WishMint collection</li>
                  </ol>
                </Section>

                <Section title="Wisher NFTs">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    Wisher NFTs are exclusive ownership tokens that provide special benefits:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li><strong>Revenue Sharing:</strong> Earn 70% of all minting fees</li>
                    <li><strong>Governance Rights:</strong> Vote on platform decisions</li>
                    <li><strong>Exclusive Access:</strong> Early access to new features</li>
                    <li><strong>Limited Supply:</strong> Only 3,500 Wisher NFTs will ever exist</li>
                  </ul>
                  <div className="bg-[var(--color-primary-lighter)] rounded-xl p-4 mt-4">
                    <p className="text-[var(--color-primary-dark)]">
                      <strong>Coming Soon:</strong> Wisher NFT minting will be available soon. Join our whitelist to be notified!
                    </p>
                  </div>
                </Section>

                <Section title="Platform Features">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    Explore what WishMint has to offer:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li><strong>Wish Gallery:</strong> Browse all minted wishes from the community</li>
                    <li><strong>Personal Collection:</strong> View and manage your minted wishes</li>
                    <li><strong>Roadmap:</strong> See upcoming features and platform development</li>
                    <li><strong>Community:</strong> Connect with other dreamers and wishers</li>
                  </ul>
                </Section>

                <Section title="Technical Specifications">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    Technical details for developers and advanced users:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li><strong>Token Standard:</strong> SPL Token (Solana) / ERC-721 compatible (Abstract)</li>
                    <li><strong>Metadata Standard:</strong> JSON with name, description, image, and attributes</li>
                    <li><strong>Storage:</strong> Decentralized storage (IPFS/Arweave)</li>
                    <li><strong>Smart Contracts:</strong> Audited and verified on-chain contracts</li>
                  </ul>
                </Section>

                <Section title="Fees and Pricing">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    Transparent pricing structure:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li><strong>Wish Minting:</strong> $7 per wish</li>
                    <li><strong>Network Fees:</strong> Small blockchain transaction fees (varies by network)</li>
                    <li><strong>Revenue Distribution:</strong> 70% to Wisher NFT holders, 30% to platform development</li>
                  </ul>
                </Section>

                <Section title="Security Best Practices">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    Keep your assets safe:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-2">
                    <li>Never share your private keys or seed phrases</li>
                    <li>Always verify transaction details before signing</li>
                    <li>Use hardware wallets for large amounts</li>
                    <li>Keep your wallet software updated</li>
                    <li>Be cautious of phishing attempts</li>
                  </ul>
                </Section>

              </div>
            </div>
          </div>
        </div>
      </main>
    </GradientWrapper>
  );
} 