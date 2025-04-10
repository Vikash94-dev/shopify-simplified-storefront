
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="group relative">
      {/* Product Image with Link */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-lg bg-gray-100 h-64">
        <img 
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badge Indicators */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.new && (
            <Badge className="bg-secondary text-secondary-foreground">New</Badge>
          )}
          {product.featured && (
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          )}
        </div>
        
        {/* Quick add button */}
        <div className="absolute bottom-2 right-2 opacity-0 transform translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-1"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="mt-3">
        <h3 className="text-sm font-medium">
          <Link to={`/product/${product.id}`} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-lg font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
