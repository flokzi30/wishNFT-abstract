'use client';

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary-main font-medium mb-4 block">FAQ</span>
          <h2 className="text-3xl font-bold text-grey-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-grey-600">
            Everything you need to know about WishMint and the Wisher NFT collection.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 bg-primary-lighter/20 rounded-2xl hover:bg-primary-lighter/30 transition-all duration-200 border border-primary-lighter">
            <h3 className="text-xl font-semibold text-grey-900 mb-2">
              What is a Wisher NFT and what benefits does it provide?
            </h3>
            <p className="text-grey-600">
              Wisher NFT is our governance token. Holders receive revenue share from every wish NFT minted on the platform, governance rights, and early access to new features. Only 3,500 Wisher NFTs will ever be created.
            </p>
          </div>
          <div className="p-6 bg-info-lighter/20 rounded-2xl hover:bg-info-lighter/30 transition-all duration-200 border border-info-lighter">
            <h3 className="text-xl font-semibold text-grey-900 mb-2">
              How do I get whitelisted?
            </h3>
            <p className="text-grey-600">
              The first step is to mint a wish NFT on our platform. Then, share your wishes on X (Twitter) by tagging @wishmint and using the #WishMintNFT hashtag. The first 500 valid participants will secure a whitelist spot.
            </p>
          </div>
          <div className="p-6 bg-success-lighter/20 rounded-2xl hover:bg-success-lighter/30 transition-all duration-200 border border-success-lighter">
            <h3 className="text-xl font-semibold text-grey-900 mb-2">
              How does the governance system work?
            </h3>
            <p className="text-grey-600">
              Every Wisher NFT holder has an equal vote in shaping the platform&apos;s future. Important decisions such as new features, changes to revenue sharing model, and platform updates are made through community voting.
            </p>
          </div>
          <div className="p-6 bg-warning-lighter/20 rounded-2xl hover:bg-warning-lighter/30 transition-all duration-200 border border-warning-lighter">
            <h3 className="text-xl font-semibold text-grey-900 mb-2">
              What&apos;s the difference between Wish NFTs and Wisher NFTs?
            </h3>
            <p className="text-grey-600">
              Wish NFTs are individual wishes minted on the platform. Wisher NFTs represent platform membership and grant holders special privileges like revenue share and governance rights. Wisher NFT holders earn from all wish NFTs minted on the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 