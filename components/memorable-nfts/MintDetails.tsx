'use client';

import Link from 'next/link';

export default function MintDetails() {
  const whitelistSteps = [
    {
      title: 'Mint Your First Wish',
      description:
        'Create and mint a unique wish on our platform to start your journey',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      title: 'Share Your Story',
      description:
        'Share your wish on X (Twitter) and tag @wishmint with #WishMintNFT',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-grey-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-lighter text-primary-dark text-sm font-medium mb-4">
              Mint Information
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 mb-4">
              Become a Wisher
            </h2>
            <p className="text-grey-600 text-lg max-w-2xl mx-auto">
              Join our exclusive community of 3,500 Wishers. Shape the future of
              wish-making and earn from every wish minted on the platform.
            </p>
          </div>

          {/* NFT Preview Section */}
          <div className="bg-white rounded-2xl p-8 border border-grey-100 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-grey-50 flex items-center justify-center">
                  <div className="text-grey-500 text-center p-8">
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="font-medium">
                      Wisher NFT Preview Coming Soon
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-grey-900 mb-4">
                  Exclusive Wisher Benefits
                </h3>
                <p className="text-grey-600 mb-6">
                  As a Wisher, you&apos;re not just an NFT holder - you&apos;re
                  a key stakeholder in the WishMint ecosystem. Earn from every
                  wish minted and shape the platform&apos;s future.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-grey-700">
                    <svg
                      className="w-5 h-5 text-primary-main shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Revenue share from all wish mints
                  </li>
                  <li className="flex items-center gap-3 text-grey-700">
                    <svg
                      className="w-5 h-5 text-primary-main shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Governance rights in platform decisions
                  </li>
                  <li className="flex items-center gap-3 text-grey-700">
                    <svg
                      className="w-5 h-5 text-primary-main shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Early access to new features
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Mint Date */}
            <div className="bg-white rounded-2xl p-6 text-center border border-grey-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-lighter text-primary-dark mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-grey-600 mb-1">
                Mint Date
              </h3>
              <p className="text-xl font-bold text-grey-900">TBA</p>
            </div>

            {/* Mint Price */}
            <div className="bg-white rounded-2xl p-6 text-center border border-grey-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-lighter text-secondary-dark mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-grey-600 mb-1">
                Mint Price
              </h3>
              <p className="text-xl font-bold text-grey-900">TBA</p>
            </div>

            {/* Total Supply */}
            <div className="bg-white rounded-2xl p-6 text-center border border-grey-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-success-lighter text-success-dark mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-grey-600 mb-1">
                Total Supply
              </h3>
              <p className="text-xl font-bold text-grey-900">3,500</p>
            </div>

            {/* Blockchain */}
            <div className="bg-white rounded-2xl p-6 text-center border border-grey-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-info-lighter text-info-dark mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-grey-600 mb-1">
                Blockchain
              </h3>
              <p className="text-xl font-bold text-grey-900">Abstract</p>
            </div>
          </div>

          {/* Whitelist Section */}
          <div className="bg-white rounded-2xl border border-grey-100">
            <div className="p-8 sm:p-12 border-b border-grey-100">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-3 py-1.5 text-xs font-medium bg-primary-lighter text-primary-dark rounded-md mb-4">
                  Limited Spots Available
                </span>
                <h3 className="text-2xl font-bold text-grey-900 mb-4">
                  Get Whitelisted
                </h3>
                <p className="text-grey-600 text-lg mb-8 max-w-2xl mx-auto">
                  Join our whitelist to get priority access and special mint
                  price. Only 500 spots available for early supporters.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {whitelistSteps.map((step, index) => (
                    <div
                      key={index}
                      className="relative bg-grey-50 rounded-2xl p-8"
                    >
                      <div className="absolute -top-4 left-8 w-8 h-8 rounded-xl bg-primary-main text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="mb-6 text-primary-main">{step.icon}</div>
                      <h5 className="text-xl font-semibold text-grey-900 mb-3">
                        {step.title}
                      </h5>
                      <p className="text-grey-600">{step.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Link
                    href="/mint-a-wish"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-main px-8 py-4 font-medium text-white transition-colors hover:bg-primary-dark"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Get Whitelisted
                  </Link>
                </div>

                <div className="mt-8 bg-grey-50 rounded-xl p-6 flex items-center justify-center gap-3 text-grey-600">
                  <svg
                    className="w-5 h-5 text-primary-main shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm">
                    After completing these steps, you&apos;ll automatically be
                    considered for the whitelist. First 500 valid participants
                    will receive confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-12 text-center">
            <p className="text-grey-600 mb-6">
              Stay updated with mint details and announcements by following our
              social media channels.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://x.com/AbstractProject"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1DA1F2] px-6 py-3 font-medium text-white transition-colors hover:bg-[#1a8cd8]"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Follow on X
              </a>
              <a
                href="https://discord.gg/abstractproject"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#5865F2] px-6 py-3 font-medium text-white transition-colors hover:bg-[#4752C4]"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
