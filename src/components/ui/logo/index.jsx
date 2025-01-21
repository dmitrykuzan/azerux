import Link from 'next/link';
import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';

export const Logo = (props) => {
  //props
  const { src, className } = props;

  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const logoImageSrc = isMounted && darkMode.value ? '/img/ui/u_logo-light.svg' : '/img/ui/u_logo-dark.svg';

  const logoClassName = className ? `logo ${className}` : 'logo';

  return (
    <div className={logoClassName}>
      <Link href="/">
        <img src={logoImageSrc} width="202" height="50" alt="logo" loading="lazy" />
      </Link>
    </div>
  );
};
