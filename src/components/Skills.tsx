"use client"
import { m, useAnimation } from "framer-motion";
import { frameworks, toolings, icons, IconName } from "@/lib/icons";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SkillIcon = ({ name, index }: { name: IconName; index: number }) => {
  const { icon: Icon, color } = icons[name];
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ scale: 1, opacity: 1, transition: { delay: index * 0.1 } });
      await controls.start({ scale: 1.10, transition: { type: "spring", stiffness: 300, damping: 10 } });
      await controls.start({ scale: 1, transition: { type: "spring", stiffness: 300, damping: 10 } });
    };
    sequence();
  }, [controls, index]);

  return (
    <m.div 
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
      initial={{ opacity: 0, scale: 1 }}
      animate={controls}
      whileHover={{ 
        scale: 1.15, 
        transition: { type: "spring", stiffness: 300, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="text-4xl mb-2" style={{ color }} />
      <span className="text-sm text-center font-medium text-gray-700">{name}</span>
    </m.div>
  );
};

const SkillSection = ({ title, skills }: { title: string, skills: IconName[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <SkillIcon key={skill} name={skill} index={index} />
        ))}
      </div>
    </m.div>
  );
};

export default function Skills() {
  return (
    <section className="py-10 md:px-4 bg-transparent shadow-lg">
      <div className="container mx-auto px-4">
        <m.h2 
          className="text-4xl font-bold text-center mb-12 text-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </m.h2>
        <SkillSection title="Frameworks & Languages" skills={frameworks} />
        <m.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SkillSection title="Tools & Technologies" skills={toolings} />
        </m.div>
      </div>
    </section>
  );
}