
import React, { useState } from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/data";
import { Sliders, Grid3X3, List } from "lucide-react";
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
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Sliders size={18} />
                  <h2 className="text-xl font-bold">Filters</h2>
                </div>
                
                <CategoryFilter 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={setSelectedCategory} 
                />
                
                {/* Price Range Filter */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Price Range</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="price-1" 
                        className="mr-2"
                      />
                      <label htmlFor="price-1">Under $25</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="price-2" 
                        className="mr-2"
                      />
                      <label htmlFor="price-2">$25 - $50</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="price-3" 
                        className="mr-2"
                      />
                      <label htmlFor="price-3">$50 - $100</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="price-4" 
                        className="mr-2"
                      />
                      <label htmlFor="price-4">Over $100</label>
                    </div>
                  </div>
                </div>
                
                {/* Product Type Filter */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Product Type</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="type-1" 
                        className="mr-2"
                      />
                      <label htmlFor="type-1">New Arrivals</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="type-2" 
                        className="mr-2"
                      />
                      <label htmlFor="type-2">Featured</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="type-3" 
                        className="mr-2"
                      />
                      <label htmlFor="type-3">On Sale</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
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
                    <div key={product.id} className="flex items-center gap-4 p-4 border rounded-lg">
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
                      <div className="text-right">
                        <p className="font-bold">${product.price.toFixed(2)}</p>
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
