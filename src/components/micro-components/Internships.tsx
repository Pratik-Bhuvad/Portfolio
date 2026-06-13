'use client';

import { internships } from '@/data/background';
import WorkItem from './WorkItem';

export default function Internships() {
  return (
    <section className="py-8 h-full flex flex-col">
      <h3 className="text-xl sm:text-2xl font-bold mb-8 text-foreground font-display shrink-0">Internships</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 grow">
        {internships.map((internship, index) => (
          <WorkItem
            key={index}
            title={internship.role}
            subtitle={internship.company}
            duration={internship.duration}
            description={internship.description}
          />
        ))}
      </div>
    </section>
  );
}
