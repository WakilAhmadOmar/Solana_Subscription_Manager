import React from 'react';
import { SUBSCRIPTION_TIERS } from '../lib/constants';
import type { SubscriptionTier } from '../lib/types';

interface SubscriptionManagerProps {
  currentTier?: SubscriptionTier;
  onSubscribe: (tier: SubscriptionTier) => Promise<void>;
  isLoading: boolean;
}

export function SubscriptionManager({ 
  currentTier, 
  onSubscribe, 
  isLoading 
}: SubscriptionManagerProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Subscription Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.entries(SUBSCRIPTION_TIERS) as [string, { name: string; fee: number }][]).map(
          ([tier, { name, fee }]) => (
            <div
              key={tier}
              className={`
                p-6 rounded-lg border-2 
                ${currentTier === Number(tier) 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200'
                }
              `}
            >
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-600 mt-2">{fee} SOL</p>
              <button
                onClick={() => onSubscribe(Number(tier) as SubscriptionTier)}
                disabled={isLoading || currentTier === Number(tier)}
                className={`
                  mt-4 w-full px-4 py-2 rounded-md font-medium
                  ${currentTier === Number(tier)
                    ? 'bg-green-100 text-green-700 cursor-default'
                    : 'bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50'
                  }
                `}
              >
                {currentTier === Number(tier) ? 'Current Plan' : 'Subscribe'}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}