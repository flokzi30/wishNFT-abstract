'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toPng } from 'html-to-image';
import { categories, networks, type NetworkId } from '@/data/wishes';
import WishFormFields, { getCategoryIcon } from './WishFormFields';
import NetworkInfo from './NetworkInfo';
import { toast } from 'sonner';
import React from 'react';
import { useUnifiedWishNFT } from '@/hooks/useUnifiedWishNFT';
import NetworkSelector from './NetworkSelector';
import UnifiedWalletButton from './UnifiedWalletButton';

interface FormData {
  wish: string;
  category: string;
  network: NetworkId;
  image: File | null;
  imageURI: string;
  tags: string[];
  backgroundColor: string;
}

// // Background styles for UI selection
// const backgroundOptions = [
//   {
//     id: 'default',
//     name: 'Default',
//     gradient:
//       'from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]',
//   },
//   {
//     id: 'abstract',
//     name: 'Abstract',
//     gradient: 'from-[#23e788] via-[#23e788]/80 to-[#23e788]/70',
//   },
//   {
//     id: 'bitcoin',
//     name: 'Bitcoin',
//     gradient: 'from-[#f7931a] via-[#f7931a]/80 to-white',
//   },
//   {
//     id: 'ethereum',
//     name: 'Ethereum',
//     gradient: 'from-[#343434] via-gray-600 to-[#343434]',
//   },
//   { id: 'solana', name: 'Solana', gradient: 'from-[#9945FF] to-[#14F195]' },
// ];

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
  const [imageObjectUrl, setImageObjectUrl] = useState<string>('');

  // Create and cleanup object URL when image changes
  useEffect(() => {
    if (formData.image) {
      const url = URL.createObjectURL(formData.image);
      setImageObjectUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [formData.image]);

  const generateImage = async (): Promise<string> => {
    if (!previewRef.current) {
      throw new Error('Preview reference is not available');
    }

    try {
      // Hide the watermark before capturing
      const watermark = previewRef.current.querySelector('[data-watermark]');
      if (watermark) {
        (watermark as HTMLElement).style.display = 'none';
      }

      // Create a new canvas with the same dimensions
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) {
        throw new Error('Failed to get canvas context');
      }

      // Set canvas dimensions
      const dimensions = {
        width: previewRef.current.offsetWidth,
        height: previewRef.current.offsetHeight
      };

      if (dimensions.width === 0 || dimensions.height === 0) {
        throw new Error(`Invalid preview dimensions: ${JSON.stringify(dimensions)}`);
      }

      canvas.width = dimensions.width * 2; // For better quality
      canvas.height = dimensions.height * 2;
      context.scale(2, 2); // Scale for higher resolution

      // If there's an image, draw it first
      if (formData.image) {
        await new Promise<void>((resolve, reject) => {
          const img = document.createElement('img');
          img.crossOrigin = 'anonymous';
          
          img.onload = () => {
            try {
              // Calculate dimensions to cover the canvas while maintaining aspect ratio
              const imgAspect = img.width / img.height;
              const canvasAspect = dimensions.width / dimensions.height;
              let drawWidth = dimensions.width;
              let drawHeight = dimensions.height;
              let offsetX = 0;
              let offsetY = 0;

              // Always fill the entire canvas
              if (imgAspect > canvasAspect) {
                // Image is wider than canvas
                drawWidth = dimensions.height * imgAspect;
                offsetX = (dimensions.width - drawWidth) / 2;
              } else {
                // Image is taller than canvas
                drawHeight = dimensions.width / imgAspect;
                offsetY = (dimensions.height - drawHeight) / 2;
              }

              // Draw the image to fill the entire canvas
              context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
              
              // Add a darker overlay gradient
              const overlay = context.createLinearGradient(0, 0, 0, dimensions.height);
              overlay.addColorStop(0, 'rgba(0, 0, 0, 0.2)');
              overlay.addColorStop(0.5, 'rgba(0, 0, 0, 0.4)');
              overlay.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
              context.fillStyle = overlay;
              context.fillRect(0, 0, dimensions.width, dimensions.height);

              // Draw the content on top
              toPng(previewRef.current!, {
                quality: 0.95,
                pixelRatio: 2,
                cacheBust: true,
                canvasWidth: canvas.width,
                canvasHeight: canvas.height,
                style: { transform: 'scale(1)', transformOrigin: 'top left' },
                filter: (node) => {
                  if (node.nodeType === 3) return true; // Text nodes
                  if (node.nodeType === 1) { // Element nodes
                    const element = node as Element;
                    // Skip background elements and images
                    if (element.tagName === 'IMG' || element.classList.contains('bg-gradient-to-br')) {
                      return false;
                    }
                    const style = window.getComputedStyle(element);
                    return style.display !== 'none';
                  }
                  return true;
                }
              }).then(dataUrl => {
                const contentImg = document.createElement('img');
                contentImg.onload = () => {
                  context.drawImage(contentImg, 0, 0, dimensions.width, dimensions.height);
                  resolve();
                };
                contentImg.onerror = reject;
                contentImg.src = dataUrl;
              }).catch(reject);
              
              URL.revokeObjectURL(img.src);
            } catch (err) {
              reject(err);
            }
          };
          
          img.onerror = () => {
            URL.revokeObjectURL(img.src);
            reject(new Error('Failed to load image for canvas'));
          };
          
          const blobUrl = URL.createObjectURL(formData.image!);
          img.src = blobUrl;
        });
      } else {
        // If no image, draw a more vibrant gradient background
        const gradient = context.createLinearGradient(0, 0, dimensions.width, dimensions.height);
        
        // Parse the background color class to get the gradient colors
        const bgClass = formData.backgroundColor;
        let colors: string[] = [];
        
        if (bgClass.includes('from-[#')) {
          // Extract custom gradient colors
          const matches = bgClass.match(/\[(#[A-Fa-f0-9]+)/g);
          if (matches) {
            colors = matches.map(match => match.substring(1)); // Remove the leading [
          }
        } else if (bgClass.includes('from-[var(')) {
          // Handle CSS variable gradients
          colors = ['#6C63FF', '#6366F1', '#A8A2FF'];
        }

        // Ensure we have at least start and end colors
        if (colors.length < 2) {
          colors = ['#6C63FF', '#6366F1', '#A8A2FF'];
        }

        // Apply gradient stops
        colors.forEach((color, index) => {
          const stop = index / (colors.length - 1);
          gradient.addColorStop(stop, color);
        });
        
        // Fill the background
        context.fillStyle = gradient;
        context.fillRect(0, 0, dimensions.width, dimensions.height);

        // Draw the content layer
        await new Promise<void>((resolve, reject) => {
          toPng(previewRef.current!, {
            quality: 0.95,
            pixelRatio: 2,
            cacheBust: true,
            canvasWidth: canvas.width,
            canvasHeight: canvas.height,
            style: { transform: 'scale(1)', transformOrigin: 'top left' },
            filter: (node) => {
              if (node.nodeType === 3) return true; // Text nodes
              if (node.nodeType === 1) { // Element nodes
                const element = node as Element;
                // Skip only the base gradient background
                if (element.classList.contains('bg-gradient-to-br')) {
                  return false;
                }
                const style = window.getComputedStyle(element);
                return style.display !== 'none';
              }
              return true;
            }
          }).then(dataUrl => {
            const contentImg = document.createElement('img');
            contentImg.onload = () => {
              // Draw content over the gradient
              context.drawImage(contentImg, 0, 0, dimensions.width, dimensions.height);
              resolve();
            };
            contentImg.onerror = reject;
            contentImg.src = dataUrl;
          }).catch(reject);
        });

        // Add final overlay for better contrast
        // const overlay = context.createLinearGradient(0, 0, 0, dimensions.height);
        // overlay.addColorStop(0, 'rgba(0, 0, 0, 0.02)');
        // overlay.addColorStop(0.5, 'rgba(0, 0, 0, 0.05)');
        // overlay.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
        // context.fillStyle = overlay;
        // context.fillRect(0, 0, dimensions.width, dimensions.height);
      }

      // Convert canvas to data URL
      const dataUrl = canvas.toDataURL('image/png');

      // Show the watermark again
      if (watermark) {
        (watermark as HTMLElement).style.display = 'flex';
      }

      return dataUrl;
    } catch (error) {
      throw error;
    }
  };

  // Expose the generateImage function through the ref
  React.useImperativeHandle(ref, () => ({ generateImage }));

  return (
    <div className="space-y-4">
      <div
        ref={previewRef}
        className="relative aspect-square rounded-[24px] overflow-hidden group shadow-md bg-white/5 backdrop-blur-sm"
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${formData.backgroundColor} rounded-[24px]`}
        />

        {/* Image Background */}
        {formData.image && imageObjectUrl && (
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[24px]">
            <Image
              src={imageObjectUrl}
              alt="Preview"
              fill
              className="object-cover rounded-[24px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              onError={() => {
                URL.revokeObjectURL(imageObjectUrl);
                setImageObjectUrl('');
              }}
              onLoad={() => {
                // Image loaded successfully
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-black/10 rounded-[24px]" />
          </div>
        )}

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col box-border p-4 bg-black/5 rounded-[24px]">
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
  const router = useRouter();
  const { 
    createWish, 
    isMinting, 
    error, 
    isConnected,
    walletAddress,
    nextTokenId,
    selectedNetwork,
    isAbstract 
  } = useUnifiedWishNFT();
  const [uploadingImage, setUploadingImage] = useState(false);
  const [ipfsHash, setIpfsHash] = useState<string>('');

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
      return null;
    }

    try {
      setUploadingImage(true);

      // Generate the image
      const imageUrl = await wishPreviewRef.current.generateImage();

      if (!imageUrl) {
        throw new Error('Image generation returned empty result');
      }

      // Convert base64 to blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Calculate size
      const sizeInBytes = blob.size;
      if (sizeInBytes === 0) {
        throw new Error('Generated image has zero size');
      }

      // Create a file from the blob
      const file = new File([blob], 'wish-preview.png', { type: 'image/png' });

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

      return data.url;
    } catch (error) {
      toast.error(`Failed to upload image: ${(error as Error).message}`);
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isConnected || !walletAddress) {
      toast.info('Please connect your wallet first');
      return;
    }

    try {
      const imageURI = await uploadImageToPinata();

      if (!imageURI) {
        throw new Error('Failed to upload image to IPFS');
      }

      await createWish({
        wishText: formData.wish,
        category: formData.category,
        relatedTopics: formData.tags,
        background: formData.backgroundColor,
        imageURI,
      });

      toast.success(`Wish created successfully on ${selectedNetwork}!`);
      const tokenId = nextTokenId.toString();
      
      // Reset form
      setFormData({
        wish: '',
        category: categories[0],
        network: networks[0].id,
        image: null,
        imageURI: '',
        tags: [],
        backgroundColor:
          'from-[var(--color-primary-lighter)] via-[var(--color-primary-light)] to-[var(--color-secondary-lighter)]',
      });
      setIpfsHash('');

      // Wait for a short delay to ensure transaction is processed
      await new Promise(resolve => setTimeout(resolve, 500));

      // For Solana, we might not have the traditional tokenId structure
      if (isAbstract) {
        // Redirect to the wish details page for Abstract
        router.push(`/wishes/${tokenId}`);
      } else {
        // For Solana, redirect to a success page or wishes list
        router.push('/mint-success');
      }
      
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
            <NetworkSelector />

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
                  address={walletAddress}
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

            {!isConnected ? (
              <UnifiedWalletButton
                className="w-full bg-[var(--color-primary-main)] text-white py-3 px-6 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg font-medium"
              >
                Connect & Create Wish
              </UnifiedWalletButton>
            ) : (
              <button
                type="submit"
                disabled={isMinting || uploadingImage}
                className="w-full bg-[var(--color-primary-main)] text-white py-3 px-6 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg font-medium"
              >
                {uploadingImage
                  ? 'Uploading to IPFS...'
                  : isMinting
                    ? 'Creating Wish...'
                    : 'Create Wish'}
              </button>
            )}

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
                address={walletAddress}
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

