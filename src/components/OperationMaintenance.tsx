import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "IBR Component Maintenance",
    description:
      "Regular inspection and maintenance of IBR components to ensure optimal performance and longevity.",
    image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Industrial Equipment Servicing",
    description:
      "Professional servicing of machinery and tools to prevent downtime and maintain efficiency.",
    image: "https://images.unsplash.com/photo-1581091870620-65b8a9048c1c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Preventive Maintenance Plans",
    description:
      "Customized preventive maintenance schedules to keep your operations smooth and reduce unexpected failures.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "On-site Technical Support",
    description:
      "Our team provides on-site support for troubleshooting, installation, and system upgrades.",
    image: "https://images.unsplash.com/photo-1602526216432-7e83b0b46b8a?auto=format&fit=crop&w=600&q=80",
  },
];

const OperationMaintenance = () => {
  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Operation & Maintenance Section */}
      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Operation & <span className="gradient-text">Maintenance</span>
            </h1>
            <p className="text-gray-400">
              Kutty Brothers provides comprehensive operation and maintenance services to ensure your
              equipment and infrastructure run smoothly with minimal downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
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

export default OperationMaintenance;
