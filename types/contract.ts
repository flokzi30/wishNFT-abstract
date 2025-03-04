/* eslint-disable no-unused-vars */
export enum BackgroundStyle {
  BLUE,
  GREEN,
  ORANGE,
  DARK,
  GRADIENT
}

export enum Category {
  ALL,
  HUMANITY,
  HEALTH,
  TECHNOLOGY,
  ENVIRONMENT,
  EDUCATION,
  FAMILY,
  RELATIONSHIPS
}

export interface Wish {
  wishText: string;
  detailedExplanation: string;
  category: Category;
  relatedTopics: string[];
  background: BackgroundStyle;
  imageURI: string;
  likes: bigint;
  wisher: `0x${string}`;
  tokenId?: bigint;
}

export interface CreateWishParams {
  wishText: string;
  // detailedExplanation: string;
  category: string;
  relatedTopics: string[];
  background: BackgroundStyle;
  imageURI: string;
}

export interface WishNFTContract {
  // View functions
  balanceOf(owner: `0x${string}`): Promise<bigint>;
  getApproved(tokenId: bigint): Promise<`0x${string}`>;
  getWish(tokenId: bigint): Promise<Wish>;
  getWishesByCategory(category: Category): Promise<bigint[]>;
  getWishesByTopic(topic: string): Promise<bigint[]>;
  hasLiked(tokenId: bigint, user: `0x${string}`): Promise<boolean>;
  isApprovedForAll(owner: `0x${string}`, operator: `0x${string}`): Promise<boolean>;
  mintingFee(): Promise<bigint>;
  name(): Promise<string>;
  owner(): Promise<`0x${string}`>;
  ownerOf(tokenId: bigint): Promise<`0x${string}`>;
  symbol(): Promise<string>;
  tokenByIndex(index: bigint): Promise<bigint>;
  tokenOfOwnerByIndex(owner: `0x${string}`, index: bigint): Promise<bigint>;
  tokenURI(tokenId: bigint): Promise<string>;
  totalSupply(): Promise<bigint>;

  // Write functions
  createWish(params: CreateWishParams): Promise<{ hash: `0x${string}` }>;
  likeWish(tokenId: bigint): Promise<{ hash: `0x${string}` }>;
  approve(to: `0x${string}`, tokenId: bigint): Promise<{ hash: `0x${string}` }>;
  setApprovalForAll(operator: `0x${string}`, approved: boolean): Promise<{ hash: `0x${string}` }>;
  transferFrom(from: `0x${string}`, to: `0x${string}`, tokenId: bigint): Promise<{ hash: `0x${string}` }>;
  safeTransferFrom(from: `0x${string}`, to: `0x${string}`, tokenId: bigint): Promise<{ hash: `0x${string}` }>;

} 