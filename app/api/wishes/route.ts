import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';
import { createPublicClient, http } from 'viem';
import contractABI from '@/contracts/ABI.json';
import { Wish } from '@/types/contract';
import { abstract } from 'viem/chains';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_WISHNFT_CONTRACT_ADDRESS as `0x${string}`;
const CACHE_EXPIRY = 30; // 5 minutes

// Helper function to serialize BigInt values
function serializeWish(wish: Wish & { tokenId: bigint }) {
  return {
    ...wish,
    likes: wish.likes.toString(),
    tokenId: wish.tokenId.toString(),
  };
}

function serializeWishes(wishes: (Wish & { tokenId: bigint })[]) {
  return wishes.map(serializeWish);
}

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Initialize public client for blockchain reads
const publicClient = createPublicClient({
  chain: abstract,
  transport: http(),
});

async function fetchWishFromChain(tokenId: bigint) {
  const wishData = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi: contractABI,
    functionName: 'getWish',
    args: [tokenId],
  }) as Omit<Wish, 'wisher' | 'tokenId'>;

  const ownerAddress = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi: contractABI,
    functionName: 'ownerOf',
    args: [tokenId],
  }) as `0x${string}`;

  return {
    ...wishData,
    wisher: ownerAddress,
    tokenId,
  };
}

async function fetchAllWishesFromChain() {
  const totalSupply = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi: contractABI,
    functionName: 'totalSupply',
  }) as bigint;

  const wishPromises = [];
  for (let i = BigInt(0); i < totalSupply; i++) {
    const tokenId = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: contractABI,
      functionName: 'tokenByIndex',
      args: [i],
    }) as bigint;
    wishPromises.push(fetchWishFromChain(tokenId));
  }

  return await Promise.all(wishPromises);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tokenId = searchParams.get('tokenId');

  try {
    if (tokenId) {
      // Single wish fetch
      const cacheKey = `wish:${tokenId}`;
      const cachedWish = await redis.get(cacheKey);

      if (cachedWish) {
        return NextResponse.json(cachedWish);
      }

      const wish = await fetchWishFromChain(BigInt(tokenId));
      const serializedWish = serializeWish(wish);
      await redis.set(cacheKey, JSON.stringify(serializedWish), { ex: CACHE_EXPIRY });
      return NextResponse.json(serializedWish);
    } else {
      // All wishes fetch
      const cacheKey = 'wishes:all';
      const cachedWishes = await redis.get(cacheKey);

      if (cachedWishes) {
        return NextResponse.json(cachedWishes);
      }

      const wishes = await fetchAllWishesFromChain();
      const serializedWishes = serializeWishes(wishes);
      await redis.set(cacheKey, JSON.stringify(serializedWishes), { ex: CACHE_EXPIRY });
      return NextResponse.json(serializedWishes);
    }
  } catch (error) {
    console.error('Error fetching wishes:', error);
    return NextResponse.json({ error: 'Failed to fetch wishes' }, { status: 500 });
  }
}

// Webhook endpoint to invalidate cache when new wishes are created
export async function POST(request: Request) {
  const { tokenId } = await request.json();
  
  try {
    // Invalidate specific wish cache
    if (tokenId) {
      await redis.del(`wish:${tokenId}`);
    }
    // Invalidate all wishes cache
    await redis.del('wishes:all');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error invalidating cache:', error);
    return NextResponse.json({ error: 'Failed to invalidate cache' }, { status: 500 });
  }
} 