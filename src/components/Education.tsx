"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Calendar, Award, Users } from "lucide-react";
import Flag from "react-flagkit";

const education = [
  {
    degree: "PG Diploma in Software Quality Assurance and Testing",
    institution: "Lambton College",
    period: "2023 - Present",
    flag: <Flag country="CA" size={20} />,
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
    details: "Specialization in Software Engineering.",
    flag: <Flag country="MY" size={20} />,
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
    <Card className="w-full shadow-lg rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="text-3xl font-bold flex items-center space-x-3 text-gray-800 dark:text-gray-200">
          <School className="text-indigo-500 dark:text-indigo-400" size={32} />
          <span>Education</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        {education.map((edu, index) => (
          <div
            key={edu.degree}
            className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-out border border-gray-200 dark:border-gray-700 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 sm:mb-0 flex items-center">
                {edu.degree}
                <span className="ml-2">{edu.flag}</span>
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="mr-1" size={16} />
                <span>{edu.period}</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {edu.institution}
              {edu.details && <span className="ml-2">| {edu.details}</span>}
            </p>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                  <Award className="mr-2 text-yellow-500" size={20} />
                  Achievements
                </h4>
                <ul className="list-disc list-inside ml-4">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 mb-1">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(edu.tutorExperience || edu.volunteerExperience) && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                  <Users className="mr-2 text-green-500" size={20} />
                  Additional Experience
                </h4>
                {[...(edu.tutorExperience || []), ...(edu.volunteerExperience || [])].map((exp, index) => (
                  <div key={index} className="mb-2 last:mb-0">
                    <p className="font-medium text-gray-700 dark:text-gray-300">{exp.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.institution} | {exp.period}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
