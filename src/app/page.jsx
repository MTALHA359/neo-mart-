'use client';
import Navbar from './components/Navbar';
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0e0e18] text-white">
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to MartLux</h1>
        <p className="mt-2 text-gray-400">Your Premium Mart Experience</p>
      </div>
    </main>
  );
}
