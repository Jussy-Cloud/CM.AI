import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState } from "react";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Base rotation
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
    
    // Interactive mouse follow (Position & Rotation)
    // state.pointer is normalized between -1 and 1
    const targetPosX = state.pointer.x * 1.5;
    const targetPosY = state.pointer.y * 1.5;
    
    // Smoothly interpolate position so it follows the cursor
    meshRef.current.position.x += (targetPosX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetPosY - meshRef.current.position.y) * 0.05;
    
    // Add dynamic rotation based on mouse
    const targetRotX = state.pointer.y * 0.5;
    const targetRotY = state.pointer.x * 0.5;
    meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.1;
    meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.1;

    // Scale effect on hover
    const targetScale = hovered ? 1.15 : 1;
    meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
    meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
    meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1.8, 64, 64]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color="#DFFF00"
        attach="material"
        distort={hovered ? 0.6 : 0.4}
        speed={hovered ? 2.5 : 1.5}
        wireframe={true}
        transparent={true}
        opacity={0.6}
      />
    </Sphere>
  );
}

export function HeroSphere() {
  return (
    <div className="absolute inset-0 z-10 cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
