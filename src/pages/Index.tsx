
import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { Hero } from "@/components/Hero";
import { FeaturedProductsSection, NewArrivalsSection } from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-100 via-pink-50 to-yellow-100">
      <NavigationMenu />
      <div className="w-full min-h-[50vh] relative z-0">
        <Hero />
      </div>
      
      <FeaturedProductsSection />
      
      {/* Section: About & Browse */}
      <section className="py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg my-12 mx-2 md:mx-0">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-amber-800 drop-shadow">About Our Snacks</h2>
            <p className="text-muted-foreground mb-6">
              Homemade Delights brings the tradition of home kitchens right to your door—discover a growing collection of Namkeen, mithai, snacks, and bites handcrafted with love.
              Only the finest ingredients. Traditional recipes. Made by real people.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-amber-400 hover:bg-amber-500 text-amber-900 font-semibold rounded-full px-6 py-3 shadow-md">
                <Link to="/products">Browse Snacks</Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-300 text-amber-700 rounded-full px-6 py-3">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <NewArrivalsSection />
      
      {/* Improved Footer */}
      <footer className="bg-gradient-to-r from-amber-600 to-pink-300 text-white py-12 mt-10 rounded-t-xl shadow-lg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Homemade Delights</h3>
              <p className="text-white/80">
                Delicious handmade snacks crafted with love.
                From crunchy namkeen to sweet mithai, enjoy authentic, small-batch treats delivered fresh!
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
