import React, { useState } from 'react';

interface NftRegistrationProps {
  onRegister: (name: string, value: number) => Promise<void>;
  isLoading: boolean;
}

export function NftRegistration({ onRegister, isLoading }: NftRegistrationProps) {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && value) {
      await onRegister(name, Number(value));
      setName('');
      setValue('');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">NFT Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Asset Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="value" className="block text-sm font-medium text-gray-700">
            Asset Value (SOL)
          </label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            min="0"
            step="0.000000001"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !name || !value}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Registering...' : 'Register NFT'}
        </button>
      </form>
    </div>
  );
}