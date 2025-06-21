'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    // ✅ Check admin session
    const isAdmin = localStorage.getItem('role') === 'admin';
    if (!isAdmin) router.push('/login');

    // Fetch data
    fetch('/api/orders/total-sales')
      .then(res => res.json())
      .then(data => setTotalSales(data.total || 0));

    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-6 bg-[#0f0f1a] text-white min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-300 mb-6">Admin Dashboard</h1>
      <p className="mb-4">🧾 Daily Sales: <strong>${totalSales}</strong></p>

      <h2 className="text-2xl font-semibold mb-2">📦 Products</h2>
      {/* Show product list with delete/edit */}
      {products.map(p => (
        <div key={p._id} className="border-b border-gray-600 py-2">
          {p.name} - ${p.price}
        </div>
      ))}
    </div>
  );
}
