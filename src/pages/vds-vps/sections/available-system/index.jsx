import { SystemsList } from '@components/sections';
import { Container, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const AvailableSystem = () => {
  const t = useTranslation();

  return (
    <section className="available-system">
      <Container>
        <div className="available-system__wrapper stack column">
          <Typography tag="h2" variant="h1" weight="300" upperCase center>
            {t.title.osavailable}
          </Typography>
          <SystemsList />
        </div>
      </Container>
    </section>
  );
};
