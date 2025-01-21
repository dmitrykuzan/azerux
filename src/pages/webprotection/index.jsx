import { Banner, Benefits, Contact, FAQ, Intro, Partners, WhyUse } from '@components/sections';
import { useTranslation } from '@hooks';
import { HowWork, Plans, Trial } from './sections';
import { BENEFITS_WEBPROTECTION, WHYUSE } from '@utils';
import { ConsultModal } from '@components/modals';
import { useState } from 'react';

import dynamic from 'next/dynamic';
const MarqueeLines = dynamic(() => import('@components/sections').then((mod) => mod.MarqueeLines), { ssr: false });

export const WebProtection = () => {
  //modal state
  const [modalConsultActive, setModalConsultActive] = useState(false);

  //Translation
  const t = useTranslation();

  return (
    <>
      <Intro
        title={t.title.webazerux}
        subtitle={t.title.freecdn}
        description={t.subtitle.swiftly}
        href="#plans"
        heroimg="/img/webprotection/hero.webp"
        herotopimg="/img/webprotection/hero-top.webp"
        herobotimg="/img/webprotection/hero-bot.webp"
      />
      <WhyUse title={t.title.azeruxguard} list={WHYUSE} />
      <Plans setModalConsultActive={setModalConsultActive} />
      <Trial />
      <Benefits className="benefits--webprotection" title={t.title.benefits} list={BENEFITS_WEBPROTECTION} />
      <HowWork />
      <MarqueeLines />
      <FAQ setModalConsultActive={setModalConsultActive} className="faq--nolight" />
      <Banner setModalConsultActive={setModalConsultActive} title={t.title.getstarted} subtitle={t.subtitle.activate} />
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
