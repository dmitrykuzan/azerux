import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

export default function ThreeDModel() {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  return (
    <>
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: isModelLoaded ? 0 : 1 }} transition={{ duration: 0.3 }}>
        {!isModelLoaded && (
          <NextImage
            loading="lazy"
            className="hero__slide-3d-3dimg"
            width={1169}
            height={1211}
            alt="3d"
            src="/img/hero/h_3d.webp"
            quality={20}
          />
        )}
      </motion.div>

      <motion.div
        className="hero__slide-3d"
        initial={{ opacity: 0 }}
        animate={{ opacity: isModelLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Spline
          scene="https://prod.spline.design/COlVfyJogG1G0dOZ/scene.splinecode"
          onLoad={() => setIsModelLoaded(true)}
        />
      </motion.div>
    </>
  );
}
