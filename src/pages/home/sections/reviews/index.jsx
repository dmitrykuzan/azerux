import { Container, Typography } from '@components/ui';
import { useTranslation } from '@hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { REVIEWS } from '@utils';
import { ReviewCard } from '@components/cards';

export const Reviews = () => {
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

    1300: {
      slidesPerView: 5,
      centeredSlides: false,
      initialSlide: 0
    }
  };

  return (
    <section className="reviews">
      <Container>
        <div className="reviews__wrapper stack column">
          <Typography tag="h2" variant="h1" weight="300" upperCase center>
            {t.title.trustus}
          </Typography>
          <div className="reviews__slider">
            <Swiper
              className="swiper"
              modules={[Navigation, Pagination]}
              slidesPerView={1.1}
              spaceBetween={10}
              centeredSlides={true}
              initialSlide={2}
              breakpoints={breakpoints}
              navigation={{
                prevEl: '.reviews-prev',
                nextEl: '.reviews-next'
              }}
              pagination={{
                type: 'progressbar',
                el: '.reviews__pagination'
              }}
            >
              {REVIEWS.map(({ id, review, srcImage, srcImageLight }) => (
                <SwiperSlide key={id}>
                  <ReviewCard review={t.subtitle[review]} srcImage={srcImage} srcImageLight={srcImageLight} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="reviews__navigation stack justify-space-between">
              <button className="reviews__navigation-button reviews-prev">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.4 0.399902L12.72 2.0799L19.44 8.7999H0V11.1999H19.44L12.72 17.9199L14.4 19.5999L24 9.9999L14.4 0.399902Z"
                    fill="var(--clr-text-dark)"
                  />
                </svg>
              </button>
              <div className="reviews__pagination"></div>
              <button className="reviews__navigation-button reviews-next">
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
