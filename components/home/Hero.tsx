'use client';
import NavLink from '@/components/shared/NavLink';

export default function Hero() {
  return (
    <section className="mt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-lighter)] to-white/95 -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-40" />

      <div className="custom-screen pt-16 pb-12">
        <div className="relative">
          {/* Soft gradient accents */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-48 h-48 bg-[var(--color-primary-lighter)]/20 rounded-full blur-xl -z-10" />
            <div className="absolute top-10 right-10 w-48 h-48 bg-[var(--color-primary-light)]/20 rounded-full blur-xl -z-10" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[var(--color-primary-lighter)]/20 rounded-full blur-xl -z-10" />
          </div>

          <div className="relative max-w-4xl mx-auto mt-12 text-center">
            <span className="px-4 py-1.5 bg-[var(--color-primary-lighter)] text-[var(--color-primary-dark)] rounded-full text-sm font-medium mb-6 inline-block">
              ✨ Make Your Wish Come True
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-[var(--color-grey-900)]">
              Digital Home for Wishes
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-grey-600)] mb-8 max-w-2xl mx-auto">
              Everyone has wishes. Now you can make them special by turning them
              into unique NFTs on the blockchain.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <NavLink
                href="/mint-a-wish"
                className="w-full sm:w-auto px-8 py-4 text-white bg-[var(--color-primary-main)] rounded-xl font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
              >
                Make a Wish
                <svg
                  className="w-5 h-5 ml-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </NavLink>
              <NavLink
                href="/wishes"
                className="w-full sm:w-auto px-8 py-4 text-[var(--color-grey-700)] bg-white border border-[var(--color-primary-lighter)] hover:bg-[var(--color-primary-lighter)] rounded-xl font-medium transition-colors duration-200"
              >
                See Other Wishes
                <svg
                  className="w-5 h-5 ml-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>

          {/* Hero images section is hidden */}
        </div>
      </div>
    </section>
  );
}
