'use client';

import { useParams } from 'next/navigation';
import WishDetail from '@/components/wishes/WishDetail';
import { useLikeWish } from '@/hooks/useWishNFTContract';
import { Wish as ComponentWish } from '@/components/wishes/types';
import useSWR from 'swr';

function adaptWishToComponentFormat(contractWish: any | null): ComponentWish | null {
  if (!contractWish) return null;

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
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${contractWish.wisher}`,
      wallet: contractWish.wisher,
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

export default function WishDetailPage() {
  const params = useParams();
  const tokenId = params.id as string;
  const { likeWish, isLoading: isLiking } = useLikeWish();

  // Fetch wish using SWR for automatic revalidation
  const { data: wish, isLoading } = useSWR(
    `/api/wishes?tokenId=${tokenId}`,
    fetcher,
    {
      refreshInterval: 5000, // Poll every 5 seconds
      revalidateOnFocus: true,
    }
  );

  const handleLike = async () => {
    try {
      await likeWish(BigInt(tokenId));
      // The polling will automatically update the UI
    } catch (error) {
      console.error('Error liking wish:', error);
    }
  };

  const adaptedWish = adaptWishToComponentFormat(wish);

  return (
    <WishDetail 
      wish={adaptedWish} 
      loading={isLoading || isLiking} 
      onLike={handleLike}
    />
  );
}
