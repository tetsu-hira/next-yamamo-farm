import { getApp, FirebaseApp } from 'firebase/app';
import type { NextPage } from 'next';
import AddBook from '../components/AddBook';
import { BookTable } from '../components/BookTable';
import { SignInForm } from '../components/SignInForm';
import { SignInOrOutButton } from '../components/SignInOrOutButton';

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
      <div className='mt-4 text-xl'>サインイン画面</div>
      <SignInForm />
      <SignInOrOutButton />
      <BookTable />
      <AddBook />
    </>
  );
};

export default Test;
