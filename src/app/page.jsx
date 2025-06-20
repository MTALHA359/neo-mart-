// app/page.jsx
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

      {/* Hero Section */}
      <section ref={heroRef} className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.div
          ref={textRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-tr from-yellow-300 via-fuchsia-500 to-indigo-700 text-transparent bg-clip-text drop-shadow-[0_0_120px_rgba(255,0,255,0.5)]">
            NeoMart 3D Experience
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Discover next-gen shopping through real-time animations, motion, and 3D visuals powered by Three.js.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-10 py-4 bg-gradient-to-br from-pink-600 to-purple-700 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transition-all"
            >
              <ShoppingCart className="inline mr-3" /> Enter the Shop
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-10 py-4 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-cyan-400/50 transition-all"
            >
              View Collections
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section className="relative z-10 border-t border-gray-700">
        <Carousel />
      </section>

      {/* Product Cards Section */}
      <section className="relative z-10 py-24 px-6 md:px-20 bg-black/90 border-t border-gray-700">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <ProductCard title="Premium Picks" icon={Star} color="yellow" />
          <ProductCard title="Gift Zone" icon={Gift} color="pink" />
          <ProductCard title="Speedy Delivery" icon={Truck} color="sky" />
          <ProductCard title="NeoMart Exclusive" icon={ShoppingCart} color="violet" />
        </div>
      </section>
    </div>
  );
}