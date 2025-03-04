import Link from 'next/link';
import Image from 'next/image';
import { Wish } from '@/types/wish';

interface WishCardProps {
  wish: Wish;
}

const WishCard = ({ wish }: WishCardProps) => {
  return (
    <Link href={`/wishes/${wish.id}`}>
      <div className="relative aspect-square rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-200">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src={wish.image || '/placeholder-image.jpg'} 
            alt={wish.title || 'Wish Image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

      </div>
    </Link>
  );
};

export default WishCard;
