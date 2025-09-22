import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <div className="flex-grow">
        <div className="bg-saas-black py-16 md:py-24">
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About <span className="gradient-text">Kutty Brothers</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl">
                Kutty Brothers is a leading provider of industrial solutions, specializing in fabrication, installation, and maintenance of tanks, pipelines, and other equipment. 
                With years of expertise, we ensure the highest quality standards, safety, and efficiency in every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                <p className="text-gray-400">
                  To deliver reliable and innovative industrial solutions that empower businesses to operate safely and efficiently, while maintaining a commitment to quality and customer satisfaction.
                </p>

                <h3 className="text-2xl font-semibold text-white">Our Values</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Excellence in Engineering and Fabrication</li>
                  <li>• Customer-focused Approach</li>
                  <li>• Safety and Compliance First</li>
                  <li>• Integrity and Transparency</li>
                  <li>• Continuous Innovation</li>
                </ul>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Industrial Work"
                  className="rounded-2xl w-full card-shadow"
                />
                <div className="absolute top-0 left-0 w-40 h-40 bg-saas-orange/20 rounded-full blur-3xl -translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-600/20 rounded-full blur-3xl translate-x-10 translate-y-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
