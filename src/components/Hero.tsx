'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getHeroData, urlFor } from "@/lib/sanity";
import { sanityMockData } from "@/lib/sanityMockData";
import BytesToText from "./BytesToText";

interface HeroType {
  intro: string;
  highlightName: string;
  headline: string;
  description: string;
  cta: string;
  resumeFile?: { asset: { _ref?: string; url?: string } };
  image?: string | any;
}

export default function Hero() {
  const [hero, setHero] = useState<HeroType | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      const data = await getHeroData();
      if (data) setHero(data);
      else setHero(sanityMockData.hero); // fallback mock
    };
    fetchHero();
  }, []);

  if (!hero) return null;

  // Image URL (handle Sanity image objects or fallback string)
  const heroImageUrl =
    typeof hero.image === "string"
      ? hero.image
      : hero.image
      ? urlFor(hero.image)?.url()
      : null;

  // Resume URL: handle Sanity file reference or fallback mock
  const resumeUrl = hero.resumeFile?.asset?.url
    ? hero.resumeFile.asset.url
    : hero.resumeFile?.asset?._ref
    ? `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${hero.resumeFile.asset._ref
        .replace(/^file-/, "")
        .replace(/-pdf$/, ".pdf")}`
    : "https://edbert-ocampo.vercel.app/Ocampo%20Edbert%20Resume.pdf"; // fallback mock


  return (
    <section className="min-h-screen pt-28 pb-12 md:pt-32 md:pb-16 bg-[#0a192f] flex flex-col md:flex-row items-center px-6 md:px-24">
      {/* Left: Text */}
      <motion.div
        className="md:w-1/2 flex flex-col items-start text-left"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[#64ffda] font-inter mb-2">
          <BytesToText text={hero.intro} delay={0} speed={18} />
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          <span className="font-roboto-mono text-[#64ffda]">
            <BytesToText text={hero.highlightName} delay={200} speed={16} nowrap />
          </span>.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[#ccd6f6] mb-6 leading-snug">
          <BytesToText text={hero.headline} delay={350} speed={14} />
        </h2>
        <p className="text-md md:text-lg text-[#8892b0] max-w-3xl md:max-w-2xl mb-8 leading-relaxed font-inter">
          <BytesToText text={hero.description} delay={550} speed={12} asString />
        </p>

        {/* Download Resume Button */}
        <motion.a
          href={resumeUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 500, damping: 20, duration: 0.2 }}
          className="px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] text-lg rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-150"
        >
          {hero.cta}
        </motion.a>
      </motion.div>

      {/* Right: Image */}
      {heroImageUrl && (
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={heroImageUrl}
            alt={hero.highlightName}
            width={400}
            height={400}
            className="rounded-xl object-cover"
            priority
          />
        </motion.div>
      )}
    </section>
  );
}
