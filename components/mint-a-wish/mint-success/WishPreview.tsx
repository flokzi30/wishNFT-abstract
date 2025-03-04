import { getCategoryIcon } from '@/components/mint-a-wish/WishFormFields';

interface WishPreviewProps {
  wishId: string;
  wishTitle: string;
  wishCategory: string;
}

export function WishPreview({ wishId, wishTitle, wishCategory }: WishPreviewProps) {
  return (
    <div className="mb-8 relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]" />

      {/* Content Overlay */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <span className="text-md">{getCategoryIcon(wishCategory)}</span>
            <span className="text-sm font-medium text-[var(--color-grey-900)]">
              {wishCategory}
            </span>
          </div>
          <div className="bg-[var(--color-primary-main)]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <span className="text-sm text-white font-medium">
              Abstract
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col justify-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-white/60 text-sm mb-2 font-light">
              I wish for...
            </div>
            <h3 className="text-xl font-bold text-white break-words">
              {wishTitle}
            </h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white font-medium font-mono">
              #{wishId}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 