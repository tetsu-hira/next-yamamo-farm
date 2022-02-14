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

type Pros = {
  title: string;
  content: string;
  ref: any;
  control: any;
};

const Home: NextPage = () => {
  const introList: string[] = [
    '【生産管理の5S活動】',
    '　日々の5S活動や年に一度のPC掃除など',
    '　金賞の獲得を目指して続けております',
  ];
  const introVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1000 },
  };

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const [ref1, inView1] = useInView({
    threshold: [0.8],
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: [0.3],
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: [1],
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: [0.8],
    triggerOnce: true,
  });
  const [ref5, inView5] = useInView({
    threshold: [1],
    triggerOnce: true,
  });
  const [ref6, inView6] = useInView({
    threshold: [1],
    triggerOnce: true,
  });
  const [ref7, inView7] = useInView({
    threshold: [1],
    triggerOnce: true,
  });

  const infoList: Item[] = [
    {
      title: '21年12月25日',
      content: '生産管理室の大掃除を行いました',
    },
    {
      title: '22年01月07日',
      content: '大掃除の写真をUPしました',
    },
    {
      title: '21年01月28日',
      content: '生産管理グループで5S会議を行いました',
    },
  ];

  const itemList: Pros[] = [
    {
      title: '今年度目標の見える化',
      content:
        '生産管理室のホワイトボードに計画予定を貼って活動内容の意識を図ったり、前月の実績やクロスパトロールの結果を貼って進捗を見える化しています。',
      ref: ref5,
      control: controls5,
    },
    {
      title: 'デスクトップPCの清掃',
      content:
        '昨年より年に一度の大掃除と別に予定日を設けて、生産管理室で使っているデスクトップPCの清掃を行うことで仕事道具の維持管理を行っております。',
      ref: ref6,
      control: controls6,
    },
    {
      title: '災害発生時の安全対策',
      content:
        '日々の整理整頓や清掃だけでなく、地震時にPCが倒れてこないようにするなどの安全対策も5S活動の一環として行うことで、より良い職場を作ります。',
      ref: ref7,
      control: controls7,
    },
  ];

  useEffect(() => {
    if (inView1) {
      controls1.start('moved');
    } else {
      controls1.stop();
      controls1.set('initial');
    }
  }, [controls1, inView1]);
  useEffect(() => {
    if (inView2) {
      controls2.start('moved');
    } else {
      controls2.stop();
      controls2.set('initial');
    }
  }, [controls2, inView2]);
  useEffect(() => {
    if (inView3) {
      controls3.start('moved');
    } else {
      controls3.stop();
      controls3.set('initial');
    }
  }, [controls3, inView3]);
  useEffect(() => {
    if (inView4) {
      controls4.start('moved');
    } else {
      controls4.stop();
      controls4.set('initial');
    }
  }, [controls4, inView4]);
  useEffect(() => {
    if (inView5) {
      controls5.start('moved');
    } else {
      controls5.stop();
      controls5.set('initial');
    }
  }, [controls5, inView5]);
  useEffect(() => {
    if (inView6) {
      controls6.start('moved');
    } else {
      controls6.stop();
      controls6.set('initial');
    }
  }, [controls6, inView6]);
  useEffect(() => {
    if (inView7) {
      controls7.start('moved');
    } else {
      controls7.stop();
      controls7.set('initial');
    }
  }, [controls7, inView7]);

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

      <main className='bg-green-100 pb-16'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
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
            className='absolute bottom-4 z-30 sm:left-10 left-3 text-red-400 text-shadow-md sm:min-w-max sm:block'
            initial='hidden'
            animate='visible'
            variants={introVariants}
          >
            {introList.map((intro: string, index: number) => (
              <motion.p
                className='font-bold text-xl sm:text-5xl leading-relaxed'
                key={index}
                variants={introVariants}
                transition={{ duration: 1, delay: index * 0.5 + 1 }}
              >
                {intro}
              </motion.p>
            ))}
          </motion.div>
        </div>
        <motion.div
          className='mt-16 shadow bg-white'
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: [-300, 0, 0], opacity: 1 }}
          // variants={variants}
          transition={{ duration: 2, times: [0, 0.5, 1] }}
        >
          <div className='sm:py-4 py-3 sm:text-xl text-center border-b'>ー　新着情報　ー</div>
          <div className=''>
            {infoList.map((info: any, index: number) => (
              <Link href='/' key={index}>
                <a className='flex w-full justify-between border-b'>
                  <div className='pb-2 pt-3 pl-6 w-full'>
                    <div className='text-xs leading-none'>{info.title}</div>
                    <div>{info.content}</div>
                  </div>
                  <div className='w-8 block m-auto'>
                    <div className='w-3 h-3 border rotate-45 border-t-black border-r-black border-b-transparent border-l-transparent text-left'></div>
                  </div>
                </a>
              </Link>
            ))}
            <Link href='/'>
              <a className='sm:mt-16 block mr-4 sm:pb-4 py-2 sm:text-base text-xs text-right'>
                ▶　一覧はこちら
              </a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='sm:flex my-16 sm:my-16 text-center justify-center bg-white p-2 shadow'
          ref={ref1}
          initial='hidden'
          animate={controls1}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          <div>
            <div className='my-auto text-center sm:pl-24 sm:min-w-max sm:w-1/2'>
              <p className='sm:text-2xl'>生産管理の</p>
              <p className='sm:text-5xl text-xl font-bold sm:pb-8 pb-2'>5S活動の歩み</p>
            </div>
            <div className='sm:min-w-max sm:w-1/2 w-3/4 m-auto my-2'>
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
            <div className='flex m-auto justify-center'>
              <div className='w-1/2'>
                <p className='sm:text-2xl sm:leading-8'>
                  ２年前より活動を開始
                  <br />
                  順調に活動を進め、
                  <br />
                  今年３月に銅賞を獲得
                </p>
              </div>
              <div className='sm:mt-28 sm:h-24 sm:flex w-auto m-auto'>
                <Link href='/'>
                  <a className='bg-red-400 text-white block mx-auto py-3 px-6 rounded-full shadow sm:hover:bg-white sm:hover:text-blue-300 sm:duration-700 w-auto min-w-full'>
                    今までの活動を見る
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='sm:mt-24 py-4 mt-16 text-center mb-16 sm:min-w-max bg-white shadow'
          ref={ref2}
          initial='hidden'
          animate={controls2}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          <div className='my-auto text-center sm:pl-24 sm:min-w-max sm:w-1/2'>
            <p className='sm:text-2xl'>今年度目標</p>
            <p className='sm:text-5xl text-xl font-bold sm:pb-8 pb-2'>銀賞の獲得</p>
          </div>
          <div>
            <p className='sm:text-xl sm:leading-8'>
              上記の目標を今年度中に達成するために
              <br />
              以下のような活動を日々行っております
            </p>
          </div>
          <div className='sm:mt-8 px-6 pt-6 sm:pb-4 mx-auto'>
            {itemList.map((item: any, index: number) => (
              <motion.div
                key={item.title}
                className='bg-lime-100 sm:mt-16 p-4 w-fit mx-auto shadow-beta mb-6'
                ref={item.ref}
                initial='hidden'
                animate={item.control}
                variants={opacityVariants}
                transition={{ duration: 1 }}
              >
                <div className='flex '>
                  {index % 2 !== 0 && (
                    <p key={item.title} className='sm:text-3xl font-bold text-xl m-auto pr-4 w-60'>
                      {item.title}
                    </p>
                  )}
                  <div className='sm:min-w-max w-full'>
                    <Image
                      src={'/main' + (index + 1) + '.jpg'}
                      width={270}
                      height={180}
                      alt='メイン画像1'
                    />
                  </div>
                  {index % 2 === 0 && (
                    <p key={item.title} className='sm:text-3xl font-bold text-xl m-auto pl-4 w-60'>
                      {item.title}
                    </p>
                  )}
                </div>
                <p key={item.content} className='sm:text-xl m-auto mt-4 text-left'>
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className='mt-16 py-4 text-center mb-8 sm:min-w-max bg-white shadow'
          ref={ref3}
          initial='hidden'
          animate={controls3}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          <div className='my-auto text-center sm:pl-24 sm:min-w-max sm:w-1/2'>
            <p className='sm:text-2xl'>最終目標となる</p>
            <p className='sm:text-5xl text-xl font-bold sm:pb-8 pb-2'>金賞までの道のり</p>
          </div>
          <div>
            <p className='sm:text-xl sm:leading-8'>
              生産管理グループは今まで5S活動を行ってこなかったため、
              <br />
              昨年度より長期的な最終目標として
              <br />
              金賞の獲得を掲げて日々の活動を続けております。
            </p>
          </div>
          <div className='w-11/12 m-auto mt-4 mb-8'>
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
                    <Image
                      src={src}
                      layout='responsive'
                      width={640}
                      height={400}
                      alt='test_image'
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className='sm:mt-28 sm:h-24 sm:flex w-1/2 m-auto'>
            <Link href='/'>
              <a className='bg-red-400 text-white block mx-auto py-3 px-6 rounded-full shadow sm:hover:bg-white sm:hover:text-blue-300 sm:duration-700 w-auto min-w-full'>
                今までの活動を見る
              </a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='mt-16 text-center sm:min-w-max bg-white shadow py-4'
          ref={ref4}
          initial='hidden'
          animate={controls4}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          <div className='my-auto text-center sm:pl-24 sm:min-w-max sm:w-1/2'>
            <p className='sm:text-2xl'>最後に</p>
            <p className='sm:text-5xl text-xl font-bold sm:pb-8 pb-2'>「３年間で金賞を獲得する」</p>
          </div>
          <div className='w-11/12 m-auto'>
            <p className='sm:text-xl sm:leading-8'>
              私たちは上記の目標に向けて日々活動を続けており、そのための通過点が銅賞、銀賞です。
              <br />
              今まで行ってきた活動はそのための一歩です。
              <br />
              本サイトにてぜひとも活動詳細をご覧ください。
            </p>
          </div>
          <div className='mt-4'>
            <Image
              src='/fin.jpg'
              width={2592}
              height={1944}
              alt='TOP image'
              priority={true}
              className='sm:w-full'
            />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
