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
    name: "MERN ChatApp",
    problem: "Wanted to understand how modern applications handle real-time communication beyond traditional request-response workflows.",
    decision:"Implemented a project using Socket.io to learn concepts such as WebSockets, event-driven communication, user presence, and real-time message delivery.",
    tags: ["MERN", "Cloudinary", "Socket.io"],
    github: "https://github.com/Pratik-Bhuvad/MERN-ChatApp",
    live: null,
  },
];
