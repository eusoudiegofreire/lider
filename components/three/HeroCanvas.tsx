"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import { ToolMesh } from "./ToolMesh";

export function HeroCanvas() {
  const pointer = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handlePointerMove(event: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.current.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    }

    function handleScroll() {
      const rect = container!.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = 1 - rect.top / viewportHeight;
      scrollProgress.current = Math.min(Math.max(progress, -1), 1);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [2.4, 1.2, 2.8], fov: 40 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow />
        <directionalLight position={[-3, -1, -2]} intensity={0.3} color="#FF5A1A" />
        <ToolMesh pointer={pointer} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
