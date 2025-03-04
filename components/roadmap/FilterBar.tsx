import { useState, useRef, useEffect } from 'react';
import { Status, SortOption } from './types';
import { statusConfig } from './constants';

/* eslint-disable no-unused-vars */
interface FilterBarProps {
  selectedStatus: Status;
  onStatusChange: (_status: Status) => void;
  searchQuery: string;
  onSearchChange: (_query: string) => void;
  sortBy: SortOption;
  onSortChange: (_sort: SortOption) => void;
}
/* eslint-enable no-unused-vars */

const sortOptions = [
  { value: 'votes', label: 'Most Voted', icon: '🔥' },
  { value: 'latest', label: 'Latest', icon: '🕒' },
  { value: 'trending', label: 'Trending', icon: '📈' },
  { value: 'controversial', label: 'Controversial', icon: '💭' },
] as const;

export default function FilterBar({
  selectedStatus,
  onStatusChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: FilterBarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortMenuRef.current &&
        !sortMenuRef.current.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedSort =
    sortOptions.find((option) => option.value === sortBy) || sortOptions[0];

  return (
    <div className="relative md:sticky md:top-[72px] z-40 bg-white border-b border-grey-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col gap-3 sm:gap-3 md:flex-row md:items-center md:justify-between">
          {/* Status Filters */}
          <div className="flex-none overflow-x-auto hide-scrollbar -mx-3 sm:mx-0 px-3 sm:px-0">
            <div className="flex space-x-2 min-w-max py-0.5">
              {(Object.keys(statusConfig) as Status[]).map((status) => (
                <button
                  key={status}
                  onClick={() => onStatusChange(status)}
                  className={`
                    inline-flex items-center px-3.5 sm:px-3.5 h-10 sm:h-9 rounded-xl sm:rounded-lg text-sm font-medium 
                    whitespace-nowrap select-none
                    ${
                      selectedStatus === status
                        ? `${statusConfig[status].color} ${statusConfig[status].textColor}`
                        : 'text-grey-600 hover:bg-grey-50'
                    }
                  `}
                >
                  <span className="mr-2 text-base sm:text-sm select-none">
                    {statusConfig[status].icon}
                  </span>
                  <span className="select-none text-[13px] sm:text-sm">
                    {statusConfig[status].title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:max-w-xs">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search features..."
                className="w-full h-10 sm:h-9 px-3 py-1.5 sm:py-2 pl-9 bg-grey-50 border border-grey-200 rounded-xl sm:rounded-lg text-sm 
                  focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-lighter"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-400 select-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex-none" ref={sortMenuRef}>
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full sm:w-auto flex items-center justify-between gap-2 px-3.5 h-10 sm:h-9 bg-grey-50 
                  border border-grey-200 rounded-xl sm:rounded-lg text-sm font-medium text-grey-700 hover:bg-grey-100 
                  min-w-[140px] select-none"
              >
                <div className="flex items-center gap-2">
                  <span className="select-none text-base sm:text-sm">
                    {selectedSort.icon}
                  </span>
                  <span className="select-none text-[13px] sm:text-sm">
                    {selectedSort.label}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 ${
                    isSortOpen ? 'rotate-180' : ''
                  } select-none`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isSortOpen && (
                <div
                  className="absolute right-0 mt-1 w-48 bg-white rounded-xl sm:rounded-lg border border-grey-100 
                  shadow-lg py-1 z-50"
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onSortChange(option.value as SortOption);
                        setIsSortOpen(false);
                      }}
                      className={`
                        flex items-center gap-2 w-full px-3.5 py-2.5 sm:py-2 text-[13px] sm:text-sm select-none
                        ${
                          option.value === sortBy
                            ? 'bg-grey-50 text-grey-900 font-medium'
                            : 'text-grey-600 hover:bg-grey-50'
                        }
                      `}
                    >
                      <span className="select-none text-base sm:text-sm">
                        {option.icon}
                      </span>
                      <span className="select-none">{option.label}</span>
                      {option.value === sortBy && (
                        <svg
                          className="w-4 h-4 ml-auto select-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
