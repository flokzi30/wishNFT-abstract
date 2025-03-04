'use client';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-lighter/30 via-white/50 to-white -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-30" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary-lighter/30 rounded-full blur-lg -z-10 opacity-80 transition-opacity duration-1000 hover:opacity-100" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-secondary-lighter/30 rounded-full blur-lg -z-10 opacity-80 transition-opacity duration-1000 hover:opacity-100" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-info-lighter/30 rounded-full blur-lg -z-10 opacity-80 transition-opacity duration-1000 hover:opacity-100" />

      <div className="custom-screen">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary-lighter/30 rounded-full">
            <span className="w-2 h-2 bg-primary-main rounded-full animate-ping" />
            <span className="text-sm font-medium text-primary-dark">
              Limited Collection • Only 3,500 Available
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-grey-900 mb-8 leading-tight">
            Be Part of <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-primary-main">WishMint&apos;s Future</span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-primary-lighter/50 -z-10" />
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-grey-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join an exclusive community of visionaries who earn from every wish minted and shape the future of digital wishes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="group w-full sm:w-auto px-8 py-4 bg-primary-main text-white rounded-xl font-medium hover:bg-primary-dark active:bg-primary-darker transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <span>Mint Your NFT</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-grey-900 rounded-xl font-medium hover:bg-grey-50 transition-all duration-200 border-2 border-grey-100 hover:border-primary-light">
              View Benefits
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-2xl border-2 border-grey-100">
              <div className="text-4xl font-bold text-primary-dark mb-2">3,500</div>
              <p className="text-grey-600 font-medium">Limited Supply</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border-2 border-grey-100">
              <div className="text-4xl font-bold text-secondary-dark mb-2">70%</div>
              <p className="text-grey-600 font-medium">Revenue Share</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border-2 border-grey-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-4xl font-bold text-info-dark">1:1</div>
              </div>
              <p className="text-grey-600 font-medium">Vote Power</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border-2 border-grey-100">
              <div className="text-4xl font-bold text-success-dark mb-2">Early</div>
              <p className="text-grey-600 font-medium">Platform Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 