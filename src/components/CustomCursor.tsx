import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text' | 'explore' | 'listen' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    document.body.classList.add('custom-cursor-enabled');

    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor]');
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute('data-cursor') || 'hover';
        const label = interactiveEl.getAttribute('data-cursor-text') || '';
        
        if (cursorType === 'explore') {
          setCursorVariant('explore');
          setCursorText(label || 'EXPLORE');
        } else if (cursorType === 'listen') {
          setCursorVariant('listen');
          setCursorText(label || 'LISTEN');
        } else if (cursorType === 'view') {
          setCursorVariant('view');
          setCursorText(label || 'VIEW');
        } else {
          setCursorVariant('hover');
          setCursorText(label || '');
        }
      } else {
        const isClickable = target?.closest('button, a, [role="button"], input, select');
        if (isClickable) {
          setCursorVariant('hover');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-mysuru-charcoal shadow-sm"
        animate={{
          x: mousePosition.x - 3.5,
          y: mousePosition.y - 3.5,
          scale: cursorVariant === 'default' ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
        style={{ width: 7, height: 7 }}
      />

      {/* Luxury Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full border border-mysuru-charcoal/40 backdrop-blur-[1px] transition-colors duration-200"
        animate={{
          x: mousePosition.x - (cursorText ? 42 : 18),
          y: mousePosition.y - (cursorText ? 42 : 18),
          width: cursorText ? 84 : cursorVariant === 'hover' ? 44 : 36,
          height: cursorText ? 84 : cursorVariant === 'hover' ? 44 : 36,
          backgroundColor: cursorText ? 'rgba(18, 19, 22, 0.92)' : cursorVariant === 'hover' ? 'rgba(182, 141, 64, 0.12)' : 'rgba(255, 255, 255, 0.2)',
          borderColor: cursorText ? '#B68D40' : cursorVariant === 'hover' ? '#B68D40' : 'rgba(18, 19, 22, 0.25)',
          scale: 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.25 }}
      >
        {cursorText && (
          <span className="text-[9px] font-sans font-bold tracking-widest text-white select-none text-center px-1 uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};
