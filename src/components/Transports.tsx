import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const transports = [
  {
    title: "Heavy Vehicles",
    description: "We provide fully equipped trucks and trailers for transporting heavy machinery and bulk goods safely.",
    image: "https://images.unsplash.com/photo-1581091870621-df97a93f1f4a?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Light Vehicles",
    description: "Reliable vans and small trucks for smaller shipments or last-mile deliveries.",
    image: "https://images.unsplash.com/photo-1581091215365-1e9d1d61f0bb?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Material Handling",
    description: "Cranes, forklifts, and other transport equipment to move materials efficiently within your facility.",
    image: "https://images.unsplash.com/photo-1596088780798-d6b771edb2a1?auto=format&fit=crop&w=600&q=80"
  }
];

const Transports = () => {
  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Transport Section */}
      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Transport Solutions</span>
            </h1>
            <p className="text-gray-400">
              Kutty Brothers provides reliable and efficient transport services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transports.map((transport, index) => (
              <div
                key={index}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={transport.image}
                  alt={transport.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{transport.title}</h3>
                <p className="text-gray-400">{transport.description}</p>
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

export default Transports;
