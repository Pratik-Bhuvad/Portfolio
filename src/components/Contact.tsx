import { contactInfo } from "@/data/contacts";

export default function Contact() {
  return (
    <section id="contact" className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Message */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display text-center">
          {contactInfo.message}
        </h2>

        {/* Links */}
        <div className="flex gap-6 sm:gap-8 text-base sm:text-lg font-mono">
          {contactInfo.links.map((link, index) => (
            <div key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-(--accent) hover:text-foreground transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
              {index < contactInfo.links.length - 1 && (
                <span className="ml-6 sm:ml-8 text-(--text-secondary) inline">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
