
'use client';

import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function StarsCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  );
}
