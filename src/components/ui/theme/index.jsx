import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import { Image } from "@components/ui";

export const Theme = (props) => {
  const { checked, onChange } = props;

  const darkMode = useDarkMode(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button onClick={onChange} className="theme stack center">
      {isMounted && (
        <div
          className={`theme__wrapper stack center ${
            darkMode.value ? "dark" : ""
          }`}
        >
          {darkMode.value ? (
            <Image
              src="/img/ui/u_theme-dark.svg"
              width="16"
              height="16"
              alt="Sun"
            />
          ) : (
            <Image
              src="/img/ui/u_theme-light.svg"
              width="16"
              height="16"
              alt="Sun"
            />
          )}
        </div>
      )}
    </button>
  );
};
