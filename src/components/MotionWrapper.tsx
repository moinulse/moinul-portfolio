import dynamic from 'next/dynamic';
import { HTMLMotionProps, motion } from 'framer-motion';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionSection = dynamic(() => import('framer-motion').then((mod) => mod.motion.section), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionH2 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });
const MotionUl = dynamic(() => import('framer-motion').then((mod) => mod.motion.ul), { ssr: false });
const MotionLi = dynamic(() => import('framer-motion').then((mod) => mod.motion.li), { ssr: false });
const MotionA = dynamic(() => import('framer-motion').then((mod) => mod.motion.a), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then((mod) => mod.motion.button), { ssr: false });
const MotionHeader = dynamic(() => import('framer-motion').then((mod) => mod.motion.header), { ssr: false });

export {
  MotionDiv,
  MotionSection,
  MotionH1,
  MotionH2,
  MotionP,
  MotionUl,
  MotionLi,
  MotionA,
  MotionButton,
  MotionHeader,
};

export const AnimatePresence = dynamic(() => import('framer-motion').then((mod) => mod.AnimatePresence), { ssr: false });