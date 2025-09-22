import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import hero.png from the same folder
import heroImage from "./hero.png";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden min-h-[90vh] flex items-center">
      {/* Orange glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto gap-12">
          {/* Left: Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-6 border border-saas-orange/20">
              Established in 1982
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Excellence in Industrial Services &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Manufacturing
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
              Kutty Brothers provides high-quality fabrication, erection, tool
              rentals, crane services, boiler repairs, and IBR components for
              industries across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white"
              >
                Contact Us
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                  className="w-10 h-10 rounded-full"
                  alt="User"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                  className="w-10 h-10 rounded-full"
                  alt="User"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                  className="w-10 h-10 rounded-full"
                  alt="User"
                />
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-saas-orange">39+</span> years
                of industrial excellence
              </p>
            </div>
          </div>

          {/* Right: Floating Image with Text */}
          <div className="flex-1 flex justify-center md:justify-end animate-float relative">
            <img
              src={heroImage}
              alt="Industrial"
              className="w-full max-w-md rounded-lg"
            />
            <div className="absolute bottom-6 left-6 bg-saas-orange/80 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">
              Fabrication & Industrial Projects
            </div>
          </div>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>

      {/* Floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
