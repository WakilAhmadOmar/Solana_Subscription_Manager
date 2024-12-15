import { useEffect, useState, useCallback } from 'react';
import { PhantomProvider } from '../types/phantom';
import { getPhantomWallet, isPhantomInstalled } from '../utils/wallet';

export function useWallet() {
  const [wallet, setWallet] = useState<PhantomProvider | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initWallet = async () => {
      try {
        const phantom = getPhantomWallet();
        
        if (phantom?.isPhantom) {
          setWallet(phantom);
          setConnected(phantom.isConnected);

          phantom.on('connect', () => {
            setConnected(true);
            setError(null);
          });
          
          phantom.on('disconnect', () => {
            setConnected(false);
            setError(null);
          });

          // Handle account changes
          phantom.on('accountChanged', () => {
            window.location.reload();
          });
        }
      } catch (err) {
        console.error('Wallet initialization error:', err);
        setError('Failed to initialize wallet');
      }
    };

    initWallet();

    return () => {
      const phantom = getPhantomWallet();
      if (phantom) {
        phantom.removeAllListeners();
      }
    };
  }, []);

  const connect = useCallback(async () => {
    try {
      if (!isPhantomInstalled()) {
        throw new Error('Please install Phantom wallet extension');
      }

      const phantom = getPhantomWallet();
      if (!phantom) {
        throw new Error('Phantom wallet not available');
      }

      setError(null);
      
      // Wrap connection in a timeout to handle potential hanging
      const connectionPromise = phantom.connect();
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Connection timeout')), 30000);
      });

      await Promise.race([connectionPromise, timeoutPromise]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to connect wallet';
      console.error('Wallet connection error:', err);
      setError(message);
      throw err; // Propagate error for UI handling
    }
  }, []);

  const disconnect = useCallback(async () => {
    try {
      const phantom = getPhantomWallet();
      if (!phantom) {
        throw new Error('Wallet not found');
      }

      setError(null);
      await phantom.disconnect();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to disconnect wallet';
      console.error('Wallet disconnection error:', err);
      setError(message);
      throw err;
    }
  }, []);

  return { 
    wallet, 
    connected, 
    error, 
    connect, 
    disconnect,
    isInstalled: isPhantomInstalled()
  };
}