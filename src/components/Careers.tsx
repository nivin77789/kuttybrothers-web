import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBcYAP9pbEi9OF5wD7yfE_GXXbeVQIepQ8",
  authDomain: "kutty-website.firebaseapp.com",
  projectId: "kutty-website",
  storageBucket: "kutty-website.firebasestorage.app",
  messagingSenderId: "134298292317",
  appId: "1:134298292317:web:c004e3d59861f659a37db4",
  measurementId: "G-RQP6423MPZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Career {
  id?: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

const Careers = () => {
  const [jobOpenings, setJobOpenings] = useState<Career[]>([]);

  // Real-time fetch from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "careers"), (snapshot) => {
      const jobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Career[];
      setJobOpenings(jobs);
    });

    return () => unsubscribe();
  }, []);

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
            {jobOpenings.map((job) => (
              <div
                key={job.id}
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
