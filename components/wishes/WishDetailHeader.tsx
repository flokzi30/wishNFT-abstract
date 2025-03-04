import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function WishDetailHeader() {
  return (
    <div className="mb-8">
      <Link href="/wishes">
        <Button
          variant="outline"
          className="group bg-white border-[var(--color-primary-lighter)] text-[var(--color-grey-700)] 
            hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-dark)] 
            hover:border-[var(--color-primary-light)] transition-all duration-300 
            shadow-sm hover:shadow-md rounded-xl"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Wishes
        </Button>
      </Link>
    </div>
  );
}
