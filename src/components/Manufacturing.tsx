import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manufacturingProcesses = [
  {
    title: "IBR Sheet Manufacturing",
    description:
      "High-quality IBR sheets produced with advanced machinery, ensuring durability and compliance with industry standards.",
    image: "https://images.unsplash.com/photo-1581091012184-f712c8a0f02f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Component Fabrication",
    description:
      "Precision fabrication of components including panels, accessories, and custom parts to suit client requirements.",
    image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Quality Control & Testing",
    description:
      "Strict quality control measures and rigorous testing to ensure each product meets safety and performance standards.",
    image: "https://images.unsplash.com/photo-1602526216432-7e83b0b46b8a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Custom Orders & Solutions",
    description:
      "Tailored manufacturing solutions for unique projects, delivering high-quality results on time and within budget.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
  },
];

const Manufacturing = () => {
  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Manufacturing Section */}
      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Manufacturing, IBR <span className="gradient-text">Components & Services</span>
            </h1>
            <p className="text-gray-400">
              Kutty Brothers specializes in high-quality manufacturing of IBR sheets and components, providing
              comprehensive services for industrial and commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingProcesses.map((process, index) => (
              <div
                key={index}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
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

export default Manufacturing;
