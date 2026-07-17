"use client";

import { useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

type ToolMeshProps = {
  pointer: MutableRefObject<{ x: number; y: number }>;
  scrollProgress: MutableRefObject<number>;
};

/**
 * Furadeira estilizada construída com primitivas do Three.js — não há um
 * modelo .glb real fornecido pelo cliente, e baixar um asset de origem
 * desconhecida não é seguro. Geometria procedural mantém o bundle leve e usa
 * as cores da marca diretamente.
 */
export function ToolMesh({ pointer, scrollProgress }: ToolMeshProps) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    group.rotation.y += delta * 0.4;
    group.rotation.x = pointer.current.y * 0.25 + scrollProgress.current * 0.6;
    group.rotation.z = pointer.current.x * -0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Corpo principal */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.6, 0.7, 0.7]} />
        <meshStandardMaterial color="#2E332F" roughness={0.5} metalness={0.3} />
      </mesh>

      {/* Cabo/empunhadura */}
      <mesh position={[-0.4, -0.75, 0]} rotation={[0, 0, 0.35]} castShadow>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshStandardMaterial color="#101211" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* Bateria */}
      <mesh position={[-0.65, -1.35, 0]} castShadow>
        <boxGeometry args={[0.6, 0.35, 0.55]} />
        <meshStandardMaterial color="#FF5A1A" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Mandril */}
      <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.25, 0.3, 0.4, 16]} />
        <meshStandardMaterial color="#FF5A1A" roughness={0.4} metalness={0.4} />
      </mesh>

      {/* Broca */}
      <mesh position={[1.45, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <coneGeometry args={[0.06, 0.5, 12]} />
        <meshStandardMaterial color="#F4F1EA" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Gatilho */}
      <mesh position={[0.05, -0.35, 0]} castShadow>
        <boxGeometry args={[0.15, 0.3, 0.3]} />
        <meshStandardMaterial color="#101211" roughness={0.6} />
      </mesh>
    </group>
  );
}
