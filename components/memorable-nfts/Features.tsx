'use client';

const features = [
  {
    title: 'Passive Income Stream',
    description: 'Earn your share of 70% platform revenue from every wish NFT minted. With only 3,500 Wisher NFTs, each holder receives significant monthly earnings.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlight: 'Monthly Revenue Share',
    color: 'primary'
  },
  {
    title: 'Platform Governance',
    description: 'Shape the future of WishMint with your vote. Each NFT grants equal voting power in key decisions about features, revenue model, and platform direction.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    highlight: 'Equal Vote Power',
    color: 'secondary'
  },
  {
    title: 'Early Platform Access',
    description: 'Get exclusive first access to new features and platform updates. Test and influence new functionalities before they go live.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    highlight: 'VIP Benefits',
    color: 'info'
  },
  {
    title: 'Community Treasury',
    description: 'Access to the DAO treasury for community-driven initiatives. Propose and vote on how to utilize funds for platform growth and holder benefits.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    highlight: 'Treasury Access',
    color: 'success'
  }
];

export default function Features() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary-main font-medium mb-4 block">Holder Benefits</span>
          <h2 className="text-3xl font-bold text-grey-900 mb-4">
            Exclusive Privileges for Holders
          </h2>
          <p className="text-lg text-grey-600">
            Own a Wisher NFT and unlock a suite of powerful benefits designed for long-term value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className={`p-8 bg-${feature.color}-lighter/10 rounded-2xl border border-${feature.color}-lighter hover:border-${feature.color}-main transition-all duration-200 group`}
            >
              <div className={`w-16 h-16 rounded-xl bg-${feature.color}-lighter flex items-center justify-center mb-6 text-${feature.color}-dark group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <div className={`inline-block px-3 py-1 rounded-lg bg-${feature.color}-lighter text-${feature.color}-dark text-sm font-medium mb-4`}>
                {feature.highlight}
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-grey-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="p-8 bg-primary-lighter/10 rounded-2xl border border-primary-lighter">
            <h3 className="text-xl font-bold text-grey-900 mb-3">
              Limited Time Opportunity
            </h3>
            <p className="text-grey-600">
              With only 3,500 Wisher NFTs available, each holder becomes part of an exclusive group that earns from the platform&apos;s success. The earlier you join, the more you can earn as the platform grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 