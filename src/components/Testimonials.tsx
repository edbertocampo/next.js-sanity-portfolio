'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { SanityMockData } from '@/lib/sanityMockData';
import { sanityMockData } from '@/lib/sanityMockData';

interface TestimonialItem {
  name: string;
  quote: string;
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {sanityMockData.testimonials.map((testimonial: TestimonialItem, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.3 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold text-white">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
