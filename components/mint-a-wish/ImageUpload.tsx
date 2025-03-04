import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onImageSelect: (file: File) => void;
  selectedImage: File | null;
}

export default function ImageUpload({
  onImageSelect,
  selectedImage,
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setPreview(null);
    }
  }, [selectedImage]);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  const handleRemoveImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onImageSelect(null as any);
  };

  return (
    <div className="space-y-2">
      <div
        className={`relative h-64 rounded-lg border-2 border-dashed transition-all duration-200 ${
          isDragging
            ? 'border-yellow-500 bg-yellow-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        {preview ? (
          <div className="relative h-full w-full group">
            <Image
              src={preview}
              alt="Selected image"
              fill
              className="object-contain rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage();
                }}
                className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Remove Image
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center px-6">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="mt-4 text-sm text-gray-600 font-medium">
                Drag and drop your image here, or{' '}
                <span className="text-yellow-600">browse</span>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Supports: PNG, JPG, GIF (max. 5MB)
              </p>
            </div>
          </div>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
