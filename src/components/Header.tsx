"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { m, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["About", "Skills", "Projects", "Experience", "Education"];

  const handleMenuItemClick = (item: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(item.toLowerCase());
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 60;
      const offsetPosition = section.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <m.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <m.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="text-2xl font-bold text-indigo-600">moinulhaq</Link>
        </m.div>
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <m.li key={item} whileHover={{ y: -2 }}>
              <Link 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick(item);
                }}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item}
              </Link>
            </m.li>
          ))}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            name="menu-button"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-md"
          >
            <ul className="space-y-6 text-center">
              {menuItems.map((item) => (
                <m.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(item);
                    }}
                    className="text-2xl text-gray-800 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </Link>
                </m.li>
              ))}
            </ul>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="absolute top-4 right-4"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}