import { useState } from 'react';
import { Menu, X, Bot, ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/refund', label: 'Refund Policy' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-700 grid place-items-center shadow-inner">
              <Bot className="h-5 w-5 text-black" />
            </div>
            <span className="font-semibold tracking-wide">AI Roast Call</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm transition-colors ${isActive ? 'text-yellow-300' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://airoastcall.myshopify.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold shadow-[0_0_0_2px_rgba(0,0,0,0.5)_inset] hover:from-amber-400 hover:to-yellow-300 transition"
            >
              <ShoppingCart className="h-4 w-4" />
              Shop
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-2 py-2 rounded ${isActive ? 'bg-white/10 text-yellow-300' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://airoastcall.myshopify.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold shadow-[0_0_0_2px_rgba(0,0,0,0.5)_inset]"
            >
              <ShoppingCart className="h-4 w-4" /> Shop
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
