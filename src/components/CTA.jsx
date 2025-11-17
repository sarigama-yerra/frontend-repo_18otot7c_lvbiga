import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-b from-zinc-950 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Ready to get roasted?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/70"
        >
          Connect in seconds. Transparent pricing. No recordings by default.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          href="https://airoastcall.myshopify.com"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold px-6 py-3 shadow-lg hover:from-amber-400 hover:to-yellow-300 transition will-change-transform hover:translate-y-[-1px]"
        >
          Start now
        </motion.a>
      </div>
    </section>
  );
}
