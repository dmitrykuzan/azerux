import { ArticleCard } from '@components/cards';
import { Button, Container, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const Interested = () => {
  const t = useTranslation();

  return (
    <section className="interested">
      <Container>
        <div className="interested__wrapper stack column">
          <Typography className="interested__title" tag="h2" variant="h1" weight="300" center upperCase>
            {t.title.interested}
          </Typography>

          <ul className="interested__list stack">
            <li>
              <ArticleCard
                srcImage={'/img/articles/a_article.jpg'}
                isWide={true}
                title={t.title.ddosguard}
                description={t.subtitle.firstvds}
              />
            </li>
            <li>
              <ArticleCard
                srcImage={'/img/articles/a_article.jpg'}
                isWide={true}
                title={t.title.ddosguard}
                description={t.subtitle.firstvds}
              />
            </li>
            <li>
              <ArticleCard
                srcImage={'/img/articles/a_article.jpg'}
                isWide={true}
                title={t.title.ddosguard}
                description={t.subtitle.firstvds}
              />
            </li>
          </ul>

          <Button className="interested__back" href="/blog" variant="accent" upperCase text={t.actions.back} />
        </div>
      </Container>
    </section>
  );
};
