import { useRef } from 'react';

// Hooks
import { useOnClickOutside, useTranslation } from '@hooks';
import useDarkMode from 'use-dark-mode';

// UI Components
import { Menu, Logo, Typography, Theme, Language, Button } from '@components/ui';

// Components
import { Socials } from '@components/common';

export const BurgerMenu = (props) => {
  const { isMenuOpen, onClose, setModalConsultActive } = props;

  const t = useTranslation();

  const ref = useRef();

  useOnClickOutside(ref, onClose);

  const darkMode = useDarkMode(false);

  return (
    <div ref={ref} className={isMenuOpen ? 'burger__menu burger__menu--active' : 'burger__menu'}>
      <div className="burger__menu-wrapper stack column align-center">
        <div className="burger__menu-header stack align-center">
          <Logo className="burger__menu-logo" src="img/ui/u_logo-dark.svg" />
          <button className="burger__menu-close" onClick={onClose}></button>
        </div>

        <div className="burger__menu-content stack column align-center">
          <div className="burger__menu-list stack column">
            <Typography center tag="p">
              {t.common.menu}
            </Typography>
            <Menu onClose={onClose} className="burger__menu-navigation stack column" />
          </div>

          <Socials />

          <div className="burger__menu-options stack">
            <Language className="burger__menu-language" />
            <Theme onChange={darkMode.toggle} />
          </div>
        </div>

        <div className="burger__menu-footer stack column align-center">
          <Typography
            className="burger__menu-footer-title"
            tag="p"
            center
            dangerouslySetInnerHTML={{
              __html: t.common.protection.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                return `<span>${captureGroup}</span>`;
              })
            }}
          ></Typography>
          <Button variant="accent" upperCase text={t.actions.join} onClick={() => setModalConsultActive(true)} />
        </div>
      </div>
    </div>
  );
};
