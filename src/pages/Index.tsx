
import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { Hero } from "@/components/Hero";
import { FeaturedProductsSection, NewArrivalsSection } from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <Hero />
      
      <FeaturedProductsSection />
      
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Our Snacks</h2>
            <p className="text-muted-foreground mb-6">
              Homemade Delights is dedicated to bringing you handcrafted snacks made with love and care. We use only the finest ingredients, traditional recipes, and artisanal techniques to create snacks that are both delicious and wholesome.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link to="/products">Browse Snacks</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <NewArrivalsSection />
      
      <footer className="bg-amber-600 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Homemade Delights</h3>
              <p className="text-white/80">
                Delicious handmade snacks crafted with love. Made with quality ingredients, traditional recipes, and a whole lot of care.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/products" className="hover:underline">Shop</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>
                <li><Link to="/" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <p className="text-white/80 mb-4">
                Sign up for our newsletter to get updates on new snacks and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 text-foreground rounded-l-md focus:outline-none"
                />
                <Button className="rounded-l-none bg-amber-700 text-white hover:bg-amber-800">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
            <p>© {new Date().getFullYear()} Homemade Delights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
