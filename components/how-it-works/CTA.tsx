import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-primary-lighter)]">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-grey-900)]">
            Ready to Make Your Wish?
          </h2>
          <p className="text-lg text-[var(--color-grey-700)] mb-8">
            Join our community and start minting your wishes today. Every wish is unique, just like you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/mint"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[var(--color-primary-main)] rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              Mint Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/wishes"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-[var(--color-primary-main)] bg-white rounded-xl hover:bg-[var(--color-grey-50)] transition-colors duration-200"
            >
              Explore Wishes
              <svg
                className="w-5 h-5 ml-2"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 