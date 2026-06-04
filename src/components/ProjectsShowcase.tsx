import { useState } from "react";
import { FolderGit2, Github, ExternalLink, ChevronDown, ChevronUp, CheckSquare, Target } from "lucide-react";
import { PROJECTS_DATA } from "../data";

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("saas-sales-dashboard");

  const categories = ["All", "Data Analytics", "ML & Academic", "Web & Mobile", "IoT"];

  const filteredProjects = PROJECTS_DATA.filter((proj) => 
    activeCategory === "All" || proj.category === activeCategory
  );

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-[#0d0d0f]/50 relative z-10 border-t border-[rgba(255,82,130,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-16 border-b border-white/5 pb-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#ff6b9d] block mb-2 uppercase">
            // Selected Source Repositories
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase">
            Projects & Contributions
          </h2>
          <p className="text-[#a0a0b0] font-sans mt-3 max-w-2xl text-sm leading-relaxed">
            Review detailed, production-ready systems covering data analytics engines, cross-platform mobile apps, and machine learning models.
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-12 pb-2 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 text-[10.5px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer border rounded-md ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white border-transparent font-black shadow-lg shadow-[rgba(247,37,133,0.25)]"
                  : "bg-[#13131a] border-white/5 text-[#a0a0b0] hover:text-white hover:border-[#ff5252]/20"
              }`}
            >
              {cat === "All" ? "Dump ALL" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((proj) => {
            const isExpanded = expandedProjectId === proj.id;
            return (
              <div
                key={proj.id}
                className={`neon-card p-6 flex flex-col justify-between transition-all duration-300 ${
                  isExpanded
                    ? "border-[#f72585]/60 bg-[#13131a] shadow-[0_0_20px_rgba(247,37,133,0.15)]"
                    : "hover:border-[#ff5252]/30"
                }`}
              >
                <div>
                  {/* Category and GitHub links top bar */}
                  <div className="flex justify-between items-start mb-5">
                    <span className="text-[9px] font-mono font-bold text-white bg-gradient-to-r from-[#ff5252] to-[#f72585] px-2.5 py-1 uppercase tracking-wide border border-transparent rounded shadow-sm shadow-[rgba(247,37,133,0.1)]">
                      {proj.category}
                    </span>
                    <div className="flex items-center gap-2">
                       {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-white/5 text-[#a0a0b0] hover:text-white hover:border-[#ff5252]/40 bg-[#161622] transition-all rounded cursor-pointer"
                          title="View Source on GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title and descriptions */}
                  <h3 className="text-xl font-black font-sans text-white uppercase tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#ff6b9d] uppercase tracking-widest mt-1">
                    {proj.subtitle}
                  </p>
                  
                  <p className="text-[#a0a0b0] font-sans text-sm mt-4 leading-relaxed pl-1.5 border-l border-[#ff5252]/30">
                    {proj.description}
                  </p>

                  {/* Expandable Details Block */}
                  {isExpanded && (
                    <div className="mt-6 space-y-4 pt-5 border-t border-white/5 bg-[#161622]/45 -mx-6 px-6 py-5 rounded-b-xl">
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-1.5 text-white font-mono text-[10px] uppercase font-bold tracking-widest leading-normal">
                          <CheckSquare className="h-4 w-4 text-[#ff5252]" />
                          <span>// CORE CONTRIBUTIONS</span>
                        </div>
                        <ul className="space-y-2.5 text-[#a0a0b0] font-sans text-xs">
                          {proj.bulletPoints.map((b, idx) => (
                            <li key={idx} className="flex gap-2 items-start leading-relaxed text-justify">
                              <span className="text-[#ff5252] shrink-0 font-mono text-[11px] leading-tight select-none">■</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {proj.impact && (
                        <div className="space-y-3 text-left pt-4 border-t border-white/5">
                          <div className="flex items-center gap-1.5 text-white font-mono text-[10px] uppercase font-bold tracking-widest leading-normal">
                            <Target className="h-4 w-4 text-[#ff5252]" />
                            <span>// PROJECT IMPACT / METRIC</span>
                          </div>
                          <p className="text-xs font-sans text-[#a0a0b0] leading-relaxed pl-6 text-justify">
                            {proj.impact}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer specs and action */}
                <div className="mt-8 border-t border-white/5 pt-4 flex flex-wrap gap-2.5 items-center justify-between">
                  {/* Tech stack items */}
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono uppercase tracking-wide text-white/80 bg-[#161622] border border-white/5 px-2 py-0.5 rounded-md hover:border-[#f72585]/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand details toggler */}
                  <button
                    onClick={() => toggleExpand(proj.id)}
                    className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#ff6b9d] hover:text-white cursor-pointer transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        Collapse <ChevronUp className="h-3 w-3" />
                      </>
                    ) : (
                      <>
                        Examine Specs <ChevronDown className="h-3 w-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
