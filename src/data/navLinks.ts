export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Personnel", href: "#personnel" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];