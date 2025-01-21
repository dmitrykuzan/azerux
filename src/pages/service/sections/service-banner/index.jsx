// ui
import { Button, Container, Image, Typography } from '@components/ui';

//hooks
import { useTranslation } from '@hooks';

export const ServiceBanner = (props) => {
  const { serviceData, setModalConsultActive } = props;

  const t = useTranslation();

  return (
    <div className="service__banner">
      <Container>
        <div className="service__banner-wrapper stack column">
          <div className="service__banner-content stack column">
            <Typography className="service__banner-title" weight="300" tag="h2" upperCase>
              {t.title.started}
            </Typography>
            <Typography className="service__banner-text" tag="p" weight="300">
              {t.services[serviceData?.bannertext]}
            </Typography>
            <Button
              className="service__banner-button"
              variant="white"
              upperCase
              text={t.actions.join}
              onClick={() => setModalConsultActive(true)}
            />
          </div>

          <Image
            className="service__banner-image"
            src="/img/consult/c_consult.webp"
            width="540"
            height="540"
            alt="Banner image"
          />

          <Button
            className="service__banner-button-mobile"
            variant="white"
            upperCase
            text={t.actions.join}
            onClick={() => setModalConsultActive(true)}
          />
        </div>
      </Container>
    </div>
  );
};
