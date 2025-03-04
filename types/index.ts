export interface WishType {
  id: number;
  title: string;
  description: string;
  image: string;
  wallet: string;
  likes: number;
  category: string;
  date: string;
  tags?: string[];
  creator: {
    name: string;
    avatar: string;
    wallet: string;
  };
} 