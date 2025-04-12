
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  featured: boolean;
  new: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories = [
  { id: "all", name: "All Snacks" },
  { id: "savory", name: "Savory Snacks" },
  { id: "sweet", name: "Sweet Treats" },
  { id: "healthy", name: "Healthy Options" },
  { id: "gift", name: "Gift Boxes" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Homemade Granola Clusters",
    price: 8.99,
    description: "Crunchy oat clusters with honey, nuts, and dried fruits. A perfect healthy snack for any time of day. Made with organic ingredients and no preservatives.",
    category: "healthy",
    imageUrl: "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: false,
  },
  {
    id: "2",
    name: "Artisanal Spiced Nuts Mix",
    price: 12.99,
    description: "A delicious blend of almonds, cashews, and pecans roasted with our special spice blend. Perfect for parties or as a protein-rich snack.",
    category: "savory",
    imageUrl: "https://images.unsplash.com/photo-1536591166276-bb7e2e5fc3c0?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: true,
  },
  {
    id: "3",
    name: "Traditional Chocolate Chip Cookies",
    price: 9.99,
    description: "Soft and chewy chocolate chip cookies made with real butter and premium chocolate. Each batch is made by hand following our grandmother's recipe.",
    category: "sweet",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
    featured: false,
    new: true,
  },
  {
    id: "4",
    name: "Cheese Crackers With Herbs",
    price: 7.99,
    description: "Crispy, cheesy crackers seasoned with fresh herbs from our garden. Perfect for snacking or serving with your favorite dips.",
    category: "savory",
    imageUrl: "https://images.unsplash.com/photo-1603803721487-57ea3de61337?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: false,
  },
  {
    id: "5",
    name: "Handcrafted Caramel Popcorn",
    price: 6.99,
    description: "Sweet and crunchy popcorn coated in our homemade caramel sauce. A classic treat made with love and natural ingredients.",
    category: "sweet",
    imageUrl: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=60",
    featured: false,
    new: true,
  },
  {
    id: "6",
    name: "Seasonal Fruit & Nut Bars",
    price: 10.99,
    description: "Chewy fruit and nut bars made with seasonal dried fruits, nuts, and seeds. A nutritious energy-boosting snack for any time of day.",
    category: "healthy",
    imageUrl: "https://images.unsplash.com/photo-1611409548928-5e3f5c5ea95e?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: false,
  },
  {
    id: "7",
    name: "Assorted Snack Gift Box",
    price: 29.99,
    description: "A curated selection of our most popular snacks packaged in a beautiful gift box. Perfect for gifting to friends, family, or as a corporate present.",
    category: "gift",
    imageUrl: "https://images.unsplash.com/photo-1607920592519-bab4c7ea3c47?w=800&auto=format&fit=crop&q=60",
    featured: false,
    new: true,
  },
  {
    id: "8",
    name: "Spicy Roasted Chickpeas",
    price: 5.99,
    description: "Crunchy roasted chickpeas with a kick of spice. A protein-packed snack that's both satisfying and healthy.",
    category: "savory",
    imageUrl: "https://images.unsplash.com/photo-1593186344145-5fc234a56d39?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getNewProducts(): Product[] {
  return products.filter(product => product.new);
}
