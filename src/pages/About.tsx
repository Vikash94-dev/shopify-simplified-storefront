
import React from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Info, 
  Users, 
  Package, 
  MapPin, 
  MessageSquare,
  Mail,
  Phone,
  Globe,
  Award
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Modern Boutique</h1>
              <p className="text-lg text-muted-foreground">
                Curating quality products for modern living since 2018
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center mb-4 text-primary">
                  <Info className="mr-2" />
                  <h2 className="text-sm font-medium tracking-wider uppercase">Our Motive</h2>
                </div>
                <h3 className="text-3xl font-bold mb-6">Creating Thoughtful Spaces</h3>
                <p className="text-muted-foreground mb-6">
                  Modern Boutique was founded with a simple but powerful mission: to provide carefully curated products that enhance everyday living through thoughtful design and sustainable practices.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe that the objects we surround ourselves with should be beautiful, functional, and made to last. Every product in our collection is selected with intention, designed to bring joy and purpose to your space.
                </p>
                <Button asChild>
                  <Link to="/products">Shop Our Collection</Link>
                </Button>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Award className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Quality Craftsmanship</h4>
                      <p className="text-muted-foreground">We partner with skilled artisans and ethical manufacturers who take pride in their work.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Globe className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Sustainable Practices</h4>
                      <p className="text-muted-foreground">We're committed to reducing our environmental impact through thoughtful material choices and packaging.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MessageSquare className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Community Connection</h4>
                      <p className="text-muted-foreground">We believe in building relationships with our customers and the makers behind our products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who We Are */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center mb-4 text-primary">
                <Users className="mr-2" />
                <h2 className="text-sm font-medium tracking-wider uppercase">Who We Are</h2>
              </div>
              <h3 className="text-3xl font-bold mb-6">Meet Our Team</h3>
              <p className="text-muted-foreground">
                Modern Boutique is a small team of design enthusiasts, sustainability advocates, and retail experts committed to bringing thoughtfully curated products into your home.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">JD</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Jane Doe</h4>
                <p className="text-primary text-sm mb-3">Founder & Creative Director</p>
                <p className="text-muted-foreground text-sm">
                  With 15 years of experience in design and retail, Jane brings her passion for beautiful, functional objects to Modern Boutique.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">JS</span>
                </div>
                <h4 className="font-bold text-lg mb-2">John Smith</h4>
                <p className="text-primary text-sm mb-3">Product Curator</p>
                <p className="text-muted-foreground text-sm">
                  John travels the world to discover unique products and build relationships with talented makers and ethical suppliers.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">EW</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Emma Wilson</h4>
                <p className="text-primary text-sm mb-3">Customer Experience</p>
                <p className="text-muted-foreground text-sm">
                  Emma ensures every interaction with Modern Boutique is pleasant and helpful, from browsing to unboxing.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What We Sell */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center mb-4 text-primary">
                  <Package className="mr-2" />
                  <h2 className="text-sm font-medium tracking-wider uppercase">What We Sell</h2>
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Product Categories</h3>
                <p className="text-muted-foreground mb-6">
                  We curate a thoughtful collection of products across several categories, each selected for quality, design, and sustainability:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium">Home Décor</h4>
                      <p className="text-sm text-muted-foreground">Accent pieces that elevate your space with beauty and function.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium">Kitchenware</h4>
                      <p className="text-sm text-muted-foreground">Thoughtfully designed tools and tableware for everyday use.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium">Textiles</h4>
                      <p className="text-sm text-muted-foreground">Soft, sustainable fabrics for comfort and style in any room.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium">Lighting</h4>
                      <p className="text-sm text-muted-foreground">Beautiful fixtures that create the perfect ambiance.</p>
                    </div>
                  </li>
                </ul>
                
                <Button asChild variant="outline">
                  <Link to="/products">Browse All Products</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Home Décor</h4>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Kitchenware</h4>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Textiles</h4>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Lighting</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Info */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center mb-4 text-primary">
                <MapPin className="mr-2" />
                <h2 className="text-sm font-medium tracking-wider uppercase">Find Us</h2>
              </div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground">
                We'd love to hear from you! Whether you have a question about our products, want to visit our showroom, or are interested in collaborating, here's how to reach us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <h4 className="font-bold mb-2">Our Location</h4>
                <p className="text-muted-foreground">
                  123 Design Street<br />
                  Creativity District<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <h4 className="font-bold mb-2">Email Us</h4>
                <p className="text-muted-foreground">
                  info@modernboutique.com<br />
                  support@modernboutique.com
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <h4 className="font-bold mb-2">Call Us</h4>
                <p className="text-muted-foreground">
                  +1 (555) 123-4567<br />
                  Mon-Fri: 9am-6pm EST
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Modern Boutique</h3>
              <p className="text-primary-foreground/80">
                Quality products for modern living. Carefully sourced, thoughtfully designed.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/products" className="hover:underline">Shop</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>
                <li><Link to="/login" className="hover:underline">Login</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <p className="text-primary-foreground/80 mb-4">
                Sign up for our newsletter to get updates on new products and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 text-foreground rounded-l-md focus:outline-none"
                />
                <Button className="rounded-l-none bg-secondary text-secondary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Modern Boutique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
