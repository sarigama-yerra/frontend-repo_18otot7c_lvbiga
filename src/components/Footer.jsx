import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold">AI Roast Call</h4>
          <p className="text-white/70 mt-2 text-sm">A futuristic voice that claps back. Built with respect for privacy.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="grid gap-2">
            <Link to="/privacy" className="text-white/80 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-white/80 hover:text-white">Terms of Service</Link>
            <Link to="/sms" className="text-white/80 hover:text-white">SMS Terms</Link>
          </div>
          <div className="grid gap-2">
            <Link to="/refund" className="text-white/80 hover:text-white">Refund Policy</Link>
            <Link to="/contact" className="text-white/80 hover:text-white">Contact</Link>
          </div>
        </div>
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} AI Roast Call. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
