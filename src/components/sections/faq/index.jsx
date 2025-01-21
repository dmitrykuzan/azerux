import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// UI Components
import { Button, Container, Typography } from '@components/ui';

// Hooks
import { useTranslation } from '@hooks';

// Utilities
import { FAQLIST as DEFAULT_FAQLIST } from '@utils';
import { useMediaQuery } from 'react-responsive';
import { Image } from './image';
import { FaqImage } from './faqImage';

export const FAQ = (props) => {
  const { setModalConsultActive, FAQ = DEFAULT_FAQLIST, className } = props;

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [activeIndex, setActiveIndex] = useState(isTabletOrMobile ? null : 0);

  const handleTabClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const t = useTranslation();

  return (
    <section className={className ? `${className} faq` : 'faq'} id="faq">
      <Container>
        <div className="faq__wrapper stack column">
          <Typography tag="h2" variant="h1" className="faq__title" weight="300" upperCase center>
            {t.title.faq}
          </Typography>

          <div className="faq__body">
            {!isTabletOrMobile && (
              <div className="faq__body-desktop stack">
                <div className="faq__body-desktop-btns stack column">
                  {FAQ.map(({ id, question }) => (
                    <button
                      className={`faq__body-desktop-btn stack align-center justify-space-between ${
                        activeIndex === id ? 'active' : ''
                      }`}
                      onClick={() => handleTabClick(id)}
                      key={id}
                    >
                      {t.actions[question]}
                      <span className="icon stack center">
                        <Image />
                      </span>
                    </button>
                  ))}
                </div>
                <div className="faq__body-desktop-content">
                  <AnimatePresence initial={false}>
                    {FAQ.map(
                      ({ id, answer, question }) =>
                        activeIndex === id && (
                          <motion.div
                            key={id}
                            className="faq__body-desktop-answer stack column"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Typography className="faq__body-desktop-answer-title" tag="h3" weight="400" upperCase>
                              {t.actions[question]}
                            </Typography>
                            <Typography className="faq__body-desktop-answer-description" tag="p" weight="300">
                              <span dangerouslySetInnerHTML={{ __html: t.subtitle[answer] }}></span>
                            </Typography>

                            <Button
                              className="faq__body-desktop-consult-btn"
                              variant="accent"
                              upperCase
                              text={t.actions.consult}
                              onClick={() => setModalConsultActive(true)}
                            />
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {isTabletOrMobile && (
              <>
                <div className="faq__body-mobile stack column">
                  {FAQ.map(({ id, question, answer }) => (
                    <div className="faq__body-mobile-item stack column" key={id}>
                      <button
                        className={`faq__body-mobile-btn stack align-center justify-space-between ${
                          activeIndex === id ? 'active' : ''
                        }`}
                        onClick={() => handleTabClick(id)}
                      >
                        {t.actions[question]}

                        <span className="icon stack center">
                          <FaqImage isActive={activeIndex === id} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {activeIndex === id && (
                          <motion.div
                            className="faq__body-mobile-answer stack column"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <div className="faq__body-mobile-answer stack column">
                              <Typography tag="h3" variant="h2" weight="400" upperCase>
                                {t.actions[question]}
                              </Typography>
                              <Typography className="faq__body-mobile-description" weight="300">
                                {t.subtitle[answer]}
                              </Typography>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
                <Button
                  className="faq__body-mobile-consult-btn"
                  variant="accent"
                  upperCase
                  text={t.actions.consult}
                  onClick={() => setModalConsultActive(true)}
                />
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
