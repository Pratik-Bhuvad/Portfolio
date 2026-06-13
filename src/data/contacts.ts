export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  message: string;
  links: ContactLink[];
}

export const contactInfo: ContactInfo = {
  message: "Open to Junior Developer roles. Let's talk.",
  links: [
    { label: "Email", href: "mailto:pbhuvad55@gmail.com" },
    { label: "GitHub", href: "https://github.com/Pratik-Bhuvad" },
    { label: "LinkedIn", href: "https://linkedin.com/in/pratik-bhuvad" },
  ],
};
