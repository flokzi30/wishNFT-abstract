import Image from "next/image";

interface WishImageProps {
  src?: string;
  alt: string;
}

export function WishImage({ src, alt }: WishImageProps) {
  if (!src) return null;

  return (
    <div className="relative h-[300px] sm:h-[400px] w-full bg-grey-50 rounded-t-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-grey-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
        priority
        sizes="(max-width: 768px) 100vw, 66vw"
      />
      <div className="absolute inset-0 bg-primary-main/20 animate-pulse" />
    </div>
  );
} 