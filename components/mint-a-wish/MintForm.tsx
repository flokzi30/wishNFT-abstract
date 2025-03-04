'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { toPng } from 'html-to-image';
import { categories, networks, type NetworkId } from '@/data/wishes';
import WishFormFields, { getCategoryIcon } from './WishFormFields';
import NetworkInfo from './NetworkInfo';
import { useCreateWish } from '@/hooks/useWishNFTContract';
import { BackgroundStyle } from '@/types/contract';
import { toast } from 'sonner';
import { useAccount } from 'wagmi';
import { useLoginWithAbstract } from '@abstract-foundation/agw-react';
import React from 'react';
import { useWishNFT } from '@/providers/WishNFTProvider';

interface FormData {
  wish: string;
  category: string;
  network: NetworkId;
  image: File | null;
  imageURI: string;
  tags: string[];
  backgroundColor: string;
}

// Map background style to enum
const backgroundStyleMap: Record<string, BackgroundStyle> = {
  'from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]':
    BackgroundStyle.BLUE,
  'from-[#23e788] via-[#23e788]/80 to-[#23e788]/70': BackgroundStyle.GREEN,
  'from-[#f7931a] via-[#f7931a]/80 to-white': BackgroundStyle.ORANGE,
  'from-[#343434] via-gray-600 to-[#343434]': BackgroundStyle.DARK,
  'from-[#9945FF] to-[#14F195]': BackgroundStyle.GRADIENT,
};

// Map category to enum
// const categoryMap: Record<string, Category> = {
//   'All': Category.ALL,
//   'Humanity': Category.HUMANITY,
//   'Health': Category.HEALTH,
//   'Technology': Category.TECHNOLOGY,
//   'Environment': Category.ENVIRONMENT,
//   'Education': Category.EDUCATION,
//   'Family': Category.FAMILY,
//   'Relationships': Category.RELATIONSHIPS,
// };

interface WishPreviewProps {
  formData: FormData;
  address?: string;
  nextTokenId: bigint;
  ref?: React.RefObject<{ generateImage: () => Promise<string> }>;
}

const WishPreview = React.forwardRef<
  { generateImage: () => Promise<string> },
  WishPreviewProps
>(({ formData, address, nextTokenId }, ref) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const generateImage = async (): Promise<string> => {
    if (!previewRef.current) {
      console.error('Preview ref is not available');
      return '';
    }

    try {
      // Hide the watermark before capturing
      const watermark = previewRef.current.querySelector('[data-watermark]');
      if (watermark) {
        (watermark as HTMLElement).style.display = 'none';
      }

      // Add a small delay to ensure DOM updates are complete
      await new Promise((resolve) => setTimeout(resolve, 100));

      console.log('Attempting to generate image...');
      const dataUrl = await toPng(previewRef.current, {
        quality: 0.95,
        pixelRatio: 2,
        cacheBust: true,
        canvasWidth: 800,
        canvasHeight: 800,
        style: { transform: 'scale(1)', transformOrigin: 'top left' },
        filter: (node) => {
          try {
            const style = window.getComputedStyle(node as Element);
            return style.display !== 'none';
          } catch (e) {
            console.error('Filter error:', e);
            return true;
          }
        },
      });
      console.log('Image generated successfully');

      // Show the watermark again
      if (watermark) {
        (watermark as HTMLElement).style.display = 'flex';
      }

      if (!dataUrl || dataUrl.length === 0) {
        throw new Error('Generated image is empty');
      }

      return dataUrl;
    } catch (error) {
      console.error('Detailed error in generateImage:', error);
      throw new Error(
        'Failed to generate preview image: ' + (error as Error).message,
      );
    }
  };

  // Expose the generateImage function through the ref
  React.useImperativeHandle(ref, () => ({ generateImage }));

  return (
    <div className="space-y-4">
      <div
        ref={previewRef}
        className="relative aspect-square rounded-2xl overflow-hidden group shadow-md border border-[var(--color-primary-lighter)]"
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${formData.backgroundColor}`}
        />

        {/* Image Background */}
        {formData.image && (
          <div className="absolute inset-0">
            <Image
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          </div>
        )}

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col box-border p-4">
          {/* Top Section */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
              <span className="text-base">
                {getCategoryIcon(formData.category)}
              </span>
              <span className="text-xs font-medium text-[var(--color-grey-900)]">
                {formData.category || 'Category'}
              </span>
            </div>
            <div className="bg-[var(--color-primary-main)]/80 backdrop-blur-sm px-2 py-1 rounded-lg">
              <span className="text-xs text-white font-medium">
                {networks.find((n) => n.id === formData.network)?.name ||
                  'Abstract'}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow flex flex-col justify-center w-full max-w-full">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 w-full max-w-full box-border">
              <div className="text-white/60 text-sm mb-2 font-light">
                I wish...
              </div>
              <div className="w-full max-w-full overflow-hidden">
                <h3
                  className="text-base font-bold text-white leading-normal"
                  style={{
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    hyphens: 'auto',
                    maxWidth: '100%',
                    whiteSpace: 'normal',
                    textOverflow: 'ellipsis',
                    display: 'block',
                    lineHeight: '1.4',
                  }}
                >
                  {formData.wish || 'a wish that will change the world...'}
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-auto pt-3 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white font-medium font-mono">
                  Wisher: {address?.slice(0, 4)}...{address?.slice(-4)}
                </span>
              </div>
              <div className="bg-[var(--color-primary-main)]/80 backdrop-blur-sm px-2 py-1 rounded-lg">
                <span className="text-xs text-white font-medium">
                  #{nextTokenId.toString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div
          data-watermark
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        >
          <span className="text-white/20 text-[3rem] font-bold rotate-[-30deg] select-none">
            PREVIEW
          </span>
        </div>
      </div>
    </div>
  );
});

WishPreview.displayName = 'WishPreview';

export default function MintForm() {
  // const router = useRouter();
  const { login } = useLoginWithAbstract();
  const { createWish, isLoading, error } = useCreateWish();
  const { address } = useAccount();
  const [uploadingImage, setUploadingImage] = useState(false);
  const [ipfsHash, setIpfsHash] = useState<string>('');
  const { contract } = useWishNFT();
  const [nextTokenId, setNextTokenId] = useState<bigint>(BigInt(1));

  useEffect(() => {
    const fetchTotalSupply = async () => {
      if (contract) {
        try {
          const supply = await contract.totalSupply();
          console.log('Total supply:', supply);
          // Next token ID will be total supply + 1
          setNextTokenId(supply + BigInt(1));
        } catch (error) {
          console.error('Error fetching total supply:', error);
        }
      }
    };

    fetchTotalSupply();
  }, [contract]);

  const [formData, setFormData] = useState<FormData>({
    wish: '',
    category: categories[0],
    network: networks[0].id,
    image: null,
    imageURI: '',
    tags: [],
    backgroundColor:
      'from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]',
  });

  const backgroundOptions = [
    {
      id: 'default',
      name: 'Default',
      gradient:
        'from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]',
    },
    {
      id: 'abstract',
      name: 'Abstract',
      gradient: 'from-[#23e788] via-[#23e788]/80 to-[#23e788]/70',
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      gradient: 'from-[#f7931a] via-[#f7931a]/80 to-white',
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      gradient: 'from-[#343434] via-gray-600 to-[#343434]',
    },
    { id: 'solana', name: 'Solana', gradient: 'from-[#9945FF] to-[#14F195]' },
  ];

  const handleImageChange = (file: File | null) => {
    setFormData({ ...formData, image: file });
  };

  const wishPreviewRef = useRef<{ generateImage: () => Promise<string> }>(null);

  const uploadImageToPinata = async (): Promise<string | null> => {
    if (!wishPreviewRef.current) {
      toast.error('Preview not ready');
      return null;
    }

    try {
      setUploadingImage(true);
      console.log('Starting image generation...');

      // Generate the image
      const imageUrl = await wishPreviewRef.current.generateImage();
      if (!imageUrl) {
        throw new Error('Image generation returned empty result');
      }
      console.log('Image generated, converting to blob...');

      // Convert base64 to blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Calculate and log the size
      const sizeInBytes = blob.size;
      const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
      console.log('Image size:', {
        bytes: sizeInBytes,
        megabytes: `${sizeInMB} MB`,
      });

      if (sizeInBytes === 0) {
        throw new Error('Generated image has zero size');
      }

      // Create a file from the blob
      const file = new File([blob], 'wish-preview.png', { type: 'image/png' });
      console.log('File created, uploading to Pinata...');

      // Upload to Pinata
      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await fetch('/api/files', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        throw new Error(`Failed to upload to Pinata: ${errorText}`);
      }

      const data = await uploadResponse.json();
      setIpfsHash(data.ipfsHash);
      console.log('Upload successful:', data);

      return data.url;
    } catch (error) {
      console.error('Detailed upload error:', error);
      toast.error(`Failed to upload image: ${(error as Error).message}`);
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address) {
      // Kullanıcı cüzdan bağlı değilse, önce login olmasını sağla
      try {
        await login();
        // Not: login işlemi asenkron olduğu için, burada devam etmiyoruz
        // Kullanıcı login olduktan sonra tekrar butona basacak
        toast.info(
          'Please click "Create Wish" again after connecting your wallet',
        );
        return;
      } catch (error) {
        toast.error('Failed to connect wallet');
        return;
      }
    }

    try {
      // First upload the image to Pinata
      const imageURI = await uploadImageToPinata();

      if (!imageURI) {
        throw new Error('Failed to upload image to IPFS');
      }

      // Then create the wish with the returned URI
      const result = await createWish({
        wishText: formData.wish,
        // detailedExplanation: formData.description,
        category: formData.category,
        relatedTopics: formData.tags,
        background: backgroundStyleMap[formData.backgroundColor],
        imageURI,
      });

      toast.success('Wish created successfully!');
      console.log('Transaction hash:', result.hash);
      console.log('IPFS Hash:', ipfsHash);
      
      // Reset form
      setFormData({
        wish: '',
        // description: '',
        category: categories[0],
        network: networks[0].id,
        image: null,
        imageURI: '',
        tags: [],
        backgroundColor:
          'from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]',
      });
      setIpfsHash('');
    } catch (err) {
      toast.error('Failed to create wish');
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-full mx-auto">
      {/* Mobil görünümde tek sütun, masaüstünde iki sütun */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {/* Form Sütunu */}
        <div className="w-full order-1 md:order-1">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 md:space-y-6 w-full"
          >
            <WishFormFields
              formData={formData}
              setFormData={setFormData}
              onImageSelect={handleImageChange}
              backgroundOptions={backgroundOptions}
            />

            <NetworkInfo />

            {/* Mobil görünümde önizleme burada gösterilecek */}
            <div className="block md:hidden mt-6 mb-4 bg-white p-4 rounded-xl border border-[var(--color-primary-lighter)] shadow-sm">
              <h3 className="text-base font-semibold text-[var(--color-grey-900)] mb-3">
                Preview Your Wish
              </h3>
              <div className="max-w-full mx-auto">
                <WishPreview
                  ref={wishPreviewRef}
                  formData={formData}
                  address={address}
                  nextTokenId={nextTokenId}
                />
              </div>

              {/* Pro Tip - Mobil */}
              <div className="mt-4 p-3 bg-[var(--color-primary-lighter)] rounded-lg">
                <p className="text-sm text-[var(--color-primary-dark)]">
                  <span className="font-medium">✨ Inspiration:</span> Every
                  wish is a step towards a better future.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || uploadingImage}
              className="w-full bg-[var(--color-primary-main)] text-white py-3 px-6 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg font-medium"
            >
              {!address
                ? 'Connect & Create Wish'
                : uploadingImage
                  ? 'Uploading to IPFS...'
                  : isLoading
                    ? 'Creating Wish...'
                    : 'Create Wish'}
            </button>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error.message}</p>
            )}

            {ipfsHash && (
              <div className="mt-2 p-3 bg-[var(--color-primary-lighter)] rounded-lg">
                <p className="text-xs text-[var(--color-primary-dark)]">
                  <span className="font-medium">IPFS Hash:</span> {ipfsHash}
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Önizleme Sütunu - Sadece masaüstünde görünecek */}
        <div className="w-full order-2 md:order-2 hidden md:block">
          <div className="md:sticky md:top-24 space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-[var(--color-grey-900)] mb-3">
              Preview Your Wish
            </h3>

            <div className="max-w-[500px] mx-auto md:mx-0">
              <WishPreview
                ref={wishPreviewRef}
                formData={formData}
                address={address}
                nextTokenId={nextTokenId}
              />
            </div>

            {/* Pro Tip - Masaüstü */}
            <div className="mt-4 p-4 bg-[var(--color-primary-lighter)] rounded-xl">
              <p className="text-sm text-[var(--color-primary-dark)]">
                <span className="font-medium">✨ Inspiration:</span> Every wish
                is a step towards a better future. By sharing your wishes, you
                can inspire others and create a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
