import React from 'react';
import { SubscriptionManager } from './components/SubscriptionManager';
import { NftRegistration } from './components/NftRegistration';
import { WalletButton } from './components/WalletButton';
import { WalletStatus } from './components/WalletStatus';
import { useWallet } from './hooks/useWallet';
import { useSubscription } from './hooks/useSubscription';
import { useNftRegistration } from './hooks/useNftRegistration';

function App() {
  const { wallet, connected, error, connect, disconnect } = useWallet();
  const { subscriptionState, loading: subscriptionLoading, subscribe } = useSubscription(wallet);
  const { loading: nftLoading, registerNft } = useNftRegistration(wallet);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Solana Subscription Manager</h1>
          <WalletButton
            connected={connected}
            error={error}
            onConnect={connect}
            onDisconnect={disconnect}
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 space-y-12">
        <WalletStatus connected={connected} />
        
        {connected && (
          <>
            <SubscriptionManager
              currentTier={subscriptionState?.currentTier}
              onSubscribe={subscribe}
              isLoading={subscriptionLoading}
            />
            
            <div className="border-t border-gray-200 pt-12">
              <NftRegistration
                onRegister={registerNft}
                isLoading={nftLoading}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;