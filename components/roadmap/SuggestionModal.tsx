import { useState, useEffect, useRef } from 'react';
import { FeatureSuggestion } from './types';
import { categories, priorityConfig } from './constants';

interface SuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onSubmit: (suggestion: FeatureSuggestion) => void;
}

export default function SuggestionModal({
  isOpen,
  onClose,
  onSubmit,
}: SuggestionModalProps) {
  const [suggestion, setSuggestion] = useState<FeatureSuggestion>({
    title: '',
    category: '',
    shortDescription: '',
    detailedDescription: '',
    priority: 'low',
    timeEstimate: '',
    impact: 'moderate',
    tags: [],
  });

  const [tagInput, setTagInput] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSuggestion({
        title: '',
        category: '',
        shortDescription: '',
        detailedDescription: '',
        priority: 'low',
        timeEstimate: '',
        impact: 'moderate',
        tags: [],
      });
      setTagInput('');
    } else {
      // Focus on title input when modal opens
      setTimeout(() => {
        initialFocusRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Handle escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target;
    setSuggestion((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleTagAdd = () => {
    if (tagInput.trim() && !suggestion.tags.includes(tagInput.trim())) {
      setSuggestion((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput('');
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setSuggestion((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(suggestion);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-grey-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl m-4">
        <div className="sticky top-0 bg-white border-b border-grey-100 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-grey-900">
              Suggest a Feature
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-grey-500 hover:text-grey-700 rounded-lg hover:bg-grey-50 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-grey-700 mb-2"
            >
              Title
            </label>
            <input
              ref={initialFocusRef}
              type="text"
              id="title"
              value={suggestion.title}
              onChange={handleInputChange}
              placeholder="Give your feature suggestion a clear title"
              className="w-full px-4 py-2 border border-grey-200 rounded-lg focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-lighter transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-grey-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              value={suggestion.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-grey-200 rounded-lg focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-lighter transition-all bg-white"
              required
            >
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.icon} {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="shortDescription"
              className="block text-sm font-medium text-grey-700 mb-2"
            >
              Short Description
            </label>
            <input
              type="text"
              id="shortDescription"
              value={suggestion.shortDescription}
              onChange={handleInputChange}
              placeholder="Brief overview of your feature suggestion"
              className="w-full px-4 py-2 border border-grey-200 rounded-lg focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-lighter transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="detailedDescription"
              className="block text-sm font-medium text-grey-700 mb-2"
            >
              Detailed Description
            </label>
            <textarea
              id="detailedDescription"
              value={suggestion.detailedDescription}
              onChange={handleInputChange}
              placeholder="Provide more details about your feature suggestion..."
              className="w-full px-4 py-2 border border-grey-200 rounded-lg focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-lighter transition-all min-h-[120px]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="timeEstimate"
                className="block text-sm font-medium text-grey-700 mb-2"
              >
                Time Estimate
              </label>
              <input
                type="text"
                id="timeEstimate"
                value={suggestion.timeEstimate}
                onChange={handleInputChange}
                placeholder="e.g., 2-3 weeks, 1-2 months"
                className="w-full px-4 py-2 border border-grey-200 rounded-lg focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-lighter transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-grey-700 mb-2">
                Impact Level
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['minimal', 'moderate', 'high'].map((level) => (
                  <label
                    key={level}
                    className={`relative flex items-center justify-center p-2 border rounded-lg cursor-pointer hover:bg-grey-50 transition-all ${
                      suggestion.impact === level
                        ? 'border-grey-900 bg-grey-900/5'
                        : 'border-grey-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="impact"
                      value={level}
                      checked={suggestion.impact === level}
                      onChange={(e) =>
                        setSuggestion((prev) => ({
                          ...prev,
                          impact: e.target.value as
                            | 'minimal'
                            | 'moderate'
                            | 'high',
                        }))
                      }
                      className="absolute opacity-0"
                    />
                    <span
                      className={`text-sm font-medium capitalize ${
                        suggestion.impact === level
                          ? 'text-grey-900'
                          : 'text-grey-600'
                      }`}
                    >
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-grey-700 mb-2">
              Tags
            </label>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Add tags..."
                  className="flex-1 px-4 py-2 border border-grey-200 rounded-lg focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-lighter transition-all"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleTagAdd();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleTagAdd}
                  className="px-4 py-2 bg-grey-100 text-grey-700 rounded-lg hover:bg-grey-200 transition-all"
                >
                  Add
                </button>
              </div>
              {suggestion.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {suggestion.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-grey-50 text-grey-700 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="text-grey-400 hover:text-grey-600"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-grey-700 mb-2">
              Priority Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(['low', 'medium', 'high'] as const).map((level) => (
                <label
                  key={level}
                  className={`flex items-center justify-center px-4 py-2 rounded-lg cursor-pointer transition-all
                    ${
                      suggestion.priority === level
                        ? priorityConfig[level].color
                        : 'bg-grey-50 text-grey-600 hover:bg-grey-100'
                    }`}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    checked={suggestion.priority === level}
                    onChange={(e) =>
                      setSuggestion((prev) => ({
                        ...prev,
                        priority: e.target.value as 'low' | 'medium' | 'high',
                      }))
                    }
                    className="sr-only"
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col gap-2 mb-4">
              <h3 className="text-sm font-medium text-gray-700">
                Before submitting:
              </h3>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Check if a similar feature has already been suggested</li>
                <li>Ensure your description is clear and detailed</li>
                <li>
                  Consider technical feasibility and implementation challenges
                </li>
              </ul>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium transition-colors"
              >
                Submit Suggestion
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
