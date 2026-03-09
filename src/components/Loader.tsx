import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export default function Loader({ onComplete }: { onComplete: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }, 500); // Wait a bit after 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712]"
    >
      <div className="flex flex-col items-center w-full max-w-md px-8">
        {/* Cyberpunk Glitch Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#a855f7] tracking-widest uppercase text-center">
            Julian Escobar
          </h1>
          <motion.h1 
            animate={{ x: [-2, 2, -1, 1, 0], opacity: [0.5, 1, 0.5, 1, 0] }}
            transition={{ duration: 0.2, repeat: 3, repeatType: "reverse", delay: 0.5 }}
            className="absolute top-0 left-0 text-4xl md:text-5xl font-bold font-mono text-[#06b6d4] tracking-widest uppercase text-center mix-blend-screen"
          >
            Julian Escobar
          </motion.h1>
          <motion.h1 
            animate={{ x: [2, -2, 1, -1, 0], opacity: [0.5, 1, 0.5, 1, 0] }}
            transition={{ duration: 0.2, repeat: 3, repeatType: "reverse", delay: 0.5 }}
            className="absolute top-0 left-0 text-4xl md:text-5xl font-bold font-mono text-[#a855f7] tracking-widest uppercase text-center mix-blend-screen"
          >
            Julian Escobar
          </motion.h1>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-full h-1 bg-[#1f2937] rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#06b6d4] shadow-[0_0_10px_#06b6d4]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="w-full flex justify-between mt-3 font-mono text-xs text-slate uppercase tracking-widest">
          <span>Loading Assets...</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
