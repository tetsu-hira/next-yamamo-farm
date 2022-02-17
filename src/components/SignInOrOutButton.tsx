import { getAuth, signOut } from 'firebase/auth';
import Router from 'next/router';
import { FC } from 'react';

import '../lib/init';
import { useAuthState } from '../hooks/useAuthState';

export const SignInOrOutButton: FC = () => {
  const { isSignedIn } = useAuthState();

  if (isSignedIn) {
    return (
      <button
        onClick={() => signOut(getAuth())}
        className='bg-red-400 m-4 px-6 py-2 text-white rounded-full'
      >
        サインアウト
      </button>
    );
  } else {
    return (
      <button
        onClick={() => Router.push('/test')}
        className='bg-red-400 m-4 px-6 py-2 text-white rounded-full'
      >
        サインイン
      </button>
    );
  }
};
