import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActionButtonsProps {
  wishId: string;
}

export function ActionButtons({ wishId }: ActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
      <Link href={`/wishes/${wishId}`}>
        <Button className="w-full sm:w-auto bg-[var(--color-primary-main)] hover:bg-[var(--color-primary-dark)] text-white">
          View My Wish
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
} 