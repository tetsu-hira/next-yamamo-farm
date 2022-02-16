// pages/_app.tsx
// Tailwind CSS 以外のスタイルファイルはグローバルで適用したくないため削除
// import '../styles/globals.css'
// 追記
import 'tailwindcss/tailwind.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useReducer, useEffect } from 'react';
import Layout from '../components/layout';

// import 'swiper/css/bundle';
// import 'swiper/swiper-bundle.min.css';

// import AuthContext from '../lib/AuthContext';
// import authReducer from '../lib/authReducer';
// import { listenAuthState } from '../lib/firebase';

function MyApp({ Component, pageProps, router }: AppProps) {
  // const [state, dispatch] = useReducer(authReducer.reducer, authReducer.initialState);
  // useEffect(() => {
  //   return listenAuthState(dispatch);
  // }, []);

  return (
    // <AuthContext.Provider value={state}>
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </AnimatePresence>
    // </AuthContext.Provider>
  );
}

export default MyApp;
