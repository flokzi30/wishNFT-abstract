import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="custom-screen text-center px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {/* Icon Container */}
            <div className="flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[var(--color-primary-lighter)] rounded-full flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--color-primary-main)] rounded-full flex items-center justify-center text-3xl sm:text-4xl">
                  ✨
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-grey-900)]">
                Page Not Found
              </h1>
              <p className="text-base sm:text-lg text-[var(--color-grey-600)] max-w-lg mx-auto">
                Oops! The page you&apos;re looking for seems to have disappeared
                into the digital ether. But don&apos;t worry, there&apos;s still
                plenty of magic to discover.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white bg-[var(--color-primary-main)] hover:bg-[var(--color-primary-dark)] rounded-xl transition-colors duration-200 font-medium text-base sm:text-lg"
              >
                Return Home
              </Link>
              <Link
                href="/wishes"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-[var(--color-grey-700)] border-2 border-[var(--color-primary-lighter)] hover:bg-[var(--color-primary-lighter)] rounded-xl transition-colors duration-200 font-medium text-base sm:text-lg"
              >
                Explore Wishes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 