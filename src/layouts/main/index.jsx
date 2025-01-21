import { useState } from 'react';
import { Footer, Header } from '@components/sections';
import { ConsultModal } from '@components/modals';
import { SuccessModal } from '@components/modals';

export const MainLayout = (props) => {
  const { overflow = true, children, className = '' } = props;
  const [modalConsultActive, setModalConsultActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);

  return (
    <div className={overflow ? 'wrapper overflow' : 'wrapper'}>
      <Header setModalConsultActive={setModalConsultActive} />
      <main>{children}</main>
      <Footer className={className} activeSuccessModal={() => setModalSuccessActive(true)} />

      <ConsultModal
        active={modalConsultActive}
        setActive={setModalConsultActive}
        activeSuccessModal={() => setModalSuccessActive(true)}
      />

      <SuccessModal active={modalSuccessActive} setActive={setModalSuccessActive} />
    </div>
  );
};
