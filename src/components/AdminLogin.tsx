import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Firebase imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful!");
      navigate("/admindashboard"); // redirect after login
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Admin <span className="gradient-text">Login</span>
            </h1>
            <p className="text-gray-400">
              Enter your credentials to access the admin dashboard.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-saas-darkGray p-8 rounded-xl border border-gray-800 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Admin Email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
              />

              {error && <p className="text-red-500">{error}</p>}

              <button
                type="submit"
                className="bg-saas-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminLogin;
