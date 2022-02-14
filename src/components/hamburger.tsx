import Link from 'next/link';
import React, { useState } from 'react';

export default function Hamburger(props: any) {
  const [openMenu, setOpenMenu] = useState(true);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  const itemList: string[] = ['Shop', 'About', 'Blog', 'ログイン', '検索', '買い物かご'];

  return (
    <>
      <div
        className={
          openMenu
            ? 'm-0 mb-auto sm:hidden fixed top-3 left-2.5 cursor-pointer duration-500'
            : 'w-0 duration-500 h-0 opacity-0 -z-50'
        }
      >
        <div className='block' onClick={() => menuFunction()}>
          <span className={openMenu ? 'h-px bg-neutral-800 w-7 block mb-2 ml-2' : undefined}></span>
          <span className={openMenu ? 'h-px bg-neutral-800 w-9 block' : undefined}></span>
          <p className={openMenu ? 'opacity-100 z-50 text-sm text-right' : undefined}>Menu</p>
        </div>
      </div>
      <div
        className={
          openMenu
            ? 'w-0 duration-500 h-0 opacity-0 -z-50'
            : 'h-screen opacity-100 z-50 text-white bg-neutral-800 w-full top-0 duration-500'
        }
      >
        <ul className='relative -mt-11 '>
          <div className='cursor-pointer pr-3 pt-3' onClick={() => menuFunction()}>
            <span className='absolute bg-white w-9 h-px block left-4 top-5 translate-y-1.5 rotate-150'></span>
            <span className='absolute bg-white w-9 h-px block left-4 top-5 translate-y-1.5 -rotate-150'></span>
            <p className='text-left text-sm pl-4 pt-6'>Close</p>
          </div>
          {itemList.map((item, index) => (
            <li key={item} className='list-disc ml-12 mt-6'>
              <Link href='/'>
                <a>
                  <p>{item}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
