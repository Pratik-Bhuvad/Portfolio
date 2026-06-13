'use client';

interface WorkItemProps {
  title: string;
  subtitle: string;
  duration?: string;
  description: string;
}

export default function WorkItem({
  title,
  subtitle,
  duration,
  description,
}: WorkItemProps) {
  return (
    <div className="bg-(--bg-card) border border-(--border-subtle) rounded-md p-6 hover:bg-(--bg-hover) hover:border-(--accent) transition-all duration-300">
      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 h-auto font-display">{title}</h4>
      <div className="h-px w-full bg-(--accent) mb-3 opacity-50"></div>
      <p className="text-sm text-(--accent) font-medium mb-2">{subtitle}</p>
      
      {duration && (
        <p className="text-xs text-(--text-muted) font-mono mb-4">{duration}</p>
      )}
      
      <p className="text-sm text-(--text-secondary) leading-relaxed">{description}</p>
    </div>
  );
}
