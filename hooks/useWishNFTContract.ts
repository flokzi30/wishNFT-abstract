import { useCallback, useState } from 'react';
import { useWishNFT } from '@/providers/WishNFTProvider';
import { Category, CreateWishParams, Wish } from '@/types/contract';

// Hook for creating a new wish
export function useCreateWish() {
  const { contract, isConnected } = useWishNFT();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createWish = useCallback(async (params: CreateWishParams) => {
    if (!contract || !isConnected) {
      throw new Error('Contract not initialized or wallet not connected');
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await contract.createWish(params);
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [contract, isConnected]);

  return { createWish, isLoading, error };
}

// Hook for fetching all wishes
export function useWishes() {
  const { contract } = useWishNFT();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWishes = useCallback(async () => {
    if (!contract) {
      throw new Error('Contract not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      const totalSupply = await contract.totalSupply();
      const wishPromises = [];

      for (let i = BigInt(0); i < totalSupply; i++) {
        const tokenId = await contract.tokenByIndex(i);
        console.log('tokenId', tokenId);
        wishPromises.push(contract.getWish(tokenId));
      }

      const wishes = await Promise.all(wishPromises);
      setWishes(wishes);
      return wishes;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [contract]);

  return { wishes, fetchWishes, isLoading, error };
}

// Hook for fetching wishes by category
export function useWishesByCategory(category: Category) {
  const { contract } = useWishNFT();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWishesByCategory = useCallback(async () => {
    if (!contract) {
      throw new Error('Contract not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      const tokenIds = await contract.getWishesByCategory(category);
      const wishPromises = tokenIds.map(tokenId => contract.getWish(tokenId));
      const wishes = await Promise.all(wishPromises);
      setWishes(wishes);
      return wishes;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [contract, category]);

  return { wishes, fetchWishesByCategory, isLoading, error };
}

// Hook for fetching a single wish
export function useWishDetails(tokenId: bigint) {
  const { contract } = useWishNFT();
  const [wish, setWish] = useState<Wish | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWishDetails = useCallback(async () => {
    if (!contract) {
      throw new Error('Contract not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      const wishData = await contract.getWish(tokenId);
      const ownerAddress = await contract.ownerOf(tokenId);

      setWish({
        ...wishData,
        wisher: ownerAddress,
        tokenId,
      });
      return wishData;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [contract, tokenId]);

  return { wish, fetchWishDetails, isLoading, error };
}

// Hook for liking a wish
export function useLikeWish() {
  const { contract, isConnected } = useWishNFT();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const likeWish = useCallback(async (tokenId: bigint) => {
    if (!contract || !isConnected) {
      throw new Error('Contract not initialized or wallet not connected');
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await contract.likeWish(tokenId);
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [contract, isConnected]);

  return { likeWish, isLoading, error };
}

// Hook for fetching a wish
export function useWish(tokenId: bigint) {
  const { contract } = useWishNFT();
  const [wish, setWish] = useState<Wish | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWish = useCallback(async () => {
    if (!contract) {
      throw new Error('Contract not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await contract.getWish(tokenId);
      setWish(result);
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [contract, tokenId]);

  return { wish, fetchWish, isLoading, error };
}

// Hook for checking if a user has liked a wish
export function useHasLiked(tokenId: bigint, userAddress: `0x${string}`) {
  const { contract } = useWishNFT();
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const checkHasLiked = useCallback(async () => {
    if (!contract) {
      throw new Error('Contract not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await contract.hasLiked(tokenId, userAddress);
      setHasLiked(result);
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [contract, tokenId, userAddress]);

  return { hasLiked, checkHasLiked, isLoading, error };
}

// Hook for getting user's wish balance
export function useWishBalance(userAddress: `0x${string}`) {
  const { contract } = useWishNFT();
  const [balance, setBalance] = useState<bigint>(BigInt(0));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchBalance = useCallback(async () => {
    if (!contract) {
      throw new Error('Contract not initialized');
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await contract.balanceOf(userAddress);
      setBalance(result);
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [contract, userAddress]);

  return { balance, fetchBalance, isLoading, error };
} 