import { Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const ArticleContent = () => {
  const t = useTranslation();

  return (
    <section className="article-content">
      <div className="article-content__top">
        <Container>
          <div className="article-content__top-text stack column">
            <Typography weight="200" tag="h2" upperCase center>
              {t.title.article}
            </Typography>
            <Typography weight="300" tag="h1" variant="h1" upperCase center>
              {t.title.firstvds}
            </Typography>
          </div>
        </Container>
      </div>
      <Container>
        <div className="article-content__wrapper stack column">
          <Image
            className="article-content__image"
            src="/img/articles/a_article.jpg"
            alt="Article image"
            width="1280"
            height="500"
          />

          <Typography tah="p" weight="300" className="article-content__description">
            {t.subtitle.ddosthreats}
          </Typography>

          <div className="article-content__list-wrapper stack column">
            <Typography className="article-content__list-title" tag="h3" weight="500">
              {t.title.whatguard}
            </Typography>
            <Typography className="article-content__list-description" tag="p" weight="300">
              {t.subtitle.provider}
            </Typography>
            <ul className="article-content__list stack column">
              <li>
                <Typography tag="p" weight="300">
                  {t.subtitle.ddosprotection}
                </Typography>
              </li>
              <li>
                <Typography tag="p" weight="300">
                  {t.subtitle.iptransit}
                </Typography>
              </li>
              <li>
                <Typography tag="p" weight="300">
                  {t.subtitle.analytics}
                </Typography>
              </li>
            </ul>
          </div>

          <div className="article-content__list-wrapper stack column">
            <Typography className="article-content__list-title" tag="h3" weight="500">
              {t.title.whatfirstvds}
            </Typography>
            <Typography className="article-content__list-description" tag="p" weight="300">
              {t.subtitle.virtualserver}
            </Typography>
            <ul className="article-content__list stack column">
              <li>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: t.subtitle.dedicatedserver.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                      return `<span>${captureGroup}</span>`;
                    })
                  }}
                  weight="300"
                  tag="p"
                ></Typography>
              </li>
              <li>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: t.subtitle.securitysolutions.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                      return `<span>${captureGroup}</span>`;
                    })
                  }}
                  tag="p"
                  weight="200"
                ></Typography>
              </li>
              <li>
                <Typography
                  tag="p"
                  weight="300"
                  dangerouslySetInnerHTML={{
                    __html: t.subtitle.scalability.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                      return `<span>${captureGroup}</span>`;
                    })
                  }}
                ></Typography>
              </li>
            </ul>
          </div>

          <div className="article-content__сonclusion stack column">
            <Typography className="article-content__сonclusion-title" tag="h3" weight="500">
              {t.title.conclusion}
            </Typography>
            <Typography className="article-content__сonclusion-description" tag="p" weight="300">
              {t.subtitle.cyberthreats}
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};
