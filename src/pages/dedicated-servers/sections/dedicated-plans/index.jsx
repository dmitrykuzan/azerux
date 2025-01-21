import { useRef, useState } from 'react';

import { PlanCard } from '@components/cards';
import { Container, Dropdown, LocationDropDown, Sort, Typography } from '@components/ui';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { DEDICATED_PLANS } from '@utils';
import { useTranslation } from '@hooks';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const DedicatedPlans = () => {
  const t = useTranslation();

  const breakpoints = {
    575: {
      slidesPerView: 2,
      centeredSlides: false,
      initialSlide: 0
    },

    767: {
      slidesPerView: 3,
      centeredSlides: false,
      initialSlide: 0
    },

    1024: {
      slidesPerView: 4,
      centeredSlides: false,
      initialSlide: 0
    },

    1630: {
      slidesPerView: 5,
      centeredSlides: false
    }
  };

  return (
    <section className="plans plans--dedicated" id="plans">
      <Container>
        <div className="plans__wrapper stack column">
          <div className="plans__top stack column">
            <Typography variant="h3" weight="300" tag="h2" upperCase center>
              {t.title.selectvdsvps}
            </Typography>
          </div>

          <div className="plans--dedicated__navigation stack">
            <div className="plans--dedicated__options stack">
              <LocationDropDown label={t.labels.datacenter} />
              <Dropdown label={t.labels.cpu} options={['1 CPU', '6 CPU', '12 CPU']} initialValue="1 CPU" />
              <Dropdown label={t.labels.cpucore} options={['ALL', '6', '12']} initialValue="ALL" />
              <Dropdown label={t.labels.ram} options={['16 GB', '32 GB', '64 GB']} initialValue="16 GB" />
              <Dropdown label={t.labels.drives} options={['4', '8', '16']} initialValue="4" />
            </div>
            <div className="plans--dedicated__location-mobile stack">
              <LocationDropDown label={t.labels.datacenter} />
              <Sort />
            </div>
          </div>

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
              {DEDICATED_PLANS.map(
                ({ id, tariff, price, list, featuresTitle, featuresList, labelQuick, twoButton }) => (
                  <SwiperSlide key={id}>
                    <PlanCard
                      tariff={tariff}
                      price={price}
                      list={list}
                      featuresTitle={featuresTitle}
                      featuresList={featuresList}
                      // labelQuick={labelQuick}
                      twoButton={twoButton}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

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
