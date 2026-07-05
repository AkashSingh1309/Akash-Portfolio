import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.15;
    ref.current.rotation.x += dt * 0.05;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.4, 2]} />
      <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function InnerOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y -= dt * 0.25;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

export function TechOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.4} />
      <Orb />
      <InnerOrb />
    </Canvas>
  );
}
