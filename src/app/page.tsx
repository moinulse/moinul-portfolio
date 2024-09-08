"use client"
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <Header />
      <Hero />
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="about">
          <About />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="skills">
          <Skills />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="experience">
          <Experience />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="education">
          <Education />
        </div>
      </div>
    </motion.main>
  );
}
