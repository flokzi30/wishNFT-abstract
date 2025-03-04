'use client';

export default function RevenueSharing() {
  const revenueDistribution = [
    {
      label: 'Holders',
      percentage: 70,
      description: 'Earn passive income from every wish minted on the platform',
      highlight: 'Only 3,500 Wisher NFTs will ever exist',
      color: 'bg-primary-main',
      textColor: 'text-primary-dark'
    },
    {
      label: 'Development Team',
      percentage: 10,
      description: 'Ensuring continuous innovation and platform growth',
      color: 'bg-secondary-main',
      textColor: 'text-secondary-dark'
    },
    {
      label: 'Platform Costs',
      percentage: 10,
      description: 'Infrastructure and operational excellence',
      color: 'bg-info-main',
      textColor: 'text-info-dark'
    },
    {
      label: 'DAO Treasury',
      percentage: 10,
      description: 'Community-driven initiatives and future development',
      color: 'bg-success-main',
      textColor: 'text-success-dark'
    }
  ];

  return (
    <section className="py-20 bg-grey-50">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary-main font-medium mb-4 block">Revenue Share</span>
          <h2 className="text-3xl font-bold text-grey-900 mb-4">
            Earn From Every Wish Minted
          </h2>
          <p className="text-lg text-grey-600">
            Join an exclusive community of only 3,500 Wisher NFT holders and earn passive income from all platform activity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Holder Card */}
          <div className="bg-white rounded-3xl border-2 border-primary-main p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-primary-lighter rounded-full opacity-50" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-main text-white text-3xl font-bold px-4 py-2 rounded-xl">
                  70%
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">
                  Platform Revenue to Holders
                </h3>
              </div>
              <p className="text-lg text-grey-600 mb-4">
                As a Wisher NFT holder, you&apos;ll receive your share of 70% of all platform revenue. With only 3,500 NFTs available, each holder gets a significant portion of the platform&apos;s success.
              </p>
              <div className="flex items-center gap-3 text-primary-dark">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <p className="font-medium">The more wishes minted, the more you earn</p>
              </div>
            </div>
          </div>

          {/* Other Allocations */}
          <div className="grid sm:grid-cols-3 gap-6">
            {revenueDistribution.slice(1).map((item) => (
              <div 
                key={item.label}
                className="bg-white rounded-2xl border border-grey-100 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${item.color} text-white text-lg font-bold px-3 py-1 rounded-lg`}>
                    {item.percentage}%
                  </div>
                  <h3 className={`font-semibold ${item.textColor}`}>
                    {item.label}
                  </h3>
                </div>
                <p className="text-grey-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-2xl border border-grey-100 p-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-grey-900 mb-1">Automatic Monthly Payments</h4>
                  <p className="text-grey-600">Revenue is distributed automatically through smart contracts at the end of each month</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-grey-900 mb-1">Transparent & Secure</h4>
                  <p className="text-grey-600">All transactions and distributions are recorded on the Abstract blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 