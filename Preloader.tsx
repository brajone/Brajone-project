"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <img src="/logo.jpg" alt="Brajone" className="h-32 md:h-48" />
            <motion.div 
              className="absolute inset-0 border-2 border-gold/30 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <div className="mt-8 overflow-hidden h-px w-48 bg-white/10 relative">
            <motion.div 
              className="absolute inset-0 bg-gold"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.5em] text-gold font-bold">
            Initializing Spiritual Luxury
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
