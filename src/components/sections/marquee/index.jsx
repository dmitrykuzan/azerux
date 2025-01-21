import { useEffect, useRef , useMemo} from 'react';

// UI Components
import { Typography } from '@components/ui';

// Hooks
import { useTranslation } from '@hooks';

// Utilities
import { MARQUEEBOT, MARQUEETOP } from '@utils';

const Marquee = ({ children, direction = 'rtl', duration = 10 }) => {
  const contentRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    let startTime = null;
    const totalWidth = content.scrollWidth / 2;
    const speed = totalWidth / (duration * 1000);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const distance = (elapsed * speed) % totalWidth;

      let transformX;
      if (direction === 'rtl') {
        transformX = -distance;
      } else {
        transformX = -totalWidth + distance;
      }

      content.style.transform = `translateX(${transformX}px)`;
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [direction, duration]);

  return (
    <div className="marquee__wrapper">
      <div className="marquee__content" ref={contentRef}>
        {children}
        {children}
      </div>
    </div>
  );
};

export const MarqueeLines = () => {
  const t = useTranslation();

  const memoTop = useMemo(
    () =>
      MARQUEETOP.map(({ id, name }) => (
        <div className="marquee__line" key={name}>
          <Typography tag="p" weight="300" center>
            {t.common[name]}
          </Typography>
        </div>
      )),
    [t]
  );

  const memoBot = useMemo(
    () =>
      MARQUEEBOT.map(({ id, name }) => (
        <div className="marquee__line" key={name}>
          <Typography tag="p" weight="300" center>
            {t.common[name]}
          </Typography>
        </div>
      )),
    [t]
  );

  return (
    <div className="marquee stack column">
      <Marquee direction="rtl" duration={40}>
        {memoTop}
      </Marquee>

      {/*<Marquee direction="ltr" duration={40}>
        {memoBot}
      </Marquee> */}
    </div>
  );
};
