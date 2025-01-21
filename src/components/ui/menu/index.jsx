import Link from 'next/link';
import { useOnClickOutside, useTranslation } from '@hooks';
import { MENU, SERVICESPAGES } from '@utils';
import { useRef, useState } from 'react';

export const Menu = (props) => {
  const { className, onClose } = props;

  const [activeItem, setActiveItem] = useState(null);

  const t = useTranslation();

  //add active
  const hasSubmenu = (key) => key === 'services' || key === 'protection';

  const handleItemClick = (key) => {
    if (hasSubmenu(key)) {
      setActiveItem(activeItem === key ? null : key);
    }
  };
  //add active

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setActiveItem(false));
  //ClickOutside

  const menuClassName = className ? `${className}` : 'menu stack align-center';

  return (
    <nav className={menuClassName}>
      <ul ref={ref} className="menu__list">
        {Object.entries(MENU).map(([key, value]) => (
          <li
            key={key}
            className={`menu__item ${activeItem === key ? 'active' : ''}`}
            onClick={() => handleItemClick(key)}
          >
            <Link
              onClick={value === '#' ? (e) => e.preventDefault() : onClose}
              className="menu__item-link stack center"
              href={value}
            >
              {t.navigation[key]}

              {key === 'services' && (
                <span className="menu__submenu-arrow stack center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <path
                        d="M15 5.19149L13.775 4L8.875 8.76596L8.00011 9.5L7.125 8.76596L2.225 4L1 5.19149L8 12L15 5.19149Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              )}

              {key === 'protection' && (
                <span className="menu__submenu-arrow stack center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <path
                        d="M15 5.19149L13.775 4L8.875 8.76596L8.00011 9.5L7.125 8.76596L2.225 4L1 5.19149L8 12L15 5.19149Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              )}
            </Link>

            {key === 'services' && (
              <ul className="menu__submenu stack column" onMouseLeave={onClose}>
                {Object.entries(SERVICESPAGES).map(([subKey]) => (
                  <li key={subKey} className="menu__submenu-item">
                    <Link onClick={onClose} className="menu__submenu-link stack" href={`/${subKey}`}>
                      {t.navigation[subKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {key === 'protection' && (
              <ul className="menu__submenu stack column" onMouseLeave={onClose}>
                <li className="menu__submenu-item">
                  <Link onClick={onClose} className="menu__submenu-link stack" href="/webprotection">
                    {t.navigation.webprotection}
                  </Link>
                </li>
                <li className="menu__submenu-item">
                  <Link onClick={onClose} className="menu__submenu-link stack" href="/netprotection">
                    {t.navigation.netprotection}
                  </Link>
                </li>
                <li className="menu__submenu-item">
                  <Link onClick={onClose} className="menu__submenu-link stack" href="/vds-vps">
                    {t.navigation.vdsvps}
                  </Link>
                </li>
                <li className="menu__submenu-item">
                  <Link onClick={onClose} className="menu__submenu-link stack" href="/dedicated-servers">
                    {t.navigation.server}
                  </Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
