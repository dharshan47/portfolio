"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dharshan from "./Dharshan";

interface Canvas3DProps {
  className?: string;
}

export default function Canvas3D({ className }: Canvas3DProps) {
  return (
    <div className={className}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[-2, 0, 3]} intensity={3} />
        <directionalLight position={[2, 0, 3]} intensity={3} />

        <group>
          <Dharshan scale={13.12} position={[0, -21.5, 0]} />
        </group>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 2} // lock vertical rotation
          maxPolarAngle={Math.PI / 2} // lock vertical rotation'
        />
      </Canvas>
    </div>
  );
}
