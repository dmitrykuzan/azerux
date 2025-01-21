import Head from 'next/head';
import { MainLayout } from '@layouts';
import { Home } from '@pages/home';

const Page = () => {
  return (
    <>
      <Head>
        <title>Azerux – Next Generation Cybersecurity and DDoS Protection</title>
        <meta
          name="description"
          content="Professional protection from DDoS attacks and cyber threats: preventing breaches, safeguarding data, and ensuring your business operates smoothly 24/7. Trust your security to the experts."
        />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta property="og:url" content="" />
        <link rel="icon" href="/img/ui/u_favicon.svg" />
      </Head>
      <Home />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
