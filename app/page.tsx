import CTA from '@/components/home/CTA';

import Hero from '@/components/home/Hero';
import CommunityWishes from '@/components/home/CommunityWishes';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HowItWorks /> */}
      <CommunityWishes />
      {/* <MemorableCollection /> */}
      {/* <FAQ /> */}
      <CTA />
    </>
  );
}
