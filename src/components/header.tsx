import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='fixed w-full h-24 text-slate-800 bg-white z-50 shadow-md font-body'>
      <div className='h-full relative flex'>
        <div className='flex items-center text-left w-full h-full m-auto basis-1/3 min-w-max pl-10'>
          <Link href='/'>
            <a className='text-5xl font-bold leading-20'>5S活動の記録</a>
          </Link>
        </div>
        <ul className='basis-1/3 justify-center m-auto flex min-w-max '>
          <li className='px-2 list-none'>
            <Link href='/'>
              <a className='font-light px-2'>Shop</a>
            </Link>
          </li>
          <li className='px-2 list-none'>
            <Link href='/'>
              <a className='font-light px-2'>About</a>
            </Link>
          </li>
          <li className='px-2 list-none'>
            <Link href='/'>
              <a className='font-light px-2'>Blog</a>
            </Link>
          </li>
        </ul>
        <ul className='flex basis-1/3 justify-end m-auto px-8 min-w-max '>
          <li className='px-2 block'>
            <Link href='/'>
              <a>
                <Image src='/user.svg' width={36} height={36} alt='userイメージ' />
              </a>
            </Link>
          </li>
          <li className='px-2 block'>
            <Link href='/'>
              <a>
                <Image src='/search.svg' width={36} height={36} alt='searchイメージ' />
              </a>
            </Link>
          </li>
          <li className='px-2 block'>
            <Link href='/'>
              <a>
                <Image src='/cart.svg' width={36} height={36} alt='cartイメージ' />
              </a>
            </Link>
          </li>
        </ul>
        {/* <Hamburger /> */}
      </div>
    </header>
  );
}
