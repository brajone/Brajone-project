import PropertyCard from "@/components/ui/PropertyCard";
import { Property } from "@/types/property";

const allProperties: Property[] = [
  // ... more properties could be added here
  {
    id: "1",
    title: "The Golden Sanctuary",
    price: 15000000,
    location: "Raman Reti, Vrindavan",
    beds: 3,
    baths: 3,
    sqft: 2400,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    category: "Apartment",
    status: "Ready to Move",
  },
  {
    id: "2",
    title: "Vraj Heights",
    price: 8500000,
    location: "Chaitanya Vihar, Vrindavan",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    category: "Apartment",
    status: "Under Construction",
  },
  {
    id: "3",
    title: "Radha Rani Villas",
    price: 45000000,
    location: "Sunrakh Road, Vrindavan",
    beds: 5,
    baths: 6,
    sqft: 5000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    category: "Villa",
    status: "Ready to Move",
  },
  {
    id: "4",
    title: "Braj Bliss Plots",
    price: 2500000,
    location: "Mathura Road",
    beds: 0,
    baths: 0,
    sqft: 1000,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    category: "Plot",
    status: "Ready to Move",
  },
];

export default function PropertiesPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold">The <span className="text-gold">Portfolio</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">Discover your perfect piece of Vrindavan</p>
        </div>

        {/* Filters Simulation */}
        <div className="flex flex-wrap justify-center gap-4 py-8 border-y border-white/5">
          {["All", "Apartments", "Villas", "Plots"].map((filter) => (
            <button key={filter} className="px-8 py-2 border border-white/10 hover:border-gold hover:text-gold transition-colors text-xs uppercase tracking-widest font-bold">
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
