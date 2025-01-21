import { useState } from 'react';
import { Banner, Benefits, Contact, FAQ, Features, Intro, Partners, WhyUse } from '@components/sections';
import { useTranslation } from '@hooks';

import { BENEFITS_NETPROTECTION, FEATURES_NETPROTECTION, WHYUSE_NETPROTECTION } from '@utils';
import { Configure } from './section';
import { ConsultModal } from '@components/modals';
//

import dynamic from 'next/dynamic';
const MarqueeLines = dynamic(() => import('@components/sections').then((mod) => mod.MarqueeLines), { ssr: false });

// import { BENEFITS_NETPROTECTION, WHYUSE_NETPROTECTION } from "@utils";

export const NetProtection = () => {
  //modal state
  const [modalConsultActive, setModalConsultActive] = useState(false);

  //Translation
  const t = useTranslation();

  return (
    <>
      <Intro
        title={t.title.netprotection}
        subtitle={t.title.l3l4}
        description={t.subtitle.nocharge}
        href="#configure"
        heroimg="/img/netprotection/hero.png"
        herotopimg="/img/netprotection/hero-top.png"
        herobotimg="/img/netprotection/hero-bot.png"
      />

      <Configure />

      <Banner
        setModalConsultActive={setModalConsultActive}
        title={t.title.customsolution}
        subtitle={t.subtitle.requirements}
      />

      <WhyUse title={t.title.useazerux} list={WHYUSE_NETPROTECTION} />

      <Benefits className="benefits--webprotection" title={t.title.benefitsnetwork} list={BENEFITS_NETPROTECTION} />

      <Features title={t.title.networkfeatures} list={FEATURES_NETPROTECTION} />

      <MarqueeLines />
      <FAQ setModalConsultActive={setModalConsultActive} className="faq--nolight" />

      <Contact />
      <Partners />

      <ConsultModal
        active={modalConsultActive}
        setActive={setModalConsultActive}
        activeSuccessModal={() => setModalSuccessActive(true)}
      />
    </>
  );
};
