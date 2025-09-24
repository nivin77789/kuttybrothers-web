import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manufacturingProcesses = [
  { 
    title: "Manufacturing, IBR Components & Services",
    description: "High-quality manufacturing of IBR sheets and components for industrial and commercial applications.",
    image: "https://images.unsplash.com/photo-1581091012184-f712c8a0f02f?auto=format&fit=crop&w=600&q=80",
  },
  { 
    title: "Vessel",
    description: "Fabrication and supply of industrial vessels for various applications.",
    image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80",
  },
  { title: "Reactors", description: "Industrial reactors for chemical and process industries.", image: "https://images.unsplash.com/photo-1602526216432-7e83b0b46b8a?auto=format&fit=crop&w=600&q=80" },
  { title: "Industrial Sheds & Built-Up Structures", description: "Construction of durable industrial sheds and structures.", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80" },
  { title: "Heavy Equipments", description: "Supply and installation of heavy industrial equipment.", image: "https://images.unsplash.com/photo-1581093588401-c16c263f0d9c?auto=format&fit=crop&w=600&q=80" },
  { title: "Dryers", description: "Industrial dryers for various materials.", image: "https://images.unsplash.com/photo-1578926289141-4728ef7f2a6e?auto=format&fit=crop&w=600&q=80" },
  { title: "Piping and Allied Equipment", description: "High-quality piping systems and accessories.", image: "https://images.unsplash.com/photo-1605902711622-cfb43c44308d?auto=format&fit=crop&w=600&q=80" },
  { title: "Storage Tanks", description: "Custom storage tanks for liquids and chemicals.", image: "https://images.unsplash.com/photo-1600185361945-5d86e05f28f4?auto=format&fit=crop&w=600&q=80" },
  { title: "Launching Pads", description: "Precision-engineered launching pads for industrial use.", image: "https://images.unsplash.com/photo-1596495577886-751d3d6780b1?auto=format&fit=crop&w=600&q=80" },
  { title: "Storage Silos (MS / SS)", description: "Durable storage silos for bulk materials.", image: "https://images.unsplash.com/photo-1592878820824-17b9e464af77?auto=format&fit=crop&w=600&q=80" },
  { title: "Heavy Sliding Doors", description: "Robust sliding doors for industrial buildings.", image: "https://images.unsplash.com/photo-1581091215360-fb61eb4aa269?auto=format&fit=crop&w=600&q=80" },
  { title: "Bag filters & ESP", description: "Efficient bag filters and electrostatic precipitators.", image: "https://images.unsplash.com/photo-1581093588401-c16c263f0d9c?auto=format&fit=crop&w=600&q=80" },
  { title: "Chimney / Stack", description: "Industrial chimneys and stacks for emission control.", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80" },
  { title: "Chutes", description: "Durable chutes for material handling.", image: "https://images.unsplash.com/photo-1605902711622-cfb43c44308d?auto=format&fit=crop&w=600&q=80" },
  { title: "Dish Ends", description: "High-quality dish ends for pressure vessels.", image: "https://images.unsplash.com/photo-1600185361945-5d86e05f28f4?auto=format&fit=crop&w=600&q=80" },
  { title: "Hot Gas Filters", description: "Filters designed for high-temperature gases.", image: "https://images.unsplash.com/photo-1581091012184-f712c8a0f02f?auto=format&fit=crop&w=600&q=80" },
  { title: "Heat Exchangers", description: "Industrial heat exchangers for efficient heat transfer.", image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80" },
  { title: "Evaporators", description: "High-efficiency industrial evaporators.", image: "https://images.unsplash.com/photo-1602526216432-7e83b0b46b8a?auto=format&fit=crop&w=600&q=80" },
  { title: "Furnaces", description: "Industrial furnaces for heating processes.", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80" },
  { title: "Cartridge Filter Tanks", description: "Cartridge filter tanks for liquid filtration.", image: "https://images.unsplash.com/photo-1581091012184-f712c8a0f02f?auto=format&fit=crop&w=600&q=80" },
  { title: "Dampers", description: "Airflow dampers for industrial systems.", image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80" },
  { title: "Bunkers", description: "Storage bunkers for bulk materials.", image: "https://images.unsplash.com/photo-1602526216432-7e83b0b46b8a?auto=format&fit=crop&w=600&q=80" },
  { title: "Distillation Column", description: "Distillation columns for chemical processing.", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80" },
  { title: "Expansion Bellows", description: "Expansion bellows for thermal expansion compensation.", image: "https://images.unsplash.com/photo-1581091012184-f712c8a0f02f?auto=format&fit=crop&w=600&q=80" },
  { title: "Hoppers", description: "Hoppers for material handling and storage.", image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80" },
  { title: "Paint Booth (Automobile)", description: "High-quality paint booths for vehicles.", image: "https://images.unsplash.com/photo-1602526216432-7e83b0b46b8a?auto=format&fit=crop&w=600&q=80" },
  { title: "Drying Towers", description: "Drying towers for industrial processes.", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80" },
  { title: "Absorption Towers", description: "Absorption towers for gas treatment.", image: "https://images.unsplash.com/photo-1581091012184-f712c8a0f02f?auto=format&fit=crop&w=600&q=80" },
  { title: "Digesters", description: "Industrial digesters for chemical processing.", image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80" },
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
              Kutty Brothers specializes in high-quality manufacturing of IBR sheets, components, and
              industrial equipment, providing comprehensive services for industrial and commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manufacturingProcesses.map((process, index) => (
              <div
                key={index}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
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
