# Solana Subscription Manager

A decentralized subscription management system built on Solana blockchain, allowing users to manage subscriptions and register NFTs.

## Features

- **Subscription Management**
  - Multiple subscription tiers (Basic, Premium, Enterprise)
  - Trial period for new users
  - Automatic subscription status checking
  - Subscription renewal handling

- **NFT Registration**
  - Register assets as NFTs
  - Automatic royalty fee calculation
  - Secure ownership tracking

- **Wallet Integration**
  - Phantom wallet support
  - Secure connection handling
  - Real-time connection status
  - Error handling and recovery

## Project Structure

```
├── src/
│   ├── components/           # React components
│   │   ├── NftRegistration.tsx
│   │   ├── SubscriptionManager.tsx
│   │   ├── WalletButton.tsx
│   │   └── WalletStatus.tsx
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useNftRegistration.ts
│   │   ├── useSubscription.ts
│   │   └── useWallet.ts
│   │
│   ├── program/             # Solana program
│   │   ├── lib.rs          # Program entry point
│   │
│   ├── types/              # TypeScript type definitions
│   │   ├── phantom.ts
│   │   ├── subscription.ts
│   │   └── window.d.ts
│   │
│   └── utils/              # Utility functions
│       └── wallet.ts
```

## Prerequisites

- Node.js 16+
- Rust and Cargo
- Solana CLI tools
- Phantom wallet browser extension

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/solana-subscription-manager.git
   cd solana-subscription-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the Solana program:
   ```bash
   cd src/program
   cargo build-bpf
   ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Build the project:
   ```bash
   npm run build
   ```

## Smart Contract Details

### Subscription Tiers
- Basic: 0.01 SOL
- Premium: 0.025 SOL
- Enterprise: 0.1 SOL

### Trial Period
- 14 days for new users
- Free tier switching during trial

### NFT Registration
- 3% royalty fee
- Automatic fee calculation and transfer
- On-chain ownership tracking

## Security Considerations

- Secure wallet connection handling
- Protected program instructions
- Validated account permissions
- Secure fee transfers
- Protected NFT ownership

## Error Handling

The system includes comprehensive error handling for:
- Invalid subscription tiers
- Incorrect fee amounts
- Expired subscriptions
- Wallet connection issues
- Transaction failures

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Solana Foundation
- Anchor Framework
- Phantom Wallet