import { useState } from 'react';
import { Feature, Status, SortOption } from './types';
import HeroSection from './HeroSection';
import FilterBar from './FilterBar';
import FeaturesList from './FeaturesList';
import CommunityStory from './CommunityStory';
import FAQSection from './FAQSection';
import SuggestionModal from './SuggestionModal';
import { FeatureSuggestion } from './types';
import { initialFeatures } from './constants';

const Roadmap = () => {
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [showSuggestionForm, setShowSuggestionForm] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status>('suggested');
  const [sortBy, setSortBy] = useState<SortOption>('votes');
  const [searchQuery, setSearchQuery] = useState('');
  const [isHolder] = useState(false);

  const handleVote = (featureId: number, isDownvote: boolean = false) => {
    if (!isHolder) {
      alert(
        'Only Memorable NFT holders can vote on features. Mint your NFT to participate in governance.',
      );
      return;
    }

    setFeatures(
      features.map((feature) => {
        if (feature.id === featureId) {
          if (isDownvote) {
            return {
              ...feature,
              downvotes: feature.hasDownvoted
                ? feature.downvotes - 1
                : feature.downvotes + 1,
              hasDownvoted: !feature.hasDownvoted,
              votes: feature.hasVoted ? feature.votes - 1 : feature.votes,
              hasVoted: false,
            };
          }
          return {
            ...feature,
            votes: feature.hasVoted ? feature.votes - 1 : feature.votes + 1,
            hasVoted: !feature.hasVoted,
            downvotes: feature.hasDownvoted
              ? feature.downvotes - 1
              : feature.downvotes,
            hasDownvoted: false,
          };
        }
        return feature;
      }),
    );
  };

  const handleSuggestionSubmit = (suggestion: FeatureSuggestion) => {
    const newFeature: Feature = {
      id: features.length + 1,
      title: suggestion.title,
      description: suggestion.shortDescription,
      detailedDescription: suggestion.detailedDescription,
      status: 'suggested',
      votes: 0,
      downvotes: 0,
      category: suggestion.category,
      createdAt: new Date().toISOString(),
      priority: suggestion.priority,
      timeEstimate: suggestion.timeEstimate,
      impact: suggestion.impact,
      tags: suggestion.tags,
      suggestedBy: 'Anonymous User',
    };

    setFeatures([...features, newFeature]);
    setShowSuggestionForm(false);
    alert('Özellik öneriniz başarıyla gönderildi!');
  };

  const filteredAndSortedFeatures = features
    .filter((feature) => feature.status === selectedStatus)
    .filter((feature) =>
      searchQuery
        ? feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          feature.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          feature.category.toLowerCase().includes(searchQuery.toLowerCase())
        : true,
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'votes':
          return b.votes - a.votes;
        case 'latest':
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  return (
    <>
      <HeroSection
        onSuggestFeature={() => setShowSuggestionForm(true)}
        isHolder={isHolder}
      />

      <FilterBar
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <FeaturesList features={filteredAndSortedFeatures} onVote={handleVote} />

      <CommunityStory />
      <FAQSection />

      <SuggestionModal
        isOpen={showSuggestionForm}
        onClose={() => setShowSuggestionForm(false)}
        onSubmit={handleSuggestionSubmit}
      />
    </>
  );
};

export default Roadmap; 