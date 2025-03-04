import Link from 'next/link';
import { Feature } from './types';
import { statusConfig, categories, priorityConfig } from './constants';

interface FeatureCardProps {
  feature: Feature;
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onVote: (featureId: number, isDownvote?: boolean) => void;
}

export default function FeatureCard({ feature, onVote }: FeatureCardProps) {
  const voteScore = feature.votes - feature.downvotes;
  const voteColor =
    voteScore > 0
      ? 'text-success-dark'
      : voteScore < 0
        ? 'text-error-dark'
        : 'text-grey-600';

  return (
    <Link
      href={`/roadmap/${feature.id}`}
      className="block rounded-xl border border-grey-100 bg-white hover:border-grey-200 hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-main/20"
    >
      <div className="p-4 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          {/* Status and Category */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center text-sm font-medium px-2.5 py-1 rounded-full ${statusConfig[feature.status].color} ${statusConfig[feature.status].textColor}`}
            >
              {statusConfig[feature.status].icon}
              <span className="ml-1">{statusConfig[feature.status].title}</span>
            </span>
            <span
              className={`inline-flex items-center text-sm font-medium px-2.5 py-1 rounded-full ${categories.find((c) => c.value === feature.category)?.icon} bg-grey-50 text-grey-700`}
            >
              {feature.category}
            </span>
          </div>

          {/* Vote Buttons */}
          <div className="flex items-center bg-grey-50 rounded-lg p-1 self-start sm:self-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                onVote(feature.id, false);
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                feature.hasVoted
                  ? 'bg-success-lighter text-success-dark'
                  : 'hover:bg-success-lighter/50 text-grey-600 hover:text-success-dark'
              }`}
              title="Support this feature"
            >
              <svg
                className="w-4 h-4"
                fill={feature.hasVoted ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={feature.hasVoted ? 0 : 2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span className="font-medium text-sm">{feature.votes}</span>
            </button>

            <div className="w-px h-5 bg-grey-200 mx-1" />

            <button
              onClick={(e) => {
                e.preventDefault();
                onVote(feature.id, true);
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                feature.hasDownvoted
                  ? 'bg-error-lighter text-error-dark'
                  : 'hover:bg-error-lighter/50 text-grey-600 hover:text-error-dark'
              }`}
              title="This feature needs improvement"
            >
              <svg
                className="w-4 h-4"
                fill={feature.hasDownvoted ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={feature.hasDownvoted ? 0 : 2}
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2"
                />
              </svg>
              <span className="font-medium text-sm">{feature.downvotes}</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <h3 className="text-lg font-semibold text-grey-900 hover:text-primary-main transition-colors flex-1">
              {feature.title}
            </h3>
            <span className={`text-sm font-medium whitespace-nowrap ${voteColor}`}>
              {voteScore > 0 ? '+' : ''}
              {voteScore} votes
            </span>
          </div>

          <p className="text-grey-600 text-sm line-clamp-2">
            {feature.description}
          </p>

          {feature.tags && feature.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {feature.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs font-medium rounded-full bg-grey-50 text-grey-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer Section */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-grey-500">
            <span className="inline-flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(feature.createdAt).toLocaleDateString()}
            </span>

            {feature.suggestedBy && (
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {feature.suggestedBy}
              </span>
            )}

            {feature.timeEstimate && (
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {feature.timeEstimate}
              </span>
            )}

            {feature.priority && (
              <span className={`inline-flex items-center gap-1 ${priorityConfig[feature.priority].color}`}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {priorityConfig[feature.priority].label}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
