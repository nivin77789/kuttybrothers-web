import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navClass = (isActive: boolean) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"
    }`;

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
              Kutty Brothers
            </NavLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={({ isActive }) => navClass(isActive)}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => navClass(isActive)}>
              About Us
            </NavLink>
            <NavLink to="/manufacturing" className={({ isActive }) => navClass(isActive)}>
              Manufacturing
            </NavLink>
            <NavLink to="/ibr-components" className={({ isActive }) => navClass(isActive)}>
              IBR Components & Services
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-saas-orange"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-saas-darkGray shadow-lg rounded-md z-50">
                  <NavLink
                    to="/operation-maintenance"
                    className="block px-4 py-2 text-white hover:bg-saas-black hover:text-saas-orange"
                  >
                    Operation & Maintenance
                  </NavLink>
                  <NavLink
                    to="/tools-for-rent"
                    className="block px-4 py-2 text-white hover:bg-saas-black hover:text-saas-orange"
                  >
                    Tools for Rent
                  </NavLink>
                  <NavLink
                    to="/transports"
                    className="block px-4 py-2 text-white hover:bg-saas-black hover:text-saas-orange"
                  >
                    Transports
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/projects" className={({ isActive }) => navClass(isActive)}>
              Projects
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => navClass(isActive)}>
              Careers
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => navClass(isActive)}>
              Contact Us
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({ isActive }) => `block px-3 py-2 text-base font-medium ${isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"}`} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `block px-3 py-2 text-base font-medium ${isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"}`} onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/manufacturing" className={({ isActive }) => `block px-3 py-2 text-base font-medium ${isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"}`} onClick={() => setIsOpen(false)}>
              Manufacturing
            </NavLink>
            <NavLink to="/ibr-components" className={({ isActive }) => `block px-3 py-2 text-base font-medium ${isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"}`} onClick={() => setIsOpen(false)}>
              IBR Components & Services
            </NavLink>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full text-left px-3 py-2 text-base font-medium text-white hover:text-saas-orange flex justify-between items-center"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="pl-4">
                  <NavLink to="/operation-maintenance" className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange" onClick={() => setIsOpen(false)}>
                    Operation & Maintenance
                  </NavLink>
                  <NavLink to="/tools-for-rent" className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange" onClick={() => setIsOpen(false)}>
                    Tools for Rent
                  </NavLink>
                  <NavLink to="/transports" className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange" onClick={() => setIsOpen(false)}>
                    Transports
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/projects" className={({ isActive }) => `block px-3 py-2 text-base font-medium ${isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"}`} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => `block px-3 py-2 text-base font-medium ${isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"}`} onClick={() => setIsOpen(false)}>
              Careers
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block px-3 py-2 text-base font-medium ${isActive ? "text-saas-orange" : "text-white hover:text-saas-orange"}`} onClick={() => setIsOpen(false)}>
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
