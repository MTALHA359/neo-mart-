'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    password.length >= 6;

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((u) => u.email === email);

    if (exists) {
      setError('This email is already registered.');
      return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    setSuccess('Account created! Redirecting...');
    setEmail('');
    setPassword('');

    setTimeout(() => router.push('/'), 2000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4">
      <div className="w-full max-w-md bg-[#1e293b] p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-300">
          Create Your NeoMart Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="e.g. saad@gmail.com"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <div className="relative">
              <input
                type={visible ? 'text' : 'password'}
                placeholder="Enter secure password"
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="absolute right-3 top-3 text-gray-400 hover:text-white text-sm"
              >
                {visible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          {success && <p className="text-green-400 text-sm text-center">{success}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-400">
          Already have an account? <a href="#" className="text-blue-400 hover:underline">Login</a>
        </p>
      </div>
    </main>
  );
}
