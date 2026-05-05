import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project { title: string; description: string; tags: string[]; link?: string; color: string; icon: string; }

const projects: Project[] = [
  {
    title: "Business Automation Portfolio Website",
    description: "Professional portfolio website built with React, TypeScript, Tailwind, Framer Motion, and an offline chatbot widget. Designed to present services, projects, contact options, and client-facing automation capabilities.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "Chatbot"],
    link: "https://portfolio-eta-ochre-12.vercel.app/",
    color: "#06B6D4",
    icon: "🌐",
  },
  {
    title: "Real-Time Monitoring Dashboard / MANTIS",
    description: "Built a real-time monitoring system with live data ingestion, event detection, dashboard logic, and alert-style architecture. Demonstrates streaming data, event monitoring, dashboard design, and operational monitoring.",
    tags: ["Python", "FastAPI", "WebSocket", "Dashboard", "Monitoring"],
    link: "https://github.com/ShrPaw/mantis",
    color: "#1A73E8",
    icon: "📡",
  },
  {
    title: "Python Market Data Pipeline",
    description: "Built data pipelines to collect, clean, aggregate, and structure high-volume market data for analysis, validation, and reporting workflows.",
    tags: ["Python", "Pandas", "Data Pipeline", "Automation"],
    link: "https://github.com/ShrPaw/btc-quant-research",
    color: "#22C55E",
    icon: "📊",
  },
  {
    title: "Automated Signal & Alert System",
    description: "Built automated monitoring and alert workflows with continuous signal generation, TradingView-style logic, Telegram notifications, and execution-ready architecture.",
    tags: ["Python", "Automation", "Telegram", "Alerts", "APIs"],
    link: "https://github.com/ShrPaw/btc-intraday-system",
    color: "#F59E0B",
    icon: "🔔",
  },
  {
    title: "Enterprise Process Automation",
    description: "Built Python automation scripts and reporting workflows to support commercial operations, account tracking, and sales reporting in a real business environment.",
    tags: ["Python", "Reports", "Sales Ops", "Automation"],
    color: "#8B5CF6",
    icon: "⚙️",
  },
  {
    title: "Conversion-Focused Business Websites",
    description: "Built landing page and e-commerce style projects focused on clear positioning, service presentation, calls to action, and client-facing conversion flow.",
    tags: ["HTML", "CSS", "Landing Page", "E-commerce", "Conversion"],
    link: "https://github.com/ShrPaw/pawsolace-store",
    color: "#EC4899",
    icon: "🛒",
  },
  {
    title: "TradingView Multi-Timeframe Indicator",
    description: "Built a TradingView indicator showing session open/close levels across multiple timeframes. Used as proof of scripting, alert logic, and market-monitoring tool development.",
    tags: ["Pine Script", "TradingView", "Indicators", "Alerts"],
    link: "https://es.tradingview.com/script/15bIFKpL-Sessions-with-Opening-Closing-Multi-timeframe/",
    color: "#10B981",
    icon: "📈",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTilt({ x: ((e.clientY - rect.top) / rect.height - 0.5) * -8, y: ((e.clientX - rect.left) / rect.width - 0.5) * 8 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.a
        href={project.link}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className="block bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-500"
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      >
        <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }} />
        <div className="p-6 md:p-7">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm" style={{ backgroundColor: `${project.color}10` }}>{project.icon}</div>
            <h3 className="text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#1A73E8] transition-colors duration-300">{project.title}</h3>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[#F1F5F9] text-[#64748B] tracking-wide uppercase">{tag}</span>)}
          </div>
          {project.link && (
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#1A73E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          )}
        </div>
      </motion.a>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-24 px-6 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: "#FACC15" }} />
      <div className="max-w-5xl mx-auto relative">
        <motion.div ref={headerRef} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <motion.span className="inline-block text-xs font-bold tracking-[0.25em] text-[#1A73E8] uppercase mb-4 px-4 py-2 bg-[#1A73E8]/5 rounded-full" initial={{ opacity: 0, scale: 0.8 }} animate={headerInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>My Work</motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4">Featured Projects</h2>
          <p className="text-[#64748B] mt-4 max-w-lg mx-auto">Real systems built to automate workflows, structure data, monitor events, and support business operations.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => <ProjectCard key={idx} project={project} index={idx} />)}
        </div>
      </div>
    </section>
  );
}
