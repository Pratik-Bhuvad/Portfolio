'use client';

import { volunteer } from '@/data/background';
import WorkItem from './WorkItem';

export default function Volunteers() {
  return (
    <section className="py-8 h-full flex flex-col">
      <h3 className="text-xl sm:text-2xl font-bold mb-8 text-foreground font-display shrink-0">Volunteer Work</h3>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 grow">
        {volunteer.map((vol, index) => (
          <WorkItem
            key={index}
            title={vol.role}
            subtitle={vol.organization}
            description={vol.description}
          />
        ))}
      </div>
    </section>
  );
}
