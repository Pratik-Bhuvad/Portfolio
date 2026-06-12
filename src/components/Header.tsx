"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/navLinks";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="w-full h-16 px-3 flex items-center justify-between border-b border-(--border-subtle) lg:px-0 relative z-40">
            <div className="w-fit h-full flex justify-center items-center lg:w-2/12">
                <Link href="/" className="text-xl font-bold tracking-wide">
                    Pratik Bhuvad
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden w-8/12 h-full max-w-lg items-center justify-around lg:flex">
                {navLinks.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className={`transition-colors ${
                            pathname === item.href
                                ? "text-accent font-semibold"
                                : "text-foreground hover:text-accent"
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="w-6 h-6 flex flex-col items-center justify-around lg:hidden"
                aria-label="Toggle menu"
            >
                <span
                    className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                        isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                ></span>
                <span
                    className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                        isMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                        isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
            </button>

            {/* Mobile Backdrop */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 lg:hidden z-30"
                    onClick={closeMenu}
                    style={{
                        animation: "fadeIn 0.3s ease-out"
                    }}
                ></div>
            )}

            {/* Mobile Navigation */}
            <nav
                className="fixed top-0 right-0 h-screen w-3/4 bg-background/80 backdrop-blur-md border-l border-white/10 flex flex-col items-start justify-start pt-20 lg:hidden z-40 transition-transform duration-300 ease-out"
                style={{
                    transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
                }}
            >
                {navLinks.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        onClick={closeMenu}
                        className={`text-lg py-4 px-6 w-full transition-colors border-b border-white/1 ${
                            pathname === item.href
                                ? "text-accent font-semibold bg-accent/10"
                                : "text-foreground hover:text-accent hover:bg-white/5"
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}

                {/* Close Button */}
                <button
                    onClick={closeMenu}
                    className="absolute top-6 right-6 w-6 h-6 flex flex-col items-center justify-around"
                    aria-label="Close menu"
                >
                    <span className="w-full h-0.5 bg-foreground rotate-45 translate-y-1.5"></span>
                    <span className="w-full h-0.5 bg-foreground -rotate-45 -translate-y-1.5"></span>
                </button>
            </nav>
        </header>
    );
}