import { Button, Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const Banner = (props) => {
  const { title, subtitle, setModalConsultActive } = props;

  const t = useTranslation();

  return (
    <section className="banner">
      <Container>
        <div className="banner__content stack column">
          <Typography className="banner__title" weight="300" tag="h3" upperCase>
            {title}
          </Typography>
          <Typography className="banner__subtitle" weight="300" tag="p">
            {subtitle}
          </Typography>
          <Button
            onClick={() => setModalConsultActive(true)}
            className="banner__button"
            variant="white"
            upperCase
            text={t.actions.join}
          />
        </div>
      </Container>
      <Image className="banner__image" src="/img/consult/c_consult.webp" width="540" height="496" alt="banner image" />
      <Image
        className="banner__image-decor"
        src="/img/ui/u_banner-decor.svg"
        width="840"
        height="892"
        alt="banner image"
      />
    </section>
  );
};
