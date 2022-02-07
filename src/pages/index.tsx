import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

type Item = {
  title: string;
  content: string;
};

const Home: NextPage = () => {
  const itemList: Item[] = [
    {
      title: '日々の5S活動',
      content:
        '生産管理室のホワイトボードに計画予定を貼って活動内容の意識を図ったり、前月の実績やクロスパトロールの結果を貼って進捗を見える化しています。',
    },
    {
      title: '年に一度のPC清掃',
      content:
        '昨年より年に一度の大掃除と別に予定日を設けて、生産管理室で使っているデスクトップPCの清掃を行うことで仕事道具の維持管理を行っております。',
    },
    {
      title: '安全にも配慮',
      content:
        '日々の整理整頓や清掃だけでなく、地震時にPCが倒れてこないようにするなどの安全対策も5S活動の一環として行うことで、より良い職場を作ります。',
    },
  ];

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

      <main>
        <div>
          <Image
            src='/top1.jpg'
            width={2592}
            height={1944}
            alt='TOP image'
            priority={true}
            className='w-full'
          />
        </div>
        <div className='-mt-2'>
          <div className='bg-pink-300 py-4 text-xl text-center shadow'>ー　新着情報　ー</div>
          <div className='bg-pink-100 shadow-md pt-4 pb-4'>
            <div className='text-pink-500 font-bold text-base'>21.12.11</div>
            <div className='text-xl ml-2 mb-3'>生産管理で5S会議を行いました</div>
            <div className='text-pink-500 font-bold text-base'>21.12.28</div>
            <div className='text-xl ml-2 mb-3'>大掃除の写真をUPしました</div>
            <Link href='/'>
              <a className='mt-16 block ml-8'>▶　一覧はこちら</a>
            </Link>
          </div>
        </div>
        <div className='flex my-16 text-center justify-center'>
          <div className='min-w-max'>
            <Link href='/'>
              <a>
                <Image
                  className='animate__animated animate__fadeIn'
                  src='/5Scycle.png'
                  width={416}
                  height={400}
                  alt='5S活動のイメージ'
                />
              </a>
            </Link>
          </div>
          <div className='my-auto text-center px-24 min-w-max'>
            <p className='text-2xl'>生産管理の</p>
            <p className='text-5xl font-bold pb-8'>5S活動の歩み</p>
            <p className='text-2xl leading-8'>
              ２年前より活動を開始
              <br />
              順調に活動を進め、
              <br />
              今年３月に銅賞を獲得
            </p>
          </div>
        </div>
        <div className='bg-gray-200 mt-28 h-24 flex'>
          <Link href='/'>
            <a className='bg-blue-300 text-white block my-6 mx-auto py-3 px-6 rounded-full shadow-md hover:bg-white hover:text-blue-300 duration-700'>
              今までの活動を見る
            </a>
          </Link>
        </div>
        <div className='mt-24 text-center mb-16'>
          <p className='text-4xl font-bold'>今年度目標：銀賞の獲得</p>
          <p className='text-2xl font-bold leading-10 my-8 text-red-500'>
            獲得に向けてまずは現在の
            <br />
            整頓状況を維持することが条件
          </p>
          <p className='text-xl leading-8'>
            その上でさらに細かな箇所を改善していくことで
            <br />
            銀賞の条件を達成して申請を行いたいと思います。
          </p>
        </div>
        <div className='mt-8 pb-4 mx-auto'>
          {itemList.map((item: any, index: number) => (
            <div className='flex bg-green-200 mt-16 p-6 w-fit mx-auto' key={item.title}>
              <div className='min-w-max'>
                <Image
                  src={'/main' + (index + 1) + '.jpg'}
                  width={540}
                  height={360}
                  alt='メイン画像1'
                />
              </div>
              <ul className='text-center m-auto w-96'>
                <li key={index}>
                  <p key={item.title} className='text-3xl pb-4 font-bold'>
                    {item.title}
                  </p>
                  <p key={item.content} className='text-xl ml-6'>
                    {item.content}
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className='bg-gray-200 mt-16 h-24 flex'>
          <Link href='/'>
            <a className='bg-blue-300 text-white block my-6 mx-auto py-3 px-6 rounded-full shadow-md hover:bg-white hover:text-blue-300 duration-700'>
              今までの活動を見る
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
