import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export default function HeroOrb() {
  return (
    <Canvas camera={{ position: [0, 4, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 0, 4]} intensity={2} />
      <Float speed={2} rotationIntensity={3.2} floatIntensity={3}>
        <mesh>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial
            metalness={0.4}
            roughness={0.5}
            color="#38bdf8"
          />
        </mesh>
      </Float>
    </Canvas>
  );
}
