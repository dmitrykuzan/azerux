import { useState } from 'react';

// Next.js
import Head from 'next/head';

// Layouts
import { MainLayout } from '@layouts';

// Utilities
import { SERVICESPAGES } from '@utils';

// Components
import { ServiceBanner, ServiceContent } from '@pages/service/sections';
import { Contact, FAQ, Partners,  } from '@components/sections';
import { ConsultModal, SuccessModal } from '@components/modals';

import dynamic from 'next/dynamic';
const MarqueeLines = dynamic(
  () => import('@components/sections').then((mod) => mod.MarqueeLines),
  { ssr: false }
);

export async function getStaticPaths({ locales }) {
  const paths = [];

  locales.forEach((locale) => {
    Object.keys(SERVICESPAGES).forEach((service) => {
      paths.push({
        params: { service },
        locale
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const serviceData = SERVICESPAGES[params.service];

  if (!serviceData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      serviceData
    },
    revalidate: 60
  };
}

const Page = ({ serviceData }) => {
  //modal state
  const [modalConsultActive, setModalConsultActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);

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

      <div className="service">
        <ServiceContent setModalConsultActive={setModalConsultActive} serviceData={serviceData} />
        <MarqueeLines />
        <ServiceBanner setModalConsultActive={setModalConsultActive} serviceData={serviceData} />
        <FAQ setModalConsultActive={setModalConsultActive} FAQ={serviceData.faq} />
        <Contact />
        {/* <Partners /> */}
      </div>

      <ConsultModal
        active={modalConsultActive}
        setActive={setModalConsultActive}
        activeSuccessModal={() => setModalSuccessActive(true)}
      />

      <SuccessModal active={modalSuccessActive} setActive={setModalSuccessActive} />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
