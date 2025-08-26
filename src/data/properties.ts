export type Property = {
  id: string;          // stable slug-friendly id
  title: string;       // display title
  address: string;
  bedrooms: number;
  bathrooms: number;
  price?: string;      // prices exist but DO NOT render on Featured Properties page
  images: string[];    // local image paths
  description?: string;
  details?: Array<{ label: string; value: string }>;
  amenities?: string[]; // list of property amenities
};

export const properties: Property[] = [
  {
    id: "nyhsha",
    title: "Nyhsha",
    address: "Premium Residential Complex, Hyderabad",
    bedrooms: 3,
    bathrooms: 3,
    price: "₹1.2 Cr onwards",
    images: [
      "/terranova/images/nyhsha/1.png",
      "/terranova/images/nyhsha/2.png",
      "/terranova/images/nyhsha/3.png",
      "/terranova/images/nyhsha/4.png",
      "/terranova/images/nyhsha/5.png",
      "/terranova/images/nyhsha/6.png",
      "/terranova/images/nyhsha/7.png",
      "/terranova/images/nyhsha/8.png",
    ],
    description: "Modern luxury apartments with contemporary design and premium amenities in the heart of Hyderabad. Nyhsha offers sophisticated living spaces with world-class facilities and excellent connectivity to major business districts.",
    details: [
      { label: "Project Type", value: "Residential Apartments" },
      { label: "Total Floors", value: "G+15" },
      { label: "Unit Types", value: "2BHK, 3BHK" },
      { label: "Amenities", value: "Gym, Pool, Clubhouse" },
      { label: "Location", value: "Prime Hyderabad" },
      { label: "Status", value: "Ready to Move" },
    ],
    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "Clubhouse",
      "Children's Play Area",
      "Landscaped Gardens",
      "24/7 Security",
      "Power Backup",
      "Covered Parking",
      "Intercom Facility",
      "Elevator Access"
    ],
  },
  {
    id: "golden-palm",
    title: "The Golden Palm",
    address: "Luxury Villas, Hyderabad",
    bedrooms: 4,
    bathrooms: 4,
    price: "₹2.5 Cr onwards",
    images: [
      "/terranova/images/goldenleaf/1.png",
      "/terranova/images/goldenleaf/2.png",
      "/terranova/images/goldenleaf/3.png",
      "/terranova/images/goldenleaf/4.png",
      "/terranova/images/goldenleaf/5.png",
      "/terranova/images/goldenleaf/6.png",
      "/terranova/images/goldenleaf/7.png",
    ],
    description: "Exclusive villa community offering spacious homes with world-class facilities and serene surroundings. The Golden Palm represents the epitome of luxury living with premium amenities and thoughtful design in every detail.",
    details: [
      { label: "Project Type", value: "Independent Villas" },
      { label: "Plot Size", value: "200-300 sq yards" },
      { label: "Villa Types", value: "3BHK, 4BHK Duplex" },
      { label: "Amenities", value: "Clubhouse, Swimming Pool" },
      { label: "Location", value: "Gated Community" },
      { label: "Status", value: "Under Construction" },
    ],
    amenities: [
      "Private Swimming Pool",
      "Clubhouse with Banquet Hall",
      "Tennis Court",
      "Jogging Track",
      "Children's Play Area",
      "Landscaped Gardens",
      "24/7 Gated Security",
      "CCTV Surveillance",
      "Private Parking",
      "Intercom System",
      "Power Backup",
      "Water Treatment Plant"
    ],
  },
  {
    id: "silver-leaf",
    title: "The Silver Leaf",
    address: "Elite Residences, Hyderabad",
    bedrooms: 2,
    bathrooms: 2,
    price: "₹85 Lakh onwards",
    images: [
      "/terranova/images/silver/1.png",
      "/terranova/images/silver/2.png",
      "/terranova/images/silver/3.png",
      "/terranova/images/silver/4.png",
      "/terranova/images/silver/5.png",
      "/terranova/images/silver/6.png",
    ],
    description: "Sophisticated residential towers featuring elegant design and premium lifestyle amenities. The Silver Leaf offers modern living spaces with contemporary architecture and excellent connectivity to Hyderabad's key locations.",
    details: [
      { label: "Project Type", value: "High-rise Apartments" },
      { label: "Total Floors", value: "G+20" },
      { label: "Unit Types", value: "1BHK, 2BHK, 3BHK" },
      { label: "Amenities", value: "Sky Lounge, Fitness Center" },
      { label: "Location", value: "IT Corridor" },
      { label: "Status", value: "Launching Soon" },
    ],
    amenities: [
      "Sky Lounge",
      "State-of-the-art Fitness Center",
      "Infinity Pool",
      "Rooftop Garden",
      "Business Center",
      "Multi-purpose Hall",
      "Children's Play Zone",
      "24/7 Concierge Service",
      "Valet Parking",
      "High-speed Elevators",
      "Power Backup",
      "Water Softening Plant"
    ],
  },
  {
    id: "wild-orchard",
    title: "The Wild Orchard",
    address: "Nature's Retreat, Hyderabad",
    bedrooms: 3,
    bathrooms: 3,
    price: "₹1.8 Cr onwards",
    images: [
      "/terranova/images/thewildorchid/1.png",
      "/terranova/images/thewildorchid/2.png",
      "/terranova/images/thewildorchid/3.png",
      "/terranova/images/thewildorchid/4.png",
      "/terranova/images/thewildorchid/5.png",
      "/terranova/images/thewildorchid/6.png",
      "/terranova/images/thewildorchid/7.png",
    ],
    description: "A serene residential project nestled amidst lush greenery, offering a perfect blend of modern amenities and natural tranquility. The Wild Orchard provides spacious homes designed for those who seek peace and luxury in harmony with nature.",
    details: [
      { label: "Project Type", value: "Garden Apartments" },
      { label: "Total Floors", value: "G+8" },
      { label: "Unit Types", value: "2BHK, 3BHK, 4BHK" },
      { label: "Amenities", value: "Garden Spaces, Yoga Deck" },
      { label: "Location", value: "Green Belt Area" },
      { label: "Status", value: "Pre-Launch" },
    ],
    amenities: [
      "Organic Garden Spaces",
      "Yoga and Meditation Deck",
      "Nature Walking Trails",
      "Outdoor Fitness Equipment",
      "Children's Nature Play Area",
      "Butterfly Garden",
      "Rainwater Harvesting",
      "Solar Power Integration",
      "Eco-friendly Waste Management",
      "Bird Watching Deck",
      "Community Herb Garden",
      "Natural Pond Feature"
    ],
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};