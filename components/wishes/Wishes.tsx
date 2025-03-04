import { wishesData, categories } from '@/data/wishes';
import WishHeader from './WishHeader';
import WishFilters from './WishFilters';
import WishGrid from './WishGrid';
import LoadMore from './LoadMore';
import { WishesProps } from './types';

const Wishes = ({
  filterState,
  setFilterState,
  visibleItems,
  filteredWishes,
  displayedWishes,
  isLoading,
  onLoadMore,
  onClearFilters,
}: WishesProps) => {
  return (
    <main className="min-h-screen pt-16 sm:pt-24 md:pt-32 pb-20 bg-gradient-to-b from-[var(--color-primary-lighter)] via-white to-[var(--color-primary-lighter)]">
      <div className="custom-screen px-4 sm:px-6 lg:px-8">
        <WishHeader />

        <WishFilters
          filterState={filterState}
          setFilterState={setFilterState}
          categories={categories}
          wishes={wishesData}
        />

        {/* Active Filters & Results Count */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-[var(--color-grey-600)]">
              {filteredWishes.length} wishes found
            </span>
            {(filterState.category !== 'All' ||
              filterState.tags.length > 0 ||
              filterState.searchQuery) && (
              <button
                onClick={onClearFilters}
                className="text-sm text-[var(--color-secondary-main)] hover:text-[var(--color-secondary-dark)] font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
          <span className="text-sm text-[var(--color-grey-500)]">
            Showing {Math.min(visibleItems, filteredWishes.length)} of{' '}
            {filteredWishes.length}
          </span>
        </div>

        <WishGrid wishes={displayedWishes} />

        {visibleItems < filteredWishes.length && (
          <LoadMore isLoading={isLoading} onLoadMore={onLoadMore} />
        )}
      </div>
    </main>
  );
};

export default Wishes; 