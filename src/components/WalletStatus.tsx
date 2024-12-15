import React from 'react';
import { isPhantomInstalled } from '../utils/wallet';

interface WalletStatusProps {
  connected: boolean;
}

export function WalletStatus({ connected }: WalletStatusProps) {
  if (connected) return null;

  return (
    <div className="text-center py-12">
      <h2 className="text-xl font-semibold text-gray-700">
        Please connect your wallet to continue
      </h2>
      {!isPhantomInstalled() && (
        <p className="mt-2 text-gray-500">
          Phantom wallet not detected. Please install the{' '}
          <a 
            href="https://phantom.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Phantom browser extension
          </a>
        </p>
      )}
    </div>
  );
}