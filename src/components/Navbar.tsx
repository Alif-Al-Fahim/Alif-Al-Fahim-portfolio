import { useState, useEffect } from "react";
import { Terminal, User, BarChart2, Briefcase, FolderGit2, Mail, FileText, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "terminal", label: "Terminal", icon: Terminal },
    { id: "about", label: "About", icon: User },
    { id: "analytics", label: "Analytics Mock", icon: BarChart2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0f]/85 backdrop-blur-[12px] border-b border-[rgba(255,82,130,0.15)] shadow-lg shadow-black/40"
          : "bg-[#0d0d0f]/60 backdrop-blur-[12px] border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => handleNavClick("terminal")}>
            <div className="h-9 w-9 bg-gradient-to-br from-[#ff5252] to-[#f72585] flex items-center justify-center text-white font-mono text-sm uppercase font-bold tracking-tighter rounded-lg shadow-lg shadow-[rgba(247,37,133,0.2)]">
              &gt;_
            </div>
            <div>
              <span className="font-sans font-black tracking-widest text-[#ffffff] text-md uppercase group-hover:text-[#ff6b9d] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-block text-[10px] text-[#a0a0b0] font-mono ml-2 border-l border-white/10 pl-2 uppercase tracking-widest">
                Data Analyst
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    id={`nav-link-${item.id}`}
                    className={`flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white font-bold rounded-full shadow-lg shadow-[rgba(247,37,133,0.25)]"
                        : "text-[#a0a0b0] hover:text-[#ffffff] hover:bg-white/5 rounded-full border border-transparent"
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Highlighted Download CV button/link right beside Hire Me option */}
            <a
              href="CV.pdf"
              download="Alif_Al_Fahim_CV.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 text-[10px] uppercase font-mono tracking-wider bg-[#13131a] border border-[#ff5252]/40 hover:border-[#f72585] text-[#ff6b9d] hover:text-white transition-all cursor-pointer rounded-full shadow-lg shadow-[rgba(247,37,133,0.15)] font-bold hover:scale-102 active:scale-95"
            >
              <FileText className="h-3.5 w-3.5 text-[#ff6b9d]" />
              <span>Download CV</span>
            </a>

            {/* Premium Hire Me Brand Gradient CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="btn-primary-gradient px-4.5 py-1.5 text-[10px] uppercase font-mono tracking-wider cursor-pointer shadow-md rounded-full shadow-[rgba(247,37,133,0.3)] active:scale-95 transition-all text-white font-black"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="CV.pdf"
              download="Alif_Al_Fahim_CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1 text-[9px] uppercase font-mono tracking-wider bg-[#13131a] border border-[#ff5252]/40 text-[#ff6b9d] font-black rounded-full"
            >
              <FileText className="h-3 w-3" />
              CV
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="btn-primary-gradient px-3 py-1 text-[9px] uppercase font-mono tracking-wider cursor-pointer rounded-full text-white font-black"
            >
              Hire Me
            </button>
            <button
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#a0a0b0] hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d0f]/95 backdrop-blur-[12px] border-b border-[rgba(255,82,130,0.15)] px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white font-bold rounded-lg"
                    : "text-[#a0a0b0] hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
