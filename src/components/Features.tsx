'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sanityMockData } from "@/lib/sanityMockData";
import { getFeaturesData } from "@/lib/sanity";

interface FeatureItem {
  title: string;
  technologies: string[];
  icon: string;
}

interface FeatureSection {
  aboutMe?: string;
  features?: FeatureItem[];
}

export default function Features() {
  const [featureSection, setFeatureSection] = useState<FeatureSection>({
    aboutMe: sanityMockData.featuresData.aboutMe,
    features: sanityMockData.featuresData.features,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getFeaturesData();
      if (data) {
        setFeatureSection({
          aboutMe: data.aboutMe || sanityMockData.featuresData.aboutMe,
          features: data.features || sanityMockData.featuresData.features,
        });
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="about" className="py-24 bg-[#0a192f]">
        <div className="container mx-auto px-6">
          <div className="text-center text-[#ccd6f6]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#64ffda] mx-auto mb-4"></div>
            <p>Loading skills...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 bg-[#0a192f]">
      <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-between max-w-6xl mx-auto mb-12 gap-4"
      >
        {/* Left Header */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] truncate">
            About Me
          </h1>
          <span className="flex-1 h-[1px] bg-[#64ffda]/30"></span>
        </div>

        {/* Right Header */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] truncate">
            Skills
          </h1>
          <span className="flex-1 h-[1px] bg-[#64ffda]/30"></span>
        </div>
      </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[#8892b0] whitespace-pre-line text-lg md:text-xl leading-relaxed"
          >
            {featureSection.aboutMe}
          </motion.div>

          {/* Right: Skills / Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureSection.features?.map((feature: FeatureItem, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#112240] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="text-4xl mb-4 block text-[#64ffda]">{feature.icon}</span>
                <h3 className="text-lg font-bold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors">
                  {feature.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {feature.technologies?.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full border border-[#64ffda]/20 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
