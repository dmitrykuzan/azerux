import { BenefitsCard } from '@components/cards';
import { Button, Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';
import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';

export const ServiceContent = (props) => {
  const { serviceData, setModalConsultActive } = props;

  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = useTranslation();

  return (
    <section className="service__content">
      {isMounted && darkMode.value ? (
        <Image
          className="hero__decor"
          src="/img/hero/h_decor-light.svg"
          width="1390"
          height="1480"
          alt="background decor"
        />
      ) : (
        <Image
          className="hero__decor"
          src="/img/hero/h_decor-dark.svg"
          width="1390"
          height="1480"
          alt="background decor"
        />
      )}

      <Container>
        <div className="service__content stack column">
          <div className="service__top stack">
            <Image
              className="service__decor-left"
              src={serviceData?.imgherobot}
              width="169"
              height="169"
              alt="Service hero decor"
            />
            <div className="service__text-decor">
              {isMounted && darkMode.value ? (
                <>
                  <Image
                    className="service__text-decor-desktop"
                    width="1600"
                    height="454"
                    loading="lazy"
                    src="/img/services/s_azerux-dark.webp"
                    alt="3d model"
                  />
                </>
              ) : (
                <Image
                  className="service__text-decor-desktop"
                  width="1600"
                  height="454"
                  loading="lazy"
                  src="/img/services/s_azerux-light.webp"
                  alt="3d model"
                />
              )}

              <Image
                className="service__text-decor-mobile"
                width="343"
                height="246"
                loading="lazy"
                src="/img/hero/h_cyberasgard-mobile-dark.png"
                alt="3d model"
              />
            </div>
            <div className="service__top-text stack column">
              <div className="service__top-text-wrapper stack column">
                <Typography
                  className="service__top-subtitle"
                  weight="200"
                  tag="h2"
                  upperCase
                  dangerouslySetInnerHTML={{
                    __html: t.title.freecdn.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                      return `<span>${captureGroup}</span>`;
                    })
                  }}
                ></Typography>
                <Typography className="service__top-title" weight="500" tag="h1" upperCase>
                  {t.services[serviceData.title]}
                </Typography>
                <Typography className="service__top-description" weight="300" tag="p" color="opacity70">
                  {t.services[serviceData?.subtitle]}
                </Typography>
              </div>

              <Button
                className="service__top-button"
                variant="accent"
                upperCase
                text={t.actions.join}
                onClick={() => setModalConsultActive(true)}
              />
            </div>
            <div className="service__decor-image">
              <Image
                className="service__hero-image"
                src={serviceData?.imgheromain}
                width="360"
                height="360"
                alt="Service hero decor"
              />
              <Image
                className="service__hero-bot"
                src={serviceData?.imgherobot}
                width="140"
                height="140"
                alt="Service hero decor"
              />
              <Image
                className="service__hero-top"
                src={serviceData?.imgherotop}
                width="80"
                height="80"
                alt="Service hero decor"
              />
            </div>
          </div>

          <div className="service__body stack column">
            <Typography className="service__description" weight="300" tag="p">
              {t.services[serviceData?.description]}
            </Typography>

            <div className="service__list-top stack column">
              <Typography className="service__list-title" tag="h2" weight="500">
                {t.services[serviceData?.listtitletop]}
              </Typography>
              <ul className="service__list-grid">
                {serviceData?.listtop.map(({ iconlight, icondark, title, description }) => (
                  <li key={title}>
                    <BenefitsCard
                      title={t.services[title]}
                      description={t.services[description]}
                      iconSrcLight={iconlight}
                      iconSrcDark={icondark}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="service__list-bottom stack align-center">
              <Image
                className="service__list-bottom-img"
                src="/img/services/s_3d.png"
                width="270"
                height="288"
                alt="Logo 3D image"
              />
              <div className="service__list-disc-wrapper stack column">
                <Typography className="service__list-title" tag="h2" weight="500">
                  {t.services[serviceData?.listtitlebot]}
                </Typography>
                <ul className="service__list-disc">
                  {serviceData?.listbot.map(({ text }) => (
                    <li key={text}>
                      <Typography
                        className="service__list-text"
                        weight="300"
                        dangerouslySetInnerHTML={{
                          __html: t.services[text].replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                            return `<span>${captureGroup}</span>`;
                          })
                        }}
                      ></Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="service__question stack">
              <div className="service__question-text stack column">
                <Typography className="service__question-title" weight="400" tag="h2" upperCase>
                  {t.services[serviceData?.question]}
                </Typography>
                <Typography className="service__question-description" tag="p" weight="300">
                  {t.services[serviceData?.answer]}
                </Typography>
              </div>
              <Image
                className="service__question-image"
                src={serviceData?.questionimage}
                width="360"
                height="360"
                alt="Service decor image"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
