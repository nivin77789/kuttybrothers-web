import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400">
              Have questions or want to collaborate? Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-saas-darkGray p-8 rounded-xl border border-gray-800 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-saas-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 text-gray-400 space-y-2">
              <p>📍 Kutty Brothers, Bangalore, India</p>
              <p>📧 info@kuttybrothers.com</p>
              <p>📞 +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
