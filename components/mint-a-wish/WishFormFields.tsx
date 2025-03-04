'use client';

import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { NetworkId } from '@/data/wishes';
import ImageUpload from './ImageUpload';

export const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'world':
      return '🌍';
    case 'humanity':
      return '🤝';
    case 'nature':
      return '🌱';
    case 'future':
      return '🚀';
    case 'peace':
      return '🕊️';
    case 'health':
      return '❤️';
    case 'education':
      return '📚';
    case 'technology':
      return '💻';
    case 'equality':
      return '⚖️';
    case 'community':
      return '👥';
    case 'innovation':
      return '💡';
    case 'personal':
      return '✨';
    case 'family':
      return '👨‍👩‍👧‍👦';
    case 'relationships':
      return '💝';
    case 'career':
      return '💼';
    case 'spiritual':
      return '🕯️';
    case 'financial':
      return '💰';
    case 'art':
      return '🎨';
    case 'sports':
      return '⚽';
    case 'travel':
      return '✈️';
    case 'other':
      return '🎯';
    default:
      return '🌟';
  }
};

interface FormData {
  wish: string;
  //  description: string;
  category: string;
  network: NetworkId;
  image: File | null;
  imageURI: string;
  tags: string[];
  backgroundColor: string;
}

interface WishFormFieldsProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  backgroundOptions: Array<{ id: string; name: string; gradient: string }>;
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onImageSelect: (file: File | null) => void;
}

export default function WishFormFields({
  formData,
  setFormData,
  backgroundOptions,
  onImageSelect,
}: WishFormFieldsProps) {
  const [newTag, setNewTag] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  const popularTags = [
    '#family',
    '#bitcoin',
    '#abstract',
    '#peace',
    '#world',
    '#nft',
    '#health',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddTag = (tag: string) => {
    if (!formData.tags.includes(tag)) {
      setFormData({ ...formData, tags: [...formData.tags, tag] });
    }
    setNewTag('');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const categories = [
    'World',
    'Humanity',
    'Nature',
    'Future',
    'Peace',
    'Health',
    'Education',
    'Technology',
    'Equality',
    'Community',
    'Innovation',
    'Personal',
    'Family',
    'Relationships',
    'Career',
    'Spiritual',
    'Financial',
    'Art',
    'Sports',
    'Travel',
    'Other',
  ];

  return (
    <div className="space-y-6">
      {/* Wish Input */}
      <div className="w-full max-w-full overflow-hidden">
        <label
          htmlFor="wish"
          className="block text-base font-medium text-[var(--color-grey-900)] mb-2"
        >
          I wish...
        </label>
        <div className="w-full max-w-full">
          <textarea
            id="wish"
            placeholder="a wish that will change the world..."
            value={formData.wish}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 50) {
                // 50 character limit
                setFormData({ ...formData, wish: value });
              }
            }}
            rows={2}
            maxLength={50}
            className="block w-full max-w-full rounded-xl border border-[var(--color-primary-lighter)] px-4 py-3 text-base text-[var(--color-grey-900)] 
              shadow-sm focus:border-[var(--color-primary-main)] focus:ring-[var(--color-primary-main)] resize-none overflow-hidden"
            required
            style={{
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div className="mt-2 text-sm text-[var(--color-grey-500)] flex justify-end">
          {formData.wish.length}/50 characters
        </div>
      </div>

      {/* Description Input */}
      {/* <div>
        <label
          htmlFor="description"
          className="block text-base font-medium text-[var(--color-grey-900)] mb-2"
        >
          Because I believe...
        </label>
        <textarea
          id="description"
          placeholder="Explain the details of your wish and why it's important..."
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={4}
          className="block w-full rounded-xl border border-[var(--color-primary-lighter)] px-4 py-3 text-[var(--color-grey-900)] 
            shadow-sm focus:border-[var(--color-primary-main)] focus:ring-[var(--color-primary-main)] text-base"
          required
        />
      </div> */}

      {/* Category Selection */}
      <div ref={categoryRef} className="relative">
        <label className="block text-base font-medium text-[var(--color-grey-900)] mb-2">
          Category
        </label>
        <button
          type="button"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full flex items-center justify-between rounded-xl border border-[var(--color-primary-lighter)] px-4 py-3 
            text-[var(--color-grey-900)] shadow-sm hover:border-[var(--color-primary-main)] focus:outline-none 
            focus:ring-2 focus:ring-[var(--color-primary-main)]"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">
              {getCategoryIcon(formData.category)}
            </span>
            <span className="text-base">{formData.category}</span>
          </div>
          <svg
            className={`w-5 h-5 text-[var(--color-grey-500)] transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isCategoryOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg border border-[var(--color-primary-lighter)] py-2 max-h-60 overflow-auto">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setFormData({ ...formData, category });
                  setIsCategoryOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-[var(--color-primary-lighter)] transition-colors
                  ${formData.category === category ? 'bg-[var(--color-primary-lighter)] text-[var(--color-primary-dark)]' : 'text-[var(--color-grey-900)]'}`}
              >
                <span className="text-xl">{getCategoryIcon(category)}</span>
                <span className="text-base">{category}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tags Input */}
      <div>
        <label className="block text-base font-medium text-[var(--color-grey-900)] mb-2">
          Related topics
        </label>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-primary-lighter)] 
                  text-[var(--color-primary-dark)] text-sm font-medium"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-[var(--color-primary-dark)] hover:text-[var(--color-primary-darker)]"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add related topics"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  if (newTag)
                    handleAddTag(
                      newTag.startsWith('#') ? newTag : `#${newTag}`,
                    );
                }
              }}
              className="flex-1 rounded-xl border border-[var(--color-primary-lighter)] px-4 py-2 text-[var(--color-grey-900)] 
                shadow-sm focus:border-[var(--color-primary-main)] focus:ring-[var(--color-primary-main)] text-base"
            />
            <button
              type="button"
              onClick={() =>
                newTag &&
                handleAddTag(newTag.startsWith('#') ? newTag : `#${newTag}`)
              }
              className="px-4 py-2 rounded-xl border-2 border-[var(--color-primary-main)] text-[var(--color-primary-dark)] 
                hover:bg-[var(--color-primary-lighter)] whitespace-nowrap font-medium"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {popularTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleAddTag(tag)}
                className="px-3 py-1 rounded-full bg-[var(--color-grey-100)] text-[var(--color-grey-700)] 
                  text-sm font-medium hover:bg-[var(--color-grey-200)]"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Color Selection */}
      <div>
        <label className="block text-base font-medium text-[var(--color-grey-900)] mb-3">
          Choose background style
        </label>
        <div className="grid grid-cols-5 gap-3">
          {backgroundOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                setFormData({ ...formData, backgroundColor: option.gradient })
              }
              className={`aspect-square rounded-xl bg-gradient-to-br ${option.gradient} 
                transition-all duration-200 group relative
                ${
                  formData.backgroundColor === option.gradient
                    ? 'ring-2 ring-[var(--color-primary-main)] scale-95'
                    : 'hover:scale-95'
                }`}
              title={option.name}
            >
              {formData.backgroundColor === option.gradient && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                  <span className="text-white text-xl">✓</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Image Upload */}
      <div className="space-y-4">
        <label className="block text-base font-medium text-[var(--color-grey-900)] mb-2">
          Upload an image
        </label>
        <ImageUpload
          onImageSelect={(file) => {
            onImageSelect(file);
            if (file) {
              setFormData({ ...formData, image: file });
            }
          }}
          selectedImage={formData.image}
        />
      </div>
    </div>
  );
}
