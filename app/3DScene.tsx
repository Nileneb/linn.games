"use client";

import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Erweiterung des THREE-Namespaces, um Geometrien deklarativ zu nutzen
extend({ BoxBufferGeometry: THREE.BoxBufferGeometry });

const Scene = () => {
  return (
    <Canvas style={{ height: "400px", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
