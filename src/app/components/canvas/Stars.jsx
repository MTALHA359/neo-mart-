'use client';

import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function StarsCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={80}
          depth={50}
          count={4000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
