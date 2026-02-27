import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 2.2;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.004
        ),
        scale: 0.03 + Math.random() * 0.04,
      });
    }
    return arr;
  }, []);

  const lineGeometry = useMemo(() => {
    const maxLines = PARTICLE_COUNT * 6;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(maxLines * 6);
    const colors = new Float32Array(maxLines * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    // Update particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];
      p.position.add(p.velocity);

      // Bounce
      if (Math.abs(p.position.x) > 7) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 4) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > 3) p.velocity.z *= -1;

      dummy.position.copy(p.position);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update lines
    const posAttr = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
    const colAttr = lineGeometry.getAttribute("color") as THREE.BufferAttribute;
    let lineIdx = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dist = particles[i].position.distanceTo(particles[j].position);
        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          const idx = lineIdx * 6;

          posAttr.array[idx] = particles[i].position.x;
          posAttr.array[idx + 1] = particles[i].position.y;
          posAttr.array[idx + 2] = particles[i].position.z;
          posAttr.array[idx + 3] = particles[j].position.x;
          posAttr.array[idx + 4] = particles[j].position.y;
          posAttr.array[idx + 5] = particles[j].position.z;

          // Neon Cyan color with fade
          colAttr.array[idx] = 0.0 * alpha;
          colAttr.array[idx + 1] = 0.9 * alpha;
          colAttr.array[idx + 2] = 1.0 * alpha;
          colAttr.array[idx + 3] = 0.0 * alpha;
          colAttr.array[idx + 4] = 0.9 * alpha;
          colAttr.array[idx + 5] = 1.0 * alpha;

          lineIdx++;
          if (lineIdx >= PARTICLE_COUNT * 6) break;
        }
      }
      if (lineIdx >= PARTICLE_COUNT * 6) break;
    }

    lineGeometry.setDrawRange(0, lineIdx * 2);
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.7} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.4} />
      </lineSegments>
    </>
  );
}

interface ParticleNetworkProps {
  className?: string;
}

const ParticleNetwork = ({ className = "" }: ParticleNetworkProps) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleNetwork;
