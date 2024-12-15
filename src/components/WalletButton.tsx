import React from 'react';
import { Wallet, AlertCircle } from 'lucide-react';

interface WalletButtonProps {
  connected: boolean;
  error: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function WalletButton({ 
  connected, 
  error, 
  onConnect, 
  onDisconnect 
}: WalletButtonProps) {
  const handleClick = async () => {
    try {
      if (connected) {
        await onDisconnect();
      } else {
        await onConnect();
      }
    } catch (err) {
      // Error is handled by the hook, we just need to prevent the error from bubbling up
      console.debug('Wallet operation failed:', err);
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        onClick={handleClick}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors
          ${connected 
            ? 'bg-green-100 text-green-700 hover:bg-green-200' 
            : 'bg-blue-500 text-white hover:bg-blue-600'}
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        <Wallet className="w-5 h-5" />
        {connected ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
      
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-3 py-1 rounded">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}