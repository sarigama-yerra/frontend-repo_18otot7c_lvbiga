import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Dynamic glow ring */}
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[90vh] w-[90vh] -translate-x-1/2 rounded-full blur-3xl"
        initial={{ scale: 0.9, opacity: 0.4 }}
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'conic-gradient(from 120deg at 50% 50%, rgba(251,191,36,0.15), rgba(253,230,138,0.15), rgba(0,0,0,0) 60%)',
        }}
      />
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Roast-level banter, powered by AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
        >
          Dial up a futuristic voice that roasts back. Instant connection, transparent pricing, no recordings by default.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="https://airoastcall.myshopify.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold px-6 py-3 shadow-lg hover:from-amber-400 hover:to-yellow-300 transition will-change-transform hover:translate-y-[-1px]"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how"
            className="text-white/80 hover:text-white"
          >
            See how it works
          </a>
        </motion.div>
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
