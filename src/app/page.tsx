"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load delay, remove setTimeout if using real data fetching
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#64ffda]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a192f]">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Features />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
