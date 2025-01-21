import { useEffect, useState } from "react";

//UI
import { Image, Typography } from "@components/ui";

// Hooks
import useDarkMode from "use-dark-mode";

export const ContactCard = (props) => {
  //props
  const { id, srcIconLight, srcIconDark, link, text } = props;

  const darkMode = useDarkMode();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="contact__card" key={id}>
      <a
        className="contact__card-link stack align-center"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isMounted && (
          <Image
            src={darkMode.value ? srcIconLight : srcIconDark}
            alt={text}
            width="50"
            height="50"
          />
        )}

        <Typography tag="span" weight="300" variant="h2">
          {text}
        </Typography>
      </a>
    </div>
  );
};
