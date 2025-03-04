'use client';

import Link from 'next/link';

export default function Governance() {
  const governanceFeatures = [
    {
      title: 'Vote on Changes',
      description:
        'Each NFT gives you voting power. Have your say in platform updates, new features, and important decisions.',
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'bg-primary-lighter text-primary-dark',
      highlight: '1 NFT = 1 Vote',
    },
    {
      title: 'Make Proposals',
      description:
        "Share your ideas for new features or improvements. If the community likes it, we'll make it happen.",
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      color: 'bg-secondary-lighter text-secondary-dark',
      highlight: 'Propose Ideas',
    },
    {
      title: 'Manage Treasury',
      description:
        "Help decide how to use platform funds. From development to rewards, you'll have a say in where the money goes.",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'bg-info-lighter text-info-dark',
      highlight: 'Control Funds',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-lighter text-primary-dark text-sm font-medium mb-4">
              Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-3">
              Be Part of Every Decision
            </h2>
            <p className="text-base md:text-lg text-grey-600 max-w-2xl mx-auto">
              Own a WishMint NFT and help shape our future. Vote on changes,
              propose ideas, and decide how we grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {governanceFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white hover:bg-grey-50/80 border border-grey-100 rounded-xl p-6 relative transition-all duration-200 flex flex-col"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4 group-hover:scale-105 transition-transform duration-200`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-grey-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-grey-600 flex-grow">
                  {feature.description}
                </p>
                <div className="mt-4 pt-4 border-t border-grey-100">
                  <span
                    className={`text-sm font-medium ${feature.color} px-3 py-1 rounded-full`}
                  >
                    {feature.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-grey-50/50 border border-grey-100 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-lg font-semibold text-grey-900 mb-2 text-center">
                  What You Can Do
                </h3>
                <p className="text-sm text-grey-600 text-center mb-8">
                  Here&apos;s how you can help make WishMint better
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-grey-100 hover:border-primary-light hover:shadow-sm transition-all duration-200">
                    <svg
                      className="w-5 h-5 text-primary-main mt-0.5 shrink-0"
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
                    <span className="text-sm text-grey-700">
                      Vote on which features we should build next
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-grey-100 hover:border-primary-light hover:shadow-sm transition-all duration-200">
                    <svg
                      className="w-5 h-5 text-primary-main mt-0.5 shrink-0"
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
                    <span className="text-sm text-grey-700">
                      Help decide how to use platform earnings
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-grey-100 hover:border-primary-light hover:shadow-sm transition-all duration-200">
                    <svg
                      className="w-5 h-5 text-primary-main mt-0.5 shrink-0"
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
                    <span className="text-sm text-grey-700">
                      Choose which partnerships we should pursue
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-grey-100 hover:border-primary-light hover:shadow-sm transition-all duration-200">
                    <svg
                      className="w-5 h-5 text-primary-main mt-0.5 shrink-0"
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
                    <span className="text-sm text-grey-700">
                      Set up rewards for active community members
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-grey-100 bg-white p-6 text-center">
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 text-primary-dark hover:text-primary-main transition-colors duration-200"
              >
                <span className="text-sm font-medium">
                  Check Out Our Roadmap
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
