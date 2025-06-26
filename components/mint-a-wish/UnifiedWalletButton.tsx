'use client';

import React from 'react';
import { useNetwork } from '@/providers/NetworkProvider';
import { useLoginWithAbstract } from '@abstract-foundation/agw-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

interface UnifiedWalletButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function UnifiedWalletButton({ 
  children, 
  className = '', 
  disabled = false 
}: UnifiedWalletButtonProps) {
  const { isAbstract, isSolana } = useNetwork();
  const { login: loginAbstract } = useLoginWithAbstract();
  const { setVisible: setSolanaModalVisible } = useWalletModal();
  const { connected: solanaConnected, connecting: solanaConnecting } = useWallet();

  const handleConnect = async () => {
    if (disabled) return;

    if (isAbstract) {
      try {
        await loginAbstract();
      } catch (error) {
        console.error('Abstract wallet connection failed:', error);
      }
    } else if (isSolana) {
      if (!solanaConnected && !solanaConnecting) {
        setSolanaModalVisible(true);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleConnect}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
} 