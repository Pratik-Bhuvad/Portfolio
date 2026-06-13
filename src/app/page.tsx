import Hero from "@/components/Hero";
import './globals.css'
import Projects from "@/components/Projects";
import Personnel from "@/components/Personnel";
import Contact from "@/components/Contact";


export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <Personnel />
            <Contact />
        </main>
    );
}