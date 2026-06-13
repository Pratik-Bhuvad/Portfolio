'use client';

import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const displayTags = project.tags.slice(0, 3);

  return (
    <div className="rounded-md shadow-sm border-2 border-(--border-subtle) p-6 hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Content Wrapper */}
      <div className="flex-grow">
        {/* Project Name */}
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.name}</h3>

        {/* Problem */}
        <div className="mb-1.5">
          <p className="text-sm font-medium text-gray-600 mb-1">Problem</p>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">{project.problem}</p>
        </div>

        {/* 5px Gap */}
        <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

        {/* Decision */}
        <div className="mb-4 mt-2">
          <p className="text-sm font-medium text-gray-600 mb-1">Decision</p>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">{project.decision}</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />
      </div>

      {/* Tags and Links Container */}
      <div className="flex items-center justify-between mt-2">
        {/* Tags */}
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-600">
            {displayTags.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index < displayTags.length - 1 && <span className="mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub and Live Icons */}
        <div className="flex items-center gap-3">
          {/* GitHub Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors"
            title="View on GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.016 12.016 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Live Link - Only show if available */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors"
              title="View Live"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
