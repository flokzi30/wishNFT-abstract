import { SuccessHeader } from './SuccessHeader';
import { WishPreview } from './WishPreview';
import { ShareButtons } from './ShareButtons';
import { ActionButtons } from './ActionButtons';
import { MintSuccessProps } from './types';

const MintSuccess = ({
  wishId,
  wishTitle,
  wishCategory,
  shareUrl,
  shareText,
}: MintSuccessProps) => {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-[var(--color-primary-lighter)]">
      <div className="mt-12 custom-screen px-4">
        <div className="max-w-2xl mx-auto">
          <SuccessHeader />

          <WishPreview
            wishId={wishId}
            wishTitle={wishTitle}
            wishCategory={wishCategory}
          />

          {/* Share Incentive Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-lighter)] mb-4">
              <span className="text-xl">🚀</span>
              <span className="text-base font-medium text-[var(--color-primary-main)]">
                Double Your Impact
              </span>
            </div>
            <p className="text-lg text-[var(--color-grey-600)] mb-6">
              Share your wish to inspire others and increase its chances of
              coming true!
            </p>
          </div>

          <ShareButtons shareUrl={shareUrl} shareText={shareText} />

          <ActionButtons wishId={wishId} />

          {/* Next Steps - Redesigned */}
          {/* <div className="text-center">
            <h2 className="text-xl font-semibold text-[var(--color-grey-900)] mb-6">
              Continue Your Wish Journey
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="/wishes"
                className="group p-6 rounded-xl border-2 border-[var(--color-primary-lighter)] hover:border-[var(--color-primary-main)] transition-colors bg-white"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--color-primary-lighter)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-semibold text-[var(--color-grey-900)] mb-2">
                  Explore Wishes
                </h3>
                <p className="text-sm text-[var(--color-grey-600)]">
                  Discover and support wishes from dreamers worldwide
                </p>
              </a>
              <a
                href="/memorable-nfts"
                className="group p-6 rounded-xl border-2 border-[var(--color-primary-lighter)] hover:border-[var(--color-primary-main)] transition-colors bg-white"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--color-primary-lighter)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-semibold text-[var(--color-grey-900)] mb-2">
                  Get Memorable NFTs
                </h3>
                <p className="text-sm text-[var(--color-grey-600)]">
                  Unlock exclusive benefits and join our premium community
                </p>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default MintSuccess;
