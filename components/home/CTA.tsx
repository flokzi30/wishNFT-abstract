'use client';

import Link from 'next/link';

const CTA = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[var(--color-primary-lighter)]">
    <div className="custom-screen relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-4 -right-4 w-64 h-64 bg-[var(--color-primary-lighter)]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-[var(--color-primary-light)]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary-main)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
          Ready to Mint Your Wish?
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-grey-600)] mb-12">
          Turn your dreams into NFTs today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/mint-a-wish"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[var(--color-primary-main)] to-[var(--color-primary-dark)] rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-[var(--color-primary-lighter)] group"
          >
            Mint Now
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
          </Link>

          {/* <Link
            href="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-[var(--color-grey-700)] border-2 border-[var(--color-primary-lighter)] hover:bg-[var(--color-primary-lighter)] rounded-xl transition-all duration-200 group"
          >
            Learn More
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
          </Link> */}
        </div>

        <p className="mt-8 text-sm text-[var(--color-grey-500)]">
          No credit card required • Instant minting
        </p>
      </div>
    </div>
  </section>
);

export default CTA;
