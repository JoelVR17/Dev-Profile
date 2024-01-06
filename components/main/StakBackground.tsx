"use client";

// ...

import { RefObject, useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { GroupProps as ReactThreeFiberGroupProps } from "@react-three/fiber";
import { Euler } from "three";

interface GroupProps extends ReactThreeFiberGroupProps {
  rotation?: Euler;
}

const StakBackground = (props: any) => {
  const ref = useRef<THREE.Group | null>(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

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
          color="$fff"
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
