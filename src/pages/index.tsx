import { useAnimation, motion, animate } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SwiperCore, { Pagination, Navigation, EffectCube, EffectCoverflow } from 'swiper'; //使いたい機能をインポート
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'; //カルーセル用のタグをインポート
import 'swiper/css/bundle';

// import required modules

SwiperCore.use([Pagination, Navigation]);

const images = [
  '/test_image1.jpg',
  '/test_image2.jpg',
  '/test_image3.jpg',
  '/test_image4.jpg',
  '/test_image5.jpg',
];

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
  const introList: string[] = [
    '【生産管理の5S活動】',
    '　日々の5S活動や年に一度のPC掃除など',
    '　金賞の獲得を目指して続けております',
  ];
  const introVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1000 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: [1],
    triggerOnce: true,
  });

  const variants = {
    moved: { y: 0 },
    initial: { y: -250 },
  };
  useEffect(() => {
    if (inView) {
      controls.start('moved');
    } else {
      controls.stop();
      controls.set('initial');
    }
  }, [controls, inView]);

  const opacityVariants = {
    moved: { opacity: 1 },
    initial: { opacity: 0 },
  };

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

      <main className='bg-green-100'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            <Image
              src='/top1.jpg'
              width={2592}
              height={1944}
              alt='TOP image'
              priority={true}
              className='sm:w-full z-10'
            />
          </motion.div>
          <motion.div
            className='absolute bottom-4 z-30 sm:left-10 left-5 text-white sm:min-w-max sm:block'
            initial='hidden'
            animate='visible'
            variants={introVariants}
          >
            {introList.map((intro: string, index: number) => (
              <motion.p
                className='font-bold text-xl sm:text-5xl leading-relaxed'
                key={index}
                variants={introVariants}
                transition={{ duration: 1, delay: index * 1 + 1 }}
              >
                {intro}
              </motion.p>
            ))}
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          className='-mt-2'
          initial='hidden'
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <div className='bg-red-300 sm:py-4 py-1 sm:text-xl text-center'>ー　新着情報　ー</div>
          <div className='bg-white pt-4 shadow'>
            <div className='text-red-500 font-bold sm:text-base text-sm'>21.12.11</div>
            <div className='sm:text-xl ml-2 mb-3'>生産管理で5S会議を行いました</div>
            <div className='text-red-500 font-bold sm:text-base text-sm'>21.12.28</div>
            <div className='sm:text-xl ml-2 mb-3'>大掃除の写真をUPしました</div>
            <Link href='/'>
              <a className='sm:mt-16 block ml-8 sm:pb-4 pb-2 sm:text-base text-xs'>
                ▶　一覧はこちら
              </a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='flex my-16 sm:my-16 text-center justify-center bg-white shadow p-2'
          initial='hidden'
          // animate={controls}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          <div className='sm:min-w-max w-1/2'>
            <Link href='/'>
              <a>
                <Image
                  className='w-full'
                  src='/5Scycle.png'
                  width={416}
                  height={400}
                  alt='5S活動のイメージ'
                />
              </a>
            </Link>
          </div>
          <div className='my-auto text-center sm:pl-24 sm:min-w-max w-1/2'>
            <p className='sm:text-2xl'>生産管理の</p>
            <p className='sm:text-5xl text-xl font-bold sm:pb-8 pb-2'>5S活動の歩み</p>
            <p className='sm:text-2xl sm:leading-8'>
              ２年前より活動を開始
              <br />
              順調に活動を進め、
              <br />
              今年３月に銅賞を獲得
            </p>
          </div>
        </motion.div>
        <div className='sm:mt-28 sm:h-24 flex'>
          <Link href='/'>
            <a className='bg-red-200 text-white block mx-auto py-3 px-6 rounded-full shadow-md hover:bg-white hover:text-blue-300 sm:duration-700'>
              今までの活動を見る
            </a>
          </Link>
        </div>
        <div className='sm:mt-24 py-4 mt-16 text-center mb-16 sm:min-w-max bg-white shadow'>
          <p className='text-2xl sm:text-4xl font-bold'>今年度目標：銀賞の獲得</p>
          <p className='text-xl sm:text-2xl font-bold leading-8 sm:leading-10 my-4 sm:my-8 text-red-500'>
            獲得に向けてまずは現在の
            <br />
            整頓状況を維持することが条件
          </p>
          <p className='sm:text-xl sm:leading-8'>
            その上でさらに細かな箇所を改善していくことで
            <br />
            銀賞の条件を達成して申請を行いたいと思います。
          </p>
        </div>
        <div className='mt-8 p-4 sm:pb-4 mx-auto bg-white shadow'>
          {itemList.map((item: any, index: number) => (
            <div
              className='sm:flex bg-lime-100 mt-16 p-6 w-fit mx-auto shadow-beta'
              key={item.title}
            >
              {index % 2 !== 0 && (
                <ul className='text-center m-auto sm:w-96 w-1/2'>
                  <li key={index}>
                    <p key={item.title} className='sm:text-3xl pb-4 font-bold'>
                      {item.title}
                    </p>
                    <p key={item.content} className='sm:text-xl mr-6 text-left'>
                      {item.content}
                    </p>
                  </li>
                </ul>
              )}
              <div className='sm:min-w-max w-auto'>
                <Image
                  src={'/main' + (index + 1) + '.jpg'}
                  width={270}
                  height={180}
                  alt='メイン画像1'
                />
              </div>
              {index % 2 === 0 && (
                <ul className='text-center m-auto sm:w-96 w-1/2'>
                  <li key={index}>
                    <p key={item.title} className='sm:text-3xl pb-4 font-bold'>
                      {item.title}
                    </p>
                    <p key={item.content} className='sm:text-xl ml-6 text-left'>
                      {item.content}
                    </p>
                  </li>
                </ul>
              )}
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
        <div className='mt-24 text-center mb-8 sm:min-w-max'>
          <p className='text-4xl font-bold'>金賞までの道のり</p>
          <p className='text-xl leading-8 mt-8'>
            生産管理グループは今まで5S活動を行ってこなかったため、
            <br />
            昨年度より長期的な最終目標として
            <br />
            金賞の獲得を掲げて活動を続けております。
          </p>
        </div>
        <div className='w-2/3 m-auto mb-12'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.6}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            loop={true}
            className=''
          >
            {images.map((src: string, index: number) => {
              return (
                <SwiperSlide key={`${index}`}>
                  <Image src={src} layout='responsive' width={640} height={400} alt='test_image' />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='mt-24 text-center sm:min-w-max bg-gray-200 py-6'>
          <p className='text-4xl font-bold'>最後に</p>
          <p className='text-2xl leading-10 mt-8 font-bold'>「３年間で金賞を獲得する」</p>
          <p className='text-xl mt-4'>
            私たちは上記の目標に向けて日々活動を続けており、そのための通過点が銅賞、銀賞です。
          </p>
          <p className='pt-4 text-xl'>今まで行ってきた活動はそのための一歩です。</p>
          <p className='pt-4 text-xl'>本サイトにてその軌跡をご確認ください。</p>
        </div>
        <div>
          <Image
            src='/fin.jpg'
            width={2592}
            height={1944}
            alt='TOP image'
            priority={true}
            className='sm:w-full'
          />
        </div>
      </main>
    </>
  );
};

export default Home;
