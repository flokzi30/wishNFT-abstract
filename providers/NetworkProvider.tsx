'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { NetworkId } from '@/data/wishes';

interface NetworkContextType {
  selectedNetwork: NetworkId;
  // eslint-disable-next-line no-unused-vars
  setSelectedNetwork: (network: NetworkId) => void;
  isAbstract: boolean;
  isSolana: boolean;
}

const NetworkContext = createContext<NetworkContextType>({
  selectedNetwork: 'abstract',
  setSelectedNetwork: () => {},
  isAbstract: true,
  isSolana: false,
});

export function NetworkProvider({ children }: { children: React.ReactNode }) {
  const [selectedNetwork, setSelectedNetworkState] = useState<NetworkId>('abstract');

  const setSelectedNetwork = useCallback((network: NetworkId) => {
    setSelectedNetworkState(network);
    console.log('🔄 Network switched to:', network);
  }, []);

  const isAbstract = selectedNetwork === 'abstract';
  const isSolana = selectedNetwork === 'solana';

  return (
    <NetworkContext.Provider
      value={{
        selectedNetwork,
        setSelectedNetwork,
        isAbstract,
        isSolana,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
} 