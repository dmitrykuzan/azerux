import { useEffect, useState } from 'react';
import { Container } from '@components/ui';
import useDarkMode from 'use-dark-mode';

export const SystemsList = () => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="systems-list">
      <Container>
        {isMounted && (
          <ul className="systems-list__items stack center wrap">
            <li className="systems-list__item">
              <img
                src={`${darkMode.value ? '/img/systems/s_debian-light.svg' : '/img/systems/s_debian-dark.svg'}`}
                width="146"
                height="40"
                alt="system logo"
              />
            </li>
            <li className="systems-list__item">
              <img src="/img/systems/s_windows.svg" width="216" height="40" alt="system logo" />
            </li>
            <li className="systems-list__item">
              <img
                src={`${darkMode.value ? '/img/systems/s_ubuntu-light.svg' : '/img/systems/s_ubuntu-dark.svg'}`}
                width="154"
                height="40"
                alt="system logo"
              />
            </li>
            <li className="systems-list__item">
              <img
                src={`${darkMode.value ? '/img/systems/s_rockylinux-light.svg' : '/img/systems/s_rockylinux-dark.svg'}`}
                width="181"
                height="40"
                alt="system logo"
              />
            </li>
            <li className="systems-list__item">
              <img
                src={`${darkMode.value ? '/img/systems/s_almalinux-light.svg' : '/img/systems/s_almalinux-dark.svg'}`}
                width="181"
                height="40"
                alt="system logo"
              />
            </li>
          </ul>
        )}
      </Container>
    </section>
  );
};
