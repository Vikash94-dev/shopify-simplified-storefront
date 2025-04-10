
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { getProductById, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ArrowLeft, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { getFeaturedProducts } from "@/lib/data";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = getProductById(id || "");
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavigationMenu />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== product.id).slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <main className="flex-grow">
        <div className="container py-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm mb-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>
          
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-sm mb-6 hover:text-primary"
          >
            <ArrowLeft size={16} className="mr-1" /> Back
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="bg-muted rounded-lg overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
              
              <div className="border-t border-b py-4 my-6">
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">Category:</span>
                  <span className="text-muted-foreground capitalize">{product.category}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <span className="text-green-600">In Stock</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="quantity" className="block mb-2 font-medium">
                  Quantity
                </label>
                <div className="flex items-center">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="h-10 w-10"
                  >
                    <Minus size={16} />
                  </Button>
                  
                  <div className="w-16 text-center">
                    <span className="text-lg font-medium">{quantity}</span>
                  </div>
                  
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                    className="h-10 w-10"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Heart size={18} />
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mb-12">
            <div className="border-b mb-6">
              <div className="flex space-x-8">
                <button className="px-4 py-2 border-b-2 border-primary font-medium">
                  Description
                </button>
                <button className="px-4 py-2 text-muted-foreground">
                  Shipping
                </button>
                <button className="px-4 py-2 text-muted-foreground">
                  Reviews
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-muted-foreground">
                {product.description}
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                fermentum, odio nec fermentum fringilla, metus neque elementum nulla, 
                id faucibus eros quam vel risus. Sed rhoncus eros vel augue vestibulum, 
                ac volutpat eros lobortis. Morbi hendrerit nulla vel purus porta, id 
                hendrerit risus euismod.
              </p>
            </div>
          </div>
          
          {/* Related Products */}
          <FeaturedProducts
            title="You May Also Like"
            products={relatedProducts}
          />
        </div>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Modern Boutique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
