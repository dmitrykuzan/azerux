import { useState } from "react";

// UI Components
import {
  Burger,
  BurgerMenu,
  Button,
  Container,
  Language,
  Logo,
  Menu,
  Theme,
} from "@components/ui";

// Hooks
import { useTranslation } from "@hooks";
import useDarkMode from "use-dark-mode";

export const Header = (props) => {
  const { setModalConsultActive } = props;

  //**Menu burger state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const t = useTranslation();

  const darkMode = useDarkMode(false);

  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        setModalConsultActive={setModalConsultActive}
        onClose={() => setIsMenuOpen(false)}
      />

      <header className="header stack align-center">
        <Container>
          <div className="header__wrapper stack align-center justify-space-between">
            <Logo />
            <Menu />
            <a
              className="header__phone-mobile stack center"
              href="tel:+351913437707"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2323 13.9201C16.0241 12.8867 14.7979 12.2608 13.6046 13.2926L12.892 13.9162C12.3706 14.3689 11.4012 16.484 7.65334 12.1726C3.90622 7.86665 6.13607 7.19621 6.65822 6.74743L7.37471 6.12304C8.56183 5.08889 8.11383 3.78704 7.25763 2.44694L6.74095 1.63524C5.88085 0.29826 4.94427 -0.579789 3.75402 0.452796L3.1109 1.01475C2.58485 1.39797 1.11441 2.64363 0.757731 5.01006C0.328463 7.84948 1.68261 11.101 4.78505 14.6686C7.88358 18.2378 10.9173 20.0306 13.7911 19.9993C16.1794 19.9736 17.6217 18.692 18.0729 18.2261L18.7183 17.6633C19.9054 16.6315 19.1679 15.581 17.9589 14.5453L17.2323 13.9201Z"
                  fill=""
                />
              </svg>
            </a>
            <div className="header__navigation stack">
              <div className="header__phone stack align-center">
                <span className="header__phone-icon stack center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5" clipPath="url(#clip0_708_1350)">
                      <path
                        d="M8.61638 6.96006C8.01228 6.44337 7.39921 6.1304 6.80252 6.6463L6.44623 6.95811C6.18555 7.18445 5.70087 8.24201 3.82691 6.0863C1.95335 3.93332 3.06828 3.59811 3.32935 3.37372L3.6876 3.06152C4.28116 2.54445 4.05716 1.89352 3.62906 1.22347L3.37072 0.817618C2.94067 0.14913 2.47238 -0.289894 1.87726 0.226398L1.55569 0.507374C1.29267 0.698984 0.557451 1.32181 0.37911 2.50503C0.164475 3.92474 0.841549 5.5505 2.39277 7.3343C3.94204 9.11889 5.45891 10.0153 6.89579 9.99967C8.08994 9.98679 8.81111 9.34601 9.03667 9.11303L9.3594 8.83167C9.95296 8.31576 9.58418 7.7905 8.97969 7.27264L8.61638 6.96006Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_708_1350">
                        <rect width="10" height="10" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <a href="tel:+351913437707">+351-913-437-707</a>
              </div>
              <Language />
              <Theme onChange={darkMode.toggle} />
              <Button
                className="header__button"
                variant="accent"
                upperCase
                text={t.actions.join}
                onClick={() => setModalConsultActive(true)}
              />
            </div>
            <Burger openMenu={openMenu} isMenuOpen={isMenuOpen} />
          </div>
        </Container>
      </header>
    </>
  );
};
