import GradientWrapper from '@/components/shared/GradientWrapper';

const faqData = [
  {
    question: "What makes a wish special on WishMint?",
    answer: "Every wish you mint becomes a beautiful, permanent part of your digital journey. It's not just an NFT – it's your dream, your hope, your story captured forever on the blockchain. Whether it's a personal goal, a dream for humanity, or a wish for someone you love, each wish carries its unique magic."
  },
  {
    question: "Why should I mint my wish?",
    answer: "Think of it as creating a digital time capsule of your dreams. For just $7, you can immortalize your wish, share it with the world, and maybe even inspire others. Plus, your wish becomes part of a growing community of dreamers and doers. Years from now, you'll look back at your wish and remember the moment you dared to dream it."
  },
  {
    question: "How do I create my first wish?",
    answer: "It's as simple as making a wish! Just write your heart's desire (up to 50 characters), pay a small fee of $7, and watch your wish transform into a beautiful NFT on the Abstract blockchain. No complex crypto knowledge needed – we've made it magical and simple."
  },
  {
    question: "Can I see examples of other wishes?",
    answer: "Our community has shared thousands of inspiring wishes – from personal dreams like 'open my dream café in Paris' to heartwarming wishes like 'cure all children's diseases'. Each wish tells a unique story and adds to our collective tapestry of hopes and dreams."
  },
  {
    question: "What is a Wisher NFT?",
    answer: "Wisher NFTs are your golden ticket to being part of WishMint's story. As one of only 3,500 Wishers, you'll earn from every wish minted on the platform (70% of all fees go to Wishers!), help shape the platform's future, and join an exclusive community of visionaries."
  },
  {
    question: "When can I become a Wisher?",
    answer: "Wisher NFTs are coming soon! Join our whitelist to be among the first to know. We're keeping the whitelist exclusive to ensure our earliest supporters get the best possible chance to become Wishers. Don't miss your chance to be part of something magical."
  },
  {
    question: "Is my wish safe on the blockchain?",
    answer: "Absolutely! We use the Abstract blockchain, known for its security and efficiency. Your wish is permanently and safely stored, like a star fixed in the digital sky. Plus, minting is affordable and eco-friendly, so you can focus on what matters – making your wish special."
  },
  {
    question: "What makes WishMint different?",
    answer: "WishMint isn't just another NFT platform – it's a place where dreams meet technology, where every wish has the potential to inspire, and where our community grows stronger with each minted wish. We're building a platform that turns wishes into lasting digital memories, while rewarding our community through real utility and revenue sharing."
  },
  {
    question: "How do I connect my wallet?",
    answer: "Simply click the 'Connect Wallet' button and choose your preferred wallet (Phantom, Solflare, Backpack, or others). We support all major Solana wallets. Make sure you have some SOL for transaction fees before minting your first wish."
  },
  {
    question: "What are the fees for minting?",
    answer: "Minting a wish costs just $7, plus small blockchain transaction fees. This fee helps maintain the platform and 70% goes directly to Wisher NFT holders as revenue sharing. We believe in keeping costs low so everyone can afford to mint their dreams."
  },
  {
    question: "Can I trade or sell my wish NFTs?",
    answer: "Yes! Your wish NFTs are fully owned by you and can be traded on NFT marketplaces like Magic Eden. However, we encourage keeping your wishes as they represent your personal journey and dreams. You can always view all your wishes in your personal collection."
  },
  {
    question: "What blockchains does WishMint support?",
    answer: "We currently support Solana and Abstract blockchains. You can switch between networks in the app. Solana offers fast, low-cost transactions, while Abstract is optimized for NFTs with additional features. Choose the network that works best for you."
  },
  {
    question: "Is there a limit to how many wishes I can mint?",
    answer: "There's no limit! Mint as many wishes as your heart desires. Whether you have one big dream or a collection of hopes and goals, each wish deserves its place on the blockchain. Some users mint wishes for different life goals, while others create wishes for loved ones."
  },
  {
    question: "What happens if I lose access to my wallet?",
    answer: "Your wish NFTs are stored on the blockchain and tied to your wallet address. If you lose access to your wallet, you'll need to recover it using your seed phrase. This is why it's crucial to safely store your wallet's recovery phrase in a secure location."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team through multiple channels: email us at xyzwishmint@gmail.com, join our Discord community, or follow us on Twitter. We're here to help make your wishing experience magical and seamless."
  }
];

export default function FAQPage() {
  return (
    <GradientWrapper>
      <main className="min-h-screen pt-24 pb-16">
        <div className="custom-screen px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mt-12 text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-grey-900)] mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-[var(--color-grey-600)]">
                Everything you need to know about WishMint
              </p>
            </div>

            {/* FAQ Content */}
            <section className="py-8">
              <div className="max-w-3xl mx-auto divide-y divide-[var(--color-grey-100)]">
                {faqData.map((item, idx) => (
                  <details
                    key={idx}
                    className="group py-6 text-[var(--color-grey-900)]"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-medium pr-6 group-hover:text-[var(--color-primary-main)] transition-colors duration-200">
                        {item.question}
                      </h3>
                      <span className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-[var(--color-grey-500)] group-open:rotate-180 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 text-[var(--color-grey-600)]">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Still have questions */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-primary-lighter)]">
                <h2 className="text-2xl font-bold text-[var(--color-grey-900)] mb-4">
                  Still have questions?
                </h2>
                                 <p className="text-[var(--color-grey-600)] mb-6">
                   Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
                 </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:xyzwishmint@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[var(--color-primary-main)] hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/support"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-primary-main)] text-base font-medium rounded-lg text-[var(--color-primary-main)] bg-white hover:bg-[var(--color-primary-lighter)] transition-colors"
                  >
                    Get Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </GradientWrapper>
  );
} 