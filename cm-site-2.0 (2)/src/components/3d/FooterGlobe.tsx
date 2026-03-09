import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const locations = [
  { name: 'London', lat: 51.5074, lon: -0.1278 },
  { name: 'New York', lat: 40.7128, lon: -74.0060 },
  { name: 'San Francisco', lat: 37.7749, lon: -122.4194 },
  { name: 'Johannesburg', lat: -26.2041, lon: 28.0473 },
  { name: 'Cape Town', lat: -33.9249, lon: 18.4241 },
  { name: 'Australia', lat: -25.2744, lon: 133.7751 }
];

function getCoordinates(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
}

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const beaconsRef = useRef<THREE.Group>(null);
  const radius = 1.5;

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Water - Vibrant Lime
      ctx.fillStyle = '#a3e635'; 
      ctx.fillRect(0, 0, 512, 256);
      
      // Land - Darker, contrasting Lime/Olive
      ctx.fillStyle = '#4d7c0f'; 
      
      // North America (Covers SF: 82, 74 and NY: 151, 70)
      ctx.beginPath(); ctx.arc(82, 74, 25, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(115, 60, 35, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(151, 70, 20, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(130, 95, 15, 0, Math.PI * 2); ctx.fill(); 
      
      // South America
      ctx.beginPath(); ctx.arc(150, 130, 25, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(160, 160, 20, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(155, 190, 15, 0, Math.PI * 2); ctx.fill(); 
      
      // Europe (Covers London: 256, 55)
      ctx.beginPath(); ctx.arc(256, 55, 15, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(280, 45, 25, 0, Math.PI * 2); ctx.fill(); 
      
      // Africa (Covers Joburg: 296, 165 and Cape Town: 282, 176)
      ctx.beginPath(); ctx.arc(260, 100, 35, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(290, 110, 25, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(285, 145, 25, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(289, 170, 15, 0, Math.PI * 2); ctx.fill(); 
      
      // Asia
      ctx.beginPath(); ctx.arc(340, 50, 45, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(380, 70, 30, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(320, 85, 20, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(360, 100, 15, 0, Math.PI * 2); ctx.fill(); 
      
      // Australia (Covers Australia: 446, 164)
      ctx.beginPath(); ctx.arc(446, 164, 30, 0, Math.PI * 2); ctx.fill(); 
      ctx.beginPath(); ctx.arc(470, 180, 10, 0, Math.PI * 2); ctx.fill(); 
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
    if (beaconsRef.current) {
      const time = state.clock.getElapsedTime();
      beaconsRef.current.children.forEach((child, i) => {
        const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.opacity = 0.2 + (Math.sin(time * 3 + i) + 1) / 2 * 0.8;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      </mesh>

      <group ref={beaconsRef}>
        {locations.map((loc, i) => {
          const pos = getCoordinates(loc.lat, loc.lon, radius + 0.02);
          return (
            <mesh key={i} position={pos}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#ff3333" transparent opacity={0.8} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

export function FooterGlobe() {
  return (
    <div className="w-[100px] h-[100px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 3, 5]} intensity={0.8} />
        <Globe />
      </Canvas>
    </div>
  );
}
