'use client';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full bg-black/40 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg border-b border-gray-700"
    >
      {/* Logo with glow */}
      <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,0,0.7)]"
        >
          MartLux
        </motion.h1>
      </Tilt>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-white">
        <FaSearch className="text-xl cursor-pointer hover:text-yellow-400 transition duration-300" />
        <FaUser className="text-xl cursor-pointer hover:text-yellow-400 transition duration-300" />
        <Tilt glareEnable={true} scale={1.2}>
          <FaShoppingCart className="text-xl cursor-pointer hover:text-yellow-400 transition duration-300" />
        </Tilt>
        <button className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300">
          Shop Now
        </button>
      </div>
    </motion.nav>
  );
}
