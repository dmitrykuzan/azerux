import { useEffect, useState } from "react";

// UI Components
import { Image, Typography } from "@components/ui";

// Next.js
import Link from "next/link";

// Utilities
import { SOCIALS } from "@utils";

// Hooks
import { useTranslation } from "@hooks";
import useDarkMode from "use-dark-mode";

export const Socials = () => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = useTranslation();

  return (
    <div className="socials stack column">
      <Typography className="socials__title">{t.common.follow}</Typography>
      <ul className="socials__list stack align-center">
        {SOCIALS.map(({ srcLink, srcImage, srcImageDark, id }) => (
          <li key={id} className="socials__item">
            <Link
              target="_blanc"
              className="socials__link stack center"
              href={srcLink}
            >
              {isMounted && (
                <Image
                  width="30"
                  height="30"
                  src={srcImageDark && darkMode.value ? srcImageDark : srcImage}
                  alt="social icon"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
