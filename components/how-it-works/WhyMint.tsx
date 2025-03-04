const reasons = [
  {
    title: 'Eternal Memory',
    description: 'Your wish becomes an eternal digital memory, preserved forever on the blockchain.',
    icon: '⭐',
  },
  {
    title: 'Unique Digital Art',
    description: 'Each wish is transformed into a beautiful, one-of-a-kind digital artwork.',
    icon: '🎨',
  },
  {
    title: 'Share Your Story',
    description: 'Share your dreams with the world and inspire others with your wishes.',
    icon: '💫',
  },
  {
    title: 'Join the Movement',
    description: 'Become part of a growing community of dreamers and wish-makers.',
    icon: '🌟',
  },
];

const WhyMint = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[var(--color-primary-lighter)]">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-[var(--color-primary-main)] font-medium mb-4 block">For Wish Makers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-grey-900)] mb-4 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-secondary-dark)] bg-clip-text text-transparent">
            Why Mint Your Wish?
          </h2>
          <p className="text-lg text-[var(--color-grey-600)]">
            Transform your wishes into timeless digital treasures
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl border border-[var(--color-primary-lighter)] hover:border-[var(--color-primary-light)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary-lighter)] to-white rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-grey-900)] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[var(--color-grey-600)] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/mint-a-wish"
            className="inline-flex items-center px-8 py-3 bg-[var(--color-primary-main)] text-white rounded-xl hover:bg-[var(--color-primary-dark)] transition-all duration-200 shadow-lg hover:shadow-[var(--color-primary-lighter)] text-lg font-medium group"
          >
            Start Minting
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

export default WhyMint; 