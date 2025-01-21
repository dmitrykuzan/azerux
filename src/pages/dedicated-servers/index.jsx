import { useState } from 'react';
import {
  Banner,
  Benefits,
  BenefitsList,
  Contact,
  FAQ,
  Features,
  Intro,
  MarqueeLines,
  Partners
} from '@components/sections';
import { useTranslation } from '@hooks';

import { BENEFITS_DEDICATED, BENEFITS_LIST_VDSVPS, FEATURES_DEDICATED } from '@utils';

import { ConsultModal } from '@components/modals';
import { Automated, DedicatedPlans } from './sections';

export const DedicatedServers = () => {
  //modal state
  const [modalConsultActive, setModalConsultActive] = useState(false);

  //Translation
  const t = useTranslation();

  return (
    <>
      <Intro
        title={t.title.protecteddedicated}
        description={t.subtitle.rent}
        className="intro--vdsvps"
        href="#plans"
        heroimg="/img/dedicated-servers/hero.png"
        herotopimg="/img/dedicated-servers/hero-top.png"
        herobotimg="/img/dedicated-servers/hero-bot.png"
      />

      <DedicatedPlans />

      <Automated />

      <Benefits className="benefits--dedicated" title={t.title.benefitsdedicated} list={BENEFITS_DEDICATED} />

      <Features className="features--vdsvps" title={t.title.features} list={FEATURES_DEDICATED} />

      <MarqueeLines />

      <BenefitsList className="benefits-list--vdsvps" title={t.title.dedicatedcases} list={BENEFITS_LIST_VDSVPS} />

      <Banner
        setModalConsultActive={setModalConsultActive}
        title={t.title.orderserver}
        subtitle={t.subtitle.wecanbuild}
      />

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
