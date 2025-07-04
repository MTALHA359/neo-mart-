'use client';

import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Box, Sphere, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Gift, Truck } from 'lucide-react';
import gsap from 'gsap';
import Image from 'next/image';

const AnimatedIcon = ({ position, color, shape = 'box' }) => {
  const meshRef = useRef();
  useEffect(() => {
    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  const Shape = shape === 'sphere' ? Sphere : shape === 'torus' ? Torus : Box;

  return (
    <Shape ref={meshRef} args={[1, 1, 1]} position={position}>
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
    </Shape>
  );
};

export default function HomePage() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power4.out',
      }
    );
  }, []);

  const carouselImages = [
    'https://images.pexels.com/photos/32639997/pexels-photo-32639997.jpeg',
    'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg',
    'https://images.pexels.com/photos/1095816/pexels-photo-1095816.jpeg',
    'https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg',
  ];

  const ProductCard = ({ title, icon: Icon, color }) => (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-xl text-center shadow-xl"
    >
      <Icon size={48} className={`mx-auto mb-4 text-${color}-400`} />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">Experience innovation and style with every purchase.</p>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-[#0e0e18] text-white overflow-x-hidden relative">
      {/* 3D Canvas Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Canvas camera={{ position: [0, 0, 12], fov: 65 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <Stars radius={120} depth={60} count={10000} factor={6} fade speed={2} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <AnimatedIcon position={[-4, 2, -2]} color="#facc15" shape="torus" />
          <AnimatedIcon position={[3, -2, 0]} color="#f43f5e" shape="sphere" />
          <AnimatedIcon position={[0, 3, 2]} color="#22d3ee" shape="box" />
        </Canvas>
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
          </div>
        </motion.div>
      </section>

      {/* Image Carousel */}
      <section className="relative z-10 border-t border-gray-700 overflow-hidden w-full py-16">
        <div className="flex gap-10 px-6 animate-marquee whitespace-nowrap">
          {carouselImages.concat(carouselImages).map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-72 h-72 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
              <Image
                src={src}
                alt={`Product ${idx + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
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
    </main>
  );
}
