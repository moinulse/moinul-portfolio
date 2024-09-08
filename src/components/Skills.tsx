"use client"
import { m } from "framer-motion";
import { frameworks, toolings, icons, IconName } from "@/lib/icons";

const SkillIcon = ({ name, index }: { name: IconName; index: number }) => {
  const { icon: Icon, color } = icons[name];
  return (
    <m.div 
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="text-4xl mb-2" style={{ color }} />
      <span className="text-sm text-center font-medium text-gray-700">{name}</span>
    </m.div>
  );
};

const SkillSection = ({ title, skills }: { title: string, skills: IconName[] }) => (
  <m.div
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
  </m.div>
);

export default function Skills() {
  return (
    <section className="py-10 md:px-4 bg-transparent shadow-lg">
      <div className="container mx-auto px-4">
        <m.h2 
          className="text-4xl font-bold text-center mb-12 text-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </m.h2>
        <SkillSection title="Frameworks & Languages" skills={frameworks} />
        <m.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SkillSection title="Tools & Technologies" skills={toolings} />
        </m.div>
      </div>
    </section>
  );
}