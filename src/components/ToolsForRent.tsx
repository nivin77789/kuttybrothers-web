import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tools = [
  {
    title: "Concrete Mixers",
    description: "High-capacity mixers for all your construction needs. Rent by day or week.",
    image: "https://images.unsplash.com/photo-1581092333812-7c9e0bce3e8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Scaffolding Equipment",
    description: "Safe and reliable scaffolding for building and maintenance projects.",
    image: "https://images.unsplash.com/photo-1591487981235-4d1c1a50d0c6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Power Tools",
    description: "Drills, saws, grinders, and other essential tools available for short-term rental.",
    image: "https://images.unsplash.com/photo-1591012911206-f67cf3236f9e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Lifting & Hoisting",
    description: "Cranes, jacks, and hoists to move heavy materials safely and efficiently.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  }
];

const ToolsForRent = () => {
  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Tools Section */}
      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Tools for Rent</span> by Kutty Brothers
            </h1>
            <p className="text-gray-400">
              Access high-quality construction and industrial tools without the hassle of ownership. Flexible rental plans to suit your project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-400">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ToolsForRent;
