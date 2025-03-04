interface CategoryBadgeProps {
  category: string;
}

const categoryConfig = {
  'Infrastructure': {
    color: 'bg-primary-lighter',
    textColor: 'text-primary-dark',
    icon: '🏗️',
  },
  'UI/UX': {
    color: 'bg-secondary-lighter',
    textColor: 'text-secondary-dark',
    icon: '🎨',
  },
  'Security': {
    color: 'bg-error-lighter',
    textColor: 'text-error-dark',
    icon: '🔒',
  },
  'Performance': {
    color: 'bg-success-lighter',
    textColor: 'text-success-dark',
    icon: '⚡',
  },
  'Features': {
    color: 'bg-info-lighter',
    textColor: 'text-info-dark',
    icon: '✨',
  },
  'Integration': {
    color: 'bg-warning-lighter',
    textColor: 'text-warning-dark',
    icon: '🔄',
  },
};

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = categoryConfig[category as keyof typeof categoryConfig] || {
    color: 'bg-grey-100',
    textColor: 'text-grey-600',
    icon: '📦',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.color} ${config.textColor}`}>
      {config.icon} {category}
    </span>
  );
} 