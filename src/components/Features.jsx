import { motion } from 'framer-motion';
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
  return (
    <section id="how" className="relative py-24 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Designed for vibes</h2>
          <p className="mt-4 text-white/70">Fast, secure, and a little unhinged. The perfect mix for your next roast session.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition"
            >
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
