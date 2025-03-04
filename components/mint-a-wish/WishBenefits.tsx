export default function WishBenefits() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary-lighter)] to-[var(--color-primary-lighter)]">
          <span className="text-xl">✨</span>
          <span className="text-base font-medium bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-dark)] text-transparent bg-clip-text">
            Why Mint Your Wish?
          </span>
        </div>
        <h2 className="text-3xl font-bold text-[var(--color-grey-900)]">
          Your Wishes Have Power
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-lighter)] to-[var(--color-primary-lighter)] rounded-2xl will-change-transform transition-transform duration-200 group-hover:scale-[1.01] opacity-50" />
          <div className="relative p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--color-primary-main)] to-[var(--color-primary-main)] flex items-center justify-center text-white">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-grey-900)]">
              Eternal on Blockchain
            </h3>
            <p className="text-[var(--color-grey-600)]">
              Your wishes are permanently recorded on the blockchain, creating a
              lasting legacy of your aspirations and dreams.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-lighter)] to-[var(--color-primary-lighter)] rounded-2xl will-change-transform transition-transform duration-200 group-hover:scale-[1.01] opacity-50" />
          <div className="relative p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--color-primary-main)] to-[var(--color-primary-main)] flex items-center justify-center text-white">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-grey-900)]">
              Community Support
            </h3>
            <p className="text-[var(--color-grey-600)]">
              Join a community of dreamers and supporters who believe in the
              power of collective wishes and shared aspirations.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-lighter)] to-[var(--color-primary-lighter)] rounded-2xl will-change-transform transition-transform duration-200 group-hover:scale-[1.01] opacity-50" />
          <div className="relative p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--color-primary-main)] to-[var(--color-primary-main)] flex items-center justify-center text-white">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-grey-900)]">
              Make It Happen
            </h3>
            <p className="text-[var(--color-grey-600)]">
              Transform your wishes from thoughts into action. Each wish becomes
              a commitment to positive change in the world.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-lighter)] to-[var(--color-primary-lighter)] rounded-2xl will-change-transform transition-transform duration-200 group-hover:scale-[1.01] opacity-50" />
          <div className="relative p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--color-primary-main)] to-[var(--color-primary-main)] flex items-center justify-center text-white">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-grey-900)]">
              Inspire Others
            </h3>
            <p className="text-[var(--color-grey-600)]">
              Your wish can spark inspiration in others, creating a ripple
              effect of positive change throughout the community.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-12 p-6 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-grey-900)] to-[var(--color-grey-800)] opacity-95" />
        <div className="relative text-center space-y-4">
          <span className="text-3xl">🌈</span>
          <h3 className="text-xl font-semibold text-white">
            Ready to Make Your Mark?
          </h3>
          <p className="text-[var(--color-grey-300)] max-w-2xl mx-auto">
            Every great achievement started with a wish. Make yours count by
            giving it a permanent home on the blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}
