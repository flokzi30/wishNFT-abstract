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
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[var(--color-primary-lighter)]">
      <div className="custom-screen">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-[var(--color-primary-main)] font-medium mb-4 block">
            Your Questions, Answered
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-grey-900)]">
            Discover the Magic of WishMint
          </h2>
          <p className="text-lg text-[var(--color-grey-600)]">
            Learn how you can turn your wishes into eternal digital memories
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-[var(--color-grey-100)]">
          {faqData.map((item, idx) => (
            <details
              key={idx}
              className="group py-4 text-[var(--color-grey-900)]"
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
      </div>
    </section>
  );
};

export default FAQ; 