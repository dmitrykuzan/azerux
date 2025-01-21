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

import { BENEFITS_LIST_VDSVPS, BENEFITS_VDSVPS, FEATURES_VDSVPS } from '@utils';

import { ConsultModal } from '@components/modals';
import { AvailableSystem, VdsVpsPlans } from './sections';

export const VdsVps = () => {
  //modal state
  const [modalConsultActive, setModalConsultActive] = useState(false);

  //Translation
  const t = useTranslation();

  return (
    <>
      <Intro
        title={t.title.vdsvpsprotect}
        description={t.subtitle.kvmbased}
        className="intro--vdsvps"
        href="#plans"
        heroimg="/img/vdsvps/hero.png"
        herotopimg="/img/vdsvps/hero-top.png"
        herobotimg="/img/vdsvps/hero-bot.png"
      />

      <VdsVpsPlans setModalConsultActive={setModalConsultActive} />

      <AvailableSystem />

      <Benefits className="benefits--vdsvps" title={t.title.benefitshost} list={BENEFITS_VDSVPS} />

      <Features className="features--vdsvps" title={t.title.features} list={FEATURES_VDSVPS} />

      <MarqueeLines />

      <BenefitsList className="benefits-list--vdsvps" title={t.title.vdsvpscases} list={BENEFITS_LIST_VDSVPS} />

      <Banner setModalConsultActive={setModalConsultActive} title={t.title.getstart} subtitle={t.subtitle.desired} />

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
