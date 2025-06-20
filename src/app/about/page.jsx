// 'use client';

// import { motion } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';
// import Image from 'next/image';

// export default function AboutPage() {
//   return (
//     <main className="relative min-h-screen px-6 md:px-12 py-20 bg-[#0e0e18] text-white overflow-hidden">

//       {/* PAGE HEADING */}
//       <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05} className="text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400
//             bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,200,0,0.6)]"
//         >
//           About MartLux
//         </motion.h1>
//       </Tilt>

//       {/* DESCRIPTION */}
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="mt-10 max-w-3xl mx-auto text-lg text-gray-300 text-center leading-8"
//       >
//         MartLux redefines luxury shopping with tech-powered delivery, immersive experiences, and curated premium groceries.
//         We believe grocery shopping should feel first-class — smooth, fast, and elegant.
//       </motion.p>

//       {/* IMAGE SHOWCASE */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//         className="mt-16 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.08)]"
//       >
//         <Image
//           src="https://images.pexels.com/photos/30750070/pexels-photo-30750070.jpeg?_gl=1*piqpr2*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA0NTU1MTAkbzEwJGcxJHQxNzUwNDU1NTM4JGozMiRsMCRoMA.."
//           alt="MartLux Grocery"
//           width={1400}
//           height={800}
//           className="w-full h-auto object-cover"
//         />
//       </motion.div>

//       {/* FEATURES */}
//       <section className="mt-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {[
//           {
//             title: '🚀 Ultra-Fast Delivery',
//             desc: 'Groceries & meals at your doorstep within minutes, tracked in real-time with VIP-level service.',
//           },
//           {
//             title: '🛍 Curated Premium Items',
//             desc: 'Only elite items — we handpick top-tier gourmet, grocery & essentials for a refined lifestyle.',
//           },
//           {
//             title: '🌱 Sustainable Packaging',
//             desc: 'We use eco-friendly, recyclable materials to ensure luxury meets responsibility.',
//           },
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.4 }}
//             className="bg-[#1b1b2b]/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.08)] border border-yellow-400/20"
//           >
//             <h3 className="text-xl font-bold text-yellow-300 mb-2">{item.title}</h3>
//             <p className="text-gray-400 text-sm leading-6">{item.desc}</p>
//           </motion.div>
//         ))}
//       </section>
//     </main>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FaBolt, FaLeaf, FaGem } from 'react-icons/fa';

const StarsCanvas = dynamic(() => import('../components/canvas/Stars'), { ssr: false });

export default function AboutPage() {
  return (
    <main className="relative min-h-screen px-6 md:px-12 py-24 bg-gradient-to-br from-[#0e0e18] via-[#1c1c2b] to-[#0e0e18] text-white overflow-hidden font-sans">
      {/* 3D Star Background */}
      <div className="absolute inset-0 -z-10">
        <StarsCanvas />
      </div>

      {/* PAGE HEADING */}
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1} className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(255,200,0,0.8)]"
        >
          Welcome to MartLux
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-xl md:text-2xl text-gray-300"
        >
          Elevating Everyday Essentials to Luxury Status
        </motion.p>
      </Tilt>

      {/* IMAGE SHOWCASE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-16 rounded-3xl overflow-hidden shadow-[0_0_90px_rgba(255,255,255,0.1)] border border-yellow-400/20"
      >
        <Image
          src="https://images.pexels.com/photos/30750070/pexels-photo-30750070.jpeg"
          alt="MartLux Display"
          width={1400}
          height={800}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* FEATURE BOXES */}
      <section className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {[
          {
            icon: <FaBolt size={36} className="text-yellow-400" />,
            title: 'Ultra-Fast Delivery',
            desc: 'Groceries and gourmet essentials delivered with lightning speed and elegance.',
          },
          {
            icon: <FaGem size={36} className="text-pink-400" />,
            title: 'Curated Premium Products',
            desc: 'Every item is handpicked — nothing but the finest selections across our shelves.',
          },
          {
            icon: <FaLeaf size={36} className="text-green-400" />,
            title: 'Eco-Luxury Packaging',
            desc: 'We wrap elegance with conscience — sustainable, beautiful, responsible.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#202030]/90 p-8 rounded-3xl shadow-[0_0_50px_rgba(255,215,0,0.1)] border border-white/10 backdrop-blur-md"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-100 drop-shadow-md">{item.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed tracking-wide">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 flex justify-center"
      >
        <button className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 shadow-[0_0_30px_rgba(255,200,0,0.5)] hover:scale-105 transition-transform font-semibold text-black">
          Explore Our Collection
        </button>
      </motion.div>
    </main>
  );
}
