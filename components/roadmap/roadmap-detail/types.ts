export interface Comment {
  id: number;
  text: string;
  author: string;
  authorWallet: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  isLiked?: boolean;
  isDisliked?: boolean;
}

export interface TimelineEvent {
  date: string;
  event: string;
  description: string;
}

export interface FeatureDetails {
  id: number;
  title: string;
  description: string;
  status: 'suggested' | 'planned' | 'in-progress' | 'completed';
  votes: number;
  downvotes: number;
  category: string;
  createdAt: string;
  suggestedBy: string;
  suggestedByWallet: string;
  comments: Comment[];
  hasVoted?: boolean;
  hasDownvoted?: boolean;
  detailedDescription: string;
  timeline: TimelineEvent[];
}

export const statusConfig = {
  suggested: {
    title: 'Suggested',
    description: 'Features suggested by our community',
    icon: '💡',
    color: 'bg-yellow-50 border-yellow-200',
    textColor: 'text-yellow-700',
  },
  planned: {
    title: 'Planned',
    description: 'Features we plan to implement',
    icon: '📋',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-700',
  },
  'in-progress': {
    title: 'In Progress',
    description: 'Features currently in development',
    icon: '🚧',
    color: 'bg-yellow-50 border-yellow-200',
    textColor: 'text-yellow-700',
  },
  completed: {
    title: 'Completed',
    description: 'Features already implemented',
    icon: '✅',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-700',
  },
}; 