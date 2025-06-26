'use client';

import { useEffect, useState } from 'react';
import { useNetwork } from '@/providers/NetworkProvider';
import { useWishNFT } from '@/providers/WishNFTProvider';
import { useSolanaWishNFT } from './useSolanaWishNFT';
import { useCreateWish } from './useWishNFTContract';
import { CreateWishParams, BackgroundStyle } from '@/types/contract';
import { CreateSolanaWishParams } from '@/types/solana';
import { useAccount } from 'wagmi';
import { useWallet } from '@solana/wallet-adapter-react';

export const useUnifiedWishNFT = () => {
  const { selectedNetwork, isAbstract, isSolana } = useNetwork();
  
  // Abstract hooks
  const { contract: abstractContract, isLoading: abstractLoading } = useWishNFT();
  const { createWish: createAbstractWish, isLoading: abstractMinting, error: abstractError } = useCreateWish();
  const { address: abstractAddress } = useAccount();
  
  // Solana hooks
  const { 
    createWish: createSolanaWish, 
    isMinting: solanaMinting, 
    fetchTotalSupply: fetchSolanaTotalSupply,
    isConnected: solanaConnected,
    walletAddress: solanaAddress 
  } = useSolanaWishNFT();
  const { connected: solanaWalletConnected } = useWallet();
  
  // Unified state
  const [nextTokenId, setNextTokenId] = useState<bigint>(BigInt(1));

  // Fetch total supply based on selected network
  useEffect(() => {
    const fetchTotalSupply = async () => {
      if (isAbstract && abstractContract) {
        try {
          const supply = await abstractContract.totalSupply();
          setNextTokenId(supply + BigInt(1));
        } catch (error) {
          console.error('Error fetching Abstract total supply:', error);
        }
      } else if (isSolana) {
        const supply = await fetchSolanaTotalSupply();
        setNextTokenId(BigInt(supply + 1));
      }
    };

    fetchTotalSupply();
  }, [selectedNetwork, abstractContract, isAbstract, isSolana, fetchSolanaTotalSupply]);

  // Unified create wish function
  const createWish = async (params: {
    wishText: string;
    category: string;
    relatedTopics: string[];
    background: string;
    imageURI: string;
  }) => {
    console.log('🚀 Creating wish on network:', selectedNetwork);
    
    if (isAbstract) {
      // Map background string to BackgroundStyle enum
      const backgroundStyleMap: Record<string, BackgroundStyle> = {
        'from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]': BackgroundStyle.BLUE,
        'from-[#23e788] via-[#23e788]/80 to-[#23e788]/70': BackgroundStyle.GREEN,
        'from-[#f7931a] via-[#f7931a]/80 to-white': BackgroundStyle.ORANGE,
        'from-[#343434] via-gray-600 to-[#343434]': BackgroundStyle.DARK,
        'from-[#9945FF] to-[#14F195]': BackgroundStyle.GRADIENT,
      };

      const abstractParams: CreateWishParams = {
        wishText: params.wishText,
        category: params.category,
        relatedTopics: params.relatedTopics,
        background: backgroundStyleMap[params.background] || BackgroundStyle.BLUE,
        imageURI: params.imageURI,
      };

      return await createAbstractWish(abstractParams);
    } else if (isSolana) {
      const solanaParams: CreateSolanaWishParams = {
        wishText: params.wishText,
        category: params.category,
        relatedTopics: params.relatedTopics,
        background: params.background,
        imageURI: params.imageURI,
      };

      const result = await createSolanaWish(solanaParams);
      if (!result.success) {
        throw new Error(result.error || 'Failed to create Solana wish');
      }
      
      return {
        hash: result.transactionSignature as `0x${string}`,
      };
    } else {
      throw new Error('No network selected');
    }
  };

  // Unified state
  const isLoading = isAbstract ? abstractLoading : false;
  const isMinting = isAbstract ? abstractMinting : solanaMinting;
  const error = isAbstract ? abstractError : null;
  const isConnected = isAbstract ? !!abstractAddress : solanaConnected && solanaWalletConnected;
  const walletAddress = isAbstract ? abstractAddress : solanaAddress;

  return {
    selectedNetwork,
    isAbstract,
    isSolana,
    createWish,
    isLoading,
    isMinting,
    error,
    isConnected,
    walletAddress,
    nextTokenId,
  };
}; 