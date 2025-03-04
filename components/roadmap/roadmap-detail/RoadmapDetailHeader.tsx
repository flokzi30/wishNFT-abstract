import Link from 'next/link';

export const RoadmapDetailHeader = () => {
  return (
    <Link
      href="/roadmap"
      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 sm:mb-8 group text-sm sm:text-base"
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span>Back to Roadmap</span>
    </Link>
  );
}; 