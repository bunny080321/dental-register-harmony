import { Stethoscope } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 to-white">
      <div className="container max-w-4xl py-8 px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Stethoscope className="h-12 w-12 text-dental-600" />
          </div>
          <h1 className="text-3xl font-bold text-dental-900 mb-2">
            Indian Dental Association
          </h1>
          <p className="text-dental-600">Register as a Dental Professional</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Index;