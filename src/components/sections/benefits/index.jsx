import { BenefitsCard } from '@components/cards';
import { Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';
import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';
import NextImage from 'next/image';

export const Benefits = (props) => {
  const { title, list, className } = props;

  const t = useTranslation();

  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundImageSrc = darkMode.value ? '/img/solutions/s_bg-dark.svg' : '/img/solutions/s_bg-light.svg';

  return (
    <section className={className ? `${className} benefits` : 'benefits'} id="benefits">
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
        <div className="benefits__wrapper stack column">
          <Typography tag="h2" variant="h1" weight="300" upperCase center>
            {title}
          </Typography>

          <div className="benefits__body">
            {list.map(({ id, title, description, iconSrcDark, iconSrcLight }) => (
              <BenefitsCard
                key={id}
                title={t.title[title]}
                description={t.subtitle[description]}
                iconSrcDark={iconSrcDark}
                iconSrcLight={iconSrcLight}
              />
            ))}

            <Image className="benefits__3d" src="/img/benefits/b_3d.webp" width="628" height="667" alt="3d model" />
          </div>
        </div>
      </Container>
    </section>
  );
};
