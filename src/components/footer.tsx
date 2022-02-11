import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className='py-20 mx-auto text-slate-800 w-auto font-body bg-slate-50'>
        <div className='flex m-auto'>
          <div className='w-1/4 m-auto pl-10 block sm:min-w-max'>
            <Link href='/'>
              <a className='text-4xl font-bold'>5S活動の記録</a>
            </Link>
            <ul className='flex pl-0 pt-8 justify-start m-auto basis-1/4'>
              <li className='px-2 list-none'>
                <Link href='/'>
                  <a className='text-16 font-bold'>
                    <Image src='/Facebook.png' width={24} height={24} alt='Facebookイメージ' />
                  </a>
                </Link>
              </li>
              <li className='px-2 list-none'>
                <Link href='/'>
                  <a className='text-16 font-bold'>
                    <Image src='/Twitter.png' width={24} height={24} alt='Twitterイメージ' />
                  </a>
                </Link>
              </li>
              <li className='px-2 list-none'>
                <Link href='/'>
                  <a className='text-16 font-bold'>
                    <Image src='/Instagram.png' width={24} height={24} alt='Instagramイメージ' />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-1/4 mt-0 mx-4 mb-auto'>
            <p className='font-bold text-xl mb-0'>リンク</p>
            <ul className='my-5 pl-0 flex w-auto flex-wrap'>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>私たちについて</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>メンバー紹介</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>text</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>text</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>text</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>text</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>お問い合わせ</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>ブログ</li>
            </ul>
          </div>
          <div className='w-1/4 mt-0 mx-4 mb-auto'>
            <p className='font-bold text-xl mb-0'>課題を見る</p>
            <ul className='mt-0.5 mb-5 pl-0 flex w-auto flex-wrap'>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>コレクション</li>
            </ul>
          </div>
          <div className='w-1/4 mt-0 mx-4 mb-auto'>
            <p className='font-bold text-xl mb-0'>ポリシー</p>
            <ul className='mt-0.5 mb-5 pl-0 flex w-auto flex-wrap'>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>
                特定商取引法に関する表示
              </li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>
                プライバシーポリシー
              </li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>利用規約</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>text</li>
              <li className='my-2 font-light list-none w-1/2 text-base pl-4'>text</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='flex bg-gray-200 w-full'>
        <div className='text-center h-auto m-auto text-base my-4'>
          <p>© 2021 Tetsuhiro.Hirabayashi</p>
        </div>
      </div>
    </>
  );
}
