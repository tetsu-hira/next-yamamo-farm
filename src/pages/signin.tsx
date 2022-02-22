import { getApp, FirebaseApp } from 'firebase/app';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SignInForm } from '../components/SignInForm';
import { useAuthState } from '../hooks/useAuthState';

const SignInPage: NextPage = () => {
  const { isSignedIn } = useAuthState();
  return (
    <>
      <Head>
        <meta name='description' content='これはトップページです' />
        <meta property='og:title' content='トップページ' />
        <meta property='og:description' content='これはトップページ' />
        <title>生産管理の5S活動</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
        />
      </Head>

      <main className='bg-green-200 pt-16 pb-10'>
        <div>
          {isSignedIn ? <div>現在サインインしています</div> : <div>現在サインアウトしています</div>}
        </div>
        <div className='mt-4 py-4 bg-white shadow w-4/5 m-auto'>
          <h2 className='text-center'>サインイン</h2>
          <SignInForm />
        </div>
      </main>
    </>
  );
};

export default SignInPage;
