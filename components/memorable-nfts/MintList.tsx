'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MintList() {
  return (
    <section className="py-20 bg-grey-50">
      <div className="custom-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-main font-medium mb-4 block">How to Join</span>
            <h2 className="text-3xl font-bold text-grey-900 mb-4">
              Secure Your Whitelist Spot
            </h2>
            <p className="text-lg text-grey-600 max-w-2xl mx-auto">
              Only 500 whitelist spots available for early access to our 3,500 Memorable NFT collection.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/memorable-nft-preview.jpg"
                alt="Memorable NFT Preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-grey-100">
              <div className="space-y-8">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-main rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                      1
                    </div>
                    <h3 className="text-xl font-semibold text-grey-900">
                      Make a Wish
                    </h3>
                  </div>
                  <p className="text-grey-600 pl-[60px]">
                    Create your first wish on WishMint platform and share your story.
                  </p>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary-main rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                      2
                    </div>
                    <h3 className="text-xl font-semibold text-grey-900">
                      Share on X
                    </h3>
                  </div>
                  <p className="text-grey-600 pl-[60px]">
                    Share your wish on X with #WishMintNFT to qualify for whitelist.
                  </p>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-info-main rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                      3
                    </div>
                    <h3 className="text-xl font-semibold text-grey-900">
                      Get Whitelisted
                    </h3>
                  </div>
                  <p className="text-grey-600 pl-[60px]">
                    First 500 valid participants will receive whitelist access for early mint.
                  </p>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-success-main rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                      4
                    </div>
                    <h3 className="text-xl font-semibold text-grey-900">
                      Early Mint Access
                    </h3>
                  </div>
                  <p className="text-grey-600 pl-[60px]">
                    Mint your Memorable NFT before public sale at special whitelist price.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-grey-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-semibold text-grey-900 mb-2">
                  Ready to start your journey?
                </h4>
                <p className="text-grey-600">
                  Make your first wish today and secure one of 500 whitelist spots.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link
                  href="/mint-a-wish"
                  className="flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-main hover:bg-primary-dark rounded-xl transition-colors duration-200 shadow-lg whitespace-nowrap"
                >
                  Make a Wish
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 