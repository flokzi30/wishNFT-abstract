import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memorable NFTs | WishMint',
  description: 'Transform your dreams into unique NFTs. Immortalize your wishes on the blockchain with WishMint.',
};

export default function MemorableNFTsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 