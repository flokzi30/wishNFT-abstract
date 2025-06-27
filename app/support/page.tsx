import GradientWrapper from '@/components/shared/GradientWrapper';
import Section from '@/components/legal/disclaimer/Section';

export default function SupportPage() {
  return (
    <GradientWrapper>
      <main className="min-h-screen pt-24 pb-16">
        <div className="custom-screen px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mt-12 text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-grey-900)] mb-4">
                Support Center
              </h1>
              <p className="text-[var(--color-grey-600)]">
                We&apos;re here to help you with any questions or issues
              </p>
            </div>

            {/* Quick Help Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-primary-lighter)]">
                <div className="w-12 h-12 bg-[var(--color-primary-main)] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-grey-900)] mb-2">
                  Getting Started
                </h3>
                <p className="text-[var(--color-grey-600)] mb-4">
                  New to WishMint? Learn how to connect your wallet and mint your first wish.
                </p>
                <a
                  href="/docs"
                  className="text-[var(--color-primary-main)] hover:text-[var(--color-primary-dark)] font-medium transition-colors"
                >
                  Read Documentation →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-primary-lighter)]">
                <div className="w-12 h-12 bg-[var(--color-primary-main)] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-grey-900)] mb-2">
                  Common Questions
                </h3>
                <p className="text-[var(--color-grey-600)] mb-4">
                  Find answers to frequently asked questions about WishMint.
                </p>
                <a
                  href="/faq"
                  className="text-[var(--color-primary-main)] hover:text-[var(--color-primary-dark)] font-medium transition-colors"
                >
                  View FAQ →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-primary-lighter)]">
                <div className="w-12 h-12 bg-[var(--color-primary-main)] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-grey-900)] mb-2">
                  Contact Us
                </h3>
                <p className="text-[var(--color-grey-600)] mb-4">
                  Need personal assistance? Our support team is ready to help.
                </p>
                <a
                  href="mailto:xyzwishmint@gmail.com"
                  className="text-[var(--color-primary-main)] hover:text-[var(--color-primary-dark)] font-medium transition-colors"
                >
                  Send Email →
                </a>
              </div>
            </div>

            {/* Detailed Support Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--color-primary-lighter)]">
                
                <Section title="Contact Methods">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[var(--color-primary-lighter)] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-[var(--color-primary-main)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-grey-900)]">Email Support</h4>
                          <p className="text-[var(--color-grey-600)]">xyzwishmint@gmail.com</p>
                          <p className="text-sm text-[var(--color-grey-500)]">Response within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[var(--color-primary-lighter)] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-[var(--color-primary-main)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-grey-900)]">Discord Community</h4>
                          <p className="text-[var(--color-grey-600)]">Join our Discord server</p>
                          <p className="text-sm text-[var(--color-grey-500)]">Real-time community support</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[var(--color-primary-lighter)] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-[var(--color-primary-main)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-grey-900)]">Twitter/X</h4>
                          <p className="text-[var(--color-grey-600)]">@wishmint_xyz</p>
                          <p className="text-sm text-[var(--color-grey-500)]">Latest updates and announcements</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[var(--color-primary-lighter)] rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-[var(--color-primary-main)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-grey-900)]">Documentation</h4>
                          <p className="text-[var(--color-grey-600)]">Comprehensive guides</p>
                          <p className="text-sm text-[var(--color-grey-500)]">Self-service help resources</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                <Section title="Common Issues">
                  <div className="space-y-6">
                    <div className="border-l-4 border-[var(--color-primary-main)] pl-4">
                      <h4 className="font-semibold text-[var(--color-grey-900)] mb-2">Wallet Connection Issues</h4>
                      <p className="text-[var(--color-grey-600)] mb-2">If you&apos;re having trouble connecting your wallet:</p>
                      <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-1">
                        <li>Ensure your wallet extension is installed and unlocked</li>
                        <li>Try refreshing the page and reconnecting</li>
                        <li>Clear your browser cache and cookies</li>
                        <li>Make sure you&apos;re on the correct network (Solana)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[var(--color-primary-main)] pl-4">
                      <h4 className="font-semibold text-[var(--color-grey-900)] mb-2">Transaction Failed</h4>
                      <p className="text-[var(--color-grey-600)] mb-2">If your transaction fails:</p>
                      <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-1">
                        <li>Check if you have enough SOL for transaction fees</li>
                        <li>Wait a moment and try again (network might be congested)</li>
                        <li>Increase the priority fee in your wallet settings</li>
                        <li>Contact support if the issue persists</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[var(--color-primary-main)] pl-4">
                      <h4 className="font-semibold text-[var(--color-grey-900)] mb-2">NFT Not Showing</h4>
                      <p className="text-[var(--color-grey-600)] mb-2">If your minted wish doesn&apos;t appear:</p>
                      <ul className="list-disc pl-6 text-[var(--color-grey-600)] space-y-1">
                        <li>Wait a few minutes for blockchain confirmation</li>
                        <li>Refresh your wallet or the wishes page</li>
                        <li>Check the transaction on a blockchain explorer</li>
                        <li>Contact support with your transaction ID</li>
                      </ul>
                    </div>
                  </div>
                </Section>

                <Section title="Bug Reports">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    Found a bug? Help us improve WishMint by reporting it:
                  </p>
                  <div className="bg-[var(--color-primary-lighter)] rounded-xl p-6">
                    <h4 className="font-semibold text-[var(--color-primary-dark)] mb-3">When reporting a bug, please include:</h4>
                    <ul className="list-disc pl-6 text-[var(--color-primary-dark)] space-y-1">
                      <li>Your browser and version</li>
                      <li>Your wallet type and version</li>
                      <li>Steps to reproduce the issue</li>
                      <li>Screenshots or error messages</li>
                      <li>Transaction IDs if applicable</li>
                    </ul>
                    <div className="mt-4">
                      <a
                        href="mailto:xyzwishmint@gmail.com?subject=Bug Report"
                        className="inline-flex items-center px-4 py-2 bg-[var(--color-primary-main)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                      >
                        Report Bug
                      </a>
                    </div>
                  </div>
                </Section>

                <Section title="Feature Requests">
                  <p className="text-[var(--color-grey-600)] mb-4">
                    Have an idea for improving WishMint? We&apos;d love to hear it! Send your feature requests to our team and help shape the future of the platform.
                  </p>
                  <a
                    href="mailto:xyzwishmint@gmail.com?subject=Feature Request"
                    className="inline-flex items-center px-6 py-3 bg-[var(--color-primary-main)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    Submit Idea
                  </a>
                </Section>

              </div>
            </div>
          </div>
        </div>
      </main>
    </GradientWrapper>
  );
} 