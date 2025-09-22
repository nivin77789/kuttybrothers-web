import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Industrial Plant Construction",
    description: "Complete construction and setup of an industrial plant with all IBR components.",
    image: "https://images.unsplash.com/photo-1581091870620-65b8a9048c1c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Bridge Renovation Project",
    description: "Maintenance and structural reinforcement of an urban bridge using advanced tools and equipment.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Warehouse Expansion",
    description: "Expansion of storage facilities with installation of custom IBR panels and modular components.",
    image: "https://images.unsplash.com/photo-1591012911296-4e30f10c4c9c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Transport Hub Setup",
    description: "End-to-end setup of a logistics transport hub with vehicle and equipment management.",
    image: "https://images.unsplash.com/photo-1602526216432-7e83b0b46b8a?auto=format&fit=crop&w=600&q=80"
  }
];

const Projects = () => {
  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Projects Section */}
      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400">
              Explore some of the successful projects handled by Kutty Brothers, showcasing our expertise in manufacturing, IBR components, and transport services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
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

export default Projects;
