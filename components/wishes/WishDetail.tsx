import { useState } from 'react';
import { Flag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WishDetailHeader } from './WishDetailHeader';
import { WishContent } from './WishContent';
import { WishNFTDetails } from './WishNFTDetails';
import { WishStats } from './WishStats';
import { Wish } from './types';
import { Skeleton } from '@/components/ui/skeleton';

interface WishDetailProps {
  wish: Wish | null;
  loading: boolean;
  onLike?: () => Promise<void>;
}

const WishDetail = ({ wish, loading, onLike }: WishDetailProps) => {
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    if (!wish || isLiking || !onLike) return;
    setIsLiking(true);
    try {
      await onLike();
    } catch (error) {
      console.error('Error liking wish:', error);
    } finally {
      setIsLiking(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[var(--color-primary-lighter)] to-white">
        <div className="container max-w-5xl mx-auto px-4 py-8">
          <div className="mt-16 mb-6">
            <Skeleton className="h-8 w-48 bg-[var(--color-primary-lighter)]" />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <Skeleton className="h-64 w-full mb-6 bg-[var(--color-primary-lighter)]" />
                <Skeleton className="h-8 w-full mb-4 bg-[var(--color-primary-lighter)]" />
                <Skeleton className="h-24 w-full mb-4 bg-[var(--color-primary-lighter)]" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-24 bg-[var(--color-primary-lighter)]" />
                  <Skeleton className="h-6 w-24 bg-[var(--color-primary-lighter)]" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <Skeleton className="h-20 w-full mb-4 bg-[var(--color-primary-lighter)]" />
                <Skeleton className="h-40 w-full bg-[var(--color-primary-lighter)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!wish) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[var(--color-primary-lighter)] to-white">
        <div className="container max-w-5xl mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="w-8 h-8 text-[var(--color-primary-main)]" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-4 text-[var(--color-grey-900)]">
              Wish not found
            </h1>
            <p className="text-[var(--color-grey-600)] mb-6">
              This wish might have been removed or is no longer available.
            </p>
            <Link href="/wishes">
              <Button className="bg-[var(--color-primary-main)] hover:bg-[var(--color-primary-dark)] text-white transition-colors">
                Back to Wishes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-primary-lighter)] to-white">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <div className="mt-16">
          <WishDetailHeader />

          <div className="grid gap-6 lg:grid-cols-3">
            <WishContent
              id={wish.id}
              title={wish.title}
              image={wish.image || '/placeholder-image.jpg'}
              likes={wish.likes}
              isLiked={wish.isLiked}
              creator={wish.creator}
              onLike={handleLike}
              isLiking={isLiking}
            />

            <div className="space-y-6">
              <WishNFTDetails 
                nftDetails={wish.nftDetails} 
                creator={wish.creator}
              />
              <WishStats
                likes={wish.likes}
                tagsCount={wish.tags?.length || 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishDetail; 