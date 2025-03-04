import React from 'react';
import WishCard from './WishCard';
import { Wish } from '@/types/wish';

interface WishGridProps {
  wishes: Wish[];
  loading?: boolean;
}

const WishGrid: React.FC<WishGridProps> = ({ wishes, loading }) => {
  console.log('wishes', wishes);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (wishes.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[var(--color-primary-lighter)] shadow-sm">
        <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-xl flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[var(--color-primary-main)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--color-grey-900)] mb-3">
          No Wishes Found
        </h3>
        <p className="text-[var(--color-grey-600)] max-w-md mx-auto mb-8">
          Try adjusting your filters or search criteria to find what you&apos;re
          looking for.
        </p>
        <div className="h-px w-24 bg-[var(--color-primary-lighter)] mx-auto" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {wishes.map((wish) => (
        <WishCard key={wish.id} wish={wish} />
      ))}
    </div>
  );
};

export default WishGrid;
