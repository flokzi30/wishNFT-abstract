import React from 'react';

export default function MintPreview() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-grey-100 mb-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-grey-50 flex items-center justify-center">
            <div className="text-grey-500 text-center p-8">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="font-medium">Wisher NFT Preview Coming Soon</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-grey-900 mb-4">
            Exclusive Wisher Benefits
          </h3>
          <p className="text-grey-600 mb-6">
            As a Wisher, you&apos;re not just an NFT holder - you&apos;re a key
            stakeholder in the WishMint ecosystem. Earn from every wish minted and
            shape the platform&apos;s future.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-grey-700">
              <svg
                className="w-5 h-5 text-primary-main shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Revenue share from all wish mints
            </li>
            <li className="flex items-center gap-3 text-grey-700">
              <svg
                className="w-5 h-5 text-primary-main shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Governance rights in platform decisions
            </li>
            <li className="flex items-center gap-3 text-grey-700">
              <svg
                className="w-5 h-5 text-primary-main shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Early access to new features
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 