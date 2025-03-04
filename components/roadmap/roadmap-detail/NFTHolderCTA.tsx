import Link from 'next/link';

export const NFTHolderCTA = () => {
  return (
    <div className="bg-gradient-to-r from-primary-main to-secondary-main rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-200">
      <div className="p-6 sm:p-8 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-darker/0 to-secondary-darker/0 group-hover:from-primary-darker/10 group-hover:to-secondary-darker/10 transition-all duration-200" />
        <div className="relative">
          <h3 className="text-xl font-semibold mb-3">Become an NFT Holder</h3>
          <p className="text-white/90 mb-6">
            Get an NFT to vote on features and participate in discussions.
          </p>
          <Link
            href="/memorable-nfts"
            className="inline-block w-full px-6 py-3 bg-white text-primary-dark rounded-lg font-medium text-center hover:bg-grey-50 active:bg-grey-100 transition-all duration-200"
          >
            Explore NFTs
          </Link>
        </div>
      </div>
    </div>
  );
}; 