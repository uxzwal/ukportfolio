import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Lightweight floating depth particle field.
 * - Uses a single Points mesh (one draw call)
 * - Reacts subtly to cursor position via the camera
 * - Skips entirely when prefers-reduced-motion is set
 */

const PARTICLE_COUNT = 600;

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sizes[i] = Math.random() * 0.025 + 0.008;
    }
    return { positions, sizes };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Slow drift
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x += delta * 0.005;

    // Subtle cursor parallax on the camera
    const cam = state.camera;
    const targetX = mouse.x * 0.4;
    const targetY = mouse.y * 0.25;
    cam.position.x += (targetX - cam.position.x) * 0.04;
    cam.position.y += (targetY - cam.position.y) * 0.04;
    cam.lookAt(0, 0, 0);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={PARTICLE_COUNT}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color={new THREE.Color("#10b981")}
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const HeroParticles = () => {
  // Respect reduced motion
  if (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  ) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroParticles;
