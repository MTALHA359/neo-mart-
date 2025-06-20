'use client';

import Link from 'next/link';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative z-50 w-full px-8 py-5 flex justify-between items-center
      bg-gradient-to-br from-[#0d0d15] via-[#1c1c2c] to-[#0d0d15]
      backdrop-blur-md border-b border-yellow-400/20 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
    >
      {/* LOGO */}
      <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.08}>
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-black tracking-wider bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400
            bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,193,7,0.6)]"
        >
          MartLux
        </motion.h1>
      </Tilt>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-8 ml-16">
        {['Home', 'About', 'Collection', 'Contact'].map((text, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="text-yellow-300 font-medium hover:text-yellow-400 transition duration-300"
          >
            <Link href={`/${text.toLowerCase()}`}>
              <span className="cursor-pointer tracking-wide">{text}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-5">
        {[FaSearch, FaUser, FaShoppingCart].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-xl cursor-pointer hover:text-yellow-300 transition duration-300"
          >
            <Tilt scale={1.05}><Icon /></Tilt>
          </motion.div>
        ))}

        {/* BUTTONS */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 border border-yellow-400 text-yellow-300 font-semibold rounded-lg
            hover:bg-yellow-400 hover:text-black transition duration-300"
        >
          Shop Now
        </motion.button>

        <Link href="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 border border-yellow-400 text-yellow-300 font-semibold rounded-lg
              hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Login
          </motion.button>
        </Link>
      </div>

      {/* BACKGLOW */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.2),transparent)]" />
    </motion.nav>
  );
}
