
import React from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { PaymentForm } from "@/components/PaymentForm";

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <main className="flex-grow container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Payment Details</h1>
          <PaymentForm />
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

export default Payment;
