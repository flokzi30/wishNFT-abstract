export interface Wish {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  creator: {
    wallet: string;
    name?: string;
  };
  image?: string;
  tags?: string[];
  likes: number;
} 