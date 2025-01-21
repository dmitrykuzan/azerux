import { useEffect, useState } from 'react';

// UI Components
import { Image, Typography } from '@components/ui';

// Hooks
import useDarkMode from 'use-dark-mode';

export const BenefitsCard = (props) => {
  //props
  const { iconSrcDark, iconSrcLight, title, description } = props;

  const darkMode = useDarkMode();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="benefits__card stack align-center">
      <div className="benefits__card-icon">
        {isMounted && <Image width="40" height="40" src={darkMode.value ? iconSrcLight : iconSrcDark} alt="icon" />}
      </div>
      <div className="benefits__card-text stack column">
        <Typography className="benefits__card-title" tag="h3">
          {title}
        </Typography>
        <Typography className="benefits__card-subtitle" tag="p">
          {description}
        </Typography>
      </div>
    </div>
  );
};
