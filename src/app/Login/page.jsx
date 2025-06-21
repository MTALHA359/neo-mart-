'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('customer');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, expectedRole: selectedRole }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || 'Login failed');
      return;
    }

    // Ensure role matches selected
    if (data.role !== selectedRole) {
      setError(`You are logging in as ${data.role}. Please select the correct role.`);
      return;
    }

    // Store credentials
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
    localStorage.setItem('name', data.name);

    // Redirect based on role
    if (data.role === 'admin') router.push('/admin/dashboard');
    else router.push('/collection');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-[#111827] text-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
        >
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
        />

        {error && <p className="text-red-400">{error}</p>}

        <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600">
          Login as {selectedRole}
        </button>
      </form>
    </div>
  );
}
