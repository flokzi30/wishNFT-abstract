'use client';

import React from 'react';
import { networks } from '@/data/wishes';
import { useNetwork } from '@/providers/NetworkProvider';
import Image from 'next/image';

export default function NetworkSelector() {
  const { selectedNetwork, setSelectedNetwork } = useNetwork();

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-[var(--color-grey-900)]">
        Select Network
      </label>
      <div className="grid grid-cols-2 gap-3">
        {networks
          .filter(network => network.id === 'abstract' || network.id === 'solana')
          .map((network) => (
            <button
              key={network.id}
              type="button"
              onClick={() => setSelectedNetwork(network.id)}
              className={`relative flex items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedNetwork === network.id
                  ? 'border-[var(--color-primary-main)] bg-[var(--color-primary-lighter)] shadow-md'
                  : 'border-gray-200 bg-white hover:border-[var(--color-primary-light)] hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                {network.isEmoji ? (
                  <span className="text-2xl">{network.icon}</span>
                ) : (
                  <div className="relative w-8 h-8">
                    <Image
                      src={network.icon}
                      alt={network.name}
                      fill
                      className="object-contain rounded"
                      sizes="32px"
                    />
                  </div>
                )}
                <div className="text-left">
                  <div className={`font-medium ${
                    selectedNetwork === network.id 
                      ? 'text-[var(--color-primary-dark)]' 
                      : 'text-[var(--color-grey-900)]'
                  }`}>
                    {network.name}
                  </div>
                  <div className={`text-xs ${
                    selectedNetwork === network.id 
                      ? 'text-[var(--color-primary-main)]' 
                      : 'text-gray-500'
                  }`}>
                    {network.id === 'abstract' ? 'ETH Compatible' : 'Fast & Low Cost'}
                  </div>
                </div>
              </div>
              
              {selectedNetwork === network.id && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-[var(--color-primary-main)] rounded-full"></div>
                </div>
              )}
            </button>
          ))}
      </div>
      
      {/* Network info */}
      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          {selectedNetwork === 'abstract' 
            ? 'Abstract blockchain with gasless transactions' 
            : 'Solana blockchain with ultra-fast and low-cost minting'
          }
        </p>
      </div>
    </div>
  );
} 