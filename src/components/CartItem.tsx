
import React from "react";
import { CartItem as CartItemType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Trash, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex items-center py-4 border-b">
      {/* Product Image */}
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="ml-4 flex-grow">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8"
          onClick={handleDecreaseQuantity}
          aria-label="Decrease quantity"
        >
          <Minus size={14} />
        </Button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8"
          onClick={handleIncreaseQuantity}
          aria-label="Increase quantity"
        >
          <Plus size={14} />
        </Button>
      </div>
      
      {/* Price and Remove */}
      <div className="ml-6 flex items-center space-x-4">
        <span className="font-medium">
          ${(product.price * quantity).toFixed(2)}
        </span>
        
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={handleRemove}
          aria-label="Remove item"
        >
          <Trash size={16} />
        </Button>
      </div>
    </div>
  );
}
