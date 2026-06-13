'use client';

import { education } from '@/data/background';

export default function Education() {
  return (
    <section id="education" className="py-8">
      <h3 className="text-xl sm:text-2xl font-bold mb-8 text-foreground font-display">Education</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {education.map((edu, index) => (
          <div
            key={index}
            className="border-l-2 border-(--accent) pl-6 pb-4 hover:pl-7 transition-all duration-300"
          >
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 font-display">
              {edu.degree} in {edu.field}
            </h4>
            <p className="text-sm text-(--text-secondary) mb-2">
              {edu.institution}
            </p>
            <p className="text-xs text-(--text-muted) font-mono">
              {edu.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
