"use client"
import { motion } from "framer-motion";
import { Code, Server, TestTube } from "lucide-react";

export default function About() {
  return (
    <motion.section 
      className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        I&apos;m a passionate Full Stack developer with 3 years of experience, specializing in NestJS, React, Next.js, and TypeScript. Currently pursuing a PG Diploma in Software Quality Assurance and Testing, I&apos;m dedicated to creating efficient, scalable, and high-quality software solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCard 
          icon={<Code size={24} />}
          title="Frontend Development"
          description="Crafting responsive and intuitive user interfaces using React and Next.js"
        />
        <SkillCard 
          icon={<Server size={24} />}
          title="Backend Development"
          description="Building robust and scalable server-side applications with NestJS and Node.js"
        />
        <SkillCard 
          icon={<TestTube size={24} />}
          title="Quality Assurance"
          description="Ensuring software reliability through comprehensive testing and quality assurance practices"
        />
      </div>
    </motion.section>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
