import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Briefcase, Calendar } from "lucide-react";
import { icons, IconName } from "@/lib/icons";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  tools: IconName[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "BotAhead Technologies",
    period: "March 2023 - Present",
    description:
      "Developed scalable backends using NestJS, enhancing performance for thousands of users. Delivered high-performance React and Next.js frontends, optimizing page load times by up to 40% and implementing advanced payment solutions.",
    tools: ["NestJS", "React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Shani Entertainment Limited",
    period: "September 2022 - February 2023",
    description:
      "Revamped frontend architecture, significantly improving user experience with a 33% reduction in LCP. Designed and optimized RESTful APIs and integrated blockchain technologies for enhanced product interactions.",
    tools: ["React", "Node.js", "Figma", "Firebase"],
  },
  {
    id: 3,
    title: "Intern Software Engineer",
    company: "Shani Entertainment Limited",
    period: "May 2022 - August 2022",
    description:
      "Converted Figma designs into React components with precise UI fidelity and integrated back-end services, contributing to efficient project workflows.",
    tools: ["React", "Figma", "Firebase"],
  },
  {
    id: 4,
    title: "Intern Software Engineer",
    company: "ELMLabs",
    period: "July 2021 - October 2021",
    description:
      "Optimized app performance by refactoring animations and data fetching logic, enhancing load times. Developed React Native and FastAPI applications to support core functionalities.",
    tools: ["React", "Node.js", "Docker"],
  },
];

export default function Experience() {
  return (
    <Card className="w-full shadow-lg rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="text-3xl font-bold flex items-center space-x-3 text-gray-800 dark:text-gray-200">
          <Briefcase className="text-indigo-500 dark:text-indigo-400" size={32} />
          <span>Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-out border border-gray-200 dark:border-gray-700 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 sm:mb-0">
                {exp.title}
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <BadgeCheck className="mr-2 text-green-500" size={18} />
                <span className="font-medium mr-2">{exp.company}</span>
                <span className="mx-2">|</span>
                <Calendar className="mr-1" size={16} />
                <span>{exp.period}</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              {exp.tools.map((tool) => {
                const { icon: Icon, color } = icons[tool];
                return (
                  <div key={tool} className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
                    <Icon className="text-2xl mr-2" style={{ color }} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}