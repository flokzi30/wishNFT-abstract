interface NFTDetails {
  tokenId: string;
  blockchain: string;
  mintedAt: string;
}

interface Creator {
  wallet: string;
}

interface WishNFTDetailsProps {
  nftDetails: NFTDetails | undefined;
  creator?: Creator;
}

export function WishNFTDetails({ nftDetails, creator }: WishNFTDetailsProps) {
  if (!nftDetails) return null;

  const formatAddress = (address: string) => {
    return address.slice(0, 6) + '...' + address.slice(-6);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]" />

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white mb-6">NFT Details</h2>
        <div className="space-y-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/95 group">
            <p className="text-sm text-[var(--color-grey-600)] mb-1.5">
              Created by
            </p>
            <a
              href={`https://explorer.testnet.abs.xyz/address/${creator?.wallet}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium font-mono text-[var(--color-primary-main)] hover:text-[var(--color-primary-dark)] transition-colors"
            >
              {creator?.wallet ? formatAddress(creator.wallet) : '0x...'}
            </a>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/95 group">
            <p className="text-sm text-[var(--color-grey-600)] mb-1.5">
              Token ID
            </p>
            <p className="font-medium font-mono text-[var(--color-grey-900)] group-hover:text-[var(--color-primary-dark)]">
              {nftDetails.tokenId}
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/95 group">
            <p className="text-sm text-[var(--color-grey-600)] mb-1.5">
              Blockchain
            </p>
            <p className="font-medium text-[var(--color-grey-900)] group-hover:text-[var(--color-primary-dark)]">
              {nftDetails.blockchain}
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/95 group">
            <p className="text-sm text-[var(--color-grey-600)] mb-1.5">
              Minted On
            </p>
            <p className="font-medium text-[var(--color-grey-900)] group-hover:text-[var(--color-primary-dark)]">
              {nftDetails.mintedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
