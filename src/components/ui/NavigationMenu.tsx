
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  User,
  LogIn,
  LogOut,
  UserPlus
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavigationMenu() {
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold text-primary">
              ModernBoutique
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/products" className="hover:text-primary font-medium">
              Shop
            </Link>
            <Link to="/products" className="hover:text-primary font-medium">
              Categories
            </Link>
            <Link to="/" className="hover:text-primary font-medium">
              About
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="p-2 hover:bg-muted rounded-full"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/cart" 
              className="p-2 hover:bg-muted rounded-full relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs">
                  {totalItems}
                </Badge>
              )}
            </Link>
            {/* User Profile/Login */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 hover:bg-muted rounded-full">
                  <User size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>{user?.name}</span>
                      <span className="text-xs text-muted-foreground">{user?.email}</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 hover:bg-muted rounded-full">
                  <User size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuItem asChild>
                    <Link to="/login" className="cursor-pointer">
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Sign In</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/register" className="cursor-pointer">
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Create Account</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <button
              className="p-2 hover:bg-muted rounded-full md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <Link 
              to="/" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/products" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {!isAuthenticated && (
              <>
                <Link 
                  to="/login" 
                  className="block py-2 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="block py-2 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Account
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Link 
                  to="/profile" 
                  className="block py-2 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </Link>
                <button 
                  className="block py-2 hover:text-primary w-full text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    logout();
                  }}
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pt-4 pb-2">
            <div className="flex items-center border rounded-md overflow-hidden">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full py-2 px-4 focus:outline-none"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2">
                <Search size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
