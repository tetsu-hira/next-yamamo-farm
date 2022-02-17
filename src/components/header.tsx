import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Cart from '../pages/cart';
import Hamburger from './hamburger';
// import Search from './search';

export default function Header() {
  return (
    <header className='fixed w-full sm:h-24 h-11 text-slate-800 bg-white z-50 shadow-md font-body'>
      <div className='h-full relative sm:flex'>
        <div className='sm:flex items-center sm:text-left text-center w-full h-full m-auto sm:basis-1/3 sm:min-w-max sm:pl-10'>
          <Link href='/'>
            <a className='sm:text-5xl sm:font-bold leading-loose text-2xl'>5S活動の記録</a>
          </Link>
          {/* <Search /> */}
        </div>
        <ul className='basis-1/3 justify-center m-auto sm:flex sm:min-w-max hidden'>
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
        <ul className='sm:flex basis-1/3 justify-end m-auto px-8 sm:min-w-max hidden'>
          <li className='px-2 block'>
            <Link href='/signin'>
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
            <Link href='/cart'>
              <a>
                <Image src='/cart.svg' width={36} height={36} alt='cartイメージ' />
              </a>
            </Link>
          </li>
        </ul>
        <ul className='flex absolute right-1 top-2.5 sm:min-w-max sm:hidden'>
          <li className='px-1 block'>
            <Link href='/signin'>
              <a>
                <Image src='/user.svg' width={28} height={28} alt='userイメージ' />
              </a>
            </Link>
          </li>
          <li className='px-1 block'>
            <Link href='/cart'>
              <a>
                <Image src='/cart.svg' width={28} height={28} alt='cartイメージ' />
              </a>
            </Link>
          </li>
        </ul>
        <Hamburger />
      </div>
    </header>
  );
}
