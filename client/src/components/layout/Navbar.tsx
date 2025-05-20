import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "Über uns" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#radio", label: "Radio" },
  { href: "#contact", label: "Kontakt", isButton: true }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-purple flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold">M</span>
              </div>
              <span className="ml-3 text-lg font-semibold">Matsuda-Projekt</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`
                  ${
                    link.isButton
                      ? "px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-500 transition-colors duration-300 ease-in-out shadow-lg"
                      : "text-gray-300 hover:text-white transition-colors duration-300 ease-in-out"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-300 hover:text-white"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div
        className={`md:hidden bg-dark-800 pb-4 px-4 ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-3 py-3">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`block px-3 py-2 text-base font-medium ${
                link.isButton
                  ? "bg-primary-600 text-white rounded-md"
                  : "text-gray-300 hover:text-white hover:bg-dark-700 rounded-md"
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
