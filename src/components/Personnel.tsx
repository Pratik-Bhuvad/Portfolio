'use client';

import Skills from './micro-components/Skills';
import Education from './micro-components/Education';
import Internships from './micro-components/Internships';
import Volunteers from './micro-components/Volunteers';

export default function Personnel() {
  return (
    <section id="personnel" className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 font-display">
            Background
          </h2>
          <p className="text-sm sm:text-base text-(--text-secondary) font-mono">
            Skills, Education, and Professional experience.
          </p>
        </div>

      {/* Skills Section */}
      <Skills />

      {/* Divider */}
      <div className="my-8 h-px bg-linear-to-r from-(--border-mid) via-(--border-subtle) to-transparent"></div>

      {/* Education Section */}
      <Education />

      {/* Divider */}
      <div className="my-8 h-px bg-linear-to-r from-(--border-mid) via-(--border-subtle) to-transparent"></div>

      {/* Internships and Volunteers - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 relative">
        <div className="border-b lg:border-r lg:border-b-0 border-(--border-subtle) pr-5">
          <Internships />
        </div>
        <div>
          <Volunteers />
        </div>
      </div>
    </section>
  );
}
