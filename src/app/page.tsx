import Hero from "@/components/Hero";
import './globals.css'
import Projects from "@/components/Projects";
import Personnel from "@/components/Personnel";


export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <Personnel />
        </main>
    );
}