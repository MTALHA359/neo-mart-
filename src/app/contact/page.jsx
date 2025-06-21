'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-bl from-[#0e0e18] via-[#151520] to-[#0e0e18] text-white relative overflow-hidden">
      {/* Background floating circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full bg-fuchsia-500 blur-2xl"
            animate={{
              y: ['0%', '100%', '0%'],
              x: ['0%', '100%', '0%'],
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 15 + i,
              ease: 'easeInOut',
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl">
            Contact NeoMart
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Questions, suggestions or need help? Reach out and our team will assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Mail size={32} className="text-pink-400" />
              <div>
                <p className="font-semibold text-lg">Email</p>
                <p className="text-gray-400">support@neomart.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone size={32} className="text-yellow-300" />
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-gray-400">+92 301 1122334</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin size={32} className="text-cyan-400" />
              <div>
                <p className="font-semibold text-lg">Location</p>
                <p className="text-gray-400">Neo Street, Future City, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-[#14141f] p-8 rounded-xl shadow-lg border border-gray-700 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Ali Khan"
                className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="ali@example.com"
                className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Hi NeoMart, I love your 3D shopping experience!"
                className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:ring-cyan-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 flex items-center justify-center gap-2 bg-gradient-to-br from-pink-600 to-purple-700 text-white font-bold rounded hover:opacity-90 transition-all"
            >
              <Send size={20} /> Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
