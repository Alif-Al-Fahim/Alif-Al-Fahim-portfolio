import { Briefcase, FlaskConical, PlaySquare, Calendar } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";

export default function ExperienceTimeline() {
  
  // Custom Icon selector based on role type (brand active color)
  const getExperienceIcon = (category: string) => {
    switch (category) {
      case "Academic & Research":
        return <FlaskConical className="h-4 w-4 text-[#ff5252]" />;
      case "Content Creation":
        return <PlaySquare className="h-4 w-4 text-[#ff5252]" />;
      default:
        return <Briefcase className="h-4 w-4 text-[#ff5252]" />;
    }
  };

  return (
    <section id="experience" className="py-24 bg-[#0d0d0f]/50 relative z-10 border-t border-[rgba(255,82,130,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-16 border-b border-white/5 pb-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#ff6b9d] block mb-2 uppercase">
            // Professional Workflows
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase">
            Work & Research Internships
          </h2>
          <p className="text-[#a0a0b0] font-sans mt-3 max-w-2xl text-sm leading-relaxed">
            Detailed chronological history studying Alif's hybrid professional work, video creations, and collaborative machine learning academic research.
          </p>
        </div>

        {/* Timeline Structure Container */}
        <div className="relative border-l border-[#ff5252]/20 max-w-3xl mx-auto md:mx-0 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => {
            const icon = getExperienceIcon(exp.category);

            return (
              <div key={index} className="relative group text-left">
                
                {/* Visual Timeline Marker Node */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 h-8.5 w-8.5 bg-[#13131a] border border-[#ff5252]/35 hover:border-[#f72585] rounded-full transition-all duration-300 flex items-center justify-center z-10 shadow-md shadow-[rgba(247,37,133,0.15)]">
                  {icon}
                </div>

                {/* Main Card */}
                <div className="neon-card p-6 transition-all duration-300">
                  
                  {/* Top line detail */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-5">
                    <div>
                      <span className="text-[9px] font-mono font-medium text-[#ff6b9d] float-right sm:hidden uppercase">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-black font-sans text-white uppercase tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-[#ff5252] font-mono mt-0.5 tracking-wider uppercase font-bold">
                        {exp.company}
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#161622] border border-white/5 text-[9px] font-mono text-[#a0a0b0] uppercase tracking-widest rounded-md">
                      <Calendar className="h-3 w-3 text-[#ff5252]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullets lists */}
                  <ul className="space-y-3 pl-1">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-[#a0a0b0] leading-relaxed text-justify">
                        <span className="text-[#ff5252] shrink-0 font-mono text-[10px] leading-tight select-none mt-0.5">■</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
