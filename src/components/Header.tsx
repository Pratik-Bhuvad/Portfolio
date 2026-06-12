"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navLinks";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="w-full h-16 flex items-center justify-between border-b border-(--border-subtle)">
            <div className="w-2/12 h-full flex justify-center items-center">
                <Link href="/" className="text-xl font-bold tracking-wide">
                    Pratik Bhuvad
                </Link>
            </div>
            <nav className="w-8/12 h-full max-w-lg flex items-center justify-around">
                {
                    navLinks.map((item, i) => {
                        return(
                            <Link key={i} href={item.href}>{item.label}</Link>
                        )
                    })
                }
            </nav>
        </header>
    );
}