interface ShareButtonsProps {
  shareUrl: string;
  shareText: string;
}

export function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {
  const handleSocialShare = (platform: 'x') => {
    const urls = {
      x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="mb-12">
      {/* Primary Share Button */}
      <button
        onClick={() => handleSocialShare('x')}
        className="w-full mb-6 px-6 py-4 bg-black hover:bg-black/90 text-white rounded-xl flex items-center justify-center gap-3 transition-all group"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
        <span className="font-medium">Share on X</span>
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}
