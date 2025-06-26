export interface SolanaWish {
  id: string;
  wishText: string;
  category: string;
  relatedTopics: string[];
  background: string;
  imageURI: string;
  likes: number;
  wisher: string;
  mintAddress: string;
  transactionSignature: string;
  createdAt: Date;
  network: 'solana';
}

export interface CreateSolanaWishParams {
  wishText: string;
  category: string;
  relatedTopics: string[];
  background: string;
  imageURI: string;
}

export interface SolanaWishMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
  properties: {
    category: string;
    files: Array<{
      uri: string;
      type: string;
    }>;
  };
}

export interface SolanaWishNFTResult {
  success: boolean;
  mintAddress?: string;
  transactionSignature?: string;
  error?: string;
} 