
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

type User = {
  id: string;
  username: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  pinCode: string;
  isVerified: boolean;
};

type UserContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (user: Omit<User, "id" | "isVerified"> & { password: string }) => Promise<void>;
  logout: () => void;
  updateProfile: (updatedUser: Partial<User>) => void;
  verifyEmail: (token: string) => Promise<boolean>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock database of users (in a real app, this would be in a backend)
const MOCK_USERS: (User & { password: string })[] = [
  {
    id: "1",
    username: "johndoe",
    password: "password123",
    email: "john@example.com",
    name: "John Doe",
    phone: "1234567890",
    address: "123 Main St",
    pinCode: "12345",
    isVerified: true
  }
];

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Check if user is logged in via localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    // Simulate API call delay
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(
      u => u.username === username && u.password === password
    );
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      toast({
        title: "Login Successful",
        description: `Welcome back, ${foundUser.name}!`,
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
      throw new Error("Invalid credentials");
    }
    setIsLoading(false);
  };

  const register = async (userData: Omit<User, "id" | "isVerified"> & { password: string }) => {
    // Simulate API call delay
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if username or email already exists
    const userExists = MOCK_USERS.some(
      u => u.username === userData.username || u.email === userData.email
    );
    
    if (userExists) {
      toast({
        title: "Registration Failed",
        description: "Username or email already exists",
        variant: "destructive",
      });
      setIsLoading(false);
      throw new Error("User already exists");
    }
    
    // Create new user
    const newUser: User & { password: string } = {
      ...userData,
      id: String(MOCK_USERS.length + 1),
      isVerified: false,
    };
    
    // In a real app, we would send this to a backend
    MOCK_USERS.push(newUser);
    
    // Log the user in
    const { password, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    
    toast({
      title: "Registration Successful",
      description: "Your account has been created successfully!",
    });
    
    // Simulate sending verification email
    console.log(`Verification email sent to ${userData.email}`);
    toast({
        title: "Verification Email Sent",
        description: `Please check ${userData.email} to verify your account.`,
    });
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };

  const updateProfile = (updatedUser: Partial<User>) => {
    if (user) {
      const newUser = { ...user, ...updatedUser };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      
      // Update the user in our mock database
      const index = MOCK_USERS.findIndex(u => u.id === user.id);
      if (index !== -1) {
        MOCK_USERS[index] = { ...MOCK_USERS[index], ...updatedUser };
      }
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully!",
      });
    }
  };

  const verifyEmail = async (token: string): Promise<boolean> => {
    // In a real app, we would verify this token with a backend
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (user) {
      // Update the user in our mock database and local state
      const newUser = { ...user, isVerified: true };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      
      // Update the mock database
      const index = MOCK_USERS.findIndex(u => u.id === user.id);
      if (index !== -1) {
        MOCK_USERS[index].isVerified = true;
      }
      
      toast({
        title: "Email Verified",
        description: "Your email has been verified successfully!",
      });
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    verifyEmail,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
