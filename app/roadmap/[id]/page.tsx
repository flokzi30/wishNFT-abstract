'use client';

import { notFound } from 'next/navigation';
import GradientWrapper from '@/components/shared/GradientWrapper';
import { RoadmapDetailHeader } from '@/components/roadmap/roadmap-detail/RoadmapDetailHeader';
import { FeatureCard } from '@/components/roadmap/roadmap-detail/FeatureCard';
import { DetailedDescription } from '@/components/roadmap/roadmap-detail/DetailedDescription';
import { Comments } from '@/components/roadmap/roadmap-detail/Comments';
import { QuickStats } from '@/components/roadmap/roadmap-detail/QuickStats';
import { NFTHolderCTA } from '@/components/roadmap/roadmap-detail/NFTHolderCTA';
import { Timeline } from '@/components/roadmap/roadmap-detail/Timeline';
import { useFeature } from '@/components/roadmap/hooks/useFeature';

export default function FeatureDetailsPage({ params }: { params: { id: string } }) {
  const featureId = parseInt(params.id);
  const {
    featureState,
    isHolder,
    commentText,
    setCommentText,
    isSubmitting,
    handleVote,
    handleCommentSubmit,
    handleCommentVote,
  } = useFeature(featureId);

  if (!featureState || featureState.id !== featureId) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-16 sm:pt-20">
      <GradientWrapper>
        <div className="custom-screen py-6 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <RoadmapDetailHeader />

            <FeatureCard
              feature={featureState}
              isHolder={isHolder}
              onVote={handleVote}
            />

            {/* Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <DetailedDescription description={featureState.detailedDescription} />

                <Comments
                  comments={featureState.comments}
                  isHolder={isHolder}
                  onCommentVote={handleCommentVote}
                  onCommentSubmit={handleCommentSubmit}
                  commentText={commentText}
                  setCommentText={setCommentText}
                  isSubmitting={isSubmitting}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <QuickStats
                  votes={featureState.votes}
                  downvotes={featureState.downvotes}
                  commentsCount={featureState.comments.length}
                />

                <Timeline events={featureState.timeline} />

                {!isHolder && <NFTHolderCTA />}
              </div>
            </div>
          </div>
        </div>
      </GradientWrapper>
    </main>
  );
} 