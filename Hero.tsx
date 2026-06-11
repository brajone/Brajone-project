"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import LuxurySphere from "../three/LuxurySphere";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Simulation / 3D */}
      <LuxurySphere />
      
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 text-center px-6">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-6 tracking-tighter"
        >
          Spiritual <span className="text-gold">Opulence</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide uppercase"
        >
          Exclusive Luxury Residences in <span className="text-gold">Vrindavan • Mathura • Govardhan • Barsana</span>
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="btn-gold px-10 py-4 text-sm tracking-[0.3em]">
            View Collection
          </button>
          <button className="btn-outline-gold px-10 py-4 text-sm tracking-[0.3em]">
            Our Legacy
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-gold" size={32} />
      </div>
    </section>
  );
}
