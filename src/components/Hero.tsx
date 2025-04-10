
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/30 to-secondary/30" />
      
      {/* Hero Image */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070)",
        }}
      />
      
      {/* Hero Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Modern Boutique
          </h1>
          <p className="text-white text-lg mb-8 drop-shadow-md">
            Discover unique products crafted with care. From everyday essentials to special finds, our collection brings quality and style to your life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
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
                View Collections
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
