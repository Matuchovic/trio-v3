"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function Scoop({ position, color, speed = 0.8, distort = 0.35, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * speed * 0.22;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.35 + speed) * 0.1;
  });
  return (
    <Float speed={speed * 1.2} rotationIntensity={0.25} floatIntensity={0.9}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial color={color} distort={distort} speed={2.5} roughness={0.1} metalness={0.08} />
      </mesh>
    </Float>
  );
}

function Ring({ r, color, speed }: { r: number; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.x = s.clock.elapsedTime * speed;
    ref.current.rotation.z = s.clock.elapsedTime * speed * 0.5;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[r, 0.012, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.18} />
    </mesh>
  );
}

function Particles() {
  const count = 150;
  const pos = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 9;
      a[i * 3] = r * Math.sin(p) * Math.cos(t);
      a[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      a[i * 3 + 2] = r * Math.cos(p);
    }
    return a;
  }, []);

  const cols = useMemo(() => {
    const a = new Float32Array(count * 3);
    const pal = [new THREE.Color("#C4752A"), new THREE.Color("#D4AF37"), new THREE.Color("#D4406A"), new THREE.Color("#4A9E6A")];
    for (let i = 0; i < count; i++) {
      const c = pal[i % 4];
      a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b;
    }
    return a;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.016; });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
        <bufferAttribute attach="attributes-color" args={[cols, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function MouseTracker({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  useFrame((s) => {
    if (!ref.current) return;
    const x = (s.pointer.x * viewport.width) / 2;
    const y = (s.pointer.y * viewport.height) / 2;
    ref.current.rotation.y += (x * 0.035 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-y * 0.035 - ref.current.rotation.x) * 0.05;
  });
  return <group ref={ref}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 48 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[8, 8, 5]} intensity={1.5} color="#FFF3E0" />
      <pointLight position={[-5, 4, 3]} intensity={1} color="#C4752A" />
      <pointLight position={[5, -4, 2]} intensity={0.7} color="#D4406A" />

      <MouseTracker>
        <Scoop position={[-3.5, 1.8, -1]} color="#5C2E0A" speed={0.7} distort={0.38} size={1.1} />
        <Scoop position={[3.2, 2.2, -2.5]} color="#C4901A" speed={1.0} distort={0.3} size={1.0} />
        <Scoop position={[0.3, 3.8, -3.5]} color="#C73D57" speed={0.6} distort={0.42} size={1.2} />
        <Scoop position={[-4.8, -1.2, -4]} color="#C4752A" speed={0.9} distort={0.28} size={0.8} />
        <Scoop position={[4.8, -0.8, -3]} color="#4A9E6A" speed={1.2} distort={0.32} size={0.85} />
        <Scoop position={[-1.5, -3, -5]} color="#D4AF37" speed={0.75} distort={0.25} size={0.7} />
        <Ring r={5.5} color="#C4752A" speed={0.06} />
        <Ring r={7.5} color="#D4406A" speed={-0.04} />
        <Ring r={4} color="#D4AF37" speed={0.1} />
      </MouseTracker>

      <Particles />
      <Stars radius={50} depth={40} count={900} factor={2} fade speed={0.4} />
    </Canvas>
  );
}
