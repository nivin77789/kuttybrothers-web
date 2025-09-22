import React from 'react';
import { Check, Search, Settings, User, Home, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-saas-orange" />,
    title: 'Project Management',
    description: 'Efficiently manage large-scale projects across multiple industries with streamlined operations.'
  },
  {
    icon: <Settings className="h-6 w-6 text-saas-orange" />,
    title: 'Equipment & Tools',
    description: 'Access a wide range of industrial tools and equipment for rent, ensuring timely and precise work.'
  },
  {
    icon: <User className="h-6 w-6 text-saas-orange" />,
    title: 'Skilled Workforce',
    description: 'Highly trained professionals for manufacturing, fabrication, operation, and maintenance services.'
  },
  {
    icon: <Home className="h-6 w-6 text-saas-orange" />,
    title: 'Custom Fabrication',
    description: 'Manufacture IBR components, vessels, reactors, storage tanks, and industrial structures to client specifications.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-saas-orange" />,
    title: 'Operation & Maintenance',
    description: 'Comprehensive O&M, emergency shutdowns, and annual maintenance for Cement, Carbon, Glass, Chemical, and Textile industries.'
  },
  {
    icon: <Check className="h-6 w-6 text-saas-orange" />,
    title: 'Quality Assurance',
    description: 'Ensuring high-quality standards across all projects and deliverables, meeting industry regulations and client expectations.'
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="gradient-text">Services</span> of Kutty Brothers
          </h2>
          <p className="text-gray-400">
            We provide end-to-end solutions including manufacturing, fabrication, tools rental, and maintenance services for diverse industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
