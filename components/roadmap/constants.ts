import { StatusConfig, PriorityConfig, Category, FAQ, Feature } from './types';
import { FeatureDetails } from './roadmap-detail/types';

export const statusConfig: StatusConfig = {
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

export const priorityConfig: PriorityConfig = {
  low: { 
    label: 'Low Priority', 
    color: 'text-success-main bg-success-lighter' 
  },
  medium: { 
    label: 'Medium Priority', 
    color: 'text-info-main bg-info-lighter' 
  },
  high: { 
    label: 'High Priority', 
    color: 'text-primary-main bg-primary-lighter' 
  }
};

export const categories: Category[] = [
  { value: '', label: 'Select a category' },
  { value: 'Infrastructure', label: 'Infrastructure', icon: '🏗️' },
  { value: 'Features', label: 'Features', icon: '✨' },
  { value: 'UI/UX', label: 'UI/UX', icon: '🎨' },
  { value: 'Security', label: 'Security', icon: '🔒' },
  { value: 'Performance', label: 'Performance', icon: '⚡' },
  { value: 'Integration', label: 'Integration', icon: '🔄' },
  { value: 'Community', label: 'Community', icon: '👥' },
  { value: 'Marketing', label: 'Marketing', icon: '📢' },
  { value: 'Analytics', label: 'Analytics', icon: '📊' },
  { value: 'Documentation', label: 'Documentation', icon: '📚' },
  { value: 'Idea', label: 'Idea', icon: '💡' },
  { value: 'Bug Fix', label: 'Bug Fix', icon: '🐛' },
  { value: 'Enhancement', label: 'Enhancement', icon: '⭐' },
  { value: 'Other', label: 'Other', icon: '🔍' }
];

export const faqs: FAQ[] = [
  {
    question: 'Why is WishMint\'s roadmap public?',
    answer: 'We believe in building WishMint together with our community. Every feature, every improvement, and every decision should be shaped by the people who use and love our platform. This transparent approach ensures we\'re always aligned with our community\'s needs.'
  },
  {
    question: 'How does the DAO governance work?',
    answer: 'Memorable NFT holders become part of our DAO, giving them voting power to influence platform decisions. From feature prioritization to revenue sharing models, our community actively shapes the future of WishMint. Each NFT represents a voice in our growing ecosystem.'
  },
  {
    question: 'Can anyone suggest features?',
    answer: 'Yes! We welcome ideas from everyone. While suggesting features is open to all, voting rights are exclusive to Memorable NFT holders. This ensures those most invested in our ecosystem have a stronger voice in its development.'
  },
  {
    question: 'How are features prioritized?',
    answer: 'Features are prioritized based on community votes, technical feasibility, and strategic impact. Our DAO members (NFT holders) have the final say in what gets built next, making our development truly community-driven.'
  },
  {
    question: 'What happens after a feature is suggested?',
    answer: 'New suggestions enter the "Suggested" phase where the community can vote and discuss. Popular features move to "Planned" status, then "In Progress" once development begins. We maintain full transparency throughout this journey.'
  }
];

export const mockFeature: FeatureDetails = {
  id: 1,
  title: 'Multi-Chain Support',
  description: 'Add support for multiple blockchain networks including Ethereum and Solana.',
  detailedDescription: `# Overview
WishMint aims to expand its reach by supporting multiple blockchain networks, starting with Ethereum and Solana integration.

## Technical Details
- Smart contract deployment on Ethereum and Solana
- Cross-chain NFT bridging capabilities
- Unified wallet integration
- Chain-specific optimization

## Benefits
1. Increased accessibility for users
2. Broader market reach
3. Enhanced liquidity options
4. Cross-chain interoperability

## Implementation Challenges
- Security considerations
- Gas fee optimization
- User experience consistency
- Technical complexity`,
  status: 'planned',
  votes: 128,
  downvotes: 12,
  category: 'Infrastructure',
  createdAt: '2024-02-15',
  suggestedBy: 'Alex Thompson',
  suggestedByWallet: '0x1a2b...3c4d',
  timeline: [
    {
      date: '2024-02-15',
      event: 'Feature Suggested',
      description: 'Initial proposal submitted by community member'
    },
    {
      date: '2024-02-20',
      event: 'Discussion Phase',
      description: 'Community feedback and technical review'
    },
    {
      date: '2024-03-01',
      event: 'Planned',
      description: 'Approved by DAO governance vote'
    }
  ],
  comments: [
    {
      id: 1,
      text: 'This would be a game-changer for WishMint. The Solana integration especially would help with scaling.',
      author: 'Sarah K.',
      authorWallet: '0x4d3c...2b1a',
      createdAt: '2024-02-16',
      likes: 24,
      dislikes: 2
    },
    {
      id: 2,
      text: 'Have we considered the security implications? Would love to see more details on the cross-chain bridge implementation.',
      author: 'Michael R.',
      authorWallet: '0x7e8f...9a0b',
      createdAt: '2024-02-17',
      likes: 18,
      dislikes: 1
    }
  ]
};

export const initialFeatures: Feature[] = [
  {
    id: 1,
    title: 'Multi-Chain Support',
    description:
      'Add support for multiple blockchain networks including Ethereum and Solana.',
    status: 'planned',
    votes: 128,
    downvotes: 12,
    category: 'Infrastructure',
    createdAt: '2024-02-15',
    priority: 'high',
    timeEstimate: '3-4 months',
    tags: ['blockchain', 'ethereum', 'solana', 'integration'],
  },
  {
    id: 2,
    title: 'Community DAO',
    description: 'Launch a DAO for community governance and decision-making.',
    status: 'in-progress',
    votes: 256,
    downvotes: 24,
    category: 'Governance',
    createdAt: '2024-02-10',
    priority: 'high',
    timeEstimate: '2-3 months',
    tags: ['dao', 'governance', 'community'],
  },
  {
    id: 3,
    title: 'Advanced AI Art Styles',
    description:
      'Introduce new AI art styles and customization options for wish NFTs.',
    status: 'suggested',
    votes: 89,
    downvotes: 8,
    category: 'Features',
    createdAt: '2024-02-18',
    priority: 'medium',
    timeEstimate: '1-2 months',
    tags: ['ai', 'art', 'customization'],
  },
  {
    id: 4,
    title: 'Mobile App',
    description: 'Native mobile application for iOS and Android.',
    status: 'suggested',
    votes: 167,
    downvotes: 15,
    category: 'Platform',
    createdAt: '2024-02-12',
    priority: 'medium',
    timeEstimate: '4-6 months',
    tags: ['mobile', 'ios', 'android'],
  },
  {
    id: 5,
    title: 'Wish Categories',
    description: 'Organize wishes into categories for better discovery.',
    status: 'completed',
    votes: 203,
    downvotes: 18,
    category: 'Features',
    createdAt: '2024-01-25',
    priority: 'low',
    timeEstimate: '2 weeks',
    tags: ['organization', 'discovery'],
  },
]; 