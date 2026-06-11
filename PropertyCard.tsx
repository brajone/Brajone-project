"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ChevronRight } from "lucide-react";
import { Property } from "@/types/property";
import { formatPrice } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-luxury-charcoal border border-white/10 overflow-hidden hover:border-gold/50 transition-all duration-500"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-black/80 text-gold text-[10px] uppercase tracking-widest px-3 py-1 border border-gold/30">
          {property.status}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-serif font-bold group-hover:text-gold transition-colors">
            {property.title}
          </h3>
          <span className="text-gold font-bold">{formatPrice(property.price)}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <MapPin size={14} className="text-gold" />
          <span>{property.location}</span>
        </div>

        <div className="grid grid-cols-3 border-y border-white/5 py-4 gap-2 text-xs uppercase tracking-widest text-gray-400">
          <div className="flex flex-col items-center gap-1">
            <Bed size={16} className="text-gold" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-white/5">
            <Bath size={16} className="text-gold" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Square size={16} className="text-gold" />
            <span>{property.sqft} Sqft</span>
          </div>
        </div>

        <Link
          href={`/property/${property.id}`}
          className="flex items-center justify-between w-full text-xs uppercase tracking-[0.2em] font-bold group-hover:translate-x-2 transition-transform"
        >
          View Details
          <ChevronRight size={16} className="text-gold" />
        </Link>
      </div>
    </motion.div>
  );
}
