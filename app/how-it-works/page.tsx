import Hero from '@/components/how-it-works/Hero';
import Steps from '@/components/how-it-works/Steps';
import WhyMint from '@/components/how-it-works/WhyMint';
import CollectionBenefits from '@/components/how-it-works/CollectionBenefits';
import CTA from '@/components/how-it-works/CTA';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <Steps />
      <WhyMint />
      <CollectionBenefits />
      <CTA />
    </main>
  );
} 