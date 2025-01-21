import { useEffect, useState } from "react";

// UI Components
import { Container, Image, Typography } from "@components/ui";

// Hooks
import { useTranslation } from "@hooks";
import useDarkMode from "use-dark-mode";

// Utilities
import { PARTNERS } from "@utils";

export const Partners = () => {
  const t = useTranslation();

  const darkMode = useDarkMode();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundImageSrc = darkMode.value
    ? "/img/solutions/s_bg-dark.svg"
    : "/img/solutions/s_bg-light.svg";

  return (
    <section className="partners">
      {isMounted && (
        <Image
          className="partners__decor-bg"
          src={backgroundImageSrc}
          width="753"
          height="788"
          alt="background decor"
        />
      )}
      <Container>
        <div className="partners__wrapper stack column">
          <Typography
            className="partners__title"
            tag="h2"
            variant="h1"
            weight="300"
            upperCase
            center
          >
            {t.title.partners}
          </Typography>

          <div className="partners__list stack justify-space-between">
            {isMounted &&
              PARTNERS.map(({ id, srcIconLight, srcIconDark }) => (
                <Image
                  className="partners__list-image"
                  src={darkMode.value ? srcIconLight : srcIconDark}
                  key={id}
                  width="150"
                  height="64"
                  alt="logo partners"
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
