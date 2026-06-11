"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment } from "@react-three/drei";

export default function LuxurySphere() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#D4AF37" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 100]} scale={1.5}>
            <MeshDistortMaterial
              color="#D4AF37"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0}
              metalness={1}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
