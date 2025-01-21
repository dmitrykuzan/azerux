import { useState, useEffect, useCallback } from 'react';
import { ArticleCard } from '@components/cards';
import { Button, Container, Typography, LoaderComponent } from '@components/ui';
import { useTranslation } from '@hooks';
import { fetchArticles } from '@api/blog';
import { useMediaQuery } from 'react-responsive';
import { ARTICLES } from '@utils';

export const ArticlesNews = () => {
  const t = useTranslation();

  return (
    <section className="articles-news" id="articles">
      <Container>
        <div className="articles-news__wrapper stack column">
          <Typography className="articles-news__title" tag="h2" weight="300" variant="h1" upperCase center>
            {t.title.blog}
          </Typography>

          <div className="articles-news__content">
            <ul className="articles-news__list">
              {ARTICLES.map(({ id, title, description, srcImage, isWide, date, time }) => (
                <ArticleCard
                  key={id}
                  title={t.title[title]}
                  description={t.subtitle[description]}
                  srcImage={srcImage}
                  isWide={isWide}
                  date={date}
                  time={time}
                />
              ))}
            </ul>
          </div>

          <Button className="articles-news__button" variant="accent" href="/blog" upperCase text={t.actions.viewblog} />
        </div>
      </Container>
    </section>
  );
};
