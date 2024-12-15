import { PhantomProvider } from '../types/phantom';

export const getPhantomWallet = (): PhantomProvider | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    // @ts-ignore: Phantom provider might not be available
    const provider = window.solana;
    if (provider?.isPhantom) {
      return provider;
    }
    return null;
  } catch (err) {
    console.error('Error accessing Phantom provider:', err);
    return null;
  }
};

export const isPhantomInstalled = (): boolean => {
  try {
    const wallet = getPhantomWallet();
    return wallet?.isPhantom || false;
  } catch {
    return false;
  }
};