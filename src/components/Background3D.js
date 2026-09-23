import React, { useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { ThemeContext } from '../context/ThemeContext';

export default function Background3D() {
  const { theme } = useContext(ThemeContext);
  
  // In light mode, we use darker, more saturated purples so they show up against white.
  // In dark mode, we use brighter, glowing purples.
  const isDark = theme === 'dark';
  const color1 = isDark ? '#8B5CF6' : '#6D28D9';
  const color2 = isDark ? '#C4B5FD' : '#4C1D95';

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-80 dark:opacity-100">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={1} />
        <Sparkles count={400} size={isDark ? 1.5 : 2} scale={15} speed={0.4} color={color1} />
        <Sparkles count={200} size={isDark ? 2 : 2.5} scale={12} speed={0.2} color={color2} />
      </Canvas>
    </div>
  );
}
