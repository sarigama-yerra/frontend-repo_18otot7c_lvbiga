import { motion } from 'framer-motion';

export default function RobotHUD({ intensity = 1, parallax = { x: 0, y: 0 } }) {
  const ringVariants = {
    animate: {
      rotate: [0, 360],
      transition: { duration: 14 / intensity, repeat: Infinity, ease: 'linear' },
    },
  };

  const pingVariants = {
    animate: {
      scale: [0.6, 1.2, 0.6],
      opacity: [0.4, 0.8, 0.4],
      transition: { duration: 3 / intensity, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const scanVariants = {
    animate: {
      y: ['-20%', '120%'],
      transition: { duration: 4 / intensity, repeat: Infinity, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.8))]" />

      {/* Crosshair */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(-50%, -50%) translate(${parallax.x * 6}px, ${parallax.y * 6}px)`,
        }}
      >
        <motion.div
          variants={ringVariants}
          animate="animate"
          className="absolute inset-0 rounded-full border border-amber-400/20"
        />
        <motion.div
          variants={ringVariants}
          animate="animate"
          style={{ animationDuration: `${10 / intensity}s` }}
          className="absolute inset-6 rounded-full border border-amber-400/25"
        />
        <motion.div
          variants={ringVariants}
          animate="animate"
          style={{ animationDuration: `${18 / intensity}s` }}
          className="absolute inset-12 rounded-full border border-amber-400/15"
        />
        <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-amber-400/50" />
        <div className="absolute left-1/2 bottom-0 h-6 w-px -translate-x-1/2 bg-amber-400/50" />
        <div className="absolute top-1/2 left-0 w-6 h-px -translate-y-1/2 bg-amber-400/50" />
        <div className="absolute top-1/2 right-0 w-6 h-px -translate-y-1/2 bg-amber-400/50" />
        <motion.div
          variants={pingVariants}
          animate="animate"
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/70 shadow-[0_0_30px_8px_rgba(251,191,36,0.25)]"
        />
      </motion.div>

      {/* Vertical scan line */}
      <motion.div
        variants={scanVariants}
        animate="animate"
        className="absolute left-1/2 top-0 h-[40%] w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-400/70 to-transparent"
        style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.5))' }}
      />

      {/* Horizontal sweep */}
      <motion.div
        animate={{
          x: ['-10%', '110%'],
        }}
        transition={{ duration: 6 / intensity, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 h-px w-1/4 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
      />

      {/* Corner brackets */}
      <div className="absolute inset-8">
        <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-amber-400/50" />
        <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-amber-400/50" />
        <div className="absolute left-0 bottom-0 h-8 w-8 border-l-2 border-b-2 border-amber-400/50" />
        <div className="absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 border-amber-400/50" />
      </div>
    </div>
  );
}
