import Link from 'next/link';

const features = [
  {
    title: 'Platform Revenue Share',
    description: 'Earn a share of platform revenue from every wish NFT minted. As one of only 3,500 Wishers, you receive monthly earnings from the platform.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Shape the Future',
    description:
      'As a Wisher, you have direct influence on platform development. Vote on new features, revenue models, and strategic decisions.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
  },
  {
    title: 'Community Power',
    description:
      'Join an exclusive community of 3,500 Wishers who control the platform treasury and make key decisions through DAO governance.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Early Access',
    description:
      'Get priority access to new features and platform updates. Be among the first to try innovations and shape their development.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: '3,500', label: 'Limited Supply' },
  { value: '70%', label: 'Revenue Share' },
  { value: '1', label: 'Equal Vote' },
  { value: '100%', label: 'Ownership' },
];

const MemorableCollection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[var(--color-primary-main)] font-medium mb-4 block">
            Limited NFT Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-grey-900)]">
            Earn From Every Wish
          </h2>
          <p className="text-lg text-[var(--color-grey-600)]">
            Only 3,500 NFTs available. Each NFT earns you passive income from platform fees. Don&apos;t miss out!
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-12">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-2xl md:text-3xl font-bold text-[var(--color-primary-main)]">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-[var(--color-grey-600)] font-medium">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-[var(--color-primary-lighter)] hover:border-[var(--color-primary-light)] group"
            >
              <div className="w-12 h-12 bg-[var(--color-primary-lighter)] rounded-xl flex items-center justify-center text-[var(--color-primary-main)] mb-6 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-grey-900)] mb-4">
                {feature.title}
              </h3>
              <p className="text-[var(--color-grey-600)]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col items-center">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-primary-lighter)] to-[var(--color-primary-light)] flex items-center justify-center">
                <p className="text-[var(--color-primary-dark)] text-xl font-medium">Preview Coming Soon</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-grey-900)]/60 to-transparent"></div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-[var(--color-grey-900)] mb-4">
              Join the Whitelist
            </h3>
            <p className="text-[var(--color-grey-600)] mb-8 max-w-2xl mx-auto">
              Be among the first to know when our NFT collection launches. Get priority access and special mint pricing.
            </p>
            <Link
              href="/memorable-nfts"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[var(--color-primary-main)] rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              Get Whitelist Access
              <svg
                className="w-5 h-5 ml-2"
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
        </div>
      </div>
    </section>
  );
};

export default MemorableCollection;
