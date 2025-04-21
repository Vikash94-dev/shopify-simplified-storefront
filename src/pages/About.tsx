
import React from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Utensils,
  Cookie,
  ChefHat,
  Salad,
  CakeSlice,
  Sandwich,
  Carrot,
  Apple,
} from "lucide-react";

const bihariSnacks = [
  {
    name: "Litti Chokha",
    desc: "A classic Bihari dish featuring roasted wheat balls stuffed with spicy sattu, served with mashed veggies.",
    icon: <ChefHat className="w-8 h-8 text-amber-700" />,
  },
  {
    name: "Thekua",
    desc: "Crispy, sweet wheat flour cookies flavored with coconut and jaggery, traditional festive treats.",
    icon: <Cookie className="w-8 h-8 text-amber-700" />,
  },
  {
    name: "Khaja",
    desc: "A multi-layered flaky pastry, deep-fried and dipped in sugar syrup—sweet and crunchy delight.",
    icon: <CakeSlice className="w-8 h-8 text-amber-700" />,
  },
  {
    name: "Sattu Paratha",
    desc: "Wheat flatbread stuffed with tasty sattu (roasted gram flour) filling and spices.",
    icon: <Sandwich className="w-8 h-8 text-amber-700" />,
  },
  {
    name: "Chana Chiwda",
    desc: "Roasted chickpea mix with flattened rice, peanuts, and spices—a crunchy namkeen favorite.",
    icon: <Apple className="w-8 h-8 text-amber-700" />,
  },
  {
    name: "Aloo Bhujia",
    desc: "Crispy potato noodles blended with signature spice mix—a beloved household snack.",
    icon: <Salad className="w-8 h-8 text-amber-700" />,
  },
  {
    name: "Tilkut",
    desc: "Sweet discs made from sesame seeds and jaggery, a must-have during Makar Sankranti.",
    icon: <Utensils className="w-8 h-8 text-amber-700" />,
  },
  {
    name: "Nimki",
    desc: "Crispy, savory diamond-shaped bites perfect for tea time.",
    icon: <Carrot className="w-8 h-8 text-amber-700" />,
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-100 via-pink-50 to-yellow-100">
      <NavigationMenu />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-200 via-amber-100 to-orange-100 shadow-xl rounded-b-2xl mb-12">
          <div className="container flex flex-col items-center justify-center text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-amber-900 font-playfair drop-shadow-xl">
              Taste Bihar, Straight From Our Home Kitchen
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-amber-800 mb-7">
              Homemade Delights brings you truly authentic homemade snacks and sweets from the heart of Bihar, crafted with love and traditional recipes passed down through generations.
            </p>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg rounded-full px-8 py-4 font-semibold">
              <Link to="/products">Explore Our Snacks</Link>
            </Button>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-20 container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-800">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              From our small kitchen in Bihar to your table, Homemade Delights celebrates the soul of traditional Bihari snacks and sweets. 
              Each recipe is lovingly prepared using premium, natural ingredients, just like at home. Whether you're looking to relive childhood flavors or experience the warmth of Bihari hospitality, we promise every bite is filled with nostalgia and honest goodness.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-amber-200 text-amber-800 rounded-full text-sm font-medium">Made With Love</span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Authentic Bihar Flavors</span>
              <span className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">Fresh & Hygienic</span>
            </div>
          </div>

          {/* What Makes Us Special */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-xl p-8 shadow text-center hover:scale-105 transition-transform">
              <Utensils className="w-10 h-10 mx-auto text-amber-700 mb-3" />
              <h3 className="font-semibold text-xl text-amber-900 mb-2">True Home Cooking</h3>
              <p className="text-muted-foreground">Everything is handmade in our own kitchen, not a factory—giving you that real homemade touch in every snack.</p>
            </div>
            <div className="bg-white/90 rounded-xl p-8 shadow text-center hover:scale-105 transition-transform">
              <Cookie className="w-10 h-10 mx-auto text-amber-700 mb-3" />
              <h3 className="font-semibold text-xl text-amber-900 mb-2">Traditional Recipes</h3>
              <p className="text-muted-foreground">We stick to authentic recipes straight from Bihar, handed down generations—no artificial flavors, ever.</p>
            </div>
            <div className="bg-white/90 rounded-xl p-8 shadow text-center hover:scale-105 transition-transform">
              <ChefHat className="w-10 h-10 mx-auto text-amber-700 mb-3" />
              <h3 className="font-semibold text-xl text-amber-900 mb-2">Warm Bihari Hospitality</h3>
              <p className="text-muted-foreground">Snacks here aren’t just food—they’re about warmth, sharing, and memories. We’re delighted to deliver a taste of home to your door.</p>
            </div>
          </div>
        </section>

        {/* Bihari Snacks Section */}
        <section className="container py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-amber-800">Signature Bihari Snacks & Namkeen</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-7">
            {bihariSnacks.map((snack) => (
              <div
                key={snack.name}
                className="bg-white/85 rounded-2xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg hover:-translate-y-2 transition"
              >
                <div className="mb-3">{snack.icon}</div>
                <div className="font-bold text-amber-800 text-lg mb-2">{snack.name}</div>
                <div className="text-muted-foreground text-sm">{snack.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-amber-600 to-pink-300 text-white py-12 mt-8 rounded-t-xl shadow-lg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Homemade Delights</h3>
              <p className="text-white/80">
                Delicious handmade snacks crafted with love and tradition. Bihari flavors, authentic recipes, fresh to your door.
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
                Sign up for our newsletter to get updates on new Bihari snacks and offers.
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

export default About;
