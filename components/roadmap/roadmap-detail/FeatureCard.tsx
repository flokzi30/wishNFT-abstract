import { FeatureDetails, statusConfig } from './types';

interface FeatureCardProps {
  feature: FeatureDetails;
  isHolder: boolean;
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onVote: (featureId: number, isDownvote?: boolean) => void;
}

export const FeatureCard = ({ feature, isHolder, onVote }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-grey-100 hover:border-primary-light transition-all duration-200">
      <div className="p-6 sm:p-8">
        {/* Status and Category */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${statusConfig[feature.status].color} ${statusConfig[feature.status].textColor}`}>
            {statusConfig[feature.status].icon} {statusConfig[feature.status].title}
          </span>
          <span className={`text-sm font-medium px-3 py-1.5 rounded-full bg-grey-50 text-grey-700`}>
            {feature.category}
          </span>
          <span className="text-sm text-grey-500 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {new Date(feature.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Title and Description */}
        <h1 className="text-2xl sm:text-3xl font-bold text-grey-900 mb-3">
          {feature.title}
        </h1>
        <p className="text-base sm:text-lg text-grey-600 mb-6">
          {feature.description}
        </p>

        {/* Author Info and Voting */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-main to-secondary-main rounded-full flex items-center justify-center text-white font-medium">
              {feature.suggestedBy.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-medium text-grey-900">{feature.suggestedBy}</p>
              <p className="text-sm text-grey-500">{feature.suggestedByWallet}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onVote(feature.id)}
              disabled={!isHolder}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isHolder
                  ? 'bg-primary-lighter text-primary-dark hover:bg-primary-light'
                  : 'bg-grey-50 text-grey-400 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span>{feature.votes}</span>
            </button>
            <button
              onClick={() => onVote(feature.id, true)}
              disabled={!isHolder}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isHolder
                  ? 'bg-error-lighter text-error-dark hover:bg-error-light'
                  : 'bg-grey-50 text-grey-400 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span>{feature.downvotes}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Progress */}
      <div className="border-t border-gray-100 px-6 sm:px-8 py-4">
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          {feature.timeline.map((event, index) => (
            <div key={index} className="flex items-center gap-2 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-gray-600 whitespace-nowrap">{event.event}</span>
              {index < feature.timeline.length - 1 && (
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 