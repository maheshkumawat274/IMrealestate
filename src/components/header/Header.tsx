import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactBtn from "../btns/contactbtn";

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "About Us", to: "#aboutus" },
  { name: "Our Properties", to: "#properties" },
  { name: "Our Blog", to: "#blog" },
  { name: "Contact Us", to: "#contactus" },
];
const navLinksmobile = [
  { name: "Home", to: "#home" },
  { name: "About Us", to: "#aboutus" },
  { name: "Our Properties", to: "#properties" },
  { name: "Our Blog", to: "#blog" },
  { name: "Contact Us", to: "#contactus" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`w-full fixed z-50 transition-all duration-300 ${isScrolled ? "bg-[#1A3E72] border-b border-[#332d2e]" : ""}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-14 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2" onClick={handleLinkClick}>
          <img
            src="./imgs/profile2.png" // Replace with your profile image
            alt="Profile"
            className="w-12 h-12 rounded-full "
          />
          <span className="text-gray-300 font-bold text-xl md:text-2xl">Properties</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link.to}
              href={link.to}
              className={`text-lg font-medium transition-all duration-150 border-b-2 text-gray-300 border-transparent hover:text-[#1ec258] hover:border-[#1ec258]`}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex">
          <ContactBtn />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-[#0b0b0c] z-50 shadow-lg"
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="text-gray-300">
                <X size={32} />
              </button>
            </div>

            {/* Profile section */}
            <div className="flex flex-col items-center px-6">
              <img
                src="./imgs/profile2.png" // Replace with your profile image
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-gray-700"
              />
              <h1 className="text-gray-300 font-bold text-xl mt-2 pb-2">Properties</h1>
            </div>

            {/* Nav links */}
            <div className="mt-8 px-6 flex flex-col space-y-4">
              {navLinksmobile.map(link => (
                <div key={link.to} className="flex items-center gap-4">
                  <a
                    href={link.to}
                    onClick={handleLinkClick}
                    className="flex items-center text-lg font-medium transition-colors duration-150 text-gray-300 hover:text-[#1ec258]"
                  >
                    {link.name}
                  </a>
                </div>
              ))}

              {/* Consultation Button */}
              <ContactBtn/>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;