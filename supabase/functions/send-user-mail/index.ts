
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendUserMailRequest {
  email: string;
  type: "verification" | "order_confirmation";
  name?: string;
  orderNumber?: string;
  verificationLink?: string;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: SendUserMailRequest = await req.json();
    let html = "";
    let subject = "";

    if (body.type === "verification") {
      subject = "Verify your Modern Boutique account";
      html = `
        <h2>Welcome${body.name ? ", " + body.name : ""}!</h2>
        <p>Thank you for registering at Modern Boutique.</p>
        <p>To verify your account, please click the button below:</p>
        <p>
          <a href="${body.verificationLink}" style="padding:10px 20px;background:#4f46e5;color:#fff;border-radius:5px;text-decoration:none;display:inline-block;" target="_blank">Verify Email</a>
        </p>
        <p>If you did not sign up, you can ignore this message.</p>
      `;
    } else if (body.type === "order_confirmation") {
      subject = "Your Modern Boutique Order Confirmation";
      html = `
        <h2>Thank you for your order${body.name ? ", " + body.name : ""}!</h2>
        <p>Your order #${body.orderNumber ? body.orderNumber : ""} has been placed and is being processed.</p>
        <p>You will receive shipping details soon. For questions reply to this email.</p>
        <p>Best,<br/>Modern Boutique</p>
      `;
    } else {
      return new Response(JSON.stringify({ error: "Invalid type parameter" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const emailResponse = await resend.emails.send({
      from: "Modern Boutique <devilvikash94@gmail.com>",
      to: [body.email],
      subject,
      html,
    });

    console.log("User email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending user email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
