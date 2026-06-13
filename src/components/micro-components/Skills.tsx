'use client';

import { skills } from '@/data/background';

export default function Skills() {
  return (
    <section id='skills' className="py-8">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground font-display">Technical Skills</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-3 sm:px-4 py-2 sm:py-3 rounded-sm border border-(--border-subtle) bg-(--bg-card) hover:border-(--accent) hover:bg-(--bg-hover) transition-all duration-300 text-center"
          >
            <span className="text-xs sm:text-sm font-(--text-secondary)">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
