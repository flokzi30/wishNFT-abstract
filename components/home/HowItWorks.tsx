const steps = [
  {
    number: '1',
    title: 'Write Your Wish',
    description: 'Express your wish in a simple sentence (max 50 characters)',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Mint Your NFT',
    description: 'For just $7, turn your wish into a unique NFT on the blockchain',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Share & Connect',
    description: 'Share your wish with the world and connect with others who share your vision',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-[var(--color-primary-main)] font-medium mb-4 block">
            Make Your Mark
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-grey-900)]">
            Mint Your Wish as NFT
          </h2>
          <p className="text-lg text-[var(--color-grey-600)]">
            Turn your wishes into unique NFTs on the blockchain. Connect with others who share your vision for the future.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-white p-8 rounded-2xl border border-[var(--color-primary-lighter)]"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-[var(--color-primary-main)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-12 h-12 bg-[var(--color-primary-lighter)] rounded-xl flex items-center justify-center text-[var(--color-primary-main)] mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-grey-900)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-grey-600)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Value Props */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
              <h4 className="text-base font-medium text-blue-700 mb-1">Forever on Blockchain</h4>
              <p className="text-sm text-blue-600">
                Your wish becomes a permanent part of blockchain history
              </p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
              <h4 className="text-base font-medium text-purple-700 mb-1">Build Connections</h4>
              <p className="text-sm text-purple-600">
                Find and connect with others who share similar wishes
              </p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
              <h4 className="text-base font-medium text-emerald-700 mb-1">Inspire Change</h4>
              <p className="text-sm text-emerald-600">
                Your wish could inspire others and create impact
              </p>
            </div>
          </div>

   
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
