import { Image, Typography } from '@components/ui';
import { useOnClickOutside, useTranslation } from '@hooks';
import { useRef, useState } from 'react';

export const LocationDropDown = (props) => {
  //props
  const { label } = props;

  //Translation
  const t = useTranslation();

  // State DropDown
  const [selectedFlag, setSelectedFlag] = useState('/img/ui/u_en.svg');
  const [selectedValue, setSelectedValue] = useState(t.actions.locationen);
  const [isActive, setIsActive] = useState(false);

  const handleSelection = (flag, value) => {
    setSelectedFlag(flag);
    setSelectedValue(value);
    setIsActive(false);
  };

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };
  // State DropDown

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setIsActive(false));
  //ClickOutside

  return (
    <div className={`location stack align-center ${isActive ? 'active' : ''}`} ref={ref}>
      {label && (
        <Typography className="location__label" weight="300" upperCase>
          {label}
        </Typography>
      )}

      <div className="location__wrapper">
        <button className="location__button stack align-center justify-space-between" onClick={toggleDropdown}>
          <div className="location__button-wrapper stack align-center">
            <span className="location__button-flag stack center">
              <Image src={selectedFlag} width="16" height="16" alt="Country flag" />
            </span>
            <Typography className="location__button-value" weight="400">
              {selectedValue}
            </Typography>
          </div>

          <span className="location__button-icon stack center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path
                  d="M15 5.19149L13.775 4L8.875 8.76596L8.00011 9.5L7.125 8.76596L2.225 4L1 5.19149L8 12L15 5.19149Z"
                  fill=""
                />
              </g>
            </svg>
          </span>
        </button>
        <ul className="location__dropdown">
          <li
            className="location__item stack align-center"
            onClick={() => handleSelection('/img/ui/u_en.svg', t.actions.locationen)}
          >
            <span className="location__item-flag">
              <Image src="/img/ui/u_en.svg" width="16" height="16" alt="Country flag" />
            </span>
            <Typography className="location__item-value" weight="400">
              {t.actions.locationen}
            </Typography>
          </li>
          <li
            className="location__item stack align-center"
            onClick={() => handleSelection('/img/ui/u_fr.svg', t.actions.locationfr)}
          >
            <span className="location__item-flag">
              <Image src="/img/ui/u_fr.svg" width="16" height="16" alt="Country flag" />
            </span>
            <Typography className="location__item-value" weight="400">
              {t.actions.locationfr}
            </Typography>
          </li>
          <li
            className="location__item stack align-center"
            onClick={() => handleSelection('/img/ui/u_ge.svg', t.actions.locationge)}
          >
            <span className="location__item-flag">
              <Image src="/img/ui/u_ge.svg" width="16" height="16" alt="Country flag" />
            </span>
            <Typography className="location__item-value" weight="400">
              {t.actions.locationge}
            </Typography>
          </li>
          <li
            className="location__item stack align-center"
            onClick={() => handleSelection('/img/ui/u_ca.svg', t.actions.locationca)}
          >
            <span className="location__item-flag">
              <Image src="/img/ui/u_ca.svg" width="16" height="16" alt="Country flag" />
            </span>
            <Typography className="location__item-value" weight="400">
              {t.actions.locationca}
            </Typography>
          </li>
          <li
            className="location__item stack align-center"
            onClick={() => handleSelection('/img/ui/u_ne.svg', t.actions.locationnl)}
          >
            <span className="location__item-flag">
              <Image src="/img/ui/u_ne.svg" width="16" height="16" alt="Country flag" />
            </span>
            <Typography className="location__item-value" weight="400">
              {t.actions.locationnl}
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};
