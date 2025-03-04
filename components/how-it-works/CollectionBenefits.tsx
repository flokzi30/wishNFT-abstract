const benefits = [
  {
    title: 'Revenue Share',
    description: '70% of platform revenue is distributed among Memorable NFT holders monthly.',
    icon: '💰',
  },
  {
    title: 'Exclusive Access',
    description: 'Get early access to new features and special events in our ecosystem.',
    icon: '🎯',
  },
  {
    title: 'Community Power',
    description: 'Shape the future of WishMint through exclusive voting rights and governance.',
    icon: '👥',
  },
  {
    title: 'Unique Collection',
    description: 'Own a piece of history with our limited edition Memorable NFTs.',
    icon: '💎',
  },
];

const CollectionBenefits = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-secondary-lighter)]">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-[var(--color-secondary-main)] font-medium mb-4 block">For Collectors</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-grey-900)] mb-4 bg-gradient-to-r from-[var(--color-secondary-dark)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
            Memorable NFT Benefits
          </h2>
          <p className="text-lg text-[var(--color-grey-600)]">
            Join an exclusive community of collectors and earn while supporting dreams
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl border border-[var(--color-secondary-lighter)] hover:border-[var(--color-secondary-light)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-secondary-lighter)] to-white rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-grey-900)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--color-grey-600)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/memorable-nfts"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[var(--color-secondary-dark)] to-[var(--color-primary-dark)] text-white rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-[var(--color-secondary-lighter)] text-lg font-medium group"
          >
            View Collection
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionBenefits; 