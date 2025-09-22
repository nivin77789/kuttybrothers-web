import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "We are looking for a skilled Frontend Developer to build engaging web applications using React.js and modern UI frameworks.",
  },
  {
    title: "Backend Developer",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "Join our backend team to design and implement robust server-side solutions, APIs, and databases for our SaaS products.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description:
      "Creative designer needed to create intuitive and visually appealing interfaces for web and mobile applications.",
  },
  {
    title: "Operations Manager",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "Lead and manage daily operations, ensure project delivery timelines, and streamline internal processes.",
  },
];

const Careers = () => {
  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Careers Section */}
      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Careers at <span className="gradient-text">Kutty Brothers</span>
            </h1>
            <p className="text-gray-400">
              Join our passionate team and help us build innovative solutions that make a difference. Explore our current job openings below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                <p className="text-gray-400 mb-1">{job.location} | {job.type}</p>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <button className="bg-saas-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
                  Apply Now
                </button>
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

export default Careers;
