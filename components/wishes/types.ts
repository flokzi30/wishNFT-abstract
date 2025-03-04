export interface Wish {
  id: string;
  title: string;
  description: string;
  category: string;
  likes: number;
  createdAt: string;
  creator: {
    name: string;
    avatar: string;
    wallet: string;
  };
  isLiked: boolean;
  image?: string;
  tags: string[];
  nftDetails?: {
    tokenId: string;
    blockchain: string;
    mintedAt: string;
  };
}

export interface FilterState {
  category: string;
  sortBy: 'latest' | 'popular';
  tags: string[];
  searchQuery: string;
}

export interface WishFiltersProps {
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  categories: any[]; // TODO: Replace with proper Category type
  wishes: any[]; // TODO: Replace with proper Wish type
}

export interface WishesProps {
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  visibleItems: number;
  filteredWishes: any[]; // TODO: Replace with proper Wish type
  displayedWishes: any[]; // TODO: Replace with proper Wish type
  isLoading: boolean;
  onLoadMore: () => Promise<void>;
  onClearFilters: () => void;
} 