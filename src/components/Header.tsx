"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/" className="text-2xl font-bold text-indigo-600">moinulhaq</Link>
        </motion.div>
        <ul className="flex space-x-6">
          {["About", "Skills", "Projects", "Experience", "Education"].map((item) => (
            <motion.li key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.getElementById(item.toLowerCase());
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}