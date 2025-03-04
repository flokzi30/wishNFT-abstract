import GradientWrapper from '@/components/shared/GradientWrapper';
import Terms from '@/components/legal/terms/Terms';

export default function TermsPage() {
  return (
    <GradientWrapper>
      <main className="min-h-screen pt-24 pb-16">
        <div className="custom-screen px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mt-12 text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-grey-900)] mb-4">
                Terms of Service
              </h1>
              <p className="text-[var(--color-grey-600)]">
                Last updated: {new Date().toLocaleDateString('en-US')}
              </p>
            </div>

            {/* Content */}
            <Terms />
          </div>
        </div>
      </main>
    </GradientWrapper>
  );
}
