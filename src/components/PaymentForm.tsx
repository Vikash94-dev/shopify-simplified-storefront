
import React from "react";
import { useCart } from "@/context/CartContext";
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
  CheckCircle
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be at least 16 digits").max(19),
  cardName: z.string().min(2, "Name on card must be at least 2 characters"),
  expiration: z.string().regex(/^\d{2}\/\d{2}$/, "Expiration date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV must be at least 3 digits").max(4),
});

export function PaymentForm() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const shippingDetails = location.state?.shippingDetails || null;
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      cardName: "",
      expiration: "",
      cvv: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Process payment - in a real app, this would integrate with a payment gateway
    toast({
      title: "Payment Processed",
      description: "Your payment has been successfully processed!",
      duration: 3000,
    });
    
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
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <CreditCard className="mr-2" size={20} />
            Payment Information
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
