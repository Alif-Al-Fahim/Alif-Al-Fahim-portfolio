import { useEffect } from "react";
import { FileText, Download, Printer, CheckCircle2, Phone, Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { PERSONAL_INFO, PROJECTS_DATA, EDUCATION_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from "../data";

export default function ResumeViewer() {
  const printPdf = () => {
    const iframe = document.getElementById("pdf-print-helper") as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch (err) {
        window.open("CV.pdf", "_blank");
      }
    } else {
      window.open("CV.pdf", "_blank");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Catch Ctrl + P or Cmd + P
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        printPdf();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="cv" className="py-24 bg-[#0d0d0f]/50 relative z-10 border-t border-[rgba(255,82,130,0.15)]">
      {/* Hidden PDF framing helper to bypass page printing and trigger the high-quality uploaded CV.pdf */}
      <iframe
        id="pdf-print-helper"
        src="CV.pdf"
        style={{ display: "none", position: "absolute", width: "1px", height: "1px", opacity: 0 }}
        title="PDF Print Helper"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-left mb-16 border-b border-white/5 pb-6 md:flex md:items-center md:justify-between print:hidden">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#ff6b9d] block mb-2 uppercase">
              // Professional Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase">
              Curriculum Vitae (CV) Panel
            </h2>
            <p className="text-[#a0a0b0] font-sans mt-3 max-w-xl text-sm leading-relaxed">
              Export my verified resume or print it directly using a clean, professional, and reader-friendly layout designed for recruiters.
            </p>
          </div>

          <div className="flex flex-wrap justify-start sm:justify-center gap-3 mt-6 md:mt-0">
            <button
              onClick={printPdf}
              className="flex items-center gap-2 px-5 py-3 font-mono text-[10px] uppercase tracking-wider bg-[#13131a] border border-[rgba(255,82,130,0.3)] text-[#ff6b9d] hover:text-white hover:border-[#ff5252] hover:bg-[#161622] transition-all cursor-pointer rounded-lg font-bold"
            >
              <Printer className="h-4 w-4" />
              Print / Save PDF
            </button>
            <a
              href="CV.pdf"
              download="Alif_Al_Fahim_CV.pdf"
              className="flex items-center gap-2 px-5 py-3 font-mono text-[10px] uppercase tracking-wider bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white font-black hover:opacity-90 transition-all cursor-pointer border border-transparent rounded-lg shadow-lg shadow-[rgba(247,37,133,0.25)]"
            >
              <Download className="h-4 w-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Dynamic CV Representation on display (print-cv id used for printing selectivity) */}
        <div
          id="print-cv"
          className="print:bg-white print:text-stone-900 print:p-0 neon-card bg-[#13131a] p-6 sm:p-12 text-left shadow-2xl font-sans rounded-2xl relative z-10"
        >
          {/* Resume Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-white/5 print:border-stone-200 pb-8 gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-sans font-black text-white print:text-black tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-[#ff6b9d] print:text-stone-700 font-mono text-xs font-bold mt-1 uppercase tracking-widest pl-0.5">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-[#a0a0b0] print:text-stone-600 text-sm mt-4 leading-relaxed max-w-2xl text-justify pl-0.5">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Contacts details column */}
            <div className="space-y-2 border-t md:border-t-0 border-white/5 pt-6 md:pt-0 pl-0 md:pl-6 md:border-l print:border-stone-200 md:border-white/5 flex-shrink-0 text-xs font-mono text-[#a0a0b0]/85 print:text-stone-700">
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-[#ff5252] print:text-black flex-shrink-0" />
                <span>{PERSONAL_INFO.phoneFull}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-[#ff5252] print:text-black flex-shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline hover:text-white print:hover:text-black">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-[#ff5252] print:text-black flex-shrink-0" />
                <span>Savar, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Linkedin className="h-3.5 w-3.5 text-[#ff5252] print:text-black flex-shrink-0" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white print:hover:text-black">
                  linkedin.com/in/alif-al-fahim
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Github className="h-3.5 w-3.5 text-[#ff5252] print:text-black flex-shrink-0" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white print:hover:text-black">
                  github.com/Alif-Al-Fahim
                </a>
              </div>
            </div>
          </div>

          {/* Grid section for Education & Experience split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            {/* Education & Skills column */}
            <div className="space-y-8">
              {/* Education section */}
              <div>
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#ff5252] print:text-black uppercase mb-4 border-b border-white/5 print:border-stone-200 pb-2">
                  Education History
                </h2>
                <div className="space-y-6">
                  {EDUCATION_DATA.map((edu) => (
                    <div key={edu.institution} className="relative pl-4 border-l border-white/5 print:border-stone-200 py-0.5">
                      <span className="text-[10px] font-mono text-[#ff6b9d] print:text-stone-600 block mb-1">
                        {edu.period}
                      </span>
                      <h3 className="text-sm font-sans font-bold text-white print:text-black">
                        {edu.institution}
                      </h3>
                      <p className="text-xs text-[#a0a0b0]/85 print:text-stone-700 mt-0.5">
                        {edu.degree}
                      </p>
                      {edu.field && (
                        <p className="text-[11px] text-[#a0a0b0]/55 print:text-stone-600 font-sans mt-0.5">
                          {edu.field}
                        </p>
                      )}
                      <p className="text-[11px] font-mono text-[#a0a0b0]/65 print:text-stone-800 mt-1.5 uppercase font-bold text-[10px] tracking-tight">
                        CGPA/GPA: <span className="font-bold text-gradient-coral">{edu.gpa}</span> / {edu.gpaScale} scale
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills breakdown for Standard Print */}
              <div>
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#ff5252] print:text-black uppercase mb-4 border-b border-white/5 print:border-stone-200 pb-2">
                  Technical Core Skills
                </h2>
                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <strong className="text-[#ff6b9d] print:text-black block mb-0.5">Programming & ML:</strong>
                    <span className="text-[#a0a0b0] print:text-stone-600">Python, C, Java, Dart, Flutter, Machine Learning Modeling, Problem Solving</span>
                  </div>
                  <div>
                    <strong className="text-[#ff6b9d] print:text-black block mb-0.5">Web Development:</strong>
                    <span className="text-[#a0a0b0] print:text-stone-600">HTML5, CSS3, JavaScript (React), PHP, MySQL Backend</span>
                  </div>
                  <div>
                    <strong className="text-[#ff6b9d] print:text-black block mb-0.5">Data Analysis:</strong>
                    <span className="text-[#a0a0b0] print:text-stone-600">Pandas, NumPy, EDA, Data Cleaning, SQL (MySQL), Excel</span>
                  </div>
                  <div>
                    <strong className="text-[#ff6b9d] print:text-black block mb-0.5">Visualizations:</strong>
                    <span className="text-[#a0a0b0] print:text-stone-600">Power BI dashboards, Matplotlib distributions, Seaborn graphs</span>
                  </div>
                  <div>
                    <strong className="text-[#ff6b9d] print:text-black block mb-0.5">Tools & Hardware:</strong>
                    <span className="text-[#a0a0b0] print:text-stone-600">Git, Jupyter Notebook, Postman API, ESP32 Microcontrollers, Blynk IoT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Positions column */}
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#ff5252] print:text-black uppercase mb-4 border-b border-white/5 print:border-stone-200 pb-2">
                Work Experience
              </h2>
              <div className="space-y-6">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.role} className="relative pl-4 border-l border-white/5 print:border-stone-200 py-0.5">
                    <span className="text-[10px] font-mono text-[#ff6b9d] print:text-stone-600 block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-sm font-sans font-bold text-white print:text-black">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-[#ff5252] print:text-stone-700 italic font-mono mt-0.5 mb-2.5">
                      {exp.company}
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-[#a0a0b0] font-sans text-justify">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Projects breakdown */}
          <div className="mt-10 pt-10 border-t border-white/5 print:border-stone-200">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#ff5252] print:text-black uppercase mb-4 border-b border-white/5 print:border-stone-200 pb-2">
              Select Projects & Contributions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
              {PROJECTS_DATA.slice(0, 4).map((p) => (
                <div key={p.id} className="relative">
                  <span className="text-[9px] font-mono font-bold text-white border border-transparent rounded bg-gradient-to-r from-[#ff5252] to-[#f72585] px-2 py-0.5 print:bg-white print:text-stone-600 print:border-stone-300 mt-1 float-right uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="text-sm font-sans font-bold text-white print:text-black flex items-center gap-1">
                    {p.title}
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="print:hidden text-[#ff6b9d]/60 hover:text-white">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </h3>
                  <p className="text-[11px] text-[#ff6b9d] print:text-stone-600 font-mono italic mt-0.5 mb-2.5">
                    Stack: {p.techStack.join(", ")}
                  </p>
                  <p className="text-xs text-[#a0a0b0] print:text-stone-700 font-sans leading-relaxed text-justify mb-3">
                    {p.description}
                  </p>
                  <ul className="space-y-1 text-[11px] text-[#a0a0b0]/85 print:text-stone-600 font-sans text-justify">
                    {p.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#ff5252] select-none shrink-0">■</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footnotes for standard Print */}
          <div className="hidden print:block text-center text-[10px] font-mono text-stone-600 mt-12 border-t pt-4 border-stone-200">
            * Generated via Alif Al Fahim's customized interactive portfolio website built on Node and React.
          </div>
        </div>

      </div>
    </section>
  );
}
