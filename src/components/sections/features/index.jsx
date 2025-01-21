import { Container, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const Features = (props) => {
  const { list, title, className } = props;

  const t = useTranslation();

  return (
    <section className={`features ${className && className ? className : ''}`}>
      <Container>
        <div className="features__wrapper stack column">
          <Typography className="features__title" weight="300" tag="h2" variant="h1" upperCase center>
            {title}
          </Typography>
          <ul className="features__list">
            {list.map(({ id, text }) => (
              <li key={id} className="features__item stack align-center">
                <span className="features__item-number stack center">{id + 1}</span>
                <Typography className="features__item-text" tag="p" weight="500">
                  {t.title[text]}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
