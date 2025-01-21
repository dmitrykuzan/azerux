import { ArticleCard } from '@components/cards';
import { Button, Container, Direction, Image, Search, Sort, Typography } from '@components/ui';
import { useTranslation } from '@hooks';
import { ARTICLES } from '@utils';
import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';

export const BlogContent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = useTranslation();
  return (
    <section className="blog">
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
        <div className="blog__wrapper stack column">
          <Typography className="articles-news__title" tah="h2" weight="300" variant="h1" upperCase center>
            {t.title.blog}
          </Typography>

          <div className="blog__content stack column">
            <div className="blog__navigation stack">
              <Search />
              <Sort />
              <Direction />
            </div>
            <ul className="blog__list">
              {ARTICLES.map(({ id, title, description, srcImage, isWide, time, date }) => (
                <ArticleCard
                  key={id}
                  isWide={true}
                  title={t.title[title]}
                  description={t.subtitle[description]}
                  srcImage={srcImage}
                  time={time}
                  date={date}
                />
              ))}
            </ul>
            <Button
              className="articles-news__button"
              variant="accent"
              href="/blog"
              upperCase
              text={t.actions.viewmore}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
