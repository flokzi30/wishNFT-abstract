'use client';

import { useState, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Metaplex, walletAdapterIdentity } from '@metaplex-foundation/js';
import { Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { CreateSolanaWishParams, SolanaWishNFTResult, SolanaWishMetadata, SolanaWish } from '@/types/solana';
import { toast } from 'sonner';
import { SolanaWishDB } from '@/utils/solanaWishDB';

export const useSolanaWishNFT = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const { publicKey, signTransaction } = wallet;
  
  const [isMinting, setIsMinting] = useState(false);
  const [totalSupply, setTotalSupply] = useState<number>(0);

  // Get total supply from localStorage
  const fetchTotalSupply = useCallback(async () => {
    try {
      const count = await SolanaWishDB.getTotalCount();
      setTotalSupply(count);
      return count;
    } catch (error) {
      console.error('Error fetching total supply:', error);
      return 0;
    }
  }, []);

  const createWishMetadata = (params: CreateSolanaWishParams, nextTokenId: number): SolanaWishMetadata => {
    return {
      name: `Wish #${nextTokenId} - ${params.category}`,
      description: `A heartfelt wish: "${params.wishText}" - Created with love on the Solana blockchain.`,
      image: params.imageURI,
      attributes: [
        {
          trait_type: 'Category',
          value: params.category,
        },
        {
          trait_type: 'Background Style',
          value: params.background,
        },
        {
          trait_type: 'Network',
          value: 'Solana',
        },
        {
          trait_type: 'Token ID',
          value: nextTokenId.toString(),
        },
        {
          trait_type: 'Creation Date',
          value: new Date().toISOString().split('T')[0],
        },
        ...params.relatedTopics.map((topic, index) => ({
          trait_type: `Topic ${index + 1}`,
          value: topic,
        })),
      ],
      properties: {
        category: params.category,
        files: [
          {
            uri: params.imageURI,
            type: 'image/png',
          },
        ],
      },
    };
  };

  const createWish = async (params: CreateSolanaWishParams): Promise<SolanaWishNFTResult> => {
    console.log('🚀 createWish called with params:', params);
    
    if (!publicKey || !signTransaction) {
      console.log('❌ Wallet not connected');
      return {
        success: false,
        error: 'Wallet not connected',
      };
    }

    console.log('✅ Wallet connected - publicKey:', publicKey.toString());
    setIsMinting(true);

    try {
      // Check if user has enough SOL (minimum 0.01 SOL for fees)
      console.log('💸 Checking wallet balance...');
      const balance = await connection.getBalance(publicKey);
      const requiredSol = 0.01; // Minimum SOL for transaction fees
      const balanceInSol = balance / LAMPORTS_PER_SOL;
      
      console.log('💳 Balance check:', {
        balanceInSol,
        requiredSol,
        hasEnough: balanceInSol >= requiredSol
      });
      
      if (balanceInSol < requiredSol) {
        throw new Error(`Insufficient SOL balance. Required: ${requiredSol} SOL, Have: ${balanceInSol.toFixed(4)} SOL`);
      }

      // Get next token ID
      const currentSupply = await fetchTotalSupply();
      const nextTokenId = currentSupply + 1;

      // Create a keypair for the NFT mint
      console.log('🔐 Generating mint keypair...');
      const mintKeypair = Keypair.generate();
      console.log('🔑 Mint address will be:', mintKeypair.publicKey.toString());
      
      // Initialize Metaplex
      console.log('🏗️ Initializing Metaplex...');
      const metaplex = Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet));
      console.log('✅ Metaplex initialized with wallet adapter');

      // Create metadata
      console.log('📊 Creating metadata...');
      const metadata = createWishMetadata(params, nextTokenId);
      console.log('📋 Metadata created:', metadata);
      
      // Upload metadata using your custom API route
      console.log('📤 Uploading metadata to storage...');
      const uploadPayload = {
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
        attributes: metadata.attributes,
        properties: metadata.properties,
      };
      
      // Convert metadata to JSON and create a file
      const metadataJson = JSON.stringify(uploadPayload, null, 2);
      const metadataFile = new File([metadataJson], `wish-${nextTokenId}-metadata.json`, {
        type: 'application/json',
      });
      
      // Upload metadata file using your custom route
      const formData = new FormData();
      formData.append('file', metadataFile);
      
      const uploadResponse = await fetch('/api/files', {
        method: 'POST',
        body: formData,
      });
      
      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        throw new Error(`Failed to upload metadata: ${errorText}`);
      }
      
      const uploadResult = await uploadResponse.json();
      const metadataUri = uploadResult.url;
      
      console.log('✅ Metadata uploaded to URI:', metadataUri);
      console.log('📋 Metadata IPFS Hash:', uploadResult.ipfsHash);

      // Create NFT
      console.log('🎨 Creating NFT...');
      const nftCreatePayload = {
        uri: metadataUri,
        name: metadata.name,
        symbol: 'WISH',
        sellerFeeBasisPoints: 0,
        creators: [
          {
            address: publicKey,
            share: 100,
          },
        ],
        mint: mintKeypair,
      };
      console.log('🎨 NFT create payload:', nftCreatePayload);
      
      const { nft, response } = await metaplex.nfts().create(nftCreatePayload);
      console.log('🎉 NFT created successfully!');
      console.log('🏷️ NFT Details:', {
        address: nft.address.toString(),
        name: nft.name,
        symbol: nft.symbol,
        uri: nft.uri
      });
      console.log('📝 Transaction response:', {
        signature: response.signature
      });

      // Save wish to database
      console.log('💾 Saving wish to database...');
      const solanaWish: SolanaWish = {
        id: crypto.randomUUID(),
        wishText: params.wishText,
        category: params.category,
        relatedTopics: params.relatedTopics,
        background: params.background,
        imageURI: params.imageURI,
        likes: 0,
        wisher: publicKey.toString(),
        mintAddress: nft.address.toString(),
        transactionSignature: response.signature,
        createdAt: new Date(),
        network: 'solana',
      };
      console.log('💾 Solana wish data:', solanaWish);

      await SolanaWishDB.saveWish(solanaWish);
      console.log('✅ Wish saved to database');

      // Update total supply
      await fetchTotalSupply();

      toast.success('Wish NFT minted successfully on Solana!');

      console.log('🎊 Wish creation completed successfully!');
      return {
        success: true,
        mintAddress: nft.address.toString(),
        transactionSignature: response.signature,
      };
    } catch (error) {
      console.error('💥 Error creating wish:', error);
      console.error('🔍 Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      toast.error(`Failed to mint wish: ${errorMessage}`);

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      console.log('🏁 Minting process finished');
      setIsMinting(false);
    }
  };

  // Get wishes by current wallet
  const getMyWishes = useCallback(async () => {
    if (!publicKey) return [];
    try {
      return await SolanaWishDB.getWishesByWallet(publicKey.toString());
    } catch (error) {
      console.error('Error fetching my wishes:', error);
      return [];
    }
  }, [publicKey]);

  // Like a wish
  const likeWish = useCallback(async (wishId: string) => {
    try {
      await SolanaWishDB.likeWish(wishId);
      toast.success('Wish liked!');
    } catch (error) {
      console.error('Error liking wish:', error);
      toast.error('Failed to like wish');
    }
  }, []);

  return {
    createWish,
    isMinting,
    totalSupply,
    fetchTotalSupply,
    getMyWishes,
    likeWish,
    isConnected: !!publicKey,
    walletAddress: publicKey?.toString(),
  };
}; 