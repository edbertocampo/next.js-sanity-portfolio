'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sanityMockData } from "@/lib/sanityMockData";
import { getProjectsData, urlFor } from "@/lib/sanity";

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: any;
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>(sanityMockData.projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjectsData();
      if (data && data.length > 0) {
        setProjects(data);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-[#0a192f] text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#64ffda] mx-auto mb-4"></div>
        <p>Loading projects...</p>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-[#0a192f] text-white">
      <div className="container mx-auto px-6">
        {/* Header with faint lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center max-w-6xl mx-auto mb-8 gap-4"
        >
          <span className="flex-1 h-[1px] bg-[#64ffda]/30"></span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#ccd6f6]">
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
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-lg bg-[#112240] p-6 hover:shadow-xl transition-all flex flex-col"
            >
              {/* Optional project image */}
              {project.image && (
                <div className="mb-4">
                  <img
                    src={urlFor(project.image)?.width(400).height(200).url()}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              )}

              {/* Icons */}
              <div className="flex items-start justify-end mb-4 gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#64ffda] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#64ffda] transition-colors"
                    aria-label="Live Preview"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#8892b0] mb-4 text-sm line-clamp-3 flex-1">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full border border-[#64ffda]/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
