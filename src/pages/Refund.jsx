export default function Refund() {
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Refund Policy</h1>
        <p className="text-white/70 mt-4">If a technical failure on our side prevents delivery, contact us within 7 days for review at <a className="underline" href="mailto:support@airoastcall.com">support@airoastcall.com</a>. Abusive use or time consumed during a successful connection is generally non-refundable.</p>
        <ul className="list-disc pl-6 text-white/80 mt-6 space-y-2">
          <li>Eligibility: failures caused by our system or providers.</li>
          <li>Request window: 7 days from the call.</li>
          <li>What to include: phone number, approximate time, and summary.</li>
          <li>Outcome: refund, credit, or denial with explanation.</li>
        </ul>
      </div>
    </main>
  );
}
