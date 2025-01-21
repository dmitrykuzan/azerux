import { useState, useEffect } from 'react';
import Head from 'next/head';
import Loader from '../src/components/loader';
import '../src/scss/globals.scss';

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Azerux – Next Generation Cybersecurity and DDoS Protection</title>
        <meta
          name="description"
          content="Professional protection from DDoS attacks and cyber threats: preventing breaches, safeguarding data, and ensuring your business operates smoothly 24/7. Trust your security to the experts."
        />
        <meta property="og:title" content="Azerux – Next Generation Cybersecurity and DDoS Protection" />
        <meta
          property="og:description"
          content="Professional protection from DDoS attacks and cyber threats: preventing breaches, safeguarding data, and ensuring your business operates smoothly 24/7. Trust your security to the experts."
        />

        <meta property="og:image" content="/img/description.png" />

        <link rel="icon" href="/img/ui/u_favicon.svg" />
      </Head>

      {loading ? <Loader /> : getLayout(<Component {...pageProps} />)}

      <noscript>
        <iframe
          loading="lazy"
          src="https://www.googletagmanager.com/ns.html?id=GTM-WHF4MBVB"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
  );
};

export default App;
