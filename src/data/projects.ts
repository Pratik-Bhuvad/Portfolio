export interface Project {
  name: string;
  problem: string;
  decision: string;
  tags: string[];
  github: string;
  live: string | null;
}

export const projects: Project[] = [
  {
    name: "RepoLens",
    problem: "Finding which GitHub repos are actually worth learning from is manual and noisy - stars measure popularity, not learning value.",
    decision: "Built a multi-signal scoring pipeline instead of a simple star-sorter. Each signal (commit activity, documentation, issue health) is weighted independently so the ranking reflects real learning potential.",
    tags: ["Python", "GitHub API", "CLI"],
    github: "https://github.com/Pratik-Bhuvad/RepoLens",
    live: null,
  },
  {
    name: "Prototech",
    problem: "College project exhibitions relied on manual evaluation and scattered feedback collection, making it difficult to assess projects efficiently.",
    decision: "Built a centralized platform for judges to evaluate projects, record scores, and manage feedback digitally. Focused on creating a practical solution that could be used during real college events.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Pratik-Bhuvad/Prototech",
    live: "https://prototech-murex.vercel.app/",
  },
  {
    name: "Conscious",
    problem: "Websites accumulate performance debt silently - bloated images, unused CSS, and heavy resources add up to slower load times and measurable carbon cost.",
    decision: "Built a full-stack auditing tool that runs Lighthouse analysis to estimate CO₂ emissions, then goes further — optimizing images via Cloudinary and CSS via CSSNano and PurgeCSS, turning a report into actionable fixes.",
    tags: ["MERN", "Cloudinary"],
    github: "https://github.com/Pratik-Bhuvad/Conscious",
    live: null,
},
];
