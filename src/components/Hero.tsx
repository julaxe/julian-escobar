import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const MechanicalKey = ({
  char,
  isPressed,
  onPointerDown,
  onPointerUp
}: {
  char: string;
  isPressed: boolean;
  onPointerDown: (char: string) => void;
  onPointerUp: (char: string) => void;
}) => {
  const depth = 16;

  return (
    <div
      className="relative w-12 h-12 md:w-16 md:h-16 cursor-pointer select-none"
      style={{ transformStyle: 'preserve-3d' }}
      onPointerDown={() => onPointerDown(char)}
      onPointerUp={() => onPointerUp(char)}
      onPointerLeave={() => onPointerUp(char)}
    >
      {/* Base shadow to ground the key */}
      <div 
        className="absolute inset-0 bg-black/60 blur-[6px]" 
        style={{ transform: 'translateZ(-6px)' }} 
      />

      {/* The True 3D CSS Keycap */}
      <motion.div
        animate={{ z: isPressed ? -8 : 0 }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Top Face */}
        <div
          className={`absolute inset-0 flex items-center justify-center font-mono text-xl md:text-2xl font-bold transition-colors duration-150 border border-white/5
            ${isPressed ? 'bg-[#06b6d4] text-[#030712] shadow-[0_0_20px_rgba(6,182,212,0.6)]' : 'bg-[#1f2937] text-slate hover:text-green hover:bg-[#374151]'}`}
          style={{ transform: `translateZ(${depth}px)` }}
        >
          {char}
        </div>

        {/* Front Face */}
        <div
          className={`absolute bottom-0 w-full transition-colors duration-150 ${isPressed ? 'bg-[#0891b2]' : 'bg-[#0f172a]'}`}
          style={{ height: `${depth}px`, transformOrigin: 'bottom', transform: 'rotateX(-90deg)' }}
        />

        {/* Back Face */}
        <div
          className={`absolute top-0 w-full transition-colors duration-150 ${isPressed ? 'bg-[#22d3ee]' : 'bg-[#374151]'}`}
          style={{ height: `${depth}px`, transformOrigin: 'top', transform: 'rotateX(90deg)' }}
        />

        {/* Left Face */}
        <div
          className={`absolute left-0 h-full transition-colors duration-150 ${isPressed ? 'bg-[#06b6d4]' : 'bg-[#1f2937]'}`}
          style={{ width: `${depth}px`, transformOrigin: 'left', transform: 'rotateY(-90deg)' }}
        />

        {/* Right Face */}
        <div
          className={`absolute right-0 h-full transition-colors duration-150 ${isPressed ? 'bg-[#0891b2]' : 'bg-[#0f172a]'}`}
          style={{ width: `${depth}px`, transformOrigin: 'right', transform: 'rotateY(90deg)' }}
        />
      </motion.div>
    </div>
  );
};

export default function Hero() {
  const [pressedKeys, setPressedKeys] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd'].includes(key)) {
        setPressedKeys((prev) => ({ ...prev, [key]: true }));
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd'].includes(key)) {
        setPressedKeys((prev) => ({ ...prev, [key]: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handlePointerDown = (char: string) => setPressedKeys(prev => ({ ...prev, [char.toLowerCase()]: true }));
  const handlePointerUp = (char: string) => setPressedKeys(prev => ({ ...prev, [char.toLowerCase()]: false }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const nameContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.5 },
    },
  };

  const subtitleContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 1.2 },
    },
  };

  const typingCharVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
  };

  const name = "Julian Escobar.";
  const subtitle = "Mechatronic Engineer & Game Developer.";

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-12 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUpVariants} className="text-green font-mono mb-6 ml-1">
          Hi, my name is
        </motion.div>
        
        <motion.h1 
          variants={nameContainerVariants} 
          className="text-lightest-slate text-5xl md:text-7xl font-bold tracking-tight mb-4 flex flex-wrap"
        >
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={typingCharVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 
          variants={subtitleContainerVariants} 
          className="text-slate text-4xl md:text-6xl font-bold tracking-tight mb-8"
        >
          {subtitle.split("").map((char, index) => (
            <motion.span key={index} variants={typingCharVariants}>
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-3 md:w-4 h-8 md:h-12 bg-green ml-2 align-middle"
          />
        </motion.h2>

        <motion.div variants={fadeUpVariants} className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-12">
          <p className="text-slate max-w-xl text-lg md:text-xl leading-relaxed">
            I am a <b>Game Systems Developer</b> and <b>Mechatronic Engineer</b> with a professional background in <b>e-sports</b>. I specialize in architecting scalable gameplay mechanics and developer tools that empower creators and players alike. Currently, I am focused on building inclusive, high-performance systems that bridge technical logic with engaging player experiences.
          </p>
          
          {/* 3D Interactive Keyboard Cluster */}
          <div className="hidden sm:flex flex-col items-center justify-center w-full lg:w-auto" style={{ perspective: 1200 }}>
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative p-8 flex flex-col items-center gap-2 cursor-crosshair"
            >
              <MechanicalKey char="W" isPressed={!!pressedKeys['w']} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} />
              <div className="flex gap-2">
                <MechanicalKey char="A" isPressed={!!pressedKeys['a']} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} />
                <MechanicalKey char="S" isPressed={!!pressedKeys['s']} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} />
                <MechanicalKey char="D" isPressed={!!pressedKeys['d']} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} />
              </div>
              
              {/* Floating Text */}
              <span
                className="absolute -bottom-2 text-xs font-mono text-slate opacity-50 pointer-events-none whitespace-nowrap"
                style={{ transform: 'translateZ(20px)' }}
              >
                Hover to tilt & press keys!
              </span>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div variants={fadeUpVariants}>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 border border-green text-green rounded font-mono text-sm hover:bg-green-tint transition-colors"
          >
            Check out my work!
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
