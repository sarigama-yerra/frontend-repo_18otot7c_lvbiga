export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Terms of service</h1>
        <p className="text-white/60 mt-2">AI Roast Call – Terms of Service<br/>Last updated: 26 September 2025</p>

        <div className="prose prose-invert prose-zinc max-w-none mt-6">
          <p><strong>Brand / Service:</strong> “AI Roast Call” (the “Service”)<br/>
          <strong>Website:</strong> https://airoastcall.com (the “Site”)<br/>
          <strong>Contact:</strong> support@airoastcall.com</p>

          <h3>Plain-English summary (not legal advice)</h3>
          <p>You must be 18+. You control when a call starts and ends. Pricing is shown up-front. We send transactional texts (e.g., a secure payment link) when you request them; reply STOP to opt out. We do not record calls by default.</p>

          <h3>Acceptance & Eligibility</h3>
          <p>By accessing the Site or using the Service (including calling our numbers), you agree to these Terms and the policies referenced here: Privacy Policy, SMS / Text Messaging Terms, and Refund Policy. You must be at least 18 years old (or the age of majority in your jurisdiction).</p>

          <h3>Pricing & Billing</h3>
          <p><strong>Rate:</strong> USD $1.50 per minute, 1-minute minimum.</p>
          <p><strong>How charging works:</strong> You receive a Stripe Checkout (mode: setup) link to add and store a payment method before connection. After the call ends, we create a Stripe Payment Intent for the actual talk time (rounded to whole minutes; minimum one minute). Any applicable taxes/fees are shown at payment.</p>
          <p><strong>You control the clock:</strong> Billing begins when you are connected to the agent and stops when the call ends. You may hang up at any time.</p>
          <p><strong>Descriptor:</strong> Charges are processed by Stripe on our behalf and will appear under our business/descriptor.</p>

          <h3>AI-Assisted Voice Disclosure & Consent</h3>
          <p>Calls may involve an AI-assisted/synthesized voice agent. By proceeding past the IVR and adding a payment method, you consent to interact with AI-generated speech. We do not record calls by default. If recording is ever enabled, we will announce it clearly in the IVR and obtain explicit consent.</p>

          <h3>Prohibited Uses</h3>
          <p>You agree not to use the Service to: (a) violate any law; (b) harass, threaten, or promote hate; (c) commit or attempt fraud, toll pumping, traffic manipulation, or billing circumvention; (d) infringe privacy or intellectual property; (e) use spoofed caller IDs or violate carrier/telecom rules. We may suspend or terminate service for suspected violations.</p>

          <h3>SMS & Communications</h3>
          <p>We send transactional SMS (e.g., secure payment links, receipts, and service notices) related to your call or account. Message frequency varies based on your actions. Msg & Data rates may apply. Text STOP to opt out, START to resume, HELP for help. Carriers are not liable for delayed or undelivered messages. See the SMS / Text Messaging Terms for details. We do not send marketing SMS without a separate, explicit opt-in on the Site.</p>

          <h3>Refunds & Disputes</h3>
          <p>See our Refund Policy. In brief: if a technical failure on our side prevents delivery, contact us within 7 days for review. Abusive use or time consumed during a successful connection is generally non-refundable.</p>

          <h3>Availability & Changes</h3>
          <p>We may modify, suspend, or discontinue the Service, rates, or policies with prospective effect. Updated Terms take effect when posted with a new “Last updated” date.</p>

          <h3>Disclaimers & Limitation of Liability</h3>
          <p>The Service is provided “as is” without warranties of any kind. To the maximum extent permitted by law, our total liability is limited to the amounts you paid for the Service during the 3 months preceding the claim.</p>

          <h3>Governing Law & Venue</h3>
          <p>These Terms are governed by the laws of Wyoming, USA (conflict rules excluded). Disputes will be resolved in the state or federal courts located in Wyoming, unless local mandatory consumer laws require otherwise.</p>

          <h3>Contact</h3>
          <p>Questions? support@airoastcall.com</p>
        </div>
      </div>
    </main>
  );
}
