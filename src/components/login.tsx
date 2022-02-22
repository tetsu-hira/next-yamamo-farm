import { getApp, FirebaseApp } from 'firebase/app';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { SignInForm } from '../components/SignInForm';
import { useAuthState } from '../hooks/useAuthState';

export default function Login(props: any) {
  const [openMenu, setOpenMenu] = useState(true);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  const { isSignedIn } = useAuthState();

  return (
    <>
      <div
        className={
          openMenu
            ? 'm-0 mb-auto sm:hidden fixed top-2.5 right-10 cursor-pointer duration-500'
            : 'm-0 mb-auto sm:hidden fixed top-2.5 right-10 cursor-pointer duration-500'
        }
      >
        <div className='block' onClick={() => menuFunction()}>
          <Image
            src='/user.svg'
            width={28}
            height={28}
            alt='userイメージ'
            className={openMenu ? 'block' : undefined}
          />
        </div>
      </div>
      <div
        className={
          openMenu
            ? 'w-0 duration-500 h-screen opacity-0 -z-50 absolute right-0 mt-10'
            : 'h-screen opacity-100 z-50 bg-green-300 w-full top-0 duration-500 mt-11 absolute right-0'
        }
      >
        <div>
          {isSignedIn ? <div>現在サインインしています</div> : <div>現在サインアウトしています</div>}
        </div>
        <div className='mt-4 py-4 bg-white shadow w-4/5 m-auto'>
          <h2 className='text-center'>サインイン</h2>
          <SignInForm />
        </div>
      </div>
    </>
  );
}
