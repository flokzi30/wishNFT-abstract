import GradientWrapper from '@/components/shared/GradientWrapper';

const Hero = () => {
  return (
    <GradientWrapper>
      <div className="custom-screen py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-4 py-1.5 bg-[var(--color-primary-lighter)] text-[var(--color-primary-dark)] rounded-full text-sm font-medium mb-6 inline-block hover:bg-[var(--color-primary-light)] transition-all duration-200">
            ✨ Making Dreams Come True
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r text-[var(--color-grey-900)] bg-clip-text">
            Turn Your Wishes Into Beautiful NFTs
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-grey-600)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of dreamers who have already transformed their wishes into stunning digital art. It&apos;s magical, simple, and rewarding!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/mint-a-wish"
              className="px-8 py-3 bg-[var(--color-primary-main)] text-white rounded-xl hover:bg-[var(--color-primary-dark)] transition-all duration-200 shadow-lg hover:shadow-[var(--color-primary-lighter)] text-lg font-medium"
            >
              Start Minting
            </a>
            <a 
              href="/how-it-works#learn-more"
              className="px-8 py-3 border-2 border-[var(--color-primary-lighter)] text-[var(--color-primary-dark)] rounded-xl hover:bg-[var(--color-primary-lighter)] transition-all duration-200 text-lg font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </GradientWrapper>
  );
};

export default Hero; 