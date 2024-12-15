import { PublicKey } from '@solana/web3.js';

export type SubscriptionTier = 0 | 1 | 2;

export interface UserData {
  subscriptionTier: SubscriptionTier;
  lastPayment: number;
}

export interface NftData {
  name: string;
  value: number;
  owner: PublicKey;
}

export interface SubscriptionState {
  currentTier: SubscriptionTier;
  lastPayment: number;
  isActive: boolean;
}

export interface PhantomProvider {
  isPhantom: boolean;
  isConnected: boolean;
  publicKey: PublicKey | null;
  connect: () => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: string, callback: () => void) => void;
  removeAllListeners: () => void;
}