interface HeroSectionProps {
  onSuggestFeature: () => void;
  isHolder: boolean;
}

export default function HeroSection({
  onSuggestFeature,
  isHolder,
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-lighter/30 to-white/95 -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-40" />
      
      <div className="custom-screen py-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-4 py-1.5 bg-primary-lighter text-primary-dark rounded-full text-sm font-medium mb-6 inline-block">
            🚀 Public Roadmap
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-grey-900 mb-8">
            Help Shape Our Future
          </h1>
          <p className="text-xl text-grey-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vote on upcoming features, suggest new ideas, and track our
            development progress.
            <span className="block mt-2 text-grey-900 font-medium">
              Memorable NFT holders get exclusive voting rights!
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onSuggestFeature}
              className="w-full sm:w-auto px-8 py-3 bg-primary-main text-white rounded-lg font-medium hover:bg-primary-dark active:bg-primary-darker transition-all duration-200"
            >
              Suggest a Feature
            </button>
            {!isHolder && (
              <a
                href="/memorable-nfts"
                className="w-full sm:w-auto px-8 py-3 bg-grey-100 text-grey-700 rounded-lg font-medium hover:bg-grey-200 transition-all duration-200"
              >
                Get Voting Rights
              </a>
            )}
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Community Driven',
                description: 'Every feature and improvement is shaped by our community feedback.',
                icon: '👥',
                color: 'from-primary-lighter to-primary-light',
              },
              {
                title: 'Transparent Process',
                description: 'Track the progress of features from suggestion to completion.',
                icon: '🔍',
                color: 'from-secondary-lighter to-secondary-light',
              },
              {
                title: 'DAO Governance',
                description: 'NFT holders have direct influence on platform development.',
                icon: '⚡',
                color: 'from-info-lighter to-info-light',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group p-6 rounded-2xl bg-white border border-grey-100 hover:shadow-lg transition-all duration-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 rounded-2xl transition-opacity duration-200 group-hover:opacity-10`} />
                <div className="relative">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-grey-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-grey-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
