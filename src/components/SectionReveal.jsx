import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SectionReveal({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 20%'] });
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.section>
  );
}
