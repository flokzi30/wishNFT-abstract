import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | WishMint',
  description: 'Learn how to turn your wishes into unique NFTs on WishMint. Simple steps to mint, share, and earn with your wishes.',
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 