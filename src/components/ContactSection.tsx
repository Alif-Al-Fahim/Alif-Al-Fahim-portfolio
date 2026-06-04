import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!name.trim()) {
      setSubmitError("Please provide your name or company initials.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setSubmitError("Please configure a valid email for communication responses.");
      return;
    }
    if (!message.trim() || message.length < 10) {
      setSubmitError("Please input a brief message outlining your invitation details.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xlgkelrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        if (data.errors && Array.isArray(data.errors)) {
          setSubmitError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setSubmitError("Your submission failed. Please check inputs or try again later.");
        }
        setIsSubmitting(false);
      }
    } catch (err) {
      setSubmitError("A connection exception occurred. Please verify your internet connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0f]/50 relative z-10 border-t border-[rgba(255,82,130,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-16 border-b border-white/5 pb-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#ff6b9d] block mb-2 uppercase">
            // Direct Recruiter Channels
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase">
            Initiate Contact Conversations
          </h2>
          <p className="text-[#a0a0b0] font-sans mt-3 max-w-xl text-sm leading-relaxed">
            Interested in hiring Alif or collaborating on research or dashboards? Send an offer details or direct inquiries below!
          </p>
        </div>

        {/* 2 Column Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left info statistics summary (Span 2) */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <div className="neon-card p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-sans font-black text-white uppercase tracking-tight">
                Direct Touchpoints
              </h3>

              <div className="space-y-5 font-sans text-sm">
                
                {/* Mail */}
                <div className="flex items-start gap-4 pb-5 border-b border-white/5">
                  <div className="h-10 w-10 bg-[#161622] text-[#ff5252] border border-[#ff5252]/15 flex items-center justify-center shrink-0 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[#ff6b9d]/75 font-mono text-[9px] uppercase block mb-0.5 tracking-wider font-bold">Primary Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-[#ff6b9d] break-all font-mono text-xs font-bold uppercase tracking-wider transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Tel */}
                <div className="flex items-start gap-4 pb-5 border-b border-white/5">
                  <div className="h-10 w-10 bg-[#161622] text-[#ff5252] border border-[#ff5252]/15 flex items-center justify-center shrink-0 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[#ff6b9d]/75 font-mono text-[9px] uppercase block mb-0.5 tracking-wider font-bold">Mobile Phone</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-[#ff6b9d] font-mono text-xs font-bold tracking-wider transition-colors">
                      {PERSONAL_INFO.phoneFull}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-[#161622] text-[#ff5252] border border-[#ff5252]/15 flex items-center justify-center shrink-0 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[#ff6b9d]/75 font-mono text-[9px] uppercase block mb-0.5 tracking-wider font-bold">Geographic Location</span>
                    <span className="text-white font-mono text-xs font-bold tracking-wider uppercase">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social linkages badges */}
            <div className="neon-card p-6 flex gap-4.5 justify-around">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#a0a0b0] hover:text-white font-mono text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                <Linkedin className="h-4 w-4 text-[#ff5252]" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#a0a0b0] hover:text-white font-mono text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                <Github className="h-4 w-4 text-[#ff5252]" />
                <span>GitHub Repos</span>
              </a>
            </div>
          </div>

          {/* Right Message Transceiver Form (Span 3) */}
          <div className="lg:col-span-3 neon-card p-6 sm:p-8 text-left relative overflow-hidden">
            
            {submitSuccess ? (
              /* Submission Successful Block */
              <div className="h-full flex flex-col justify-center items-center text-center py-10 space-y-5 animate-fade-in">
                <div className="h-14 w-14 rounded-full bg-[#161622] text-[#ff5252] border border-[#ff5252]/30 flex items-center justify-center mb-2 shadow-lg shadow-[rgba(255,82,130,0.1)]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white font-sans uppercase tracking-tight">
                    Message Transmitted!
                  </h3>
                  <p className="text-[#a0a0b0] font-sans text-xs max-w-sm mx-auto mt-2 leading-relaxed">
                    Thank you. Alif's background state machinery registered your feedback. An automated confirmation loop was dispatched; he will follow up shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-4 py-2 font-mono text-xs text-white bg-[#13131a] border border-[#ff5252]/30 hover:border-white font-bold transition-colors cursor-pointer uppercase tracking-wider rounded-lg"
                >
                  Post Another Message
                </button>
              </div>
            ) : (
              /* Input Form Fields */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[#ff6b9d] font-mono text-[9px] uppercase tracking-widest mb-1.5 font-bold">Your Name / Agency</label>
                    <input
                      type="text"
                      className="w-full text-xs font-mono bg-[#161622] border border-white/5 py-2.5 px-3.5 text-white focus:outline-none focus:border-[#ff5252]/60 focus:ring-1 focus:ring-[#ff5252]/30 rounded-lg transition-all"
                      placeholder="e.g. Acme Corp Hiring Manager"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                      id="contact-name"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-[#ff6b9d] font-mono text-[9px] uppercase tracking-widest mb-1.5 font-bold">Response Email</label>
                    <input
                      type="email"
                      className="w-full text-xs font-mono bg-[#161622] border border-white/5 py-2.5 px-3.5 text-white focus:outline-none focus:border-[#ff5252]/60 focus:ring-1 focus:ring-[#ff5252]/30 rounded-lg transition-all"
                      placeholder="e.g. hr@acmecorp.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      id="contact-email"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#ff6b9d] font-mono text-[9px] uppercase tracking-widest mb-1.5 font-bold">Invitation parameters / Message</label>
                  <textarea
                    rows={4}
                    className="w-full text-xs font-sans bg-[#161622] border border-white/5 py-2.5 px-3.5 text-white focus:outline-none focus:border-[#ff5252]/60 focus:ring-1 focus:ring-[#ff5252]/30 resize-none leading-relaxed rounded-lg transition-all"
                    placeholder="Describe your analyst internship, development project, or interview parameters..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                    id="contact-message"
                  />
                </div>

                {/* Error diagnostics */}
                {submitError && (
                  <div className="flex gap-2 items-center text-xs font-mono text-red-400 bg-red-500/5 border border-red-500/10 p-3 leading-normal rounded-lg">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#ff5252] to-[#f72585] font-black text-white hover:opacity-95 transition-all cursor-pointer border border-transparent text-xs font-mono uppercase tracking-wider rounded-lg shadow-lg shadow-[rgba(247,37,133,0.2)]"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING BATCH CODES...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
