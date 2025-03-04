'use client';

import Link from 'next/link';
import { getCategoryIcon } from '@/components/mint-a-wish/WishFormFields';

const wishesData = [
  {
    id: 1,
    title: 'to travel around the world with my family.',
    wallet: '0x1a2b...3c4d',
    network: 'Abstract',
    category: 'Personal',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'to open my dream coffee shop in Tokyo.',
    wallet: '0x4d3c...2b1a',
    network: 'Abstract',
    category: 'Business',
    date: '2024-03-14',
  },
  {
    id: 3,
    title: 'to learn to play guitar and perform on stage.',
    wallet: '0x7e8f...9a0b',
    network: 'Abstract',
    category: 'Art',
    date: '2024-03-13',
  },
  {
    id: 4,
    title: 'to run my first marathon next year.',
    wallet: '0xb0a9...8f7e',
    network: 'Abstract',
    category: 'Sports',
    date: '2024-03-12',
  },
  {
    id: 5,
    title: 'to write and publish my first novel.',
    wallet: '0x5e6f...7d8c',
    network: 'Abstract',
    category: 'Creative',
    date: '2024-03-11',
  },
  {
    id: 6,
    title: 'to start my own tech startup by 2025.',
    wallet: '0x9b8a...7c6d',
    network: 'Abstract',
    category: 'Career',
    date: '2024-03-10',
  },
];

const CommunityWishes = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[var(--color-primary-lighter)]">
      <div className="custom-screen px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-[var(--color-primary-main)] font-medium mb-3 sm:mb-4 block text-sm sm:text-base">
            Latest Wishes
          </span>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[var(--color-grey-900)]">
            Wishes on the Blockchain
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-grey-600)] max-w-xl mx-auto">
            Explore meaningful wishes already minted as NFTs on the blockchain.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wishesData.map((wish) => (
            <Link
              key={wish.id}
              href={`/wishes/${wish.id}`}
              className="relative aspect-square rounded-2xl overflow-hidden group"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]" />

              {/* Content Overlay */}
              <div className="relative h-full p-4 sm:p-6 flex flex-col">
                {/* Top Section */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
                    <span className="text-sm sm:text-md">
                      {getCategoryIcon(wish.category)}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[var(--color-grey-900)]">
                      {wish.category}
                    </span>
                  </div>
                  <div className="bg-[var(--color-primary-main)]/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
                    <span className="text-xs sm:text-sm text-white font-medium">
                      {wish.network}
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow flex flex-col justify-center">
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                    <div className="text-white/60 text-sm sm:text-base mb-2 font-light">
                      I wish for...
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white break-words leading-relaxed">
                      {wish.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto pt-3 sm:pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs text-white font-medium font-mono">
                        Wisher: {wish.wallet}
                      </span>
                    </div>
                    <div className="bg-[var(--color-primary-main)]/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-lg">
                      <span className="text-[10px] sm:text-xs text-white font-medium">
                        #{wish.id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Link
            href="/wishes"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-[var(--color-primary-main)] rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
          >
            See All Wishes
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
        </div>
      </div>
    </section>
  );
};

export default CommunityWishes;
