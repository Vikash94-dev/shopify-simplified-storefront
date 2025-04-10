
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  CreditCard, 
  User, 
  Home, 
  Truck, 
  ShieldCheck,
  CheckCircle
} from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  cardNumber: z.string().min(16, "Card number must be at least 16 digits").max(19),
  cardName: z.string().min(2, "Name on card must be at least 2 characters"),
  expiration: z.string().regex(/^\d{2}\/\d{2}$/, "Expiration date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV must be at least 3 digits").max(4),
});

export function CheckoutForm() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      cardNumber: "",
      cardName: "",
      expiration: "",
      cvv: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (step === "shipping") {
      setStep("payment");
    } else if (step === "payment") {
      // Process payment
      setStep("confirmation");
    } else if (step === "confirmation") {
      clearCart();
      navigate("/payment-success");
    }
  };

  if (cartItems.length === 0 && step !== "confirmation") {
    return (
      <div className="text-center py-8">
        <p className="text-lg mb-4">Your cart is empty</p>
        <Button onClick={() => navigate('/products')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className={`flex items-center ${step === "shipping" || step === "payment" || step === "confirmation" ? "text-primary" : "text-muted-foreground"}`}>
          <Home className="mr-2" size={20} />
          <span>Shipping</span>
        </div>
        <Separator className="w-12 mx-4" />
        <div className={`flex items-center ${step === "payment" || step === "confirmation" ? "text-primary" : "text-muted-foreground"}`}>
          <CreditCard className="mr-2" size={20} />
          <span>Payment</span>
        </div>
        <Separator className="w-12 mx-4" />
        <div className={`flex items-center ${step === "confirmation" ? "text-primary" : "text-muted-foreground"}`}>
          <CheckCircle className="mr-2" size={20} />
          <span>Confirmation</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === "shipping" && (
                  <>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <User className="mr-2" size={20} />
                      Customer Information
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center">
                      <Truck className="mr-2" size={20} />
                      Shipping Information
                    </h2>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="New York" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zip Code</FormLabel>
                            <FormControl>
                              <Input placeholder="10001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                {step === "payment" && (
                  <>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <CreditCard className="mr-2" size={20} />
                      Payment Information
                    </h2>
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card Number</FormLabel>
                          <FormControl>
                            <Input placeholder="4242 4242 4242 4242" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cardName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name on Card</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="expiration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiration Date</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cvv"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVV</FormLabel>
                            <FormControl>
                              <Input placeholder="123" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center mt-4 p-4 bg-muted/50 rounded-md">
                      <ShieldCheck className="text-primary mr-2" size={20} />
                      <p className="text-sm text-muted-foreground">
                        Your payment information is secure and encrypted
                      </p>
                    </div>
                  </>
                )}

                {step === "confirmation" && (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <CheckCircle className="text-primary" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
                    <p className="text-muted-foreground mb-6">
                      Your order has been placed and will be processed soon.
                    </p>
                  </div>
                )}

                <div className="flex justify-between mt-6">
                  {step !== "shipping" && step !== "confirmation" && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setStep("shipping")}
                    >
                      Back
                    </Button>
                  )}
                  {step === "confirmation" ? (
                    <Button type="submit" className="w-full">
                      Continue Shopping
                    </Button>
                  ) : (
                    <Button type="submit">
                      {step === "shipping" ? "Continue to Payment" : "Place Order"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 && (
              <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-sm">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            )}
            
            <Separator className="my-4" />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(totalPrice + (totalPrice * 0.08)).toFixed(2)}</span>
              </div>
            </div>
          </Card>

          <div className="mt-4 p-4 bg-muted/50 rounded-md">
            <h3 className="font-medium mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-2">
              If you have any questions about your order, please contact our customer service.
            </p>
            <p className="text-sm text-primary">support@modernboutique.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
