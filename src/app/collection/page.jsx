
// 'use client';

// import { useState } from 'react';
// import Navbar from '../components/Navbar';
// import ProductCard from '../components/ProductCard';
// import CartDrawer from '../components/CartDrawer';

// // Example: Simulate if admin is logged in
// const isAdmin = true;

// // Grouped Products by Category
// const productSections = [
//   {
//     title: '🛒 Grocery Items',
//     category: 'grocery',
//     products: [
//       { id: 1, name: 'Milk', price: 50, image: '/milk.jpg' },
//       { id: 2, name: 'Rice', price: 100, image: '/rice.jpg' },
//     ],
//   },
//   {
//     title: '🧥 Fashion',
//     category: 'fashion',
//     products: [
//       { id: 3, name: 'Jacket', price: 999, image: '/jacket.jpg' },
//       { id: 4, name: 'Sneakers', price: 1499, image: '/sneakers.jpg' },
//     ],
//   },
//   {
//     title: '📱 Electronics',
//     category: 'electronics',
//     products: [
//       { id: 5, name: 'Smartphone', price: 499, image: '/phone.jpg' },
//       { id: 6, name: 'Headphones', price: 199, image: '/headphones.jpg' },
//     ],
//   },
// ];

// export default function CollectionPage() {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     const exists = cartItems.find(item => item.id === product.id);
//     if (exists) {
//       setCartItems(prev =>
//         prev.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//     setCartOpen(true);
//   };

//   return (
//     <div className="bg-[#0e0e17] text-white min-h-screen">
//       <Navbar toggleCart={() => setCartOpen(!cartOpen)} />

//       <div className="px-4 pt-6 pb-20 max-w-7xl mx-auto">
//         {productSections.map(section => (
//           <div key={section.category} className="mb-10">
//             <h2 className="text-2xl font-bold text-yellow-300 mb-4 border-b border-yellow-400 pb-2">{section.title}</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {section.products.map(product => (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                   addToCart={addToCart}
//                   isAdmin={isAdmin}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <CartDrawer
//         open={cartOpen}
//         setOpen={setCartOpen}
//         items={cartItems}
//         setItems={setCartItems}
//       />
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';

export default function CollectionPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // ✅ Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // ✅ Add to cart logic
  const addToCart = (product) => {
    const exists = cartItems.find(item => item._id === product._id);
    if (exists) {
      setCartItems(prev =>
        prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartOpen(true);
  };

  // ✅ Build category list
  const categories = ['All', ...new Set(products.map(p => p.category || 'Uncategorized'))];

  // ✅ Filter products by search and category
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <Navbar toggleCart={() => setCartOpen(prev => !prev)} />

      <div className="px-6 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-300 mb-6">🛍 Shop Our Collection</h1>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full p-3 mb-4 bg-[#1c1c2a] text-white border border-yellow-300/20 rounded-md"
        />

        {/* 🏷 Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full border border-yellow-400/20 ${
                activeCategory === cat
                  ? 'bg-yellow-400 text-black'
                  : 'bg-[#1a1a28] text-white hover:bg-yellow-500 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🧾 Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product._id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <p className="text-yellow-200">No products found.</p>
        )}
      </div>

      <CartDrawer
        open={cartOpen}
        setOpen={setCartOpen}
        items={cartItems}
        setItems={setCartItems}
      />
    </div>
  );
}
