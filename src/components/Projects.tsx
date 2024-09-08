"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { icons, IconName } from "@/lib/icons";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  tools: IconName[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Blockchain Transactions Tracker",
    description: "A blockchain aggregator that tracks smart contract transactions involving tokens like USDT and USDC across BSC and Ethereum. Features include cross-chain compatibility, scalable wallet address handling, and performance optimization using async operations and caching.",
    category: "Backend",
    image: "https://via.placeholder.com/400x400",
    link: "https://github.com/moinulse/tx_controller_v2",
    tools: ["Node.js", "TypeScript", "Docker", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Miazu Inventory Manager",
    description: "A web-based inventory management system that tracks products, manages customers and orders, and offers real-time insights through a responsive dashboard. Built with React and Ant Design for the frontend, and a secure NestJS backend.",
    category: "Web",
    image: "https://via.placeholder.com/400x400",
    link: "#",
    tools: ["React", "NestJS", "TypeScript", "Ant Design"]
  }
];

const categories = ["All", "Web", "Backend", "QA"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-10 bg-transparent dark:bg-gray-800 shadow-md rounded-md">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="h-full flex flex-col">
                {/* <CardHeader className="p-0">
                  <Image 
                  
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader> */}
                <CardContent className="flex-grow p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 lg:line-clamp-none">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => {
                      const IconComponent = icons[tool].icon;
                      return (
                        <Badge key={tool} variant="secondary" className="p-1">
                          <IconComponent className="w-8 h-8" style={{ color: icons[tool].color }} />
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-6">
                  <Badge>{project.category}</Badge>
                  <Button asChild variant="link">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}