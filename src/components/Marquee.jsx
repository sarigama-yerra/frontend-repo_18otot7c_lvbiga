import { useMemo } from 'react';
import { motion } from 'framer-motion';

const logos = [
  'OpenAI',
  'Stripe',
  'Twilio',
  'Vercel',
  'Cloudflare',
  'Shopify',
];

export default function Marquee() {
  const items = useMemo(() => [...logos, ...logos, ...logos], []);
  return (
    <section className="relative bg-black text-white py-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      <motion.div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((name, i) => (
          <div
            key={i}
            className="px-4 py-2 text-white/60 hover:text-white/90 transition-colors"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
