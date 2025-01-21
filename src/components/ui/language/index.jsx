import { Image, Typography } from '@components/ui';
import { useOnClickOutside, useTranslation } from '@hooks';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { setCookie } from 'cookies-next';

export const Language = (props) => {
  const { className } = props;

  //translation
  const t = useTranslation();
  //translation

  //active dropdown
  const [active, setActive] = useState(true);

  const toggleLanguage = () => {
    setActive(!active);
  };
  //active dropdown

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(true));
  //ClickOutside

  //locale
  const { locale, locales, asPath, push } = useRouter();

  const handleLocale = (newlocale) => () => {
    const expires = new Date();
    // 365 days after today
    expires.setDate(expires.getDate() + 365);

    setCookie('NEXT_LOCALE', newlocale, {
      expires
    });

    push(asPath, asPath, {
      locale: newlocale
    });
  };
  //locale

  const languageClassName = `language ${className || ''} ${active ? '' : 'language--active'}`;

  return (
    <div ref={ref} className={languageClassName}>
      <button className="language__button stack center" onClick={toggleLanguage}>
        <div className="language__button-wrapper stack align-center">
          <span className="language__button-icon">
            <Image src={`/img/ui/u_${locale}.svg`} width="20" height="20" alt="Globus" />
          </span>
          <Typography tag="span" className="language__button-text">
            {locale.toUpperCase()}
          </Typography>
        </div>
        <span className="language__button-arrow stack center">
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
      <ul className="language__dropdown">
        {locales?.map((lang) => {
          return (
            <li key={lang} onClick={handleLocale(lang)} className="language__item stack align-center">
              <div className="language__item-icon">
                <Image src={`/img/ui/u_${lang}.svg`} width="20" height="20" alt="Flag ru" />
              </div>
              <div className="language__item-name">{t.actions[lang]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
