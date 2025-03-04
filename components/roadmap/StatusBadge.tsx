interface StatusBadgeProps {
  status: string;
}

const statusConfig = {
  'Planned': {
    color: 'bg-info-lighter',
    textColor: 'text-info-dark',
    icon: '📋',
  },
  'In Progress': {
    color: 'bg-primary-lighter',
    textColor: 'text-primary-dark',
    icon: '🚀',
  },
  'Completed': {
    color: 'bg-success-lighter',
    textColor: 'text-success-dark',
    icon: '✅',
  },
  'Under Review': {
    color: 'bg-warning-lighter',
    textColor: 'text-warning-dark',
    icon: '👀',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status as keyof typeof statusConfig] || {
    color: 'bg-grey-100',
    textColor: 'text-grey-600',
    icon: '❓',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.color} ${config.textColor}`}>
      {config.icon} {status}
    </span>
  );
} 