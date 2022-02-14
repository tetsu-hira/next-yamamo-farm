import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const linkList: string[] = ['私たちについて', 'メンバー紹介', 'お問い合わせ', 'ブログ'];

  const policyList: string[] = ['特定商取引法に関する表示', 'プライバシーポリシー', '利用規約'];

  return (
    <div className='bg-green-100'>
      <footer className='py-4 sm:py-20 mx-auto text-slate-800 w-auto font-body bg-white'>
        <div className='sm:flex m-auto'>
          <div className='sm:w-1/4 m-auto pl-10 sm:block sm:min-w-max flex'>
            <Link href='/'>
              <a className='sm:text-4xl text-xl font-bold'>5S活動の記録</a>
            </Link>
            <ul className='flex pl-0 sm:pt-8 justify-start m-auto sm:basis-1/4 py-1'>
              <li className='px-2 list-none'>
                <Link href='/'>
                  <a className='text-16 font-bold'>
                    <Image src='/Facebook.png' width={16} height={16} alt='Facebookイメージ' />
                  </a>
                </Link>
              </li>
              <li className='px-2 list-none'>
                <Link href='/'>
                  <a className='text-16 font-bold'>
                    <Image src='/Twitter.png' width={16} height={16} alt='Twitterイメージ' />
                  </a>
                </Link>
              </li>
              <li className='px-2 list-none'>
                <Link href='/'>
                  <a className='text-16 font-bold'>
                    <Image src='/Instagram.png' width={16} height={16} alt='Instagramイメージ' />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-wrap'>
            <div className='pl-6 sm:w-1/4 mt-4 sm:mt-0 mx-4 mb-auto'>
              <p className='font-bold sm:text-xl mb-0'>リンク</p>
              <ul className='sm:my-5 pl-0 w-auto'>
                {linkList.map((link, index) => (
                  <li key={index} className='my-2 font-light list-none text-base pl-4'>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div className='pl-6 sm:w-1/4 mt-4 sm:mt-0 mx-4 mb-auto'>
              <p className='font-bold sm:text-xl mb-0'>課題を見る</p>
              <ul className='mt-0.5 mb-5 pl-0 flex w-auto flex-wrap'>
                <li className='my-2 font-light list-none sm:w-1/2 text-base pl-4'>コレクション</li>
              </ul>
            </div>
            <div className='pl-6 sm:w-1/4 mt-4 sm:mt-0 mx-4 mb-auto'>
              <p className='font-bold sm:text-xl mb-0'>ポリシー</p>
              <ul className='mt-0.5 mb-5 pl-0 w-auto'>
                {policyList.map((policy, index) => (
                  <li key={index} className='my-2 font-light list-none text-base pl-4'>
                    {policy}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='flex bg-gray-100 w-full'>
        <div className='text-center h-auto m-auto text-base my-4'>
          <p>© 2021 Tetsuhiro.Hirabayashi</p>
        </div>
      </div>
    </div>
  );
}
