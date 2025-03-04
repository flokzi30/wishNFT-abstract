'use client';

import { useSearchParams } from 'next/navigation';
import MintSuccess from '@/components/mint-a-wish/mint-success/MintSuccess';

export default function MintSuccessPage() {
  const searchParams = useSearchParams();

  const wishId = searchParams.get('id') || '1';
  const wishTitle = searchParams.get('title') || 'My Wish';
  const wishCategory = searchParams.get('category') || 'Personal';

  const shareUrl = `${
    typeof window !== 'undefined' ? window.location.origin : ''
  }/wishes/${wishId}`;
  const shareText = `🌟 I just minted my wish on WishMint!\n\n"${wishTitle}"\n\n`;

  return (
    <MintSuccess
      wishId={wishId}
      wishTitle={wishTitle}
      wishCategory={wishCategory}
      shareUrl={shareUrl}
      shareText={shareText}
    />
  );
}
