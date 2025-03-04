import Link from 'next/link';

const steps = [
  {
    title: 'Create Your Wish',
    description: 'Express your heartfelt wishes and dreams. Each wish becomes a unique piece of digital art, forever preserved on the blockchain.',
    icon: '✨',
    action: {
      text: 'Make a Wish',
      href: '/mint-a-wish',
    },
  },
  {
    title: 'Mint as NFT',
    description: 'Watch your wish transform into a beautiful NFT with AI-generated art that captures the essence of your dream.',
    icon: '🎨',
    action: {
      text: 'View Collection',
      href: '/wishes',
    },
  },
  {
    title: 'Share & Connect',
    description: 'Join a vibrant community of dreamers, share your story, and inspire others with your wishes.',
    icon: '🌟',
    action: {
      text: 'Join Community',
      href: '/wishes',
    },
  },
  {
    title: 'Earn & Grow',
    description: 'As a Memorable NFT holder, earn revenue share and unlock exclusive privileges in our growing ecosystem.',
    icon: '💎',
    action: {
      text: 'Discover Benefits',
      href: '/memorable-nfts',
    },
  },
];

const Steps = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[var(--color-primary-lighter)]" id="learn-more">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-[var(--color-primary-main)] font-medium mb-4 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-grey-900)] mb-4 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-secondary-dark)] bg-clip-text text-transparent">
            Your Journey to NFT Creation
          </h2>
          <p className="text-lg text-[var(--color-grey-600)]">
            Follow these simple steps to turn your wishes into beautiful NFTs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-primary-lighter)] transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group p-8 border border-[var(--color-primary-lighter)] hover:border-[var(--color-primary-light)]"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-secondary-dark)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <div className="text-center mt-4">
                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--color-primary-lighter)] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-grey-900)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--color-grey-600)] mb-6 leading-relaxed">
                  {step.description}
                </p>
                <Link
                  href={step.action.href}
                  className="inline-flex items-center text-[var(--color-primary-main)] font-medium hover:text-[var(--color-primary-dark)] transition-colors"
                >
                  {step.action.text}
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Vertical Connector for Mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden h-8 w-px bg-gradient-to-b from-[var(--color-primary-lighter)] to-[var(--color-primary-light)] mx-auto my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps; 