interface WishStatsProps {
  likes: number;
  tagsCount: number;
}

export function WishStats({ likes, tagsCount }: WishStatsProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]" />

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white mb-6">Quick Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-300 hover:bg-white/95 hover:scale-[1.02] group">
            <p className="text-2xl font-bold text-[var(--color-grey-900)] group-hover:text-[var(--color-primary-dark)] mb-2">
              {likes}
            </p>
            <p className="text-sm text-[var(--color-grey-600)] font-medium">
              Likes
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-300 hover:bg-white/95 hover:scale-[1.02] group">
            <p className="text-2xl font-bold text-[var(--color-grey-900)] group-hover:text-[var(--color-primary-dark)] mb-2">
              {tagsCount}
            </p>
            <p className="text-sm text-[var(--color-grey-600)] font-medium">
              Tags
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
