import { Stethoscope } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const handleGoogleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'google-oauth2'
      },
      appState: { returnTo: window.location.pathname }
    });
  };

  const handlePhoneLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'sms'
      },
      appState: { returnTo: window.location.pathname }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dental-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 to-white px-4 sm:px-6">
      <div className="container max-w-4xl py-4 sm:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-4">
            <Stethoscope className="h-10 w-10 sm:h-12 sm:w-12 text-dental-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-dental-900 mb-2">
            Indian Dental Association
          </h1>
          <p className="text-dental-600 text-sm sm:text-base">
            Register as a Dental Professional
          </p>
        </div>

        {!isAuthenticated ? (
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Welcome!</h2>
            <p className="text-gray-600 mb-6 text-center">
              Please sign in to continue with your registration
            </p>
            <div className="space-y-3">
              <Button
                onClick={handleGoogleLogin}
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 w-full flex items-center justify-center gap-2"
                variant="outline"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    style={{ fill: "#4285F4" }}
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    style={{ fill: "#34A853" }}
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    style={{ fill: "#FBBC05" }}
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    style={{ fill: "#EA4335" }}
                  />
                </svg>
                Sign in with Google
              </Button>
              <Button
                onClick={handlePhoneLogin}
                className="w-full"
                variant="default"
              >
                Sign in with Phone Number
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <RegistrationForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;