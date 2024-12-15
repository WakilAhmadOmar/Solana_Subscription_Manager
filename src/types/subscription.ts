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