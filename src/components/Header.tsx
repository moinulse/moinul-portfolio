"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MotionHeader, MotionDiv, MotionUl, MotionLi, AnimatePresence } from './MotionWrapper';

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
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionHeader 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <MotionDiv 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/" className="text-2xl font-bold text-indigo-600">moinulhaq</Link>
        </MotionDiv>
        <MotionUl className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <MotionLi key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
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
            </MotionLi>
          ))}
        </MotionUl>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
          >
            <MotionUl className="space-y-6 text-center">
              {menuItems.map((item) => (
                <MotionLi
                  key={item}
                  whileHover={{ scale: 1.1 }}
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
                </MotionLi>
              ))}
            </MotionUl>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
}