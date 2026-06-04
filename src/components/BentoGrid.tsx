import { useState } from "react";
import { User, Award, CheckCircle2, Award as CertIcon, Languages, Globe, BookOpen, GraduationCap } from "lucide-react";
import { PERSONAL_INFO, SKILLS_DATA, CERTIFICATIONS_DATA, LANGUAGES_DATA } from "../data";
import profilePic from "../assets/images/lnkdin_dp.jpeg";

export default function BentoGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const skillCategories = [
    "All",
    "Programming & ML",
    "Web Development",
    "Data Analysis",
    "Visualization",
    "IoT & Tools"
  ];

  const filteredSkills = SKILLS_DATA.filter(skin => 
    selectedCategory === "All" || skin.category === selectedCategory
  );

  return (
    <section id="about" className="py-24 bg-[#0d0d0f]/50 relative z-10 border-t border-[rgba(255,82,130,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-16 border-b border-white/5 pb-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#ff6b9d] block mb-2 uppercase">
            // Academic & Skill Profile
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase">
            Academic Profile & Skill Matrix
          </h2>
          <p className="text-[#a0a0b0] font-sans mt-3 max-w-2xl text-sm leading-relaxed">
            A clear overview of my academic grades, current skills development, and verified industry credentials in a beautifully organized layout.
          </p>
        </div>

        {/* Bento Board Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1: Core Bio card */}
          <div className="md:col-span-2 neon-card p-8 text-left flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-8 items-start justify-between">
              <div className="space-y-5 flex-1">
                <div className="flex items-center gap-2 text-[#a0a0b0] font-mono text-[10px] tracking-widest uppercase">
                  <User className="h-4 w-4 text-[#ff5252]" />
                  <span>// PROFESSIONAL BIO</span>
                </div>
                <h3 className="text-2xl font-black text-white font-sans uppercase tracking-tight">
                  Computer Science Senior & Aspiring Analyst
                </h3>
                <p className="text-[#a0a0b0] font-sans text-sm leading-relaxed text-justify">
                  {PERSONAL_INFO.summary}
                </p>
              </div>
              
              {/* Profile Image with high-contrast border matching the brutalist theme */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 border-2 border-[#ff5252] bg-neutral-900 group relative overflow-hidden self-center sm:self-start rounded-xl shadow-lg shadow-[rgba(247,37,133,0.15)]">
                <img
                  src={profilePic}
                  alt="Alif Al Fahim Profile Photo"
                  className="w-full h-full object-cover transition-all duration-300 scale-102 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-black/25 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-6 mt-8">
              <div>
                <span className="text-[#a0a0b0]/60 font-mono text-[9px] block uppercase tracking-widest">Academic GPA</span>
                <span className="text-3xl font-black font-mono text-gradient-coral mt-1 block">3.74 <span className="text-xs text-[#a0a0b0]">/ 4.00</span></span>
              </div>
              <div>
                <span className="text-[#a0a0b0]/60 font-mono text-[9px] block uppercase tracking-widest">Expected Graduation</span>
                <span className="text-xl font-bold font-sans text-white mt-1.5 block uppercase tracking-wide">June 2026</span>
              </div>
              <div>
                <span className="text-[#a0a0b0]/60 font-mono text-[9px] block uppercase tracking-widest">Primary Focus</span>
                <span className="text-xs font-mono text-white font-bold mt-2.5 block bg-gradient-to-r from-[#ff5252] to-[#f72585] px-2.5 py-1 text-ellipsis overflow-hidden whitespace-nowrap uppercase tracking-tighter rounded-md shadow-md shadow-[rgba(247,37,133,0.2)] text-center">
                  Data Analytics & AI
                </span>
              </div>
            </div>
          </div>

          {/* Box 2: Quick Highlights (Academic honors) */}
          <div className="neon-card p-8 text-left flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[#a0a0b0] font-mono text-[10px] tracking-widest uppercase">
                <Award className="h-4 w-4 text-[#ff5252]" />
                <span>// ACADEMIC STANDARDS</span>
              </div>
              <h3 className="text-lg font-black text-white font-sans uppercase tracking-tight">
                Milestone Foundations
              </h3>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 border-b border-white/5 pb-3">
                  <div className="px-2 py-0.5 bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white font-mono text-[10px] font-black leading-none mt-1 uppercase rounded">
                    BSc
                  </div>
                  <div>
                    <p className="text-xs font-sans text-white font-bold uppercase tracking-wider">Daffodil Int. University</p>
                    <p className="text-[11px] font-mono text-[#a0a0b0]">8th Semester | BSc in CSE (3.74 / 4.00)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-white/5 pb-3">
                  <div className="px-2 py-0.5 bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white font-mono text-[10px] font-black leading-none mt-1 uppercase rounded">
                    HSC
                  </div>
                  <div>
                    <p className="text-xs font-sans text-white font-bold uppercase tracking-wider">Savar Model College</p>
                    <p className="text-[11px] font-mono text-[#a0a0b0]">GPA: <span className="text-white font-bold">5.00</span> / 5.00 Scale</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="px-2 py-0.5 bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white font-mono text-[10px] font-black leading-none mt-1 uppercase rounded">
                    SSC
                  </div>
                  <div>
                    <p className="text-xs font-sans text-white/90 font-bold uppercase tracking-wider">BEPZA Public School</p>
                    <p className="text-[11px] font-mono text-[#a0a0b0]">GPA: <span className="text-white font-bold">5.00</span> / 5.00 Scale</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#a0a0b0]/55 pt-4 border-t border-white/5 mt-4 uppercase tracking-wider">
              * Official transcripts can be shared.
            </div>
          </div>

          {/* Box 3: Custom Skill visualizer */}
          <div className="md:col-span-2 neon-card p-8 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-b border-white/5 pb-5 mb-5">
              <div className="flex items-center gap-2 text-[#a0a0b0] font-mono text-[10px] tracking-widest uppercase font-bold">
                <BookOpen className="h-4 w-4 text-[#ff5252]" />
                <span>// MY SKILLS DIRECTORY</span>
              </div>
              
              {/* Category pills filter */}
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-[9px] font-mono uppercase tracking-wider transition-all duration-150 cursor-pointer border rounded-md ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white border-transparent font-bold shadow-md shadow-[rgba(247,37,133,0.2)]"
                        : "bg-[#161622] border-white/5 text-[#a0a0b0] hover:text-white hover:border-white/20"
                    }`}
                  >
                    {cat === "All" ? "All Skills" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Render matched lists */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4.5 min-h-[160px] content-start">
              {filteredSkills.map((sk) => (
                <div
                  key={sk.name}
                  className="bg-[#161622] p-3.5 border border-white/5 hover:border-[#ff5252]/30 transition-all duration-200 group text-left rounded-xl"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                      {sk.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#ff6b9d] font-bold">
                      {sk.level}%
                    </span>
                  </div>
                  {/* Visual pleasing brand gradient progress meter */}
                  <div className="h-1.5 w-full bg-black/40 overflow-hidden rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-[#ff5252] to-[#f72585] transition-all duration-500 rounded-full"
                      style={{ width: `${sk.level}%` }}
                    />
                  </div>
                  <span className="text-[8px] font-mono text-[#a0a0b0] mt-1.5 block uppercase tracking-widest">
                    {sk.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 4: certifications & languages */}
          <div className="neon-card p-8 text-left flex flex-col justify-between space-y-6">
            {/* Certifications Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#a0a0b0] font-mono text-[10px] tracking-widest uppercase">
                <CertIcon className="h-4 w-4 text-[#ff5252]" />
                <span>// VERIFIED CREDENTIALS</span>
              </div>
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.name} className="bg-[#161622] p-4 border border-white/5 rounded-xl hover:border-[#ff5252]/20 transition-all">
                  <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">{cert.name}</p>
                  <p className="text-[9px] font-mono text-[#ff6b9d] mt-1 uppercase tracking-widest">{cert.issuer}</p>
                  <p className="text-[11px] text-[#a0a0b0] font-sans mt-3.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Languages Block */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-[#a0a0b0] font-mono text-[10px] tracking-widest uppercase">
                <Languages className="h-4 w-4 text-[#ff5252]" />
                <span>// LANGUAGE MATRIX</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {LANGUAGES_DATA.map((lang) => (
                  <div key={lang.name} className="bg-[#161622] py-2 px-1 border border-white/5 text-center rounded-lg hover:border-[#f72585]/20 transition-all">
                    <span className="text-[10px] font-sans font-black text-white block uppercase tracking-tighter">{lang.name}</span>
                    <span className="text-[9px] font-mono text-[#ff6b9d] uppercase mt-0.5 block tracking-widest">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
