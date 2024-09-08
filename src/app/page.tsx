"use client"
import { LazyMotion, domAnimation, m } from "framer-motion";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-hidden"
      >
        <Header />
        <Hero />
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full rounded-lg" id="about">
            <About />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="skills">
            <Skills />
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full rounded-md" id="experience">
            <Experience />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 rounded-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="education">
            <Education />
          </div>
        </div>
      </m.main>
    </LazyMotion>
  );
}
