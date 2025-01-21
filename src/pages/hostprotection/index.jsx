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

import { BENEFITS_HOSTPROTECTION, BENEFITS_LIST_HOSTPROTECTION, FEATURES_HOSTPROTECTION } from '@utils';

import { ConsultModal } from '@components/modals';
import { HostPlans, InfoSlider } from './section';

export const HostProtection = () => {
  //modal state
  const [modalConsultActive, setModalConsultActive] = useState(false);

  //Translation
  const t = useTranslation();

  return (
    <>
      <Intro
        title={t.title.protecthost}
        subtitle={t.title.notraffic}
        href="#plans"
        heroimg="/img/hostprotection/hero.png"
        herotopimg="/img/hostprotection/hero-top.png"
        herobotimg="/img/hostprotection/hero-bot.png"
      />

      <HostPlans setModalConsultActive={setModalConsultActive} />

      <InfoSlider />

      <MarqueeLines />

      <Banner setModalConsultActive={setModalConsultActive} title={t.title.bestoption} subtitle={t.subtitle.helponly} />

      <Benefits className="benefits--webprotection" title={t.title.benefitshost} list={BENEFITS_HOSTPROTECTION} />

      <Features title={t.title.features} list={FEATURES_HOSTPROTECTION} />

      <BenefitsList title={t.title.antiddos} list={BENEFITS_LIST_HOSTPROTECTION} />

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
