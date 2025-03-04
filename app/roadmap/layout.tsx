import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public Roadmap | WishMint',
  description: 'Help shape the future of WishMint. Vote on upcoming features, suggest new ideas, and track our development progress.',
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 