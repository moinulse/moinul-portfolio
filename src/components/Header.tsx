"use client"
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <motion.header 
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          MD Moinul Haq
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Full Stack Developer | Software Quality Assurance
        </motion.p>
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-white hover:text-gray-200 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}