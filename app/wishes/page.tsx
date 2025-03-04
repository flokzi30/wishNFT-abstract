'use client';

import { useState, useEffect } from 'react';
import Wishes from '@/components/wishes/Wishes';
import { FilterState } from '@/components/wishes/types';
import { Wish as ComponentWish } from '@/components/wishes/types';
import useSWR from 'swr';

const ITEMS_PER_PAGE = 4;

function adaptWishToComponentFormat(contractWish: any): ComponentWish {
  const slicedWisher = `${contractWish.wisher.slice(0, 6)}...${contractWish.wisher.slice(-6)}`;

  return {
    id: contractWish.tokenId || '0',
    title: contractWish.wishText,
    description: contractWish.detailedExplanation,
    category: contractWish.category.toString(),
    likes: Number(contractWish.likes),
    createdAt: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    creator: {
      name: 'Anonymous',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${slicedWisher}`,
      wallet: slicedWisher,
    },
    isLiked: false,
    image: contractWish.imageURI,
    tags: contractWish.relatedTopics,
    nftDetails: {
      tokenId: `#${contractWish.tokenId || '0'}`,
      blockchain: 'Abstract',
      mintedAt: new Date().toLocaleDateString('en-US'),
    },
  };
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function WishesPage() {
  const [filterState, setFilterState] = useState<FilterState>({
    category: 'All',
    sortBy: 'latest',
    tags: [],
    searchQuery: '',
  });

  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  // Fetch wishes using SWR for automatic revalidation
  const { data: wishes = [], isLoading } = useSWR('/api/wishes', fetcher, {
    refreshInterval: 5000, // Poll every 5 seconds
    revalidateOnFocus: true,
  });

  useEffect(() => {
    setVisibleItems(ITEMS_PER_PAGE);
  }, [filterState]);

  const adaptedWishes = wishes.map(adaptWishToComponentFormat);

  // Filter wishes based on all criteria
  const filteredWishes = adaptedWishes
    .filter((wish: ComponentWish) => {
      const matchesCategory = filterState.category === 'All' || wish.category === filterState.category;
      const matchesSearch =
        filterState.searchQuery === '' ||
        wish.title.toLowerCase().includes(filterState.searchQuery.toLowerCase()) ||
        wish.description.toLowerCase().includes(filterState.searchQuery.toLowerCase());
      const matchesTags =
        filterState.tags.length === 0 ||
        filterState.tags.every((tag) => wish.tags.includes(tag));

      return matchesCategory && matchesSearch && matchesTags;
    })
    .sort((a: ComponentWish, b: ComponentWish) => {
      if (filterState.sortBy === 'latest') {
        return Number(b.id) - Number(a.id);
      }
      return b.likes - a.likes;
    });

  const displayedWishes = filteredWishes.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
    return Promise.resolve();
  };

  const clearFilters = () => {
    setFilterState({
      category: 'All',
      sortBy: 'latest',
      tags: [],
      searchQuery: '',
    });
  };
  console.log('filteredWishes', filteredWishes);
  return (
    <Wishes
      filterState={filterState}
      setFilterState={setFilterState}
      visibleItems={visibleItems}
      filteredWishes={filteredWishes}
      displayedWishes={displayedWishes}
      isLoading={isLoading}
      onLoadMore={loadMore}
      onClearFilters={clearFilters}
    />
  );
}
