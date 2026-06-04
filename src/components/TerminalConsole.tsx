import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, Clipboard, Check, RefreshCw, Send, HelpCircle } from "lucide-react";
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from "../data";

interface LogLine {
  type: "input" | "system" | "error" | "output" | "success";
  text: string | React.ReactNode;
}

export default function TerminalConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState<LogLine[]>([
    { type: "system", text: "Connecting to Alif's Portfolio Hub..." },
    { type: "system", text: "System Status: Online & Active." },
    { type: "success", text: "Welcome! Type 'help' or click any of the buttons below to explore my projects and resume." }
  ]);

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [logs]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const availableCommands = [
    { cmd: "help", desc: "Show all available options" },
    { cmd: "about", desc: "Read a summary of who I am and my goals" },
    { cmd: "skills", desc: "View my skills (Programming, Web Dev, Data Analysis)" },
    { cmd: "projects", desc: "Explore my selected development projects" },
    { cmd: "experience", desc: "Read about my research and work experience" },
    { cmd: "education", desc: "View my school and university summary" },
    { cmd: "contact", desc: "Get my email and social profiles to get in touch" },
    { cmd: "clear", desc: "Clear the terminal screen" },
    { cmd: "matrix", desc: "Runs a fun, green-themed tech animation (Easter Egg)" }
  ];

  const processCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Add command to logs
    const newLogs = [...logs, { type: "input" as const, text: `$ ${cmdText}` }];
    setHistory([...history, cmdText]);
    setHistoryIndex(-1);

    switch (trimmed) {
      case "help":
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-1.5 font-mono text-stone-300">
              <p className="text-white font-black uppercase tracking-widest mb-1.5">// Available Portfolio Actions</p>
              {availableCommands.map((c) => (
                <div key={c.cmd} className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-white font-bold">{c.cmd}</span>
                  <span className="text-stone-400">{c.desc}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case "about":
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-2 font-mono text-stone-300 leading-relaxed max-w-2xl">
              <p className="text-white font-black uppercase tracking-widest mb-1">// {PERSONAL_INFO.name.toUpperCase()}</p>
              <p className="text-white/80 font-medium">{PERSONAL_INFO.title}</p>
              <p className="text-stone-400">{PERSONAL_INFO.summary}</p>
              <p className="text-stone-500 text-xs">Based in: {PERSONAL_INFO.location}</p>
            </div>
          )
        });
        break;

      case "skills":
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-3 font-mono text-stone-300">
              <p className="text-white font-black uppercase tracking-widest">// MY SKILLS DIRECTORY</p>
              <div className="space-y-2">
                <div>
                  <span className="text-white font-bold">[Data Analysis]: </span>
                  <span className="text-stone-300">Pandas, NumPy, Exploratory Analytics (EDA), SQL Querying, Excel Dashboarding</span>
                </div>
                <div>
                  <span className="text-white font-bold">[Programming & ML]: </span>
                  <span className="text-stone-300">Python, C/C++, Java, Machine Learning Modeling, Collaborative Deep Learning</span>
                </div>
                <div>
                  <span className="text-white font-bold">[Visualizations]: </span>
                  <span className="text-stone-300">Power BI dashboards, Matplotlib, Seaborn distributions, Sheet charts</span>
                </div>
                <div>
                  <span className="text-white font-bold">[Web & App Dev]: </span>
                  <span className="text-stone-300">HTML5/CSS3, JavaScript, Tailwind, PHP backend, Mysql, Flutter/Dart</span>
                </div>
                <div>
                  <span className="text-white font-bold">[IoT Hardware & Tools]: </span>
                  <span className="text-stone-300">ESP32 microcontrollers, Blynk dashboards, Sensor data feeds, Git version control, Postman API testing</span>
                </div>
              </div>
            </div>
          )
        });
        break;

      case "projects":
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-4 font-mono text-stone-300 max-w-2xl">
              <p className="text-white font-black uppercase tracking-widest">// DETAILED PROJECT LIST</p>
              {PROJECTS_DATA.map((proj, idx) => (
                <div key={proj.id} className="border-l border-white/10 pl-3 py-1 space-y-1">
                  <p className="text-white font-bold">#{idx + 1} {proj.title} ({proj.category})</p>
                  <p className="text-stone-400 text-sm">{proj.description}</p>
                  <p className="text-stone-500 text-xs">Stack: {proj.techStack.join(" | ")}</p>
                  {proj.githubUrl && (
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-xs font-bold block">
                      Repo: {proj.githubUrl}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )
        });
        break;

      case "experience":
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-3 font-mono text-stone-300 max-w-2xl">
              <p className="text-white font-black uppercase tracking-widest">// ROLES & EXPERIENCE</p>
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-white font-black tracking-wide">{exp.role}</p>
                  <p className="text-stone-400 text-xs uppercase">{exp.company} | {exp.period}</p>
                  <ul className="list-none pl-1.5 space-y-1 text-stone-450 text-sm">
                    {exp.bullets.map((b, i) => <li key={i} className="flex gap-1.5"><span className="text-white">■</span> {b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )
        });
        break;

      case "education":
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-3 font-mono text-stone-300">
              <p className="text-white font-black uppercase tracking-widest">// ACADEMIC BACKGROUND</p>
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 py-1 border-b border-white/5">
                  <span className="text-stone-500 text-xs font-semibold">{edu.period}</span>
                  <div>
                    <p className="text-white font-bold">{edu.institution}</p>
                    <p className="text-stone-400 text-xs">{edu.degree}</p>
                    <p className="text-stone-500 text-xs">CGPA/GPA: <span className="text-white font-bold">{edu.gpa}</span> / {edu.gpaScale}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        });
        break;

      case "contact":
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-2 font-mono text-stone-300">
              <p className="text-white font-black uppercase tracking-widest">// CONTACT INFORMATION</p>
              <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                <span className="text-stone-500">Email:</span>
                <span className="text-white font-bold underline cursor-pointer" onClick={handleCopyEmail}>
                  {PERSONAL_INFO.email} (Click to copy)
                </span>
                <span className="text-stone-500">Tel:</span>
                <span>{PERSONAL_INFO.phoneFull}</span>
                <span className="text-stone-500">LinkedIn:</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-white underline font-bold">
                  {PERSONAL_INFO.linkedin}
                </a>
                <span className="text-stone-500">GitHub:</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-white underline font-bold">
                  {PERSONAL_INFO.github}
                </a>
              </div>
            </div>
          )
        });
        break;

      case "clear":
        setLogs([]);
        setInput("");
        return;

      case "matrix":
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-1 font-mono text-white leading-none text-xs select-none">
              <p>LAUNCHING PROJECT PREVIEW MODULE...</p>
              <p>CONNECTED TO SYSTEM DATABASE [OK]</p>
              <p>LOADING CONFIGURATION PRESETS...</p>
              <p>1010100101010010111110101010101000101010111010111000101011</p>
              <p>1110010101100110010101110010111011100101111110100010101101</p>
              <p>ALIF AL FAHIM - ASPIRING DATA ANALYST & DEVELOPER</p>
              <p>SUCCESS: EXPERIENCE LOADED SUCCESSFULLY.</p>
            </div>
          )
        });
        break;

      default:
        newLogs.push({
          type: "error",
          text: `Error: Command '${cmdText}' not identified. Type 'help' to review active instructions.`
        });
        break;
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIdx);
          setInput(history[nextIdx]);
        }
      }
    }
  };

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
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        printPdf();
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  return (
    <section id="terminal" className="pt-28 pb-12 max-w-5xl mx-auto px-4 mt-4">
      {/* Hidden PDF framing helper to bypass page printing and trigger the high-quality uploaded CV.pdf */}
      <iframe
        id="pdf-print-helper"
        src="CV.pdf"
        style={{ display: "none", position: "absolute", width: "1px", height: "1px", opacity: 0 }}
        title="PDF Print Helper"
      />
      {/* Dynamic Intro Greeting with Huge Bold Outline Typography Theme */}
      <div className="mb-14 text-left relative">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-60 block mb-3 text-[#ff6b9d]">
          Currently: {PERSONAL_INFO.location.toUpperCase()}
        </span>
        <div className="relative">
          <h1 className="huge-text uppercase text-gradient-coral font-sans select-none pb-1">
            ALIF AL
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12 lg:-mt-4">
            <h1 className="huge-text uppercase outline-text font-sans select-none">
              FAHIM
            </h1>
            <div className="max-w-xl pb-3">
              <p className="text-sm leading-relaxed text-[#a0a0b0] mb-4">
                Computer Science & Engineering student at Daffodil International University. I love turning raw numbers and information into beautiful dashboards and practical solutions that anyone can understand and use.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline tracking-widest text-[#ff6b9d] hover:text-white uppercase font-bold">GITHUB</a>
                <span className="opacity-30">•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline tracking-widest text-[#ff6b9d] hover:text-white uppercase font-bold">LINKEDIN</a>
                <span className="opacity-30">•</span>
                <button onClick={handleCopyEmail} className="hover:underline tracking-widest text-[#ff6b9d] hover:text-white cursor-pointer uppercase font-bold">
                  {copied ? "COPIED!" : "EMAIL ADDRESS"}
                </button>
                <span className="opacity-30">•</span>
                <button
                  onClick={printPdf}
                  className="px-2.5 py-1 rounded border border-[#ff6b9d]/40 hover:border-[#ff6b9d] text-[#ff6b9d] hover:text-white bg-[#ff6b9d]/5 hover:bg-[#ff6b9d]/15 cursor-pointer uppercase font-bold tracking-widest flex items-center gap-1.5 transition-all text-[11px]"
                >
                  📄 PRINT OR SAVE CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Board Window with Raw macOS Style and neon-card glow */}
      <div
        className="neon-card overflow-hidden text-left p-0!"
        onClick={focusInput}
        style={{ borderRadius: "12px", border: "1px solid rgba(255, 82, 130, 0.2)" }}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#13131a] border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="text-[#a0a0b0] font-mono text-[10px] ml-3 select-none tracking-wider uppercase font-semibold">
              EXPLORER -- alfahim@portfolio:~
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                processCommand("clear");
              }}
              title="Clear Terminal Buffer"
              className="p-1 text-[#a0a0b0] hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopyEmail();
              }}
              title="Copy Email Addresses"
              className="p-1 text-[#a0a0b0] hover:text-white transition-colors cursor-pointer"
            >
              <Clipboard className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Output Area in high contrast style (macOS terminal `#161622` styling) */}
        <div
          ref={outputRef}
          className="h-80 overflow-y-auto px-5 py-5 font-mono text-xs text-[#a0a0b0] space-y-3 leading-relaxed bg-[#161622]"
        >
          {logs.map((log, index) => {
            if (log.type === "input") {
              return (
                <div key={index} className="text-[#ffffff] font-bold font-mono tracking-wide">
                  {log.text}
                </div>
              );
            }
            if (log.type === "system") {
              return (
                <div key={index} className="text-[#a0a0b0]/50 font-mono italic">
                  {log.text}
                </div>
              );
            }
            if (log.type === "error") {
              return (
                <div key={index} className="text-[#ff5252] font-bold font-mono">
                  {log.text}
                </div>
              );
            }
            if (log.type === "success") {
              return (
                <div key={index} className="bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white px-3 py-1 font-bold font-mono inline-block">
                  {log.text}
                </div>
              );
            }
            return (
              <div key={index} className="py-0.5 border-l border-[#ff5252]/20 pl-2">
                {log.text}
              </div>
            );
          })}
        </div>

        {/* Input Line */}
        <div className="flex items-center bg-[#13131a] border-t border-white/5 px-4 py-3">
          <span className="text-[#ff5252] font-mono font-bold mr-3 select-none">$</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none text-[#ffffff] font-mono text-xs focus:outline-none focus:ring-0 placeholder-white/20 tracking-tight"
            placeholder="Type 'help' list, 'skills', 'about', 'experience'..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            id="terminal-input"
          />
          <button
            onClick={() => processCommand(input)}
            className="p-1.5 text-[#ff6b9d] hover:text-white transition-all cursor-pointer"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Suggested Command Badges: Monochromatic Capitalized Brutalist Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
        <span className="text-white/50 font-mono text-[10px] mr-1 select-none flex items-center gap-1 uppercase tracking-widest">
          <HelpCircle className="h-3.5 w-3.5 text-white" /> Explore:
        </span>
        {["help", "about", "skills", "projects", "experience", "education", "contact", "matrix"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => processCommand(cmd)}
            className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 text-[#FAFAFA]/80 hover:text-black hover:bg-white hover:border-white transition-all duration-200 cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </section>
  );
}
