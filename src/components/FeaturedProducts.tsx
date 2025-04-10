
import React from "react";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts, getNewProducts, Product } from "@/lib/data";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function FeaturedProducts({ title, subtitle, products }: FeaturedProductsProps) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProductsSection() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <FeaturedProducts 
      title="Featured Products" 
      subtitle="Discover our handpicked selection of premium products"
      products={featuredProducts}
    />
  );
}

export function NewArrivalsSection() {
  const newProducts = getNewProducts();
  
  return (
    <FeaturedProducts 
      title="New Arrivals" 
      subtitle="Check out our latest additions to the collection"
      products={newProducts}
    />
  );
}
