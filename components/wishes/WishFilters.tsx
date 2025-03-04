import React, { useState, useRef } from 'react';
import { Wish } from '@/types/wish';

const VISIBLE_CATEGORIES = 8;
const VISIBLE_TAGS = 10;

interface WishFiltersProps {
  filterState: {
    category: string;
    sortBy: 'latest' | 'popular';
    tags: string[];
    searchQuery: string;
  };
  setFilterState: React.Dispatch<
    React.SetStateAction<{
      category: string;
      sortBy: 'latest' | 'popular';
      tags: string[];
      searchQuery: string;
    }>
  >;
  categories: readonly string[];
  wishes: Wish[];
}

const WishFilters: React.FC<WishFiltersProps> = ({
  filterState,
  setFilterState,
  categories,
  wishes,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get tag frequencies
  const tagFrequencies = wishes
    .flatMap((wish) => wish.tags || [])
    .reduce(
      (acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

  // Sort tags by frequency
  const sortedTags = Object.entries(tagFrequencies)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag);

  const visibleTags = showAllTags
    ? sortedTags
    : sortedTags.slice(0, VISIBLE_TAGS);
  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, VISIBLE_CATEGORIES);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-primary-lighter)] mb-8">
      <div className="p-4 sm:p-6">
        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search Input */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search wishes..."
                value={filterState.searchQuery}
                onChange={(e) =>
                  setFilterState((prev) => ({
                    ...prev,
                    searchQuery: e.target.value,
                  }))
                }
                className="w-full pl-10 pr-4 py-2.5 border border-[var(--color-primary-lighter)] rounded-xl 
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] 
                  text-[var(--color-grey-900)] placeholder:text-[var(--color-grey-400)] 
                  bg-white transition-colors"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-grey-400)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="w-full sm:w-48" ref={dropdownRef}>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-white 
                  border border-[var(--color-primary-lighter)] rounded-xl hover:bg-[var(--color-primary-lighter)] 
                  transition-colors"
              >
                <span className="text-[var(--color-grey-700)] font-medium">
                  {filterState.sortBy === 'latest'
                    ? 'Latest First'
                    : 'Most Popular'}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--color-grey-500)] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute z-10 w-full mt-1 bg-white border border-[var(--color-primary-lighter)] 
                  rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setFilterState((prev) => ({ ...prev, sortBy: 'latest' }));
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[var(--color-primary-lighter)] 
                      transition-colors ${
                        filterState.sortBy === 'latest'
                          ? 'text-[var(--color-primary-dark)] font-medium bg-[var(--color-primary-lighter)]'
                          : 'text-[var(--color-grey-700)]'
                      }`}
                  >
                    Latest First
                  </button>
                  <button
                    onClick={() => {
                      setFilterState((prev) => ({
                        ...prev,
                        sortBy: 'popular',
                      }));
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[var(--color-primary-lighter)] 
                      transition-colors ${
                        filterState.sortBy === 'popular'
                          ? 'text-[var(--color-primary-dark)] font-medium bg-[var(--color-primary-lighter)]'
                          : 'text-[var(--color-grey-700)]'
                      }`}
                  >
                    Most Popular
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {visibleCategories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setFilterState((prev) => ({ ...prev, category }))
                }
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filterState.category === category
                    ? 'bg-[var(--color-primary-main)] text-white shadow-sm hover:bg-[var(--color-primary-dark)]'
                    : 'bg-[var(--color-primary-lighter)] text-[var(--color-grey-700)] hover:bg-[var(--color-primary-light)]'
                }`}
              >
                {category}
              </button>
            ))}
            {categories.length > VISIBLE_CATEGORIES && (
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-[var(--color-primary-main)] 
                  hover:bg-[var(--color-primary-lighter)] transition-colors"
              >
                {showAllCategories
                  ? 'Show Less'
                  : `+${categories.length - VISIBLE_CATEGORIES} More`}
              </button>
            )}
          </div>
        </div>

        {/* Tags */}
        {sortedTags.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium text-[var(--color-grey-700)]">
                Popular Tags:
              </span>
              <div className="h-px flex-1 bg-[var(--color-primary-lighter)]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {visibleTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setFilterState((prev) => ({
                      ...prev,
                      tags: prev.tags.includes(tag)
                        ? prev.tags.filter((t) => t !== tag)
                        : [...prev.tags, tag],
                    }));
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    filterState.tags.includes(tag)
                      ? 'bg-[var(--color-secondary-lighter)] text-[var(--color-secondary-dark)] shadow-sm hover:bg-[var(--color-secondary-light)]'
                      : 'bg-[var(--color-grey-50)] text-[var(--color-grey-600)] hover:bg-[var(--color-grey-100)]'
                  }`}
                >
                  #{tag}
                  <span className="ml-1 text-xs text-[var(--color-grey-500)]">
                    ({tagFrequencies[tag]})
                  </span>
                </button>
              ))}
              {sortedTags.length > VISIBLE_TAGS && (
                <button
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-[var(--color-secondary-main)] 
                    hover:bg-[var(--color-secondary-lighter)] transition-colors"
                >
                  {showAllTags
                    ? 'Show Less'
                    : `+${sortedTags.length - VISIBLE_TAGS} more tags`}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishFilters;
