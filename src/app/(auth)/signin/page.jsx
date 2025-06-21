'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [user, setUser] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ Registered successfully. You can now login.');
      setIsRegistering(false);
    } else {
      alert(data.error || 'Registration failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('name', data.name);
      setUser({ name: data.name, role: data.role });
    } else {
      alert(data.error || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-[#111827] text-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{isRegistering ? 'Register' : 'Sign In'}</h2>

      {user ? (
        <p className="text-green-400">
          👋 Welcome {user.name} ({user.role})
        </p>
      ) : (
        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          className="space-y-4"
        >
          {isRegistering && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded bg-gray-800 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <select
                className="w-full p-2 rounded bg-gray-800 text-white"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black px-4 py-2 rounded w-full"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>
      )}

      <div className="mt-4 text-sm text-yellow-200">
        {isRegistering ? (
          <p>
            Already have an account?{' '}
            <button onClick={() => setIsRegistering(false)} className="underline">
              Login
            </button>
          </p>
        ) : (
          <p>
            New here?{' '}
            <button onClick={() => setIsRegistering(true)} className="underline">
              Register
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
