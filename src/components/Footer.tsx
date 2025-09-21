'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { sanityMockData } from "@/lib/sanityMockData";
import { getFooterData } from "@/lib/sanity"; // <-- updated

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  text: string;
  links: FooterLink[];
}

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData>(sanityMockData.footer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFooter() {
      try {
        const data = await getFooterData(); // <-- fetch standalone footer
        if (data) {
          setFooterData(data);
        } else {
          setFooterData(sanityMockData.footer);
        }
      } catch (err) {
        console.error("Error fetching footer:", err);
        setFooterData(sanityMockData.footer);
      } finally {
        setLoading(false);
      }
    }

    fetchFooter();
  }, []);

  if (loading) {
    return (
      <footer className="bg-[#112240] text-white py-16 mt-24 text-center">
        <p className="text-[#64ffda] animate-pulse">Loading footer...</p>
      </footer>
    );
  }

  if (!footerData) return null;

  return (
    <footer id="contact" className="bg-[#112240] text-white py-16 mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo + Text */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image 
                src="https://edbert-ocampo.vercel.app/assets/eo_logo-DxAxFzvo.png"
                alt="Edbert Ocampo Logo"
                width={40}
                height={40}
              />
            </div>
            <span className="text-[#8892b0]">{footerData.text}</span>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center md:items-end">
            <ul className="flex gap-8 mb-6 flex-wrap justify-center">
              {footerData.links?.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 text-sm uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-sm text-[#8892b0]">
              Built with Next.js, Sanity, and TailwindCSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
