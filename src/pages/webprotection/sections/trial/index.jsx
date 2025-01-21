import { Button, Container, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const Trial = () => {
  const t = useTranslation();

  return (
    <section className="trial">
      <Container>
        <div className="trial__wrapper stack justify-space-between">
          <div className="trial__text stack column">
            <Typography className="trial__title" weight="400" tag="h3" upperCase>
              {t.title.trial}
            </Typography>
            <Typography className="trial__subtitle" weight="300" tag="p" variant="h2">
              {t.subtitle.basic}
            </Typography>
          </div>

          <Button className="trial__button" variant="white" upperCase text={t.actions.free} />
        </div>
      </Container>
    </section>
  );
};
