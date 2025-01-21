import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { Container, Image, Typography } from '@components/ui';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTranslation } from '@hooks';

export const InfoSlider = () => {
  const t = useTranslation();

  return (
    <section className="info-slider">
      <Container>
        <div className="info-slider__wrapper stack align-center">
          <Image
            className="info-slider__image"
            src="/img/services/s_3d.png"
            width="252"
            height="262"
            alt="Azerux 3D Model"
          />

          <div className="info-slider__body">
            <Swiper
              className="swiper"
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                prevEl: '.info-slider-prev',
                nextEl: '.info-slider-next'
              }}
              pagination={{
                type: 'progressbar',
                el: '.info-slider__pagination'
              }}
            >
              <SwiperSlide>
                <div className="info-slider__slide stack column">
                  <Typography className="info-slider__title" tag="h3" weight="500">
                    {t.title.infrastructure}
                  </Typography>
                  <Typography className="info-slider__subtitle" tag="p" weight="300">
                    {t.subtitle.notonly}
                  </Typography>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="info-slider__slide stack column">
                  <Typography className="info-slider__title" tag="h3" weight="500">
                    {t.title.designed}
                  </Typography>
                  <Typography className="info-slider__subtitle" tag="p" weight="300">
                    {t.subtitle.prepared}
                  </Typography>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="info-slider__navigation stack justify-space-between">
              <button className="info-slider__navigation-button info-slider-prev">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.4 0.399902L12.72 2.0799L19.44 8.7999H0V11.1999H19.44L12.72 17.9199L14.4 19.5999L24 9.9999L14.4 0.399902Z"
                    fill="var(--clr-text-dark)"
                  />
                </svg>
              </button>
              <div className="info-slider__pagination"></div>
              <button className="info-slider__navigation-button info-slider-next">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.4 0.399902L12.72 2.0799L19.44 8.7999H0V11.1999H19.44L12.72 17.9199L14.4 19.5999L24 9.9999L14.4 0.399902Z"
                    fill="var(--clr-text-dark)"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
