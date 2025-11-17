export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold">Ready to get roasted?</h3>
        <p className="mt-4 text-white/70">Connect in seconds. Transparent pricing. No recordings by default.</p>
        <a
          href="https://airoastcall.myshopify.com"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold px-6 py-3 shadow-lg hover:from-amber-400 hover:to-yellow-300 transition"
        >
          Start now
        </a>
      </div>
    </section>
  );
}
