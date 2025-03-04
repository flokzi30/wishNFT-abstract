export default function CommunityStory() {
  return (
    <section className="py-20 bg-white">
      <div className="custom-screen">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary-main font-medium mb-4 block">Our Vision</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 mb-8">
            Building WishMint Together
          </h2>
          <div className="prose prose-lg mx-auto text-grey-600">
            <p className="mb-6">
              WishMint isn&apos;t just another NFT platform – it&apos;s a community-owned ecosystem where every voice matters. We believe the best products are built when creators and users work together, sharing ideas, feedback, and dreams.
            </p>
            <p className="mb-6">
              Through our DAO governance, Memorable NFT holders become active participants in shaping WishMint&apos;s future. Every feature you see here, every improvement we make, is driven by our community&apos;s collective wisdom.
            </p>
            <p>
              This public roadmap is our commitment to transparency and community-led development. Together, we&apos;re not just building a platform; we&apos;re creating a space where wishes come true and dreams find their digital home.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            <div className="p-6 bg-primary-lighter/30 rounded-xl hover:bg-primary-lighter/40 transition-all duration-200 border border-primary-lighter">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold text-primary-dark mb-2">
                DAO Governance
              </h3>
              <p className="text-grey-600">
                Community-driven decisions through transparent voting and discussion.
              </p>
            </div>
            <div className="p-6 bg-secondary-lighter/30 rounded-xl hover:bg-secondary-lighter/40 transition-all duration-200 border border-secondary-lighter">
              <div className="text-3xl mb-4">💫</div>
              <h3 className="text-lg font-semibold text-secondary-dark mb-2">
                Public Development
              </h3>
              <p className="text-grey-600">
                Open roadmap where everyone can track and influence our progress.
              </p>
            </div>
            <div className="p-6 bg-info-lighter/30 rounded-xl hover:bg-info-lighter/40 transition-all duration-200 border border-info-lighter">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-info-dark mb-2">
                Community First
              </h3>
              <p className="text-grey-600">
                Your voice shapes our platform&apos;s features and future direction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 