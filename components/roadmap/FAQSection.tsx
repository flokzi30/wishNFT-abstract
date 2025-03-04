import { faqs } from './constants';

export default function FAQSection() {
  return (
    <section className="py-20 bg-grey-50">
      <div className="custom-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-main font-medium mb-4 block">FAQ</span>
            <h2 className="text-3xl font-bold text-grey-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-grey-600">
              Everything you need to know about our community-driven development.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-grey-100 hover:border-primary-light hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-grey-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-grey-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-grey-600 mb-8">
              Still have questions? We&apos;re here to help!
            </p>
            <a
              href="https://discord.gg/wishmint"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-main hover:bg-primary-dark rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join Our Discord
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 