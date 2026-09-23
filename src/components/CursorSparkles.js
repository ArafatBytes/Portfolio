import React, { useEffect, useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

export default function CursorSparkles() {
  const [sparkles, setSparkles] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime > 25) {
        lastTime = now;
        
        const isDark = theme === 'dark';
        
        // In dark mode: bright neon with a white core
        // In light mode: deep saturated neon colors to contrast against white
        const colors = isDark 
          ? ['#FDE047', '#67E8F9', '#F9A8D4', '#FFFFFF']
          : ['#2563EB', '#DB2777', '#7C3AED', '#EA580C'];
          
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const newSparkle = {
          id: now + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 12 + 8, 
          color: color,
          isDark: isDark
        };
        
        setSparkles(prev => [...prev.slice(-25), newSparkle]); 
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y }}
            animate={{ 
              opacity: 0, 
              scale: 1.5, 
              y: sparkle.y + 40 + Math.random() * 30, 
              x: sparkle.x + (Math.random() - 0.5) * 60,
              rotate: Math.random() * 180
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => setSparkles(prev => prev.filter(p => p.id !== sparkle.id))}
            style={{
              position: 'absolute',
              width: sparkle.size,
              height: sparkle.size,
              // Dark mode gets a white core, light mode gets a solid colored core
              backgroundColor: sparkle.isDark ? '#FFFFFF' : sparkle.color, 
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // Star shape
              // Adjust glow based on mode
              boxShadow: sparkle.isDark 
                ? `0 0 10px 2px ${sparkle.color}, 0 0 20px ${sparkle.color}, 0 0 40px ${sparkle.color}`
                : `0 0 5px 1px ${sparkle.color}, 0 0 10px ${sparkle.color}`,
              filter: `drop-shadow(0px 0px 8px ${sparkle.color})` 
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
