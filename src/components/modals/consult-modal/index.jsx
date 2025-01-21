import { useEffect, useRef } from 'react';

// Components
import { Consult } from '@components/sections';

// Hooks
import { useOnClickOutside } from '@hooks';

export const ConsultModal = (props) => {
  //**props
  const { active, setActive, activeSuccessModal } = props;

  //** body add class
  useEffect(() => {
    if (active) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }

    return () => {
      document.body.classList.remove('lock');
    };
  }, [active]);

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(false));

  return (
    <div className={active ? 'modal modal--active stack center' : 'modal stack center'}>
      <div ref={ref} className="consult__modal modal__content stack column" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={() => setActive(false)}></button>

        <Consult activeSuccessModal={activeSuccessModal} offModal={() => setActive(false)} />
      </div>
    </div>
  );
};
