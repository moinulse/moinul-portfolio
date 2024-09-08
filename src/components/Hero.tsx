"use client"
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Replace this with your actual Google Drive PDF link
const RESUME_PDF_URL = "https://drive.google.com/file/d/1vUZUbLpYxI2oOxilKc3oYBYC3QyoA4Cy/view";

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 text-gray-800 px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center w-full max-w-4xl">
        <motion.h1 
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          Hi, I'm Moinul Haq
        </motion.h1>
        <motion.div
          className="text-xl sm:text-2xl md:text-4xl mb-8 text-gray-700"
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
          className="text-lg sm:text-xl mb-8 mx-auto text-gray-600"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
          </motion.button>
          <motion.a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition duration-300 inline-block"
          >
            Resume
          </motion.a>
        </motion.div>
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