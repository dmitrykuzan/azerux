import { Container, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const BenefitsList = (props) => {
  const { title, list, className } = props;

  const t = useTranslation();

  return (
    <section className={`benefits-list ${className && className ? className : ''}`}>
      <Container>
        <div className="benefits-list__wrapper stack column">
          <Typography tag="h2" variant="h1" weight="300" upperCase center>
            {title}
          </Typography>

          <ul className="benefits-list__items stack column">
            {list.map(({ id, title, description }) => (
              <li key={id} className="benefits-list__item stack">
                <Typography className="benefits-list__item-title" tag="h3" weight="400" upperCase>
                  {t.title[title]}
                </Typography>
                <Typography className="benefits-list__item-description" tag="p" weight="300">
                  {t.subtitle[description]}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
