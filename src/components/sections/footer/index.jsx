import { useState } from 'react';
import Link from 'next/link';

// UI Components
import { Container, Image, Logo, Menu, Typography } from '@components/ui';

// Components
import { Socials } from '@components/common';

// Hooks
import { useTranslation } from '@hooks';
import useDarkMode from 'use-dark-mode';

// Utilities
import { SERVICES, PROTECTION } from '@utils';

//Api
import { submitFeedback } from '@api/feedback';

export const Footer = ({ activeSuccessModal }) => {
  const t = useTranslation();
  const darkMode = useDarkMode();

  const [formData, setFormData] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      name: null,
      phoneNumber: null,
      email: formData.trim() === '' ? null : formData
    };

    setIsSubmitting(true);

    try {
      await submitFeedback(updatedFormData);
      activeSuccessModal();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer stack column">
      <div className="footer__wrapper">
        <Container>
          <div className="footer__content stack justify-space-between">
            <div className="footer__policy footer__item stack column">
              <Logo src="/img/ui/u_logo-dark.svg" />
              <Typography weight="300" className="footer__policy-text">
                {t.common.policy}
              </Typography>

              <Typography weight="300" className="footer__policy-text-contact">
                <Image
                  width={25}
                  height={25}
                  src={`/img/sections/footer/${darkMode.value ? 'mail' : 'dark_mail'}.svg`}
                />
                sales@azerux.com
              </Typography>

              <Typography weight="300" className="footer__policy-text-contact">
                <Image
                  width={25}
                  height={25}
                  src={`/img/sections/footer/${darkMode.value ? 'phone' : 'dark_phone'}.svg`}
                />
                +351-913-437-707
              </Typography>
            </div>

            <div className="footer__menu-wrapper footer__item stack column">
              <Typography tag="p">{t.common.menu}</Typography>
              <Menu className="footer__menu" />
            </div>
            <div className="footer__services footer__item stack column">
              <Typography tag="p">{t.common.services}</Typography>
              <ul className="footer__services-list stack column">
                {SERVICES.map(({ id, srcLink, text }) => (
                  <li key={id}>
                    <Link className="footer__link" href={srcLink}>
                      {t.actions[text]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__protection footer__item stack column">
              <Typography tag="p">{t.common.ddosprotection}</Typography>
              <ul className="footer__protection-list stack column">
                {PROTECTION.map(({ id, srcLink, text }) => (
                  <li key={id}>
                    <Link className="footer__link" href={srcLink}>
                      {t.actions[text]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__submit footer__item stack column">
              <Typography tag="p">{t.common.subscribe}</Typography>

              <div className="footer__submit-wrapper stack column">
                <Typography className="footer__submit-text" tag="p">
                  {t.common.subscribe_fill}
                </Typography>

                <form className="footer__submit-form" onSubmit={handleSubmit}>
                  <div className="footer__submit-input">
                    <input placeholder={t.labels.email} type="email" required onChange={handleChange} />
                    <button className="footer__submit-button stack center" disabled={isSubmitting} type="submit">
                      <Image src="/img/ui/u_arrow-right.svg" width="16" height="16" alt="arrow right" />
                    </button>
                  </div>
                </form>

                <Socials />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="footer__bottom">
        <Typography tag="p" center>
          {t.common.copyright}
        </Typography>

        <div className="footer__bottom-container">
          <Typography tag="p" center>
            <Link href="/policy/privacy">Privacy Policy</Link>
          </Typography>

          <Typography tag="p" center>
            <Link href="/policy/terms">Terms of Use</Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
};
