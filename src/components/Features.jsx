import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Timer, PhoneCall, CreditCard, MessageSquare, Lock } from 'lucide-react';

const items = [
  { icon: PhoneCall, title: 'On-demand Calls', desc: 'Connect instantly to the AI voice. You control when it starts and ends.' },
  { icon: Timer, title: 'Transparent Billing', desc: 'Only charged for connected minutes. 1-minute minimum.' },
  { icon: CreditCard, title: 'Secure Payments', desc: 'Stripe-powered checkout with tokenized methods.' },
  { icon: MessageSquare, title: 'Transactional SMS', desc: 'Payment links, receipts, and service notices. Reply STOP anytime.' },
  { icon: Lock, title: 'No Recording by Default', desc: 'If we ever add recording, we will ask for explicit consent first.' },
  { icon: Shield, title: 'Anti-fraud', desc: 'Rate-limits and anomaly checks keep things safe.' },
];

export default function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 60%', 'end 10%'] });
  const glow = useTransform(scrollYProgress, [0, 1], [0.1, 0.35]);

  return (
    <section id="how" ref={ref} className="relative py-28 bg-gradient-to-b from-black to-zinc-950 text-white">
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 0%, rgba(250,204,21,' + glow + ') 0%, rgba(0,0,0,0) 60%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Designed for vibes</h2>
          <p className="mt-4 text-white/70">Fast, secure, and a little unhinged. The perfect mix for your next roast session.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl group-hover:bg-amber-400/20 transition" />
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 grid place-items-center shadow-inner">
                <item.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
