import { useEffect, useRef, useState } from 'react';

import { PlanCard } from '@components/cards';
import { Container, Image, Typography } from '@components/ui';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { PLANS, PLANS_ANNUALY, PLANS_QUARTERLY, PLANS_SEMI } from '@utils';
import { useOnClickOutside, useTranslation } from '@hooks';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useDarkMode from 'use-dark-mode';

export const Plans = (props) => {
  const { setModalConsultActive } = props;

  const t = useTranslation();

  const [activeTab, setActiveTab] = useState('monthly');
  const [dropdownValue, setDropdownValue] = useState(t.actions.monthly);
  const [dropdownSale, setDropdownSale] = useState('');

  //active dropdown
  const [active, setActive] = useState(true);
  const toggleSort = () => setActive(!active);

  const handleTabClick = (tab, value, sale) => {
    setActiveTab(tab);
    setDropdownValue(value);
    setDropdownSale(sale);
  };
  //active dropdown

  //for bg
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundImageSrc = darkMode.value ? '/img/solutions/s_bg-dark.svg' : '/img/solutions/s_bg-light.svg';
  //for bg

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(true));
  //ClickOutside

  const breakpoints = {
    575: {
      slidesPerView: 2,
      centeredSlides: false,
      initialSlide: 0
    },

    1024: {
      slidesPerView: 3,
      centeredSlides: false,
      initialSlide: 0
    },

    1340: {
      slidesPerView: 4,
      centeredSlides: false,
      initialSlide: 0
    },

    1630: {
      slidesPerView: 5,
      centeredSlides: false,
      initialSlide: 0
    }
  };

  return (
    <section className="plans" id="plans">
      {isMounted && (
        <Image className="benefits__bg" src={backgroundImageSrc} width="753" height="788" alt="background decor" />
      )}
      <Container>
        <div className="plans__wrapper">
          <div className="plans__top stack column">
            <Typography variant="h3" tag="h2" weight="300" upperCase center>
              {t.title.serviceplans}
            </Typography>
            <Typography className="plans__subtitle" tag="p" weight="300" center>
              {t.subtitle.pricefix}
            </Typography>
            <div className="plans__tabs-navigation stack align-center">
              <button
                className={`plans__tabs-button stack center ${activeTab === 'monthly' ? 'active' : ''}`}
                onClick={() => setActiveTab('monthly')}
              >
                {t.actions.monthly}
              </button>
              <button
                className={`plans__tabs-button stack center ${activeTab === 'quarterly' ? 'active' : ''}`}
                onClick={() => setActiveTab('quarterly')}
              >
                {t.actions.quarterly}
                <span className="plans__tabs-button-sale stack center">-5%</span>
              </button>
              <button
                className={`plans__tabs-button stack center ${activeTab === 'semiannualy' ? 'active' : ''}`}
                onClick={() => setActiveTab('semiannualy')}
              >
                {t.actions.semiannualy}
                <span className="plans__tabs-button-sale stack center">-10%</span>
              </button>
              <button
                className={`plans__tabs-button stack center ${activeTab === 'annualy' ? 'active' : ''}`}
                onClick={() => setActiveTab('annualy')}
              >
                {t.actions.annualy}
                <span className="plans__tabs-button-sale stack center">-15%</span>
              </button>
            </div>

            <div ref={ref} className={`plans__tabs-dropdown ${active ? '' : 'active'}`}>
              <button className="plans__tabs-dropdown-value stack align-center" onClick={toggleSort}>
                <Typography upperCase weight="400">
                  {dropdownValue}
                </Typography>
                {dropdownSale && <span className="plans__tabs-dropdown-sale stack center">{dropdownSale}</span>}
                <span className="plans__tabs-dropdown-icon">
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
              <ul className="plans__tabs-dropdown-list stack column">
                <li className="plans__tabs-dropdown-item">
                  <button
                    className={`plans__tabs-button-mobile stack center ${activeTab === 'monthly' ? 'active' : ''}`}
                    onClick={() => handleTabClick('monthly', t.actions.monthly)}
                  >
                    {t.actions.monthly}
                  </button>
                </li>

                <li className="plans__tabs-dropdown-item">
                  <button
                    className={`plans__tabs-button-mobile stack center ${activeTab === 'quarterly' ? 'active' : ''}`}
                    onClick={() => handleTabClick('quarterly', t.actions.quarterly, '-5%')}
                  >
                    {t.actions.quarterly}
                    <span className="plans__tabs-button-mobile-sale stack center">-5%</span>
                  </button>
                </li>

                <li className="plans__tabs-dropdown-item">
                  <button
                    className={`plans__tabs-button-mobile stack center ${activeTab === 'semiannualy' ? 'active' : ''}`}
                    onClick={() => handleTabClick('semiannualy', t.actions.semiannualy, '-10%')}
                  >
                    {t.actions.semiannualy}
                    <span className="plans__tabs-button-mobile-sale stack center">-10%</span>
                  </button>
                </li>

                <li className="plans__tabs-dropdown-item">
                  <button
                    className={`plans__tabs-button-mobile stack center ${activeTab === 'annualy' ? 'active' : ''}`}
                    onClick={() => handleTabClick('annualy', t.actions.annualy, '-15%')}
                  >
                    {t.actions.annualy}
                    <span className="plans__tabs-button-mobile-sale stack center">-15%</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {activeTab === 'monthly' && (
            <div className="plans__content stack">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1.1}
                spaceBetween={10}
                centeredSlides={true}
                initialSlide={2}
                breakpoints={breakpoints}
                navigation={{
                  prevEl: '.plans-prev',
                  nextEl: '.plans-next'
                }}
                pagination={{
                  type: 'progressbar',
                  el: '.plans__pagination'
                }}
              >
                {PLANS.map(({ id, tariff, price, list, featuresTitle, featuresList, label }) => (
                  <SwiperSlide key={id}>
                    <PlanCard
                      tariff={tariff}
                      price={price}
                      list={list}
                      featuresTitle={featuresTitle}
                      featuresList={featuresList}
                      setModalConsultActive={setModalConsultActive}
                      // label={label}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {activeTab === 'quarterly' && (
            <div className="plans__content stack">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1.1}
                spaceBetween={10}
                centeredSlides={true}
                initialSlide={2}
                breakpoints={breakpoints}
                navigation={{
                  prevEl: '.plans-prev',
                  nextEl: '.plans-next'
                }}
                pagination={{
                  type: 'progressbar',
                  el: '.plans__pagination'
                }}
              >
                {PLANS_QUARTERLY.map(({ id, tariff, price, list, featuresTitle, featuresList, label }) => (
                  <SwiperSlide key={id}>
                    <PlanCard
                      tariff={tariff}
                      price={price}
                      list={list}
                      featuresTitle={featuresTitle}
                      featuresList={featuresList}
                      // label={label}
                      setModalConsultActive={setModalConsultActive}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {activeTab === 'semiannualy' && (
            <div className="plans__content stack">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1.1}
                spaceBetween={10}
                centeredSlides={true}
                initialSlide={2}
                breakpoints={breakpoints}
                navigation={{
                  prevEl: '.plans-prev',
                  nextEl: '.plans-next'
                }}
                pagination={{
                  type: 'progressbar',
                  el: '.plans__pagination'
                }}
              >
                {PLANS_SEMI.map(({ id, tariff, price, list, featuresTitle, featuresList, label }) => (
                  <SwiperSlide key={id}>
                    <PlanCard
                      tariff={tariff}
                      price={price}
                      list={list}
                      featuresTitle={featuresTitle}
                      featuresList={featuresList}
                      setModalConsultActive={setModalConsultActive}
                      // label={label}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {activeTab === 'annualy' && (
            <div className="plans__content stack">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1.1}
                spaceBetween={10}
                centeredSlides={true}
                initialSlide={2}
                breakpoints={breakpoints}
                navigation={{
                  prevEl: '.plans-prev',
                  nextEl: '.plans-next'
                }}
                pagination={{
                  type: 'progressbar',
                  el: '.plans__pagination'
                }}
              >
                {PLANS_ANNUALY.map(({ id, tariff, price, list, featuresTitle, featuresList, label }) => (
                  <SwiperSlide key={id}>
                    <PlanCard
                      tariff={tariff}
                      price={price}
                      list={list}
                      featuresTitle={featuresTitle}
                      featuresList={featuresList}
                      setModalConsultActive={setModalConsultActive}
                      // label={label}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <div className="plans__navigation stack justify-space-between">
            <button className="plans__navigation-button plans-prev">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.4 0.399902L12.72 2.0799L19.44 8.7999H0V11.1999H19.44L12.72 17.9199L14.4 19.5999L24 9.9999L14.4 0.399902Z"
                  fill="var(--clr-text-dark)"
                />
              </svg>
            </button>
            <div className="plans__pagination"></div>
            <button className="plans__navigation-button plans-next">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.4 0.399902L12.72 2.0799L19.44 8.7999H0V11.1999H19.44L12.72 17.9199L14.4 19.5999L24 9.9999L14.4 0.399902Z"
                  fill="var(--clr-text-dark)"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
