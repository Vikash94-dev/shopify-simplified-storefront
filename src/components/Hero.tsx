
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-amber-500/40 to-amber-700/40" />
      
      {/* Hero Image */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=2070)",
        }}
      />
      
      {/* Hero Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Homemade Delights
          </h1>
          <p className="text-white text-lg mb-8 drop-shadow-md">
            Discover our collection of handmade snacks crafted with love and traditional recipes. From savory treats to sweet delights, we have something for every craving.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 text-white hover:bg-amber-600"
            >
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30"
            >
              <Link to="/products">
                View All Snacks
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
