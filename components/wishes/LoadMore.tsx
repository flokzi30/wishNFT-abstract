import React from 'react';

interface LoadMoreProps {
  isLoading: boolean;
  onLoadMore: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ isLoading, onLoadMore }) => {
  return (
    <div className="mt-12 text-center">
      <button
        onClick={onLoadMore}
        disabled={isLoading}
        className="px-8 py-3 bg-[var(--color-primary-main)] text-white rounded-xl font-medium 
          hover:bg-[var(--color-primary-dark)] disabled:bg-[var(--color-grey-100)] 
          disabled:text-[var(--color-grey-400)] disabled:cursor-not-allowed transition-colors 
          shadow-sm hover:shadow-md focus:outline-none focus:ring-2 
          focus:ring-[var(--color-primary-light)] focus:ring-offset-2"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading more wishes...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Load More Wishes
          </span>
        )}
      </button>
    </div>
  );
};

export default LoadMore;
