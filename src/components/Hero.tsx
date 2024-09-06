"use client"
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        >
          Moinul Haq
        </motion.h1>
        <motion.div
          className="text-2xl md:text-4xl mb-8 text-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Software QA Specialist',
              2000,
              'Web3 Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Crafting robust and scalable web solutions with a passion for clean code and user-centric design.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <SocialLink href="https://github.com/moinulse" icon={<FaGithub size={24} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/moinulhaqse" icon={<FaLinkedin size={24} />} label="LinkedIn" />
          <SocialLink href="mailto:moinulhaq.se@gmail.com" icon={<FaEnvelope size={24} />} label="Email" />
        </motion.div>
        <motion.button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          View My Work
        </motion.button>
      </div>
    </motion.section>
  );
}

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-indigo-600 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);