import { PhantomProvider } from './phantom';

declare global {
  interface Window {
    solana?: PhantomProvider;
  }
}