import { SolutionCard } from '@components/cards';
import { Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';
import { DDOSPROTECTION, SOLUTIONS } from '@utils';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Импортируем необходимые компоненты
import useDarkMode from 'use-dark-mode';

export const Solutions = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  const t = useTranslation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundImageSrc = darkMode.value ? '/img/solutions/s_bg-dark.svg' : '/img/solutions/s_bg-light.svg';

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="solutions" id="services">
      {isMounted && (
        <Image className="solutions__bg" src={backgroundImageSrc} width="753" height="788" alt="background decor" />
      )}

      <Container>
        <div className="solutions__wrapper stack column">
          <div className="solutions__text stack column">
            <Typography
              className="solutions__title"
              tag="h2"
              weight="200"
              upperCase
              center
              dangerouslySetInnerHTML={{
                __html: t.title.solutions.replace(
                  /\{\{([^}]*)\}\}/g,
                  (_, captureGroup) => `<span>${captureGroup}</span>`
                )
              }}
            ></Typography>
            <Typography
              className="solutions__subtitle"
              tag="h3"
              variant="h1"
              weight="300"
              upperCase
              center
              dangerouslySetInnerHTML={{
                __html: t.title.cybersecurity.replace(
                  /\{\{([^}]*)\}\}/g,
                  (_, captureGroup) => `<span>${captureGroup}</span>`
                )
              }}
            ></Typography>
            <Typography className="solutions__description" tag="p" color="opacity70" weight="300" center>
              {t.subtitle.expertteam}
            </Typography>
          </div>

          <div className="solutions__tabs stack column">
            <div className="solutions__tabs-navigation stack align-center">
              <button
                className={`solutions__tabs-button ${activeTab === 'services' ? 'active' : ''}`}
                onClick={() => setActiveTab('services')}
              >
                {t.actions.services}
              </button>
              <button
                className={`solutions__tabs-button ${activeTab === 'ddos' ? 'active' : ''}`}
                onClick={() => setActiveTab('ddos')}
              >
                {t.actions.ddosprotection}
              </button>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {activeTab === 'services' && (
                <motion.div
                  className="solutions__tabs-content"
                  key="services"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <ul className="solutions__tabs-list solutions__tabs-list--services">
                    {SOLUTIONS.map(({ id, title, description, srcImage, isNew, link }) => (
                      <motion.li
                        className="solutions__tabs-item"
                        key={id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.15, delay: id * 0.1 }}
                      >
                        <SolutionCard
                          title={title}
                          description={description}
                          srcImage={srcImage}
                          isNew={isNew}
                          link={link}
                        />
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'ddos' && (
                <motion.div
                  className="solutions__tabs-content"
                  key="ddos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <ul className="solutions__tabs-list solutions__tabs-list--ddos-protection">
                    {DDOSPROTECTION.map(({ id, title, description, srcImage, isNew, link }) => (
                      <motion.li
                        className="solutions__tabs-item"
                        key={id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.15, delay: id * 0.1 }}
                      >
                        <SolutionCard
                          // animationOff
                          title={title}
                          description={description}
                          srcImage={srcImage}
                          isNew={isNew}
                          link={link}
                        />
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
