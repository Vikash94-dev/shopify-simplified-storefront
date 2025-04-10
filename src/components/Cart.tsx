
import React from "react";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight, Trash } from "lucide-react";

export function Cart() {
  const { cartItems, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <ShoppingCart size={64} className="text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <Button 
          variant="outline" 
          size="sm"
          onClick={clearCart}
          className="text-destructive hover:text-destructive-foreground hover:bg-destructive flex items-center gap-1"
        >
          <Trash size={14} />
          Clear Cart
        </Button>
      </div>

      {/* Cart Items */}
      <div className="border rounded-lg overflow-hidden bg-card">
        <div className="divide-y">
          {cartItems.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        
        {/* Cart Summary */}
        <div className="p-6 bg-muted/50">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-muted-foreground">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between mb-4 font-bold text-lg">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <Button className="w-full flex items-center justify-center gap-2">
            Proceed to Checkout
            <ArrowRight size={16} />
          </Button>
          
          <div className="mt-4 text-center">
            <Link to="/products" className="text-sm text-primary hover:underline">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
