import { useMemo } from 'react';
import { motion } from 'framer-motion';

// Lightweight animated particles + aurora beams for background vibe
export default function AmbientFX() {
  const particles = useMemo(
    () => Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 4,
      duration: Math.random() * 6 + 8,
      opacity: Math.random() * 0.35 + 0.15,
    })),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gold aurora beams */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-1/3 left-1/2 h-[120vh] w-[120vw] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, rgba(251,191,36,0.08) 0%, rgba(253,230,138,0.05) 30%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-yellow-300/40 shadow-[0_0_20px_rgba(251,191,36,0.35)]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -20, 0], opacity: p.opacity }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
    </div>
  );
}
