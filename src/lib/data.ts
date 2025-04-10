
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
  { id: "all", name: "All Products" },
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
  { id: "home", name: "Home Decor" },
  { id: "electronics", name: "Electronics" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Cotton T-Shirt",
    price: 29.99,
    description: "A premium quality cotton t-shirt with a minimalist design. Perfect for everyday wear. Made from 100% organic cotton, this t-shirt is breathable and comfortable.",
    category: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: false,
  },
  {
    id: "2",
    name: "Handcrafted Leather Wallet",
    price: 49.99,
    description: "A handcrafted leather wallet with multiple compartments for cards and cash. Made from genuine leather that ages beautifully over time.",
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: true,
  },
  {
    id: "3",
    name: "Modern Ceramic Vase",
    price: 39.99,
    description: "A beautifully crafted ceramic vase with a modern design. Perfect for displaying fresh or dried flowers in your home.",
    category: "home",
    imageUrl: "https://images.unsplash.com/photo-1612196808214-b7e239e5d5e4?w=800&auto=format&fit=crop&q=60",
    featured: false,
    new: true,
  },
  {
    id: "4",
    name: "Wireless Bluetooth Earbuds",
    price: 79.99,
    description: "High-quality wireless earbuds with Bluetooth connectivity. Features noise cancellation and long battery life.",
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: false,
  },
  {
    id: "5",
    name: "Denim Jacket",
    price: 89.99,
    description: "A classic denim jacket with a modern fit. Perfect for layering in any season. Made from high-quality denim that lasts for years.",
    category: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=60",
    featured: false,
    new: true,
  },
  {
    id: "6",
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    description: "An eco-friendly, double-walled stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=60",
    featured: true,
    new: false,
  },
  {
    id: "7",
    name: "Decorative Throw Pillow",
    price: 34.99,
    description: "A decorative throw pillow with a modern pattern. Made from high-quality fabric with a soft inner filling.",
    category: "home",
    imageUrl: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=800&auto=format&fit=crop&q=60",
    featured: false,
    new: true,
  },
  {
    id: "8",
    name: "Smart Watch",
    price: 129.99,
    description: "A feature-rich smart watch with health monitoring, notifications, and customizable watch faces.",
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60",
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
