interface QuickStatsProps {
  votes: number;
  downvotes: number;
  commentsCount: number;
}

export const QuickStats = ({ votes, downvotes, commentsCount }: QuickStatsProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-grey-100 hover:border-primary-light transition-all duration-200">
      <div className="p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-grey-900 mb-6">Quick Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-primary-lighter/20 rounded-xl border border-primary-lighter/30 hover:bg-primary-lighter/30 transition-all duration-200">
            <div className="text-2xl font-bold text-primary-dark mb-1">{votes}</div>
            <p className="text-sm text-grey-600">Upvotes</p>
          </div>
          <div className="p-4 bg-error-lighter/20 rounded-xl border border-error-lighter/30 hover:bg-error-lighter/30 transition-all duration-200">
            <div className="text-2xl font-bold text-error-dark mb-1">{downvotes}</div>
            <p className="text-sm text-grey-600">Downvotes</p>
          </div>
          <div className="p-4 bg-info-lighter/20 rounded-xl border border-info-lighter/30 hover:bg-info-lighter/30 transition-all duration-200 col-span-2">
            <div className="text-2xl font-bold text-info-dark mb-1">{commentsCount}</div>
            <p className="text-sm text-grey-600">Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 