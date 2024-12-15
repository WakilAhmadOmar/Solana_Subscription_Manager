import { PublicKey } from '@solana/web3.js';

export interface PhantomProvider {
  isPhantom: boolean;
  isConnected: boolean;
  publicKey: PublicKey | null;
  connect: () => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: string, callback: () => void) => void;
  removeAllListeners: () => void;
}