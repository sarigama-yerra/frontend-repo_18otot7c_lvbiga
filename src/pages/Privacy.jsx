export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Privacy policy</h1>
        <p className="mt-4 text-white/70">We respect your privacy and collect only what’s needed to operate the Service.</p>

        <section className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Data We Collect</h2>
            <ul className="list-disc pl-6 text-white/80 mt-2 space-y-2">
              <li>Contact Data: phone number; email if you provide it.</li>
              <li>Payment Data: handled by Stripe (we receive tokens, not full card details).</li>
              <li>Usage Data: call metadata (start/end time, duration, status callbacks), device/IP logs for security, SMS delivery status, opt-in/opt-out events.</li>
              <li>Support Data: messages you send to support.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How We Use Data</h2>
            <ul className="list-disc pl-6 text-white/80 mt-2 space-y-2">
              <li>To provide and bill the Service (compute duration, create Stripe charges).</li>
              <li>To send transactional SMS (payment links, receipts) and service notifications.</li>
              <li>To prevent fraud/abuse (rate-limits, block-lists, anomaly detection).</li>
              <li>To comply with law and carrier requirements.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What We Don’t Do</h2>
            <ul className="list-disc pl-6 text-white/80 mt-2 space-y-2">
              <li>No call recording by default. If we enable it later, we’ll seek explicit consent.</li>
              <li>No selling of personal data.</li>
              <li>No behavioral ads based on call/SMS data.</li>
            </ul>
            <p className="mt-2 text-white/70">Meaning, Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Sharing</h2>
            <p className="text-white/80 mt-2">We share data with vendors only as needed: Stripe (payments), telecom providers (voice/SMS routing), cloud hosting, analytics/security. We may disclose data to comply with lawful requests.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Data Retention</h2>
            <ul className="list-disc pl-6 text-white/80 mt-2 space-y-2">
              <li>Logs & metadata: typically 30 days for operations/security, unless longer is required by law or dispute resolution.</li>
              <li>Opt-out (STOP) lists: retained (may be hashed) to maintain suppression.</li>
              <li>Billing records: retained per tax/accounting rules.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Security</h2>
            <p className="text-white/80 mt-2">We use administrative, technical, and physical safeguards (TLS, access controls, least privilege). No method is 100% secure; you share at your own risk.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Your Choices</h2>
            <ul className="list-disc pl-6 text-white/80 mt-2 space-y-2">
              <li>SMS: reply STOP to opt out; HELP for help.</li>
              <li>Access/Deletion: email <a href="mailto:support@airoastcall.com" className="underline">support@airoastcall.com</a>. We’ll honor applicable rights subject to authentication and legal limits.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">International</h2>
            <p className="text-white/80 mt-2">Data may be processed in the United States and other locations where our vendors operate. By using the Service, you consent to cross-border transfers.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Children</h2>
            <p className="text-white/80 mt-2">The Service is for 18+ users. We do not knowingly collect data from children.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Changes</h2>
            <p className="text-white/80 mt-2">We may update this policy; we’ll post the new date at the top.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-white/80 mt-2"><a href="mailto:support@airoastcall.com" className="underline">support@airoastcall.com</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}
