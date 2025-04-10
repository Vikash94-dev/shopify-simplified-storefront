
import React, { useEffect, useState } from "react";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const VerifyEmail = () => {
  const { token } = useParams<{ token: string }>();
  const { verifyEmail, isAuthenticated } = useUser();
  const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "error">("loading");
  
  useEffect(() => {
    if (token) {
      const verify = async () => {
        try {
          const result = await verifyEmail(token);
          setVerificationStatus(result ? "success" : "error");
        } catch (error) {
          console.error("Verification error:", error);
          setVerificationStatus("error");
        }
      };
      
      verify();
    } else {
      setVerificationStatus("error");
    }
  }, [token, verifyEmail]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      
      <main className="flex-grow container py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                Email Verification
              </CardTitle>
              <CardDescription className="text-center">
                {verificationStatus === "loading" && "Verifying your email address..."}
                {verificationStatus === "success" && "Your email has been verified!"}
                {verificationStatus === "error" && "There was a problem verifying your email."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              {verificationStatus === "loading" && (
                <Loader2 className="h-16 w-16 text-primary animate-spin" />
              )}
              {verificationStatus === "success" && (
                <CheckCircle className="h-16 w-16 text-green-500" />
              )}
              {verificationStatus === "error" && (
                <XCircle className="h-16 w-16 text-red-500" />
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              {verificationStatus === "loading" ? (
                <p className="text-muted-foreground">Please wait...</p>
              ) : verificationStatus === "success" ? (
                <Button asChild>
                  <Link to={isAuthenticated ? "/profile" : "/login"}>
                    {isAuthenticated ? "Go to Your Profile" : "Sign In"}
                  </Link>
                </Button>
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    The verification link may have expired or is invalid.
                  </p>
                  <Button asChild>
                    <Link to="/login">Return to Login</Link>
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
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

export default VerifyEmail;
