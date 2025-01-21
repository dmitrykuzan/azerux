import { Button, Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';
import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';

export const Intro = (props) => {
  //props
  const { title, subtitle, description, heroimg, herotopimg, herobotimg, href, className } = props;

  const darkMode = useDarkMode(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = useTranslation();

  return (
    <section className={`intro ${className ? className : ''}`}>
      {isMounted && darkMode.value ? (
        <Image
          className="intro__decor"
          src="/img/hero/h_decor-light.svg"
          width="1390"
          height="1480"
          alt="background decor"
        />
      ) : (
        <Image
          className="intro__decor"
          src="/img/hero/h_decor-dark.svg"
          width="1390"
          height="1480"
          alt="background decor"
        />
      )}
      <Container>
        <div className="intro__wrapper stack align-center justify-space-between">
          {isMounted && darkMode.value ? (
            <>
              <Image
                className="intro__decor-text-desktop"
                width="1600"
                height="454"
                loading="lazy"
                src="/img/services/s_azerux-dark.webp"
                alt="3d model"
              />
            </>
          ) : (
            <Image
              className="intro__decor-text-desktop"
              width="1600"
              height="454"
              loading="lazy"
              src="/img/services/s_azerux-light.webp"
              alt="3d model"
            />
          )}

          <Image
            className="intro__decor-text-mobile"
            width="343"
            height="246"
            loading="lazy"
            src="/img/hero/h_cyberasgard-mobile-dark.png"
            alt="3d model"
          />

          <Image className="intro__decor-left" width="170" height="170" src={herobotimg} alt="Decor" />
          <div className="intro__content stack column">
            <div className="intro__text stack column">
              {subtitle && (
                <Typography
                  className="intro__subtitle"
                  weight="200"
                  tag="h2"
                  upperCase
                  dangerouslySetInnerHTML={{
                    __html: subtitle.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                      return `<span>${captureGroup}</span>`;
                    })
                  }}
                ></Typography>
              )}

              <Typography className="intro__title" variant="h1" tag="h1" weight="500" upperCase>
                {title}
              </Typography>
              {description && (
                <Typography className="intro__description" weight="300" tag="p" color="opacity70">
                  {description}
                </Typography>
              )}
            </div>
            <Button className="intro__button" variant="accent" upperCase href={href} text={t.actions.choose} />
          </div>

          <div className="intro__image">
            <Image className="intro__image-hero" width="319" height="319" src={heroimg} alt={title} />
            <Image className="intro__image-hero-top" width="80" height="80" src={herotopimg} alt="Decor" />
            <Image className="intro__image-hero-bot" width="140" height="140" src={herobotimg} alt="Decor" />
          </div>
        </div>
      </Container>
    </section>
  );
};
