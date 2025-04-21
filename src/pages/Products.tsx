
import React, { useState } from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/data";
import { Sliders, Grid3X3, List, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const products = getProductsByCategory(selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar / Filters */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Sliders size={18} className="text-primary" />
                  <h2 className="text-xl font-bold">Filters</h2>
                </div>
                {/* Filters redesigned as cards */}
                <div className="space-y-4">

                  {/* Category Filter */}
                  <div className="rounded-2xl p-5 bg-[#F1F0FB] shadow border border-[#E5DEFF]">
                    <CategoryFilter 
                      selectedCategory={selectedCategory} 
                      onSelectCategory={setSelectedCategory} 
                    />
                  </div>

                  {/* Price Range Filter */}
                  <div className="rounded-2xl p-5 bg-[#F2FCE2] shadow border border-[#D6BCFA]">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <IndianRupee size={18} className="text-[#9b87f5]" />
                      Price Range
                    </h2>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="price-1" 
                          className="mr-2 accent-[#9b87f5]"
                        />
                        <label htmlFor="price-1">Under ₹200</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="price-2" 
                          className="mr-2 accent-[#9b87f5]"
                        />
                        <label htmlFor="price-2">₹200 - ₹500</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="price-3" 
                          className="mr-2 accent-[#9b87f5]"
                        />
                        <label htmlFor="price-3">₹500 - ₹1,000</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="price-4" 
                          className="mr-2 accent-[#9b87f5]"
                        />
                        <label htmlFor="price-4">Over ₹1,000</label>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button className="w-full bg-primary rounded-xl shadow hover:bg-primary/90 transition">
                    Apply Filters
                  </Button>

                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="flex-grow">
              {/* Toolbar */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {products.length} products
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                  >
                    <Grid3X3 size={16} />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>
              
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center gap-4 p-4 border rounded-lg bg-[#F1F0FB] shadow-sm">
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-muted-foreground text-sm truncate max-w-md">
                          {product.description}
                        </p>
                      </div>
                      <div className="text-right min-w-[80px]">
                        <p className="font-bold flex items-center justify-end gap-1 text-[#1A1F2C]">
                          <IndianRupee size={16} className="inline-block text-[#9b87f5]" />
                          {product.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                        </p>
                        <Button size="sm" className="mt-2">Add to Cart</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Modern Boutique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
