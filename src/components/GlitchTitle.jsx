import { motion } from 'framer-motion';

export default function GlitchTitle({ text }) {
  const base = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const glitchPieces = [
    { x: -2, y: 0, color: 'text-amber-500/70', blur: 'blur-[0.5px]' },
    { x: 2, y: 0, color: 'text-yellow-300/60', blur: 'blur-[0.5px]' },
  ];

  return (
    <div className="relative inline-block">
      <motion.h1
        {...base}
        className="relative text-5xl sm:text-7xl font-extrabold tracking-tight text-white"
      >
        {text}
      </motion.h1>
      {glitchPieces.map((g, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, g.x * 2, 0],
            y: [0, g.y * 2, 0],
          }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: i * 0.08 }}
          className={`pointer-events-none absolute inset-0 font-extrabold ${g.color} ${g.blur}`}
          aria-hidden
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}
