import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const clips = [
  { src: 'https://cdn.coverr.co/videos/coverr-typing-on-the-keyboard-1590/1080p.mp4', caption: 'Precision in every line.' },
  { src: 'https://cdn.coverr.co/videos/coverr-modern-architecture-structures-9336/1080p.mp4', caption: 'Architected for scale.' },
  { src: 'https://cdn.coverr.co/videos/coverr-smartphone-scrolling-7343/1080p.mp4', caption: 'SMS-ready, carrier compliant.' },
];

export default function BRoll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="py-28 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y }} className="grid md:grid-cols-3 gap-6">
          {clips.map((c, i) => (
            <motion.figure
              key={c.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 group"
            >
              <video src={c.src} autoPlay loop muted playsInline className="w-full h-64 object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-sm">
                {c.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
