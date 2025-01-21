import { motion } from 'framer-motion';

export const FaqImage = ({ isActive }) => {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: isActive ? 180 : 0 }}
      transition={{ duration: 0.1 }}
    >
      <g clipPath="url(#clip0_262_3091)">
        <path d="M14.4 9.6L13.28 8.48L8.80002 12.96V0H7.20002V12.96L2.72002 8.48L1.60002 9.6L8.00002 16L14.4 9.6Z" />
      </g>
      <defs>
        <clipPath id="clip0_262_3091">
          <rect width="16" height="16" transform="matrix(0 1 -1 0 16 0)" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};
