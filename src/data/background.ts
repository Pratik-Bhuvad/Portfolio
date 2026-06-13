// ─── Skills ──────────────────────────────────────────────────
export const skills: string[] = [
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "Git",
  "Postman",
];

// ─── Education ───────────────────────────────────────────────
export type Education = {
  degree: string;
  field: string;
  institution: string;
  year: string;
};

export const education: Education[] = [
  {
    degree: "B.E.",
    field: "Information Technology",
    institution: "Vasantdada Patil Pratishthan's College of Engineering",
    year: "2026",
  },
  {
    degree: "Diploma",
    field: "Information Technology",
    institution: "Vidyalankar Polytechnic",
    year: "2023",
  },
];

// ─── Internships ─────────────────────────────────────────────
export type Internship = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

export const internships: Internship[] = [
  {
    role: "Frontend Web Development Intern",
    company: "IBM SkillsBuild × CSRBOX",
    duration: "Jun 2024 – Aug 2024",
    description: "6-week program focused on frontend web development fundamentals.",
  },
  {
    role: "Web Application & Design Intern",
    company: "Collab Codesign",
    duration: "Jun 2022 – Aug 2022",
    description: "Worked on web application development and web designing under mentorship.",
  },
];

// ─── Volunteer ───────────────────────────────────────────────
export type Volunteer = {
  role: string;
  organization: string;
  description: string;
};

export const volunteer: Volunteer[] = [
  {
    role: "Event Documentation",
    organization: "ITSA — College Committee",
    description:
      "Managed file organization, structured reports, and documentation across college tech events.",
  },
];