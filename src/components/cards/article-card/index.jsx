// UI Components
import { Button, Image, Typography } from '@components/ui';

// Hooks
import { useTranslation } from '@hooks';
import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';

export const ArticleCard = (props) => {
  //props
  const { title, description, srcImage, isWide = false, id, date, time } = props;

  const widthImage = isWide ? '755' : '265';
  const heightImage = isWide ? '345' : '144';

  const t = useTranslation();

  //dark mode
  const darkMode = useDarkMode(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`article__card stack ${isWide ? 'wide stack column' : ''}`}>
      <div className="article__card-wrapper">
        <Image
          className="article__card-image"
          src={srcImage}
          width={widthImage}
          height={heightImage}
          alt="Article image"
        />
        <div className="article__card-text stack column">
          <div className="article__card-info-top">
            <div className="article__card-info stack align-center">
              <div className="article__card-date stack align-center">
                {isMounted && darkMode.value ? (
                  <img src="/img/ui/u_date-light.svg" width="12" height="12" alt="icon" />
                ) : (
                  <img src="/img/ui/u_date-dark.svg" width="12" height="12" alt="icon" />
                )}
                {date}
              </div>
              <div className="article__card-time stack align-center">
                {isMounted && darkMode.value ? (
                  <img src="/img/ui/u_time-light.svg" width="12" height="12" alt="icon" />
                ) : (
                  <img src="/img/ui/u_time-dark.svg" width="12" height="12" alt="icon" />
                )}
                {time}
              </div>
            </div>
          </div>

          <Typography className="article__card-title" tag="h3" weight="500">
            {title}
          </Typography>
          <Typography className="article__card-description" tag="p" weight="300">
            {description}
          </Typography>
        </div>
      </div>

      <Button
        href={`/blog/article`}
        arrowDark={true}
        className="article__card-button-mobile"
        variant="transparent"
        upperCase
        text={t.actions.learnmore}
      />

      {isWide ? (
        <div className="article__card-info-wrapper stack align-center">
          <div className="article__card-info article__card-info--bot stack align-center">
            <div className="article__card-date stack align-center">
              {isMounted && darkMode.value ? (
                <img src="/img/ui/u_date-light.svg" width="12" height="12" alt="icon" />
              ) : (
                <img src="/img/ui/u_date-dark.svg" width="12" height="12" alt="icon" />
              )}
              {date}
            </div>
            <div className="article__card-time stack align-center">
              {isMounted && darkMode.value ? (
                <img src="/img/ui/u_time-light.svg" width="12" height="12" alt="icon" />
              ) : (
                <img src="/img/ui/u_time-dark.svg" width="12" height="12" alt="icon" />
              )}
              {time}
            </div>
          </div>
          <Button
            href={`/blog/article`}
            arrowDark={true}
            className="article__card-button"
            variant="transparent"
            upperCase
            text={t.actions.learnmore}
          />
        </div>
      ) : null}
    </div>
  );
};
