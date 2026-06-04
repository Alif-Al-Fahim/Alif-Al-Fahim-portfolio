import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TerminalConsole from "./components/TerminalConsole";
import BentoGrid from "./components/BentoGrid";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ContactSection from "./components/ContactSection";
import { PERSONAL_INFO } from "./data";
import { Terminal, Cpu } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("terminal");

  // Multi-section scroll spy listener
  useEffect(() => {
    const sections = ["terminal", "about", "analytics", "experience", "projects", "contact"];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 220; // offset parameter for active thresholding
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    // Initial compute
    handleScrollSpy();
    
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Cursor glow follow logic and particles creation
  useEffect(() => {
    // 1. Cursor glow positioning
    const glow = document.getElementById("cursor-glow");
    const handleMouseMove = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // 2. Twin particles creation
    const container = document.body;
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 18; i++) {
      const dot = document.createElement("div");
      dot.style.cssText = `
        position: fixed;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: rgba(255, 82, 130, ${Math.random() * 0.4 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        pointer-events: none;
        z-index: 0;
        animation: twinkle ${Math.random() * 3 + 2}s infinite alternate ease-in-out;
      `;
      container.appendChild(dot);
      particles.push(dot);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div className="bg-[#0d0d0f] text-[#ffffff] font-sans selection:bg-[#f72585] selection:text-white min-h-screen relative overflow-x-hidden scroll-smooth">
      {/* Cursor Glow Halos element */}
      <div id="cursor-glow" />

      {/* Absolute Ambient Background Patterns & Radial Blobs */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none z-0" />
      <div className="bg-blob-1 pointer-events-none z-0" />
      <div className="bg-blob-2 pointer-events-none z-0" />
      <div className="bg-blob-3 pointer-events-none z-0" />
      
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Primary Landing Page Portfolio content */}
      <main className="relative z-10">
        
        {/* Terminal Block */}
        <TerminalConsole />

        {/* About & Credentials Bento Grid */}
        <BentoGrid />

        {/* Live Interactive Analytics Dashboard Playground */}
        <AnalyticsDashboard />

        {/* Work & Research Internship Timeline */}
        <ExperienceTimeline />

        {/* Full Portfolio Projects Catalog */}
        <ProjectsShowcase />

        {/* Feedback Messages Form Transmission Block */}
        <ContactSection />
        
      </main>

      {/* Footer Details */}
      <footer className="py-16 bg-[#050505] border-t border-white/10 text-[#FAFAFA]/55 font-mono text-xs text-center relative z-10 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="uppercase tracking-wider">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
          </p>
          <div className="text-[10px] opacity-40 uppercase tracking-widest">
            TypeScript • React • Tailwind CSS • Lucide Icons
          </div>
        </div>
      </footer>
    </div>
  );
}
