import dynamic from 'next/dynamic';

const MintForm = dynamic(() => import('@/components/mint-a-wish/MintForm'), {
  ssr: false,
});

export default function MintWishPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[var(--color-primary-lighter)]">
      {/* Hero Section */}
      <div className="mt-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-transparent opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary-lighter)] to-[var(--color-primary-light)] mb-6">
              <span className="text-xl">✨</span>
              <span className="text-base font-medium bg-gradient-to-r from-[var(--color-primary-main)] to-[var(--color-primary-main)] text-transparent bg-clip-text">
                Turn Your Dreams into Reality
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-main)] text-transparent bg-clip-text">
                Make a Wish,
              </span>
              <br />
              <span className="text-[var(--color-grey-900)]">
                Mint it Forever
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-grey-600)] max-w-2xl mx-auto leading-relaxed">
              Your wishes are powerful. Give them a permanent home on the
              blockchain, share them with the world, and watch them come true.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mint Form Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[var(--color-primary-lighter)] hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-grey-900)] mb-4">
                Create Your Wish
              </h2>
              <p className="text-[var(--color-grey-600)]">
                Fill in the details below to mint your wish as an NFT
              </p>
            </div>
            <MintForm />
          </div>
        </div>

        {/* Latest Wishes Section */}
        {/* <div className="mb-24">
          <LatestWishes />
        </div> */}

        {/* Benefits Section
        <section className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-lighter)] to-[var(--color-secondary-lighter)] rounded-3xl opacity-50" />
          <div className="relative p-8 sm:p-12">
            <WishBenefits />
          </div>
        </section> */}
      </div>
    </main>
  );
}
