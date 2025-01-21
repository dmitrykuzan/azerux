import { useEffect, useState } from 'react';

// UI Components
import { Button, Image, Typography } from '@components/ui';

// Hooks
import { useTranslation } from '@hooks';
import useDarkMode from 'use-dark-mode';

export const ReviewCard = (props) => {
  //props
  const { review, srcImage, srcImageLight } = props;

  const darkMode = useDarkMode(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = useTranslation();

  return (
    <div className="review__card stack column">
      {isMounted && (
        <Image
          className="review__card-image"
          src={darkMode.value ? srcImageLight : srcImage}
          width="150"
          height="30"
          loading="lazy"
          alt="image"
        />
      )}

      <Typography className="review__card-description" tag="p" weight="300" center>
        {review}
      </Typography>

      <Button
        href=""
        arrowDark={true}
        className="review__card-button"
        variant="transparent"
        upperCase
        text={t.actions.readarticle}
      />
    </div>
  );
};
