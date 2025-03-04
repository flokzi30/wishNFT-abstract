'use client'

import { createContext, useContext, useMemo } from 'react';
import { useAbstractClient } from "@abstract-foundation/agw-react";
import { WishNFTContract } from '@/types/contract';
import contractABI from '@/contracts/ABI.json';
import { createPublicClient, http } from 'viem';
import { eip712WalletActions } from 'viem/zksync';
import { abstract } from 'viem/chains';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_WISHNFT_CONTRACT_ADDRESS as `0x${string}`;

interface WishNFTContextType {
  contract: WishNFTContract | null;
  isLoading: boolean;
  error: Error | null;
  isConnected: boolean;
}

const WishNFTContext = createContext<WishNFTContextType>({
  contract: null,
  isLoading: true,
  error: null,
  isConnected: false,
});

export function WishNFTProvider({ children }: { children: React.ReactNode }) {
  const { data: agwClient, isLoading: clientLoading, error: clientError } = useAbstractClient();
  
  // Add detailed debugging
  // console.log('WishNFTProvider Debug:', {
  //   clientPresent: !!agwClient,
  //   clientLoading,
  //   clientError: clientError?.message,
  //   clientErrorFull: clientError,
  //   agwClientDetails: agwClient ? {
  //     hasAccount: !!agwClient.account,
  //     hasTransport: !!agwClient.transport,
  //     chain: agwClient.chain,
  //   } : null
  // });

  const contract = useMemo(() => {
    if (!agwClient) {
      // console.log('Contract creation skipped: agwClient is null');
      return null;
    }

    try {
      // Create a public client for read operations
      const publicClient = createPublicClient({
        chain: abstract,
        transport: http(),
      });

      // Create an extended AGW client for write operations
      const extendedAgwClient = agwClient.extend(eip712WalletActions());
      
      // console.log('Contract creation successful:', {
      //   publicClientCreated: !!publicClient,
      //   extendedAgwClientCreated: !!extendedAgwClient,
      // });

      return {
        // View functions
        balanceOf: async (owner: `0x${string}`) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'balanceOf',
            args: [owner],
          });
          return result as bigint;
        },

        getApproved: async (tokenId: bigint) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'getApproved',
            args: [tokenId],
          });
          return result as `0x${string}`;
        },

        getWish: async (tokenId: bigint) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'getWish',
            args: [tokenId],
          });
          return result as any; // Type conversion handled by contract types
        },

        getWishesByCategory: async (category: number) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'getWishesByCategory',
            args: [category],
          });
          return result as bigint[];
        },

        getWishesByTopic: async (topic: string) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'getWishesByTopic',
            args: [topic],
          });
          return result as bigint[];
        },

        hasLiked: async (tokenId: bigint, user: `0x${string}`) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'hasLiked',
            args: [tokenId, user],
          });
          return result as boolean;
        },

        isApprovedForAll: async (owner: `0x${string}`, operator: `0x${string}`) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'isApprovedForAll',
            args: [owner, operator],
          });
          return result as boolean;
        },

        mintingFee: async () => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'mintingFee',
          });
          return result as bigint;
        },

        name: async () => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'name',
          });
          return result as string;
        },

        owner: async () => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'owner',
          });
          return result as `0x${string}`;
        },

        ownerOf: async (tokenId: bigint) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'ownerOf',
            args: [tokenId],
          });
          return result as `0x${string}`;
        },

        symbol: async () => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'symbol',
          });
          return result as string;
        },

        tokenByIndex: async (index: bigint) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'tokenByIndex',
            args: [index],
          });
          return result as bigint;
        },

        tokenOfOwnerByIndex: async (owner: `0x${string}`, index: bigint) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'tokenOfOwnerByIndex',
            args: [owner, index],
          });
          return result as bigint;
        },

        tokenURI: async (tokenId: bigint) => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'tokenURI',
            args: [tokenId],
          });
          return result as string;
        },

        totalSupply: async () => {
          const result = await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'totalSupply',
          });
          console.log('totalSupply', result);
          return result as bigint;
        },

        // Write functions
        createWish: async (params) => {
          const hash = await extendedAgwClient.writeContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'createWish',
            args: [
              params.wishText,
              // params.detailedExplanation,
              params.category,
              params.relatedTopics,
              params.background,
              params.imageURI,
            ],
          });
          return { hash };
        },

        likeWish: async (tokenId: bigint) => {
          const hash = await extendedAgwClient.writeContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'likeWish',
            args: [tokenId],
          });
          return { hash };
        },

        approve: async (to: `0x${string}`, tokenId: bigint) => {
          const hash = await extendedAgwClient.writeContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'approve',
            args: [to, tokenId],
          });
          return { hash };
        },

        setApprovalForAll: async (operator: `0x${string}`, approved: boolean) => {
          const hash = await extendedAgwClient.writeContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'setApprovalForAll',
            args: [operator, approved],
          });
          return { hash };
        },

        transferFrom: async (from: `0x${string}`, to: `0x${string}`, tokenId: bigint) => {
          const hash = await extendedAgwClient.writeContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'transferFrom',
            args: [from, to, tokenId],
          });
          return { hash };
        },

        safeTransferFrom: async (from: `0x${string}`, to: `0x${string}`, tokenId: bigint) => {
          const hash = await extendedAgwClient.writeContract({
            address: CONTRACT_ADDRESS,
            abi: contractABI,
            functionName: 'safeTransferFrom',
            args: [from, to, tokenId],
          });
          return { hash };
        },
      } as WishNFTContract;
    } catch (error) {
      console.error('Error creating contract:', error);
      return null;
    }
  }, [agwClient]);

  // Add contract debug logging
  // console.log('Contract Debug:', {
  //   contractPresent: !!contract,
  //   isLoading: clientLoading,
  //   hasError: !!clientError,
  //   isConnected: !!agwClient
  // });

  return (
    <WishNFTContext.Provider
      value={{
        contract,
        isLoading: clientLoading,
        error: clientError,
        isConnected: !!agwClient,
      }}
    >
      {children}
    </WishNFTContext.Provider>
  );
}

export function useWishNFT() {
  const context = useContext(WishNFTContext);
  if (context === undefined) {
    throw new Error('useWishNFT must be used within a WishNFTProvider');
  }
  return context;
} 