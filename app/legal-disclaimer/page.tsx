import GradientWrapper from '@/components/shared/GradientWrapper';
import LegalDisclaimer from '@/components/legal/disclaimer/LegalDisclaimer';

export default function LegalDisclaimerPage() {
  return (
    <GradientWrapper>
      <main className="min-h-screen pt-24 pb-16">
        <div className="custom-screen px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mt-12 text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-grey-900)] mb-4">
                Legal Disclaimer
              </h1>
              <p className="text-[var(--color-grey-600)]">
                Last updated: {new Date().toLocaleDateString('en-US')}
              </p>
            </div>

            {/* Content */}
            <LegalDisclaimer />
          </div>
        </div>
      </main>
    </GradientWrapper>
  );
}
