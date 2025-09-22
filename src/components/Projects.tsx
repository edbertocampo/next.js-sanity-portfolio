'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getProjectsData, urlFor } from "@/lib/sanity";
import { sanityMockData } from "@/lib/sanityMockData";

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: any; // Sanity image object or fallback string
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>(sanityMockData.projects);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjectsData();
        if (data && Array.isArray(data) && data.length > 0) {
          setProjects(data); // override mock only if Sanity has data
        }
      } catch (err) {
        console.error("❌ Error fetching projects:", err);
        // keep mock data if fetch fails
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#0a192f] text-white">
      <div className="container mx-auto px-6">
        {/* Centered header with lines */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center max-w-6xl mx-auto mb-16 gap-4"
        >
        <span className="flex-1 h-[1px] bg-[#64ffda]/30"></span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] text-center">
          My Projects
        </h2>
        <span className="flex-1 h-[1px] bg-[#64ffda]/30"></span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 text-center mb-16"
        >
          Showcasing My Technical Journey
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => {
            const imageUrl = project.image ? urlFor(project.image)?.url() : null;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-lg bg-[#112240] overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Project Image */}
                {imageUrl && (
                  <div className="relative w-full h-56">
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* GitHub + Demo Links */}
                  <div className="flex justify-end gap-4 mb-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#64ffda] transition-colors"
                      >
                        {/* GitHub Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.288-.01-1.05-.015-2.063-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.333-5.467-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.287-1.552 3.293-1.23 3.293-1.23.655 1.652.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.815 1.102.815 2.222 0 1.606-.014 2.903-.014 3.296 0 .321.216.694.825.577C20.565 21.795 24 17.308 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#64ffda] transition-colors"
                      >
                        {/* Eye / Preview Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>


                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8892b0] mb-4 text-sm">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full border border-[#64ffda]/20 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
