import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function Ring({ rotation }) {
  return (
    <mesh rotation={rotation} scale={[1.6, 1, 1]}>
      <torusGeometry args={[1.6, 0.06, 16, 120]} />
      <meshStandardMaterial
        color="#003952"
        emissive="#00405b"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function ReactLogoPure() {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={ref}>
      <Ring rotation={[0, 0, 0]} />
      <Ring rotation={[Math.PI / 3, 0, 0]} />
      <Ring rotation={[0, Math.PI / 3, 0]} />

      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#005174"
          emissive="#003348"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

export default function HeroOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#024967" />

      {/* Floating Logo */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <ReactLogoPure />
      </Float>
    </Canvas>
  );
}
