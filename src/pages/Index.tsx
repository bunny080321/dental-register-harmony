import { Stethoscope } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

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
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
            <p className="text-gray-600 mb-6">
              Please sign in to continue with your registration
            </p>
            <Button
              onClick={() => loginWithRedirect()}
              className="bg-dental-600 hover:bg-dental-700 text-white w-full sm:w-auto"
            >
              Sign in with Google
            </Button>
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