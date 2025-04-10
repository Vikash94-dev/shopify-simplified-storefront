
import React, { useState } from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { User, Package, Mail, AlertTriangle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  pinCode: z.string().min(5, "PIN code must be at least 5 characters"),
});

const Profile = () => {
  const { user, logout, updateProfile } = useUser();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || "",
      phone: user?.phone || "",
      address: user?.address || "",
      pinCode: user?.pinCode || "",
    },
  });
  
  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    try {
      setIsSubmitting(true);
      updateProfile(values);
    } catch (error) {
      console.error("Update profile error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <main className="flex-grow container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-1 text-center">
                      <h2 className="text-xl font-semibold">{user?.name}</h2>
                      <p className="text-sm text-muted-foreground">{user?.email}</p>
                      <div className="flex items-center justify-center mt-1">
                        {user?.isVerified ? (
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            Verified Account
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 flex items-center">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Unverified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Account Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-muted-foreground">Username:</span>
                    <p>{user?.username}</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-muted-foreground">Email:</span>
                    <p className="flex items-center gap-1">
                      {user?.email}
                      {user?.isVerified ? (
                        <Badge variant="outline" className="text-xs bg-green-100 text-green-800 border-green-200">
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200">
                          Unverified
                        </Badge>
                      )}
                    </p>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-muted-foreground">Member Since:</span>
                    <p>{new Date().toLocaleDateString()}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-2/3">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your personal details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    className="resize-none" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="pinCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>PIN Code</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Updating Profile
                              </>
                            ) : (
                              "Update Profile"
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="orders" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>
                        View all your previous orders
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-1">No Orders Yet</h3>
                        <p className="text-muted-foreground">
                          When you place orders, they will appear here.
                        </p>
                        <Button 
                          className="mt-4" 
                          variant="outline"
                          onClick={() => navigate("/products")}
                        >
                          Browse Products
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
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

export default Profile;
