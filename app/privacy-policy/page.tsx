import GradientWrapper from '@/components/shared/GradientWrapper';
import PrivacyPolicy from '@/components/legal/privacy/PrivacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <GradientWrapper>
      <main className="min-h-screen pt-24 pb-16">
        <div className="custom-screen px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mt-12 text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-grey-900)] mb-4">
                Privacy Policy
              </h1>
              <p className="text-[var(--color-grey-600)]">
                Last updated: {new Date().toLocaleDateString('en-US')}
              </p>
            </div>

            {/* Content */}
            <PrivacyPolicy />
          </div>
        </div>
      </main>
    </GradientWrapper>
  );
} 