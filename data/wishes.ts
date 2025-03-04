import { WishType } from '@/types';

export const wishesData: WishType[] = [
  {
    id: 1,
    title: 'World Peace',
    description: 'A wish for global harmony and understanding between all nations.',
    image: '/wish1.png',
    wallet: '0x1a2b...3c4d',
    likes: 1.2,
    category: 'Humanity',
    date: '2024-02-15',
    tags: ['peace', 'global', 'harmony', 'unity', 'future'],
    creator: {
      name: 'Anonymous',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=1`,
      wallet: '0x1a2b...3c4d'
    }
  },
  {
    id: 2,
    title: 'Cure for Cancer',
    description: 'Hope for medical breakthroughs in cancer treatment.',
    image: '/wish2.png',
    wallet: '0x4d3c...2b1a',
    likes: 2.4,
    category: 'Health',
    date: '2024-02-14',
    tags: ['health', 'medical', 'research', 'cancer', 'cure', 'science']
  },
  {
    id: 3,
    title: 'Space Travel',
    description: 'A dream to explore the mysteries of distant galaxies.',
    image: '/wish3.png',
    wallet: '0x7e8f...9a0b',
    likes: 3.1,
    category: 'Technology',
    date: '2024-02-13',
    tags: ['space', 'exploration', 'technology', 'future', 'science', 'adventure']
  },
  {
    id: 4,
    title: 'Clean Oceans',
    description: 'Vision for plastic-free, thriving marine ecosystems.',
    image: '/wish4.png',
    wallet: '0xb0a9...8f7e',
    likes: 1.8,
    category: 'Environment',
    date: '2024-02-12',
    tags: ['environment', 'ocean', 'sustainability', 'climate', 'conservation']
  },
  {
    id: 5,
    title: 'Universal Education',
    description: 'Making quality education accessible to everyone worldwide.',
    image: '/wish5.png',
    wallet: '0x5e6f...7d8c',
    likes: 2.7,
    category: 'Education',
    date: '2024-02-11',
    tags: ['education', 'accessibility', 'learning', 'global', 'equality']
  },
  {
    id: 6,
    title: 'Zero Hunger',
    description: 'A world where no one goes to bed hungry.',
    image: '/wish6.png',
    wallet: '0x9b8a...7c6d',
    likes: 4.2,
    category: 'Humanity',
    date: '2024-02-10',
    tags: ['hunger', 'food', 'poverty', 'humanitarian', 'sdg']
  },
  {
    id: 7,
    title: 'Renewable Future',
    description: '100% sustainable and clean energy for all.',
    image: '/wish7.png',
    wallet: '0x2d3e...4f5g',
    likes: 3.5,
    category: 'Environment',
    date: '2024-02-09',
    tags: ['renewable', 'energy', 'sustainability', 'climate', 'green']
  },
  {
    id: 8,
    title: 'Digital Privacy',
    description: 'Protecting personal data and online freedom.',
    image: '/wish8.png',
    wallet: '0x8h9i...7j6k',
    likes: 2.9,
    category: 'Technology',
    date: '2024-02-08',
    tags: ['privacy', 'security', 'digital', 'rights', 'freedom']
  },
  {
    id: 9,
    title: 'Mental Health',
    description: 'Breaking stigmas and providing support for everyone.',
    image: '/wish9.png',
    wallet: '0xk9l8...m7n6',
    likes: 3.8,
    category: 'Health',
    date: '2024-02-07',
    tags: ['mentalhealth', 'wellness', 'health', 'support', 'awareness']
  },
  {
    id: 10,
    title: 'Personal Growth',
    description: 'Achieving my full potential and inspiring others.',
    image: '/wish1.png',
    wallet: '0xm7n6...k9l8',
    likes: 1.5,
    category: 'Personal',
    date: '2024-02-06',
    tags: ['growth', 'motivation', 'inspiration', 'mindfulness', 'goals']
  },
  {
    id: 11,
    title: 'AI Ethics',
    description: 'Ensuring artificial intelligence benefits humanity.',
    image: '/wish2.png',
    wallet: '0xp4q5...r6s7',
    likes: 2.2,
    category: 'Technology',
    date: '2024-02-05',
    tags: ['ai', 'ethics', 'technology', 'future', 'responsibility']
  },
  {
    id: 12,
    title: 'Global Literacy',
    description: 'Everyone deserves the ability to read and write.',
    image: '/wish3.png',
    wallet: '0xt8u9...v0w1',
    likes: 1.9,
    category: 'Education',
    date: '2024-02-04',
    tags: ['literacy', 'education', 'global', 'empowerment', 'learning']
  }
].map((wish, index) => ({
  ...wish,
  creator: {
    name: 'Anonymous',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${index + 1}`,
    wallet: wish.wallet
  }
}));

export const categories = [
  'All',
  'Personal Growth',
  'Career',
  'Health & Wellness',
  'Travel',
  'Education',
  'Family',
  'Relationships',
  'Financial Goals',
  'Creative Projects',
  'Social Impact',
  'Technology',
  'Environment',
  'Sports & Fitness',
  'Entertainment',
  'Business',
  'Spiritual',
  'Humanity',
  'Science',
  'Innovation',
  'Art & Culture',
  'Community',
  'Sustainability',
  'Adventure',
  'Knowledge',
  'Music',
  'Food & Cooking',
  'Fashion',
  'Photography',
  'Writing',
  'Gaming',
  'Pets & Animals',
  'Home & Living',
  'DIY & Crafts',
  'Languages',
  'Mental Health',
  'Fitness Goals',
  'Reading',
  'Volunteering',
  'Others'
] as const;

export const networks = [
  {
    id: 'abstract',
    name: 'Abstract',
    icon: '✳️',
    isEmoji: true,
    chainId: '1',
  },
  {
    id: 'solana',
    name: 'Solana',
    icon: '/icons/solana.jpeg',
    isEmoji: false,
    chainId: '2',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    icon: '/icons/eth.jpg',
    isEmoji: false,
    chainId: '3',
  },
] as const;

export type Category = (typeof categories)[number];
export type NetworkId = (typeof networks)[number]['id']; 