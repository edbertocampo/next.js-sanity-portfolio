'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getExperienceData, getAcademicData } from "@/lib/sanity";
import { sanityMockData } from "@/lib/sanityMockData";

interface ExperienceItem {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  ongoing?: boolean;
  description: string;
}

interface AcademicItem {
  title: string;
  institution: string;
  startDate: string;
  endDate?: string;
  ongoing?: boolean;
  description: string;
}

// Helper to convert period string (mock data) to structured start/end/ongoing
const mapPeriodToDates = (period: string) => {
  const [start, end] = period.split(' - ');
  const ongoing = period.toLowerCase().includes('present');
  return { startDate: start, endDate: ongoing ? undefined : end, ongoing };
};

// Helper to format period with month + year
const formatPeriod = (startDate: string, endDate?: string, ongoing?: boolean) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  const startStr = startDate ? new Date(startDate).toLocaleString('en-US', options) : '';
  const endStr = ongoing ? 'Present' : endDate ? new Date(endDate).toLocaleString('en-US', options) : '';
  return `${startStr} - ${endStr}`;
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'academic' | 'professional'>('professional');
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [academic, setAcademic] = useState<AcademicItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch CMS experience
        const expData = await getExperienceData();
        if (expData && expData.length > 0) {
          setExperience(
            expData.map((item: any) => ({
              title: item.title,
              company: item.company,
              startDate: item.startDate,
              endDate: item.endDate,
              ongoing: item.ongoing || false,
              description: item.description,
            }))
          );
        } else {
          // fallback to mock
          setExperience(
            sanityMockData.experience.map(item => ({
              title: item.title,
              company: item.company,
              ...mapPeriodToDates(item.period),
              description: item.description,
            }))
          );
        }

        // Fetch CMS academic
        const eduData = await getAcademicData();
        if (eduData && eduData.length > 0) {
          setAcademic(
            eduData.map((item: any) => ({
              title: item.title,
              institution: item.institution,
              startDate: item.startDate,
              endDate: item.endDate,
              ongoing: item.ongoing || false,
              description: item.description,
            }))
          );
        } else {
          // fallback to mock
          setAcademic(
            sanityMockData.academic.map(item => ({
              title: item.title,
              institution: item.institution,
              ...mapPeriodToDates(item.period),
              description: item.description,
            }))
          );
        }
      } catch (err) {
        console.error("Error fetching experience/academic:", err);
        // On fetch error fallback to mock
        setExperience(
          sanityMockData.experience.map(item => ({
            title: item.title,
            company: item.company,
            ...mapPeriodToDates(item.period),
            description: item.description,
          }))
        );
        setAcademic(
          sanityMockData.academic.map(item => ({
            title: item.title,
            institution: item.institution,
            ...mapPeriodToDates(item.period),
            description: item.description,
          }))
        );
      }
    }

    fetchData();
  }, []);

  return (
    <section id="experience" className="py-24 bg-[#0a192f]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center max-w-6xl mx-auto mb-16 gap-4"
        >
          <span className="flex-1 h-[1px] bg-[#64ffda]/30"></span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] text-center">My Journey</h2>
          <span className="flex-1 h-[1px] bg-[#64ffda]/30"></span>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-[#112240] p-1 bg-[#112240]">
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'academic' ? 'bg-[#64ffda] text-[#0a192f]' : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
            >
              Academic
            </button>
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'professional' ? 'bg-[#64ffda] text-[#0a192f]' : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
            >
              Professional
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'professional' ? (
            experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#64ffda] last:mb-0"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-[#64ffda] transform -translate-x-1/2"></div>
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">{exp.title}</h3>
                <p className="text-[#64ffda] font-medium mb-2">{exp.company}</p>
                <p className="text-[#8892b0] text-sm mb-3">{formatPeriod(exp.startDate, exp.endDate, exp.ongoing)}</p>
                <p className="text-[#8892b0]">{exp.description}</p>
              </motion.div>
            ))
          ) : (
            academic.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#64ffda] last:mb-0"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-[#64ffda] transform -translate-x-1/2"></div>
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">{edu.title}</h3>
                <p className="text-[#64ffda] font-medium mb-2">{edu.institution}</p>
                <p className="text-[#8892b0] text-sm mb-3">{formatPeriod(edu.startDate, edu.endDate, edu.ongoing)}</p>
                <div className="text-[#8892b0] whitespace-pre-line">{edu.description}</div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
