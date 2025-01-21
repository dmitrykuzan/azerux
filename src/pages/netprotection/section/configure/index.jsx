import { useEffect, useState } from 'react';
import { PlanCard } from '@components/cards';
import { Container, Image, Typography } from '@components/ui';
import { useTranslation } from '@hooks';
import useDarkMode from 'use-dark-mode';

export const Configure = () => {
  //toggle state
  const [activeProtectionModel, setActiveProtectionModel] = useState('always');
  const [activeAccessArea, setActiveAccessArea] = useState('global');
  const [activeTafir, setActiveTafir] = useState('basic');

  //planlist
  const planlist = ['lvlbase', 'alwayson', 'areaglobal', 'bandwidth'];
  //translation
  const t = useTranslation();

  //bg
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundImageSrc = darkMode.value ? '/img/solutions/s_bg-dark.svg' : '/img/solutions/s_bg-light.svg';

  //range
  const [value, setValue] = useState(500);
  const [price, setPrice] = useState(350);

  const min = 50;
  const max = 1000;

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const fillWidth = ((value - min) / (max - min)) * 100;

  useEffect(() => {
    setPrice(Math.round(value * 0.7));
  }, [value]);

  return (
    <section className="configure" id="configure">
      {isMounted && (
        <Image
          loading="lazy"
          className="benefits__bg"
          src={backgroundImageSrc}
          width="753"
          height="788"
          alt="background decor"
        />
      )}
      <Container>
        <div className="configure__wrapper stack column">
          <Typography className="configure__title" tag="h2" variant="h1" weight="300" upperCase center>
            {t.title.configure}
          </Typography>

          <div className="configure__body stack">
            <div className="configure__options stack">
              <div className="configure__options-cards stack column">
                <button
                  onClick={() => setActiveTafir('basic')}
                  className={`configure__options-card stack column ${activeTafir === 'basic' ? 'active' : ''}`}
                >
                  <Typography className="configure__options-card-title" tag="h4" variant="h3" weight="400" upperCase>
                    {t.actions.basic}
                  </Typography>
                  <Typography className="configure__options-card-subtitle" weight="300">
                    {t.subtitle.ddostype}
                  </Typography>

                  <span className="configure__options-card-checkbox"></span>
                </button>

                <button
                  onClick={() => setActiveTafir('optimal')}
                  className={`configure__options-card stack column ${activeTafir === 'optimal' ? 'active' : ''}`}
                >
                  <Typography className="configure__options-card-title" tag="h4" variant="h3" weight="400" upperCase>
                    {t.actions.optimal}
                  </Typography>
                  <Typography className="configure__options-card-subtitle" weight="300">
                    {t.subtitle.ddostypeoptimal}
                  </Typography>

                  <span className="configure__options-card-checkbox"></span>
                </button>
              </div>

              <div className="configure__options-settings stack column">
                <div className="configure__options-toggle-wrapper stack column">
                  <Typography className="configure__options-toggle-title" weight="300" tag="span" upperCase>
                    {t.labels.protection}
                  </Typography>

                  <div className="configure__options-toggle stack align-center">
                    <button
                      className={`configure__options-button ${activeProtectionModel === 'always' ? 'active' : ''}`}
                      onClick={() => setActiveProtectionModel('always')}
                    >
                      {t.actions.always}
                    </button>
                    <button
                      className={`configure__options-button ${activeProtectionModel === 'demand' ? 'active' : ''}`}
                      onClick={() => setActiveProtectionModel('demand')}
                    >
                      {t.actions.demand}
                    </button>
                  </div>
                </div>

                <div className="configure__options-toggle-wrapper stack column">
                  <Typography className="configure__options-toggle-title" weight="300" tag="span" upperCase>
                    {t.labels.access}
                  </Typography>

                  <div className="configure__options-toggle stack align-center">
                    <button
                      className={`configure__options-button ${activeAccessArea === 'global' ? 'active' : ''}`}
                      onClick={() => setActiveAccessArea('global')}
                    >
                      {t.actions.global}
                    </button>
                    <button
                      className={`configure__options-button ${activeAccessArea === 'asia' ? 'active' : ''}`}
                      onClick={() => setActiveAccessArea('asia')}
                    >
                      {t.actions.asia}
                    </button>
                  </div>
                </div>

                <div className="configure__options-progressbar stack column">
                  <Typography className="configure__options-progressbar-title" weight="300" tag="span" upperCase>
                    {t.labels.bandwidth}
                  </Typography>

                  <div className="configure__options-progressbar-body stack align-center">
                    <div className="configure__options-progressbar-track">
                      <span
                        className="configure__options-progressbar-fill"
                        style={{ width: `${Math.min(fillWidth, 100)}%` }}
                      ></span>
                      <input
                        type="range"
                        min={min}
                        max={max}
                        value={value}
                        step={10}
                        onChange={handleSliderChange}
                        className="configure__options-progressbar-input"
                      />
                    </div>

                    <span className="configure__options-progressbar-value">{value} Mbps</span>
                  </div>
                </div>
              </div>
            </div>
            <PlanCard tariff={t.labels.yourplan} price={price} list={planlist} />
          </div>
        </div>
      </Container>
    </section>
  );
};
