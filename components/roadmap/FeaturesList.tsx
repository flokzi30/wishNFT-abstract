import { Feature } from './types';
import FeatureCard from './FeatureCard';

interface FeaturesListProps {
  features: Feature[];
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onVote: (featureId: number, isDownvote?: boolean) => void;
}

export default function FeaturesList({ features, onVote }: FeaturesListProps) {
  return (
    <section className="py-12 bg-grey-50">
      <div className="custom-screen">
        <div className="max-w-5xl mx-auto">
          {features.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-grey-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-grey-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-grey-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-grey-900 mb-2">
                No features found
              </h3>
              <p className="text-grey-600 max-w-md mx-auto">
                Try adjusting your filters or check back later for new feature suggestions.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  onVote={onVote}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 