// Subscription tiers and fees in SOL
export const SUBSCRIPTION_TIERS = {
  0: { name: 'Basic', fee: 0.01 }, // 10_000_000 lamports
  1: { name: 'Premium', fee: 0.025 }, // 25_000_000 lamports
  2: { name: 'Enterprise', fee: 0.1 }, // 100_000_000 lamports
} as const;

// Program ID from your Solana program
export const PROGRAM_ID = "H73K8LsRbV1jkcJkK3hQM2Z7TC4T1864Gwm3WtF3bAay";

// Constants from your Solana program
export const ROYALTY_PERCENTAGE = 3; // 3%
export const TRIAL_PERIOD_DAYS = 14;
export const SUBSCRIPTION_PERIOD_DAYS = 30;
