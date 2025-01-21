import { Image, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";

export const WhyUseCard = (props) => {
  // props
  const { srcImage, titleList, titleIconDark, titleIconLight, label, list } =
    props;

  //set DarkMode
  const darkMode = useDarkMode(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //text
  const t = useTranslation();

  return (
    <div className="why-use-card stack column justify-space-between">
      <div className="why-use-card__title-wrapper stack center">
        {isMounted && (
          <Image
            className="why-use-card__title-icon"
            src={darkMode.value ? titleIconLight : titleIconDark}
            width="30"
            height="30"
            alt="Title icon"
          />
        )}

        <Typography className="why-use-card__list-title" weight="500" tag="h3">
          {t.title[titleList]}
        </Typography>
        {label && (
          <Typography className="why-use-card__label" tag="span" weight="500">
            {t.common[label]}
          </Typography>
        )}
      </div>
      <ul className="why-use-card__body stack column">
        {list?.map(({ title, desription }) => (
          <li key={title} className="why-use-card__text stack column">
            <Typography className="why-use-card__title" tag="h4" weight="500">
              {t.title[title]}
            </Typography>
            <Typography
              className="why-use-card__description"
              tag="p"
              weight="300"
            >
              {t.subtitle[desription]}
            </Typography>
          </li>
        ))}

        <Image
          className="why-use-card__image"
          src={srcImage}
          width="230"
          height="230"
          alt="Decor Image"
        />
      </ul>
    </div>
  );
};
