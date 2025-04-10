
import React from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <main className="flex-grow container py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="text-primary h-10 w-10" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Thank You For Your Order!</h1>
          <p className="text-muted-foreground mb-8">
            Your order has been placed and is being processed. You will receive an email 
            confirmation shortly.
          </p>
          
          <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
            <h2 className="font-semibold mb-4">Order Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-left text-muted-foreground">Order Number:</div>
              <div className="text-right font-medium">#MOD{Math.floor(100000 + Math.random() * 900000)}</div>
              
              <div className="text-left text-muted-foreground">Date:</div>
              <div className="text-right font-medium">{new Date().toLocaleDateString()}</div>
              
              <div className="text-left text-muted-foreground">Payment Method:</div>
              <div className="text-right font-medium">Credit Card</div>
              
              <div className="text-left text-muted-foreground">Shipping Method:</div>
              <div className="text-right font-medium">Standard Shipping</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/products" className="flex items-center gap-2">
                <ShoppingBag size={16} />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-6 mt-auto">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Modern Boutique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaymentSuccess;
