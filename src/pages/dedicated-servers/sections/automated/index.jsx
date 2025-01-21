import { SystemsList } from '@components/sections';
import { Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';
import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';

export const Automated = () => {
  const t = useTranslation();

  const [toggleActive, setToggleActive] = useState('Operating Systems');

  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundImageSrc = darkMode.value ? '/img/solutions/s_bg-dark.svg' : '/img/solutions/s_bg-light.svg';

  return (
    <section className="automated">
      {isMounted && (
        <Image
          loading="lazy"
          className="benefits__bg"
          src={backgroundImageSrc}
          width="753"
          height="788"
          alt="background decor"
        />
      )}
      <Container>
        <div className="automated__wrapper stack column">
          <div className="automated__top stack column center">
            <Typography tag="h2" variant="h1" weight="300" upperCase center>
              {t.title.automatedsetup}
            </Typography>
            <div className="automated__toggle stack align-center">
              <button
                className={`automated__toggle-button ${toggleActive === 'Operating Systems' ? 'active' : ''}`}
                onClick={() => setToggleActive('Operating Systems')}
              >
                Operating Systems
              </button>
              <button
                className={`automated__toggle-button ${toggleActive === 'Additional Software' ? 'active' : ''}`}
                onClick={() => setToggleActive('Additional Software')}
              >
                Additional Software
              </button>
            </div>
          </div>

          {toggleActive === 'Operating Systems' && (
            <div className="automated__content">
              <SystemsList />
            </div>
          )}
          {toggleActive === 'Additional Software' && (
            <div className="automated__content">
              <SystemsList />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
