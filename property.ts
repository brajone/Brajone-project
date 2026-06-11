export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  category: "Apartment" | "Villa" | "Plot";
  status: "Under Construction" | "Ready to Move" | "Sold Out";
  isFeatured?: boolean;
}
