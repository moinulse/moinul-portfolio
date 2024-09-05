import React from 'react';
import { frameworks, toolings, icons, IconName } from "@/lib/icons";

const SkillIcon = ({ name, index }: { name: IconName; index: number }) => {
  const { icon: Icon, color } = icons[name];
  return (
    <div 
      className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 animate-fade-in-delay"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Icon className="text-4xl mb-2" style={{ color }} />
      <span className="text-sm text-center font-medium text-gray-700 dark:text-gray-300">{name}</span>
    </div>
  );
};

const SkillSection = ({ title, skills }: { title: string, skills: IconName[] }) => (
  <div className="mb-8 animate-fade-in-up">
    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {skills.map((skill, index) => (
        <SkillIcon key={skill} name={skill} index={index} />
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section 
      className="w-full bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg p-8 animate-fade-in-up"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>Skills & Technologies</h2>
      <SkillSection title="Frameworks & Languages" skills={frameworks} />
      <SkillSection title="Tools & Technologies" skills={toolings} />
    </section>
  );
}