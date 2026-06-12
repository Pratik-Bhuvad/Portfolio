'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative h-[calc(100vh-64px)] w-full overflow-hidden bg-background"
    >

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-8xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content - Mobile & Desktop */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge/Tag */}
            <div className="inline-flex w-fit">
              <span className="text-xs sm:text-sm font-medium text-(--accent) bg-(--bg-card) px-3 sm:px-4 py-2 rounded border border-(--border-subtle)">
                👨‍💻 JUNIOR SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl! sm:text-5xl lg:text-6xl font-bold text-foreground font-display leading-tight">
                PRATIK BHUVAD
              </h1>
            </div>

            {/* Bio */}
            <p className="text-sm font-mono sm:text-base lg:text-lg text-(--text-secondary) leading-relaxed text-justify max-w-2xl">
              Software architect at heart. I design scalable systems before writing code, combining strategic thinking with clean implementation to solve complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://github.com/Pratik-Bhuvad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-(--accent) text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
              >
                GitHub
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-(--accent) text-(--accent) font-medium rounded hover:bg-(--accent) hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Right Illustration - Desktop Only */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Decorative Illustration */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="var(--border-mid)"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="var(--border-subtle)"
                  strokeWidth="1"
                  opacity="0.2"
                />

                {/* Central geometric shape */}
                <g transform="translate(200, 200)">
                  {/* Hexagon */}
                  <polygon
                    points="0,-100 87,-50 87,50 0,100 -87,50 -87,-50"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  {/* Inner shape */}
                  <polygon
                    points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"
                    fill="var(--accent)"
                    opacity="0.1"
                  />
                </g>

                {/* Orbiting dots */}
                <g opacity="0.4">
                  <circle cx="200" cy="80" r="4" fill="var(--accent)" />
                  <circle cx="320" cy="200" r="4" fill="var(--accent)" />
                  <circle cx="200" cy="320" r="4" fill="var(--accent)" />
                  <circle cx="80" cy="200" r="4" fill="var(--accent)" />
                </g>

                {/* Connection lines */}
                <g stroke="var(--accent)" strokeWidth="1" opacity="0.2">
                  <line x1="200" y1="80" x2="320" y2="200" />
                  <line x1="320" y1="200" x2="200" y2="320" />
                  <line x1="200" y1="320" x2="80" y2="200" />
                  <line x1="80" y1="200" x2="200" y2="80" />
                </g>
              </svg>

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{
                  background: `radial-gradient(circle, var(--accent), transparent)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom right, rgba(232, 87, 42, 0.05), transparent)`,
        }}
      />
    </section>
  );
}