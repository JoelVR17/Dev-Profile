"use client";

// ...

import { RefObject, useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

/** Must be 3 * N floats — inSphere writes xyz triplets; 5000 caused OOB + NaN bounding spheres. */
const PARTICLE_COUNT = 1667;

const StakBackground = (props: Record<string, unknown>) => {
  const ref = useRef<THREE.Group | null>(null);

  const [sphere] = useState(() => {
    const positions = random.inSphere(
      new Float32Array(PARTICLE_COUNT * 3),
      { radius: 1.2 }
    );
    for (let i = 0; i < positions.length; i++) {
      if (!Number.isFinite(positions[i])) positions[i] = 0;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref as RefObject<THREE.Group>}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StartsCanvas = () => (
  <div className="w-full h-auto absolute inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StakBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StartsCanvas;
