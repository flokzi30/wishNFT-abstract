import React from 'react';
import Link from 'next/link';

const WishHeader: React.FC = () => {
  return (
    <div className="relative mb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-lighter)] to-white -z-10" />

      <div className="custom-screen max-w-4xl mx-auto text-center py-16 px-4">
        <span
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[var(--color-primary-dark)] 
          bg-[var(--color-primary-lighter)] rounded-xl"
        >
          ✨ Discover Wishes
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-grey-900)] mb-6">
          Community Wish Board
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-grey-600)] max-w-2xl mx-auto leading-relaxed mb-8">
          Every wish tells a story. Explore unique wishes from our community, find inspiration, 
          or share your own wish with the world.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/mint-a-wish"
            className="w-full sm:w-auto px-8 py-4 text-white bg-[var(--color-primary-main)] rounded-xl font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
          >
            Make Your Wish
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishHeader;
