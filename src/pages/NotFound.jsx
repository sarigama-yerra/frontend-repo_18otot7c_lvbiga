import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white grid place-items-center text-center px-6">
      <div>
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="mt-4 text-white/70">This page drifted off into the void.</p>
        <Link to="/" className="mt-6 inline-block underline">Go home</Link>
      </div>
    </main>
  );
}
