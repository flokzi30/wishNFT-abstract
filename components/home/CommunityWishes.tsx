'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getCategoryIcon } from '@/components/mint-a-wish/WishFormFields';
import { useEffect, useState } from 'react';
import { Category } from '@/types/contract';

// Static fallback data in case API fails
const fallbackWishesData = [
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
  const [wishes, setWishes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/wishes');
        
        if (!response.ok) {
          throw new Error('Failed to fetch wishes');
        }
        
        const data = await response.json();
        
        const sortedWishes = [...data].sort((a, b) => 
          parseInt(b.tokenId) - parseInt(a.tokenId)
        );
        
        // Limit to the last 6 wishes
        const recentWishes = sortedWishes.slice(0, 6);
        
        setWishes(recentWishes);
      } catch (err) {
        console.error('Error fetching wishes:', err);
        setError('Failed to load wishes');
        // Use fallback data if API fails
        setWishes(fallbackWishesData);
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, []);



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

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-primary-main)]"></div>
          </div>
        ) : error && wishes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[var(--color-grey-600)]">{error}</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {wishes.map((wish) => (
              <Link
                key={wish.tokenId}
                href={`/wishes/${wish.tokenId}`}
                className="relative aspect-square rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-200"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={wish.imageURI || '/placeholder-image.jpg'} 
                    alt={wish.wishText || 'Wish Image'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Dark overlay for better text readability */}
                  {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" /> */}
                </div>

              </Link>
            ))}
          </div>
        )}

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
