'use client';

import { usePrivy } from '@privy-io/react-auth';

export function LoginButton() {
  const { login, logout, authenticated } = usePrivy();

  return (
    <button
      onClick={authenticated ? logout : login}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
} 