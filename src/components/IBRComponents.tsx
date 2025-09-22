import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const components = [
  {
    title: "Ridge Caps",
    description:
      "Durable ridge caps designed to protect the roof edges while enhancing structural integrity.",
    image: "https://images.unsplash.com/photo-1602526216432-7e83b0b46b8a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Gutters & Downpipes",
    description:
      "Efficient water management components, crafted for longevity and seamless fit with IBR sheets.",
    image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Roof Panels",
    description:
      "High-quality IBR roof panels manufactured to exact specifications, ensuring easy installation and durability.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Custom Accessories",
    description:
      "Tailor-made accessories including fasteners, clips, and trims for complete roofing solutions.",
    image: "https://images.unsplash.com/photo-1581091012184-f712c8a0f02f?auto=format&fit=crop&w=600&q=80",
  },
];

const IBRComponents = () => {
  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Components Section */}
      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              IBR <span className="gradient-text">Components</span>
            </h1>
            <p className="text-gray-400">
              Explore our range of high-quality IBR components designed to complement our roofing solutions and ensure durability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {components.map((component, index) => (
              <div
                key={index}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={component.image}
                  alt={component.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{component.title}</h3>
                <p className="text-gray-400">{component.description}</p>
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

export default IBRComponents;
