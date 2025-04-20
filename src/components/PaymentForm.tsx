
import React from "react";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
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
  ShieldCheck,
  CheckCircle,
  Mail,
  Smartphone
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cardFormSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be at least 16 digits").max(19),
  cardName: z.string().min(2, "Name on card must be at least 2 characters"),
  expiration: z.string().regex(/^\d{2}\/\d{2}$/, "Expiration date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV must be at least 3 digits").max(4),
});

const upiFormSchema = z.object({
  upiId: z.string().regex(/^[\w\.\-]+@[\w\.\-]+$/, "Please enter a valid UPI ID (e.g., username@bank)"),
});

export function PaymentForm() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const shippingDetails = location.state?.shippingDetails || null;
  
  const cardForm = useForm<z.infer<typeof cardFormSchema>>({
    resolver: zodResolver(cardFormSchema),
    defaultValues: {
      cardNumber: "",
      cardName: user?.name || "",
      expiration: "",
      cvv: "",
    },
  });

  const upiForm = useForm<z.infer<typeof upiFormSchema>>({
    resolver: zodResolver(upiFormSchema),
    defaultValues: {
      upiId: "",
    },
  });
  
  const onCardSubmit = (values: z.infer<typeof cardFormSchema>) => {
    // Process credit card payment - in a real app, this would integrate with a payment gateway
    toast({
      title: "Payment Processed",
      description: "Your payment has been successfully processed!",
      duration: 3000,
    });
    
    handlePaymentSuccess();
  };

  const onUPISubmit = (values: z.infer<typeof upiFormSchema>) => {
    // Process UPI payment - in a real app, this would integrate with a UPI payment gateway
    toast({
      title: "UPI Payment Initiated",
      description: "Please check your UPI app to complete the payment",
      duration: 3000,
    });
    
    handlePaymentSuccess();
  };

  const handlePaymentSuccess = () => {
    // Send verification email to user
    if (user && user.email) {
      console.log(`Sending purchase confirmation email to ${user.email}`);
      
      toast({
        title: "Order Confirmation Sent",
        description: (
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>An order confirmation has been sent to {user.email}</span>
          </div>
        ),
        duration: 4000,
      });
    }
    
    setTimeout(() => {
      clearCart();
      navigate("/payment-success");
    }, 1000);
  };

  React.useEffect(() => {
    // Check if shipping details exist
    if (!shippingDetails && cartItems.length > 0) {
      // Redirect back to checkout if no shipping details
      navigate("/checkout");
    }
  }, [shippingDetails, navigate, cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg mb-4">Your cart is empty</p>
        <Button onClick={() => navigate('/products')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <Card className="p-6">
          <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Card Payment
              </TabsTrigger>
              <TabsTrigger value="upi" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                UPI Payment
              </TabsTrigger>
            </TabsList>

            <TabsContent value="card" className="mt-4">
              <Form {...cardForm}>
                <form onSubmit={cardForm.handleSubmit(onCardSubmit)} className="space-y-6">
                  <FormField
                    control={cardForm.control}
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
                    control={cardForm.control}
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
                      control={cardForm.control}
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
                      control={cardForm.control}
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
                  
                  <div className="flex justify-between mt-6">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => navigate("/checkout")}
                    >
                      Back to Shipping
                    </Button>
                    <Button type="submit">
                      Complete Payment
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="upi" className="mt-4">
              <Form {...upiForm}>
                <form onSubmit={upiForm.handleSubmit(onUPISubmit)} className="space-y-6">
                  <FormField
                    control={upiForm.control}
                    name="upiId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>UPI ID</FormLabel>
                        <FormControl>
                          <Input placeholder="username@bank" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center mt-4 p-4 bg-muted/50 rounded-md">
                    <ShieldCheck className="text-primary mr-2" size={20} />
                    <p className="text-sm text-muted-foreground">
                      Your UPI transaction is secure and protected
                    </p>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => navigate("/checkout")}
                    >
                      Back to Shipping
                    </Button>
                    <Button type="submit">
                      Pay with UPI
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
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
  );
}
