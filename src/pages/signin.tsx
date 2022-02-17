import type { NextPage } from 'next';
import { SignInForm } from '../components/SignInForm';

const SignInPage: NextPage = () => {
  return (
    <div className='pt-20'>
      <h2 className='text-center'>サインイン</h2>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
