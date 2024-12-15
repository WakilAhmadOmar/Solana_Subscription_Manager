import { useEffect, useState } from 'react';
import { Program, AnchorProvider, Idl } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { PROGRAM_ID } from '../lib/constants';
import type { Subscription } from '../idl/subscription';

export function useProgram(wallet: any) {
  const [program, setProgram] = useState<Program<Subscription> | null>(null);

  useEffect(() => {
    if (wallet?.publicKey) {
      const connection = new Connection('https://api.devnet.solana.com');
      const provider = new AnchorProvider(
        connection,
        wallet,
        AnchorProvider.defaultOptions()
      );
      
      import('../idl/subscription').then((idl) => {
        setProgram(new Program(idl as Idl, new PublicKey(PROGRAM_ID), provider));
      });
    }
  }, [wallet?.publicKey]);

  return program;
}
