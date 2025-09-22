import React from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    name: 'Manufacturing & Fabrication',
    description: 'Custom fabrication of IBR components, vessels, tanks, and industrial structures.',
    features: [
      'IBR Vessels & Tanks',
      'Reactors & Columns',
      'Storage Tanks',
      'Metal Structures & Frames',
    ],
    ctaText: 'Learn More',
    highlight: true,
  },
  {
    name: 'Operation & Maintenance',
    description: 'Comprehensive O&M, emergency shutdowns, and annual maintenance for various industries.',
    features: [
      'Cement & Carbon Plants',
      'Glass & Chemical Industries',
      'Paper & Sugar Plants',
      'Textile Industry Support',
    ],
    ctaText: 'Explore Services',
    highlight: false,
  },
  {
    name: 'Tools & Transport',
    description: 'Rental of industrial tools, machinery, and transport vehicles for projects.',
    features: [
      'Motorised Winches & Welding Machines',
      'Hydraulic Cranes & Boom Lifts',
      'Rolling Machines & Air Compressors',
      'Container & Skid Rollers',
    ],
    ctaText: 'Check Availability',
    highlight: false,
  }
];

const ServicesSection = () => {
  return (
    <div className="bg-gradient-to-b from-saas-darkGray to-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Industrial Services</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Kutty Brothers offers end-to-end solutions for manufacturing, maintenance, and industrial operations across multiple sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                service.highlight
                  ? 'bg-gradient-to-b from-saas-orange/20 to-saas-black border border-saas-orange/30 transform hover:-translate-y-2'
                  : 'bg-saas-darkGray border border-gray-800 transform hover:-translate-y-1'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-saas-orange mr-2 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-4 py-3 rounded-lg font-semibold text-white ${
                  service.highlight
                    ? 'bg-saas-orange hover:bg-orange-600'
                    : 'bg-secondary border border-saas-orange/30 hover:border-saas-orange'
                }`}
              >
                {service.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
