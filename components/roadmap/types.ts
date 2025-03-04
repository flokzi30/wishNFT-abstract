export type Status = 'suggested' | 'planned' | 'in-progress' | 'completed';
export type SortOption = 'votes' | 'latest' | 'trending' | 'controversial' | 'date' | 'category';
export type PriorityLevel = 'low' | 'medium' | 'high';
export type ImpactLevel = 'minimal' | 'moderate' | 'high';

export interface Feature {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  status: Status;
  votes: number;
  downvotes: number;
  hasVoted?: boolean;
  hasDownvoted?: boolean;
  category: string;
  createdAt: string;
  priority: PriorityLevel;
  timeEstimate?: string;
  impact?: ImpactLevel;
  tags: string[];
  suggestedBy?: string;
}

export interface FeatureSuggestion {
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  priority: PriorityLevel;
  timeEstimate: string;
  impact: ImpactLevel;
  tags: string[];
}

export interface Category {
  value: string;
  label: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface StatusConfig {
  [key: string]: {
    title: string;
    description: string;
    icon: string;
    color: string;
    textColor: string;
  };
}

export interface PriorityConfig {
  [key: string]: {
    label: string;
    color: string;
  };
} 