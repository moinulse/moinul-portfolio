import { SiTypescript, SiJavascript, SiNodedotjs, SiNextdotjs, SiNestjs, SiExpress, SiPrisma, SiOpenjdk, SiReact, SiAntdesign, SiTailwindcss, SiHtml5, SiCss3, SiAmazonwebservices, SiFirebase, SiVercel, SiPostgresql, SiNginx, SiTestinglibrary, SiMocha, SiJest, SiCypress, SiDocker, SiJira, SiGit, SiGithub, SiGitlab, SiVisualstudiocode, SiFigma } from 'react-icons/si';
import { IconType } from 'react-icons';

export const icons = {
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  Express: { icon: SiExpress, color: "#000000" },
  Prisma: { icon: SiPrisma, color: "#2D3748" },
  Java: { icon: SiOpenjdk, color: "#000000" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Ant Design": { icon: SiAntdesign, color: "#0170FE" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss3, color: "#1572B6" },
  AWS: { icon: SiAmazonwebservices, color: "#232F3E" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Vercel: { icon: SiVercel, color: "#000000" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Nginx: { icon: SiNginx, color: "#009639" },
  "Testing Library": { icon: SiTestinglibrary, color: "#E33332" },
  Mocha: { icon: SiMocha, color: "#8D6748" },
  Jest: { icon: SiJest, color: "#C21325" },
  Cypress: { icon: SiCypress, color: "#17202C" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Jira: { icon: SiJira, color: "#0052CC" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },
  GitLab: { icon: SiGitlab, color: "#FCA121" },
  "VS Code": { icon: SiVisualstudiocode, color: "#007ACC" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
} as const;

export type IconName = keyof typeof icons;

export interface IconInfo {
  icon: IconType;
  color: string;
}

export const frameworks: IconName[] = [
  "TypeScript", "JavaScript", "Node.js", "Next.js", "NestJS", "Express", "Prisma", "Java", "React", "Ant Design", "Tailwind CSS", "HTML5", "CSS3"
];

export const toolings: IconName[] = [
  "AWS", "Firebase", "Vercel", "PostgreSQL", "Nginx", "Testing Library", "Mocha", "Jest", "Cypress", "Docker", "Jira", "Git", "GitHub", "GitLab", "VS Code", "Figma"
];

