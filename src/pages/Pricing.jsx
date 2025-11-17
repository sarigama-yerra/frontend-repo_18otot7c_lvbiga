export default function Pricing() {
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Per-minute</h2>
            <p className="text-white/70 mt-2">USD $1.50 per minute. 1-minute minimum. Time rounds to the nearest minute.</p>
            <a
              href="https://airoastcall.myshopify.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold px-6 py-3 shadow-lg hover:from-amber-400 hover:to-yellow-300 transition"
            >
              Add payment method
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="list-disc pl-6 text-white/80 mt-2 space-y-2">
              <li>Instant AI connection</li>
              <li>No recording by default</li>
              <li>Transactional SMS for links/receipts</li>
              <li>Stripe-secured payments</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
