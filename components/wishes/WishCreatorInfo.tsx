import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Creator {
  name: string;
  avatar: string;
  wallet: string;
}

interface WishCreatorInfoProps {
  creator: Creator;
}

function AvatarImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="h-12 w-12 rounded-full bg-grey-100 flex items-center justify-center 
        ring-2 ring-grey-200 transition-all duration-200">
        <User className="h-6 w-6 text-grey-400" />
      </div>
    );
  }

  return (
    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-grey-50 
      ring-2 ring-grey-200 transition-all duration-200">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-110 transition-transform duration-300"
        sizes="48px"
        onError={() => setError(true)}
      />
    </div>
  );
}

export function WishCreatorInfo({ creator }: WishCreatorInfoProps) {
  return (
    <div className="flex items-center gap-3 group">
      <AvatarImage
        src={creator.avatar}
        alt={creator.name || 'Creator'}
      />
      <div>
        <p className="font-medium text-grey-900 group-hover:text-primary-dark transition-colors">
          {creator.name}
        </p>
        <p className="text-sm text-grey-500 font-mono group-hover:text-grey-700 transition-colors">
          {creator.wallet}
        </p>
      </div>
    </div>
  );
} 