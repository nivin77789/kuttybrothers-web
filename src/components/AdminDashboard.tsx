import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Firebase imports
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

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
const auth = getAuth(app);

interface Career {
  id?: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [careers, setCareers] = useState<Career[]>([]);
  const [newCareer, setNewCareer] = useState<Career>({
    title: "",
    location: "",
    type: "",
    description: "",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // 👈 loading state

  // Auth check
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/adminlogin");
    });
  }, [navigate]);

  // Fetch careers
  const fetchCareers = async () => {
    const snapshot = await getDocs(collection(db, "careers"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Career[];
    setCareers(data);
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewCareer({ ...newCareer, [e.target.name]: e.target.value });
  };

  const handleAddCareer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newCareer.title ||
      !newCareer.location ||
      !newCareer.type ||
      !newCareer.description
    )
      return;

    setLoading(true); // start loading

    try {
      if (editId) {
        // Update career
        const docRef = doc(db, "careers", editId);
        await updateDoc(docRef, newCareer);
        setEditId(null);
      } else {
        // Add new career
        await addDoc(collection(db, "careers"), newCareer);
      }

      setNewCareer({ title: "", location: "", type: "", description: "" });
      fetchCareers();
    } finally {
      setLoading(false); // stop loading
    }
  };

  const handleEdit = (career: Career) => {
    setEditId(career.id || null);
    setNewCareer({
      title: career.title,
      location: career.location,
      type: career.type,
      description: career.description,
    });
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    await deleteDoc(doc(db, "careers", id));
    fetchCareers();
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/adminlogin");
  };

  return (
    <div className="bg-saas-black text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow py-16 md:py-24">
        <div className="section-container max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>

          {/* Add / Edit Career Form */}
          <form
            onSubmit={handleAddCareer}
            className="bg-saas-darkGray p-6 rounded-xl mb-8 space-y-4 border border-gray-800"
          >
            <h2 className="text-xl font-semibold">
              {editId ? "Edit Career" : "Add New Career"}
            </h2>

            <input
              type="text"
              name="title"
              value={newCareer.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
              required
            />

            <input
              type="text"
              name="location"
              value={newCareer.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
              required
            />

            <select
              name="type"
              value={newCareer.type}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
              required
            >
              <option value="">Select Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
            </select>

            <textarea
              name="description"
              value={newCareer.description}
              onChange={handleChange}
              placeholder="Description"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white focus:border-saas-orange focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-saas-orange hover:bg-orange-600 px-6 py-2 rounded-lg transition-colors flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Saving...
                </span>
              ) : editId ? (
                "Update Career"
              ) : (
                "Add Career"
              )}
            </button>
          </form>

          {/* Careers List */}
          <div className="space-y-4">
            {careers.map((career) => (
              <div
                key={career.id}
                className="bg-saas-darkGray p-4 rounded-lg border border-gray-700 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">
                    {career.title} -{" "}
                    <span className="text-gray-400">{career.type}</span>
                  </h3>
                  <p className="text-gray-400">{career.location}</p>
                  <p className="text-gray-400">{career.description}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(career)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(career.id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
