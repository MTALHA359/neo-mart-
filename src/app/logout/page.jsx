'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';

// Dummy users (admin + customers)
const USERS = [
  { email: 'admin@neomart.com', password: '123456', role: 'admin' },
  { email: 'customer1@neomart.com', password: 'cust123', role: 'customer' },
  { email: 'customer2@neomart.com', password: 'cust456', role: 'customer' },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const textRef = useRef(null);

  useEffect(() => {
    const authData = localStorage.getItem('neomart-auth');
    if (authData) {
      const user = JSON.parse(authData);
      setIsLoggedIn(true);
      setRole(user.role);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem('neomart-auth', JSON.stringify(user));
      setIsLoggedIn(true);
      setRole(user.role);
      router.push('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleLogoutRedirect = () => {
    router.push('/logout');
  };

  return (
    <main className="min-h-screen relative bg-[#0d0d1d] text-white flex items-center justify-center overflow-hidden px-4">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
          <ambientLight intensity={0.6} />
          <Stars radius={100} depth={50} count={5000} fade />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          <Sphere args={[1, 32, 32]} position={[2, 1, 0]}>
            <meshStandardMaterial color="#ff007f" metalness={0.8} roughness={0.1} />
          </Sphere>
          <Sphere args={[1, 32, 32]} position={[-2, -1, 0]}>
            <meshStandardMaterial color="#00ffff" metalness={0.8} roughness={0.1} />
          </Sphere>
        </Canvas>
      </div>

      {/* Card */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="bg-[#191933]/90 border border-fuchsia-800 backdrop-blur-md w-full max-w-md rounded-xl shadow-2xl p-10 z-10"
      >
        <div className="text-center mb-8">
          {isLoggedIn ? (
            <>
              <LogOut className="mx-auto text-yellow-400" size={40} />
              <h2 className="text-2xl font-bold mt-2">Logged in as <span className="text-fuchsia-400">{role}</span></h2>
              <p className="text-gray-400 text-sm">Redirect or logout below.</p>
            </>
          ) : (
            <>
              <LogIn className="mx-auto text-pink-500" size={40} />
              <h2 className="text-3xl font-bold mt-2">NeoMart Login</h2>
              <p className="text-gray-400 text-sm mt-1">
                Try admin: <code>admin@neomart.com</code><br />
                Try customer: <code>customer1@neomart.com</code>
              </p>
            </>
          )}
        </div>

        {isLoggedIn ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLogoutRedirect}
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition"
          >
            Go to Logout Page
          </motion.button>
        ) : (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#121221] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#121221] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm text-center"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-fuchsia-600 to-purple-800 font-semibold rounded-lg shadow-lg"
            >
              Login
            </motion.button>
          </form>
        )}
      </motion.div>
    </main>
  );
}
