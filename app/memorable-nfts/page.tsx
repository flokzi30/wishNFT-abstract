'use client';

import Hero from '@/components/memorable-nfts/Hero';
import Features from '@/components/memorable-nfts/Features';
import RevenueSharing from '@/components/memorable-nfts/RevenueSharing';
import Governance from '@/components/memorable-nfts/Governance';
import MintDetails from '@/components/memorable-nfts/MintDetails';
import FAQ from '@/components/memorable-nfts/FAQ';
import CTA from '@/components/memorable-nfts/CTA';

export default function MemorableNFTsPage() {
  return (
    <main className="min-h-screen pt-12">
      <Hero />
      <Features />
      <RevenueSharing />
      <Governance />
      <MintDetails />
      <FAQ />
      <CTA />
    </main>
  );
} 