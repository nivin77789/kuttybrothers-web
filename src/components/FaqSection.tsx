import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What industries do Kutty Brothers serve?",
    answer: "We provide services across various industries including Cement, Carbon, Chemical, Glass, Sugar, Textile, Nuclear, Thermal, Pharma, Automobile, and Heavy Engineering."
  },
  {
    question: "Do you provide equipment and tools for rent?",
    answer: "Yes, we offer a wide range of tools and equipment for rent including motorized winches, welding machines, air compressors, hydraulic jacks, and more."
  },
  {
    question: "Can you handle large-scale projects?",
    answer: "Absolutely. Kutty Brothers has decades of experience managing large-scale projects in sectors like Aerospace, Nuclear Power, Thermal Power, and Chemical industries."
  },
  {
    question: "Do you offer maintenance and shutdown services?",
    answer: "Yes, we undertake Operation & Maintenance, Emergency Shutdowns, and Annual Shutdowns for various industries to ensure smooth operations."
  },
  {
    question: "How can I get in touch for a project or service inquiry?",
    answer: "You can contact us directly via phone at +91 44 2652 1027 or email at info@kuttybrothers.in. Alternatively, use the enquiry form on our website."
  },
  {
    question: "Do you provide custom fabrication and manufacturing services?",
    answer: "Yes, we manufacture and supply IBR components, pressure vessels, reactors, storage tanks, heavy sliding doors, and many other industrial structures as per client requirements."
  }
];

const FaqSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24 border-t border-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400">
            Find answers to common questions about Kutty Brothers’ services. If you can't find what you're looking for, feel free to contact our team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-saas-darkGray rounded-xl p-6 md:p-8 border border-gray-800 card-shadow">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 last:border-0">
                <AccordionTrigger className="text-left text-white hover:text-saas-orange py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
