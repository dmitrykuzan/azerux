import { AchievementsCard } from '@components/cards';
import { Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const Achievements = () => {
  const t = useTranslation();

  return (
    <section className="achievements">
      <Image className="achievements__decor" src="/img/achievements/a_decor.svg" width={745} height={790} alt="Decor" />

      <Container>
        <div className="achievements__wrapper stack column">
          <div className="achievements__text stack column">
            <Typography
              className="achievements__title"
              tag="h2"
              weight="200"
              upperCase
              center
              dangerouslySetInnerHTML={{
                __html: t.title.achievements.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                  return `<span>${captureGroup}</span>`;
                })
              }}
            ></Typography>
            <Typography
              className="achievements__subtitle"
              variant="h1"
              tag="h3"
              weight="300"
              upperCase
              center
              dangerouslySetInnerHTML={{
                __html: t.title.safe.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                  return `<span>${captureGroup}</span>`;
                })
              }}
            ></Typography>
          </div>

          <ul className="achievements__list">
            <AchievementsCard title={t.title.successful} counter="1000+" />
            <AchievementsCard title={'Enterprise customers'} counter="150+" />
            <AchievementsCard className="saved" title={t.title.saved} counter="$ 1 bln" />
            <AchievementsCard title={'Patents and applications'} counter="+50" />
            <AchievementsCard className="unique" title={'Incident Response Retainer vendor'} counter="#1" />
            <AchievementsCard title={'Employees'} counter="100+" />
          </ul>
        </div>
      </Container>
    </section>
  );
};
