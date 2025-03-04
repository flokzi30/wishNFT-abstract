'use client';

import Link from 'next/link';
import { getCategoryIcon } from '@/components/mint-a-wish/WishFormFields';

interface Wish {
  id: string;
  title: string;
  category: string;
  creator: {
    address: string;
  };
}

// Sample wishes (will come from API in production)
const sampleWishes: Wish[] = [
  {
    id: '1',
    title:
      'creating a sustainable future for our oceans by reducing plastic waste.',
    category: 'Environment',
    creator: {
      address: '0x1234...5678',
    },
  },
  {
    id: '2',
    title:
      'ensuring every child has access to quality education regardless of their location or economic status.',
    category: 'Education',
    creator: {
      address: '0x8765...4321',
    },
  },
  {
    id: '3',
    title:
      'leveraging AI to make healthcare more accessible, and affordable for everyone.',
    category: 'Health',
    creator: {
      address: '0xabcd...efgh',
    },
  },
];

function WishCard({ wish }: { wish: Wish }) {
  return (
    <Link href={`/wishes/${wish.id}`}>
      <div className="relative aspect-square rounded-2xl overflow-hidden group">
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
                Abstract
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 w-full">
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
                  Wisher: {wish.creator.address}
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
      </div>
    </Link>
  );
}

export default function LatestWishes() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary-lighter)] to-[var(--color-primary-light)] mb-4">
          <span className="text-base font-medium bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-main)] text-transparent bg-clip-text">
            Community Wishes
          </span>
        </div>
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[var(--color-grey-900)]">
          Latest Dreams & Aspirations
        </h2>
        <p className="text-[var(--color-grey-600)] max-w-2xl mx-auto">
          Get inspired by the latest wishes from our community. Each wish
          represents a dream waiting to be realized.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleWishes.map((wish) => (
          <WishCard key={wish.id} wish={wish} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/wishes"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--color-primary-dark)] border-2 border-[var(--color-primary-lighter)] rounded-xl font-medium hover:bg-[var(--color-primary-lighter)] transition-colors duration-200"
        >
          View All Wishes
          <svg
            className="w-4 h-4 ml-2"
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
    </section>
  );
}
