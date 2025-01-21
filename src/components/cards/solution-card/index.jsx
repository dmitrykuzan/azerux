import { useEffect, useState } from 'react';
import Image from 'next/image';

// UI Components
import { Button, Typography } from '@components/ui';

// Hooks
import { useTranslation } from '@hooks';
import useDarkMode from 'use-dark-mode';

export const SolutionCard = (props) => {
  const { title, description, srcImage, isNew, link, animationOff } = props;

  const darkMode = useDarkMode(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = useTranslation();

  return (
    <div className={`solutions__card ${animationOff ? 'animation-off' : ''}`}>
      {isNew && (
        <Typography weight="500" upperCase className="solutions__card-label">
          new
        </Typography>
      )}

      {isMounted && darkMode.value && (
        <Image
          className="solutions__card-bg"
          src="/img/solutions/s_card-bg.png"
          width={564}
          height={441}
          alt="Card background"
        />
      )}

      <div className="solutions__card-text">
        <Typography className="solutions__card-title" tag="h3" variant="h3" weight="400" upperCase>
          {t.title[title]}
        </Typography>
        <Typography className="solutions__card-description" weight="300">
          {t.subtitle[description]}
        </Typography>
      </div>

      <Image
        className="solutions__card-image"
        src={srcImage.startsWith('/') ? srcImage : `/${srcImage}`}
        alt="Card image"
        width={564}
        height={441}
      />

      {!animationOff && (
        <Button
          href={link}
          className="solutions__card-link"
          arrowDark={true}
          text={t.actions.learnmore}
          variant="transparent"
          upperCase
        />
      )}
    </div>
  );
};
