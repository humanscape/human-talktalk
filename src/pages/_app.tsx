import { AppProps } from 'next/app';
import Head from 'next/head';

import '../assets/css/index.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>휴먼톡톡</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);
export default App;
