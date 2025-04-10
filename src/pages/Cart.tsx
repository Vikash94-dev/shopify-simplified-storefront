
import React from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { Cart as CartComponent } from "@/components/Cart";

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <main className="flex-grow container py-8">
        <CartComponent />
      </main>
      
      <footer className="bg-primary text-primary-foreground py-6 mt-auto">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Modern Boutique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
