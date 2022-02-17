import { getAuth, signOut } from 'firebase/auth';
import Router from 'next/router';
import { FC } from 'react';

import '../lib/init';
import { useAuthState } from '../hooks/useAuthState';

export const SignInOrOutButton: FC = () => {
  const { isSignedIn } = useAuthState();

  if (isSignedIn) {
    return <button onClick={() => signOut(getAuth())}>Sign-out</button>;
  } else {
    return <button onClick={() => Router.push('/test')}>Sign-in</button>;
  }
};
