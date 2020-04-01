import { AppProps } from 'next/app';

import '../assets/css/index.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const App: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
