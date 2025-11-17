import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Waves } from 'lucide-react';
import RobotHUD from './RobotHUD';
import GlitchTitle from './GlitchTitle';
import NeonMesh from './NeonMesh';

export default function Hero() {
  const [hovering, setHovering] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useTransform(my, [-1, 1], [6, -6]);
  const rotY = useTransform(mx, [-1, 1], [-6, 6]);
  const translateX = useTransform(mx, [-1, 1], [-10, 10]);
  const translateY = useTransform(my, [-1, 1], [-10, 10]);

  const containerRef = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mx.set(x * 2 - 1);
      my.set(y * 2 - 1);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section ref={containerRef} className="relative min-h-[95vh] w-full overflow-hidden bg-black text-white">
      {/* Aggressive neon mesh field */}
      <NeonMesh />

      {/* Hardcore conic glow */}
      <motion.div
        aria-hidden
        className="absolute -top-1/2 left-1/2 h-[140vh] w-[140vh] -translate-x-1/2 rounded-full blur-3xl"
        initial={{ scale: 0.9, opacity: 0.45 }}
        animate={{ scale: [0.9, 1.08, 0.92], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'conic-gradient(from 30deg at 50% 50%, rgba(251,191,36,0.25), rgba(253,230,138,0.15), rgba(0,0,0,0) 60%)',
        }}
      />

      {/* 3D Robot - intensified and parallaxed */}
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, x: translateX, y: translateY }}
        className="absolute inset-0 opacity-80 [filter:saturate(1.15)_contrast(1.1)]"
      >
        <Spline
          scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Chromatic aberration layers for aggression */}
      <motion.div
        className="absolute inset-0 mix-blend-screen opacity-30"
        style={{ x: useTransform(mx, [-1, 1], [-8, 8]), y: useTransform(my, [-1, 1], [-8, 8]) }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(251,191,36,0.15),transparent_70%)]" />
      </motion.div>

      {/* HUD overlay */}
      <RobotHUD intensity={1.3} parallax={{ x: 0, y: 0 }} />

      {/* Darkening gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24">
        <div className="max-w-4xl">
          <GlitchTitle text="AI Roast Call" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 text-lg sm:text-xl text-white/80"
          >
            Dial an unapologetic, cybernetic roast. Real‑time AI banter. High energy. No mercy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://airoastcall.myshopify.com"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 text-black font-semibold px-7 py-3.5 shadow-[0_0_40px_rgba(251,191,36,0.35)] transition will-change-transform hover:translate-y-[-2px] hover:shadow-[0_0_70px_rgba(251,191,36,0.55)]"
            >
              Start a Roast <ArrowRight className="h-4 w-4" />
              {/* Shockwave */}
              {hovering && (
                <span className="pointer-events-none absolute inset-0 animate-[ping_0.9s_ease-out] rounded-xl ring-2 ring-amber-300/60" />
              )}
            </a>
            <a href="#how" className="group relative inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Waves className="h-4 w-4 text-amber-300 opacity-70 group-hover:opacity-100" />
              See how it works
            </a>
          </motion.div>

          {/* Pricing badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-amber-200"
          >
            <Zap className="h-3.5 w-3.5" /> $1.50/min • 1‑minute minimum • Checkout secured by Shopify
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs"
      >
        <div className="h-9 w-5 rounded-full border border-white/20 mx-auto relative overflow-hidden">
          <motion.span
            className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-white/60"
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: [6, 18, 6], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
