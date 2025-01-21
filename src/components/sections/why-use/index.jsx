import { WhyUseCard } from "@components/cards";
import { Container, Typography } from "@components/ui";

export const WhyUse = (props) => {
  const { title, list } = props;

  return (
    <section className="why-use">
      <Container>
        <div className="why-use__wrapper stack column">
          <Typography
            className="why-use__title"
            tag="h2"
            variant="h1"
            weight="300"
            upperCase
            center
          >
            {title}
          </Typography>
          <ul className="why-use__list stack">
            {list.map((item) => (
              <li className="why-use__list-item" key={item.id}>
                <WhyUseCard
                  titleIconLight={item.titleIconLight}
                  titleIconDark={item.titleIconDark}
                  titleList={item.titleList}
                  label={item.label}
                  list={item.list}
                  srcImage={item.srcImage}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
