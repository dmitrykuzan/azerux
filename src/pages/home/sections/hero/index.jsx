'use-client';
import useDarkMode from 'use-dark-mode';
import { Button, Container, Typography } from '@components/ui';
import NextImage from 'next/image';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useTranslation } from '@hooks';

const ThreeDModel = dynamic(() => import('@components/threeDModel'), {
  loading: () => <></>,
  ssr: false
});

export const Hero = (props) => {
  const { setModalConsultActive } = props;

  const darkMode = useDarkMode(false);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const t = useTranslation();

  return (
    <section className="hero" id="#">
      {!isTabletOrMobile && darkMode.value ? (
        <NextImage
          priority
          className="hero__decor"
          src="/img/hero/h_decor-light.svg"
          width="1200"
          height="1300"
          alt="background decor"
        />
      ) : (
        <NextImage
          priority
          className="hero__decor"
          src="/img/hero/h_decor-dark.svg"
          width="1200"
          height="1300"
          alt="background decor"
        />
      )}

      <div className="hero__wrapper">
        <div className="hero__text-decor">
          {!isTabletOrMobile && darkMode.value ? (
            <NextImage
              className="hero__text-decor-desktop"
              width="1600"
              height="454"
              priority
              src="/img/hero/h_cyberasgard-dark.png"
              alt="3d model"
            />
          ) : (
            <NextImage
              className="hero__text-decor-desktop"
              width="1600"
              height="454"
              priority
              src="/img/hero/h_cyberasgard.png"
              alt="3d model"
            />
          )}

          {isTabletOrMobile && (
            <NextImage
              className="hero__text-decor-mobile"
              width="343"
              height="246"
              priority
              src="/img/hero/h_cyberasgard-mobile-dark.png"
              alt="3d model"
            />
          )}
        </div>

        <Container>
          <div className="hero__slide">
            <div className="hero__slide-content stack column">
              <div className="hero__slide-right">
                <Typography className="hero__title-right" upperCase weight="200" color="opacity70" tag="h2">
                  {t.title.ensuring}
                </Typography>
              </div>

              <div className="hero__slide-left stack column">
                <Typography
                  className="hero__slide-title"
                  upperCase
                  weight="200"
                  variant="h1"
                  dangerouslySetInnerHTML={{
                    __html: t.title.reliable.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                      return `<span>${captureGroup}</span>`;
                    })
                  }}
                  tag="h1"
                />
                <Button
                  className="hero__slide-button"
                  variant="accent"
                  upperCase
                  text={t.actions.join}
                  onClick={() => setModalConsultActive(true)}
                />
              </div>
            </div>

            {isTabletOrMobile && (
              <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <NextImage
                  className="hero__slide-3d-3dimg"
                  width={668}
                  height={787}
                  alt="3d"
                  placeholder="blur"
                  src="/img/hero/р_3dMobile.webp"
                  blurDataURL="/img/hero/р_3dMobile_lowres.webp"
                  quality={80}
                  priority
                />
              </motion.div>
            )}

            {!isTabletOrMobile && <ThreeDModel />}
          </div>
        </Container>
      </div>
    </section>
  );
};
