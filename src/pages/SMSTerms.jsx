export default function SMSTerms() {
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold">SMS / Text Messaging Terms</h1>
        <p className="text-white/70 mt-4">By using the Service you agree to receive transactional texts related to your actions (e.g., secure payment links, receipts, service notices). Message frequency varies. Msg & Data rates may apply.</p>
        <ul className="list-disc pl-6 text-white/80 mt-6 space-y-2">
          <li>Opt-out: Text STOP to opt out; START to resume, HELP for help.</li>
          <li>Support: <a className="underline" href="mailto:support@airoastcall.com">support@airoastcall.com</a></li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
          <li>No marketing SMS without a separate, explicit opt-in on the Site.</li>
        </ul>
      </div>
    </main>
  );
}
