import { getApp, FirebaseApp } from 'firebase/app';
import type { NextPage } from 'next';
import { SignInForm } from '../components/SignInForm';

import '../lib/init'; // Initialize FirebaseApp

const Test: NextPage = () => {
  const app: FirebaseApp = getApp();
  return (
    <>
      <ul className='pt-36'>
        <li>name = {app.name}</li>
        <li>appId = {app.options.appId}</li>
        <li>apiKey = {app.options.apiKey}</li>
      </ul>
      <SignInForm />
    </>
  );
};

export default Test;