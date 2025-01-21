import { useState } from 'react';

// Components
import { Consult, Contact, FAQ, Benefits, Partners } from '@components/sections';
import { ConsultModal, SuccessModal } from '@components/modals';

// Local Sections
import { Achievements, ArticlesNews, Hero, Reviews, Solutions } from './sections';

// Utils
import { BENEFITS } from '@utils';
import { useTranslation } from '@hooks';

export const Home = () => {
  //modal state
  const [modalConsultActive, setModalConsultActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);

  //Translation
  const t = useTranslation();

  return (
    <>
      <Hero setModalConsultActive={setModalConsultActive} />

      <Solutions />
      <Achievements />

      <FAQ setModalConsultActive={setModalConsultActive} />
      <Benefits title={t.title.benefits} list={BENEFITS} />

      <Reviews />
      <Consult activeSuccessModal={() => setModalSuccessActive(true)} offModal={() => setModalConsultActive(false)} />

      <ArticlesNews />

      <Contact />
      <Partners />

      <ConsultModal
        active={modalConsultActive}
        setActive={setModalConsultActive}
        activeSuccessModal={() => setModalSuccessActive(true)}
      />

      <SuccessModal active={modalSuccessActive} setActive={setModalSuccessActive} />
    </>
  );
};
