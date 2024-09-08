"use client";
import { motion } from "framer-motion";
import { School, Calendar, Award, Users, CircleDot } from "lucide-react";
import Flag from "react-flagkit";

type EducationType = {
  degree: string;
  institution: string;
  period: string;
  flag: React.ReactNode;
  details?: string;
  achievements: string[];
  tutorExperience?: {
    role: string;
    institution: string;
    period: string;
    description: string;
  }[];
  volunteerExperience?: {
    role: string;
    institution: string;
    period: string;
    description: string;
  }[];
};

const education: EducationType[] = [
  {
    degree: "PG Diploma in Software QA and Testing",
    institution: "Lambton College",
    period: "2023 - Present",
    flag: <Flag country="CA" size={24} />,
    achievements: [ 
      "Dean's Honour List - Fall 2023, Winter 2024",
      "Student of The Term - Fall 2023",
      "Presidents Award - Fall 2023, Winter 2024"
    ],
    volunteerExperience: [
      {
        role: "Student Tutor",
        institution: "Lambton College",
        period: "2024",
        description:
          "Assist students in understanding software testing concepts.",
      },
    ],
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Multimedia University",
    period: "2018 - 2022",
    details: "Specialization in Software Engineering",
    flag: <Flag country="MY" size={24} />,
    achievements: [
      "High Achievers Scholarship - Multimedia University (2019 - 2022)",
    ],
    tutorExperience: [
      {
        role: "Student Tutor",
        institution: "Multimedia University",
        period: "2021 - 2022",
        description:
          "Assisted peers in understanding software engineering concepts and programming languages.",
      },
      {
        role: "Event Organizer",
        institution: "MMU IT Society",
        period: "2020 - 2022",
        description:
          "Organized coding events, workshops, and hackathons to help students improve their programming skills.",
      },
      {
        role: "Student Mentor",
        institution: "Multimedia University",
        period: "2019 - 2022",
        description:
          "Assist New students in registration, on & off-campus accommodation, technical academic matters, and mental support.",
      },
    ],
  },
];

export default function Education() {
  return (
    <motion.section 
      className="py-10 shadow-lg md:px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 text-indigo-600"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform -translate-x-1/2 hidden md:block"></div>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <EducationItem key={index} edu={edu} index={index} />
          ))}
        </div>
        <motion.div 
          className="absolute left-1/2 bottom-0 w-6 h-6 bg-indigo-500 rounded-full transform -translate-x-1/2 translate-y-3 items-center justify-center hidden md:flex"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CircleDot className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function EducationItem({ edu, index }: { edu: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ x: isEven ? 50 : -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'} pb-8 md:pb-0 text-center md:text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <div className={`flex items-center justify-center md:justify-start ${isEven ? 'md:justify-start' : 'md:justify-end'} mb-2`}>
          <h3 className="text-xl font-medium text-indigo-600">{edu.institution}</h3>
          <span className="ml-2">{edu.flag}</span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
        {edu.details && <h3 className="text-lg text-gray-700 mb-2">{edu.details}</h3>}
        <div className={`flex items-center justify-center md:justify-start ${isEven ? 'md:justify-start' : 'md:justify-end'} text-gray-500`}>
          <Calendar className="mr-2" size={16} />
          <span className="font-bold">{edu.period}</span>
        </div>
      </div>
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'} relative`}>
        <div className={`absolute ${isEven ? '-right-3' : '-left-3'} top-0 w-6 h-6 bg-indigo-500 rounded-full hidden md:block`}></div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {edu.achievements && edu.achievements.length > 0 && (
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Award className="mr-2 text-yellow-500" size={20} />
                Achievements
              </h4>
              <ul className="space-y-2">
                {edu.achievements.map((achievement: string, index: number) => (
                  <motion.li 
                    key={index}
                    className="text-gray-700 flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-indigo-500 mr-2">•</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {(edu.tutorExperience || edu.volunteerExperience) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Users className="mr-2 text-green-500" size={20} />
                Additional Experience
              </h4>
              {[...(edu.tutorExperience || []), ...(edu.volunteerExperience || [])].map((exp, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-gray-700 text-base">{exp.role}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <p className="text-base text-indigo-600">{exp.institution}</p>
                  <p className="text-base text-gray-700 mt-1">{exp.description}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
