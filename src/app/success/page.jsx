// app/success/page.jsx
'use client';

import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [tracking, setTracking] = useState('');

  useEffect(() => {
    const num = Math.floor(Math.random() * 900000 + 100000);
    setTracking(`TRK-${num}`);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0f0f1a] text-white p-6">
      <div className="max-w-md text-center bg-[#1c1c2a] p-6 rounded-lg shadow-lg border border-yellow-400/20">
        <h1 className="text-3xl font-bold text-yellow-300 mb-4">Payment Successful ✅</h1>
        <p className="mb-2">Thank you for your order!</p>
        <p className="mb-2">📦 Tracking Number: <span className="font-mono text-yellow-200">{tracking}</span></p>
        <p className="mb-2">⏱ Estimated Delivery: <span className="text-green-300">2-3 Business Days</span></p>
        <p className="mt-4 text-sm text-yellow-200">You will receive updates via email.</p>
      </div>
    </div>
  );
}
