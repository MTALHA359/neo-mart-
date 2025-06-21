'use client';

import { useEffect, useState } from 'react';

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', image: '', category: '' });

  // Fetch Products
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Add New Product
  const addProduct = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    const newProduct = await res.json();
    setProducts([newProduct, ...products]);
    setForm({ name: '', price: '', image: '', category: '' });
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white p-6">
      <h1 className="text-2xl font-bold text-yellow-300 mb-4">🛠️ Admin: Product Management</h1>

      <div className="bg-[#1c1c2a] p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2 text-yellow-200">➕ Add New Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="p-2 rounded bg-[#121212] border border-yellow-300/20"
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            className="p-2 rounded bg-[#121212] border border-yellow-300/20"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
            className="p-2 rounded bg-[#121212] border border-yellow-300/20"
          />
          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            className="p-2 rounded bg-[#121212] border border-yellow-300/20"
          />
        </div>
        <button
          onClick={addProduct}
          className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
        >
          Add Product
        </button>
      </div>

      {/* Show Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="border border-yellow-400/10 p-4 rounded bg-[#1a1a28]">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-3" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-yellow-400">${product.price}</p>
            <p className="text-sm text-yellow-200">📦 {product.category}</p>

            {/* TODO: Edit/Delete Buttons */}
            <div className="mt-2 flex gap-2">
              <button className="text-sm text-yellow-300 hover:underline">Edit</button>
              <button className="text-sm text-red-500 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
