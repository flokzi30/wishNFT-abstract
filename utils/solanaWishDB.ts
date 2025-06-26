import { SolanaWish } from '@/types/solana';

// Simple localStorage-based storage for Solana wishes
// In production, this should be replaced with a proper database
export const SolanaWishDB = {
  // Test if localStorage is available
  isStorageAvailable(): boolean {
    try {
      if (typeof window === 'undefined') return false;
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      console.warn('localStorage not available:', error);
      return false;
    }
  },

  // Save a wish to localStorage
  async saveWish(wish: SolanaWish): Promise<void> {
    if (!this.isStorageAvailable()) {
      throw new Error('Storage not available');
    }

    try {
      const stored = localStorage.getItem('solanaWishes');
      const wishes: SolanaWish[] = stored ? JSON.parse(stored) : [];
      
      // Add the new wish
      wishes.push({
        ...wish,
        createdAt: new Date(wish.createdAt), // Ensure date object
      });
      
      localStorage.setItem('solanaWishes', JSON.stringify(wishes));
      console.log('✅ Solana wish saved to localStorage:', wish.id);
    } catch (error) {
      console.error('❌ Error saving Solana wish:', error);
      throw error;
    }
  },

  // Load all wishes from localStorage
  async loadWishes(): Promise<SolanaWish[]> {
    if (!this.isStorageAvailable()) {
      return [];
    }

    try {
      const stored = localStorage.getItem('solanaWishes');
      if (!stored) return [];
      
      const wishes = JSON.parse(stored);
      return wishes.map((wish: any) => ({
        ...wish,
        createdAt: new Date(wish.createdAt), // Convert back to date object
      }));
    } catch (error) {
      console.error('❌ Error loading Solana wishes:', error);
      return [];
    }
  },

  // Get wishes by wallet address
  async getWishesByWallet(walletAddress: string): Promise<SolanaWish[]> {
    const allWishes = await this.loadWishes();
    return allWishes.filter(wish => wish.wisher === walletAddress);
  },

  // Get wish by mint address
  async getWishByMintAddress(mintAddress: string): Promise<SolanaWish | null> {
    const allWishes = await this.loadWishes();
    return allWishes.find(wish => wish.mintAddress === mintAddress) || null;
  },

  // Get wish by ID
  async getWishById(id: string): Promise<SolanaWish | null> {
    const allWishes = await this.loadWishes();
    return allWishes.find(wish => wish.id === id) || null;
  },

  // Like a wish (update likes count)
  async likeWish(id: string): Promise<void> {
    if (!this.isStorageAvailable()) {
      throw new Error('Storage not available');
    }

    try {
      const allWishes = await this.loadWishes();
      const wishIndex = allWishes.findIndex(wish => wish.id === id);
      
      if (wishIndex === -1) {
        throw new Error('Wish not found');
      }

      allWishes[wishIndex].likes += 1;
      localStorage.setItem('solanaWishes', JSON.stringify(allWishes));
      console.log('✅ Solana wish liked:', id);
    } catch (error) {
      console.error('❌ Error liking Solana wish:', error);
      throw error;
    }
  },

  // Get total count of wishes
  async getTotalCount(): Promise<number> {
    const allWishes = await this.loadWishes();
    return allWishes.length;
  },
}; 