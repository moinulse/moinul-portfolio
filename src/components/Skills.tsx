"use client"
import { motion } from "framer-motion";
import { frameworks, toolings, icons, IconName } from "@/lib/icons";

const SkillIcon = ({ name, index }: { name: IconName; index: number }) => {
  const { icon: Icon, color } = icons[name];
  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <Icon className="text-4xl mb-2" style={{ color }} />
      <span className="text-sm text-center font-medium text-gray-700">{name}</span>
    </motion.div>
  );
};

const SkillSection = ({ title, skills }: { title: string, skills: IconName[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {skills.map((skill, index) => (
        <SkillIcon key={skill} name={skill} index={index} />
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        <SkillSection title="Frameworks & Languages" skills={frameworks} />
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SkillSection title="Tools & Technologies" skills={toolings} />
        </motion.div>
      </div>
    </section>
  );
}