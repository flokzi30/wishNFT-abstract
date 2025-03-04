import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface Creator {
  wallet: string;
}

interface WishContentProps {
  id: string | number;
  title: string;
  image: string;
  likes: number;
  isLiked: boolean;
  creator?: Creator;
  onLike: () => void;
  isLiking: boolean;
}

export function WishContent({
  title,
  image,
  likes,
  isLiked,
  onLike,
  isLiking,
}: WishContentProps) {


  return (
    <div className="lg:col-span-2">
      <div className="relative rounded-2xl overflow-hidden">
        {/* Main Image */}
        <div className="relative w-full aspect-square">
          <Image
            src={image || '/placeholder-image.jpg'}
            alt={title || 'Wish Image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>

        {/* Like Button Overlay */}
        <div className="absolute top-4 right-4">
          <Button
            variant={isLiked ? 'default' : 'outline'}
            className={`flex items-center gap-2 transition-all duration-300 rounded-lg
              ${
                isLiked
                  ? 'bg-[var(--color-primary-main)] text-white hover:bg-[var(--color-primary-dark)]'
                  : 'bg-white/90 backdrop-blur-sm border-transparent hover:bg-white/95 text-[var(--color-grey-600)]'
              }`}
            onClick={onLike}
            disabled={isLiking}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likes}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
