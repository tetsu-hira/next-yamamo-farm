// pages/_app.tsx
// Tailwind CSS 以外のスタイルファイルはグローバルで適用したくないため削除
// import '../styles/globals.css'
// 追記
import 'tailwindcss/tailwind.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
// import 'swiper/css/bundle';
// import 'swiper/swiper-bundle.min.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
