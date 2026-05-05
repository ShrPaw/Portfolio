import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project { title: string; description: string; emotionalValue: string; tags: string[]; link?: string; color: string; icon: string; }

const projects: Project[] = [
  {
    title: "Business Automation Portfolio Website",
    description: "React/TypeScript portfolio website with service positioning, project showcase, contact flow, and chatbot-style interaction. Built to demonstrate client-facing automation, clear service presentation, and modern web delivery.",
    emotionalValue: "Shows how a business can present itself clearly and guide visitors toward action.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "Chatbot"],
    link: "https://portfolio-eta-ochre-12.vercel.app/",
    color: "#06B6D4",
    icon: "🌐",
  },
  {
    title: "Real-Time Monitoring Dashboard / MANTIS",
    description: "Live monitoring dashboard with data ingestion, event detection, real-time context, heatmap-style visualization, bubbles, and monitoring architecture.",
    emotionalValue: "Built for situations where people need to see what is happening now instead of manually checking multiple sources.",
    tags: ["Python", "FastAPI", "WebSocket", "Dashboard", "Real-Time Data"],
    link: "https://github.com/ShrPaw/mantis",
    color: "#1A73E8",
    icon: "📡",
  },
  {
    title: "Orderflow Cockpit",
    description: "Interactive order-flow analysis interface focused on persistent bubbles, auction zones, and visual monitoring.",
    emotionalValue: "Turns complex movement and event data into visual context that is easier to interpret.",
    tags: ["JavaScript", "Dashboard", "Visualization", "Monitoring"],
    link: "https://github.com/ShrPaw/orderflow-cockpit",
    color: "#8B5CF6",
    icon: "🧭",
  },
  {
    title: "Python Market Data Pipeline",
    description: "High-volume data pipeline for collection, cleaning, aggregation, feature engineering, and validation workflows.",
    emotionalValue: "Turns raw, unusable data into structured information that can be analyzed and tested.",
    tags: ["Python", "Pandas", "Data Pipeline", "Research", "Validation"],
    link: "https://github.com/ShrPaw/btc-quant-research",
    color: "#22C55E",
    icon: "📊",
  },
  {
    title: "Automated Signal & Alert System",
    description: "Automated monitoring and alert system with signal logic, confidence scoring, Telegram-style notifications, and execution-ready architecture.",
    emotionalValue: "Reduces manual monitoring by sending structured alerts when defined conditions appear.",
    tags: ["Python", "Automation", "Alerts", "Telegram", "APIs"],
    link: "https://github.com/ShrPaw/btc-intraday-system",
    color: "#F59E0B",
    icon: "🔔",
  },
  {
    title: "Premium Gym Website — TEMPLO",
    description: "Premium fitness landing page designed for a local gym brand, with modern visual structure, service presentation, and conversion-focused sections.",
    emotionalValue: "Helps a local business look premium, communicate value, and guide visitors toward contacting or joining.",
    tags: ["HTML", "CSS", "Landing Page", "Local Business", "Conversion"],
    link: "https://github.com/ShrPaw/templo-website",
    color: "#EC4899",
    icon: "🏋️",
  },
  {
    title: "Premium Travel Agency Landing Page",
    description: "Client-facing landing page for a travel agency, focused on presentation, trust, visual structure, and conversion.",
    emotionalValue: "Transforms a service business into a clearer, more trustworthy online presence.",
    tags: ["TypeScript", "Landing Page", "Travel", "Business Website"],
    link: "https://github.com/ShrPaw/kovar-viajes",
    color: "#10B981",
    icon: "✈️",
  },
  {
    title: "Bilingual Gym Chatbot with Booking Flow",
    description: "Bilingual chatbot project for a gym concept, designed around lead capture, booking flow, and customer interaction.",
    emotionalValue: "Helps businesses respond faster, capture interest, and reduce repetitive customer questions.",
    tags: ["Python", "Chatbot", "Bilingual", "Booking", "Lead Capture"],
    link: "https://github.com/ShrPaw/templo-gym-chatbot",
    color: "#F472B6",
    icon: "💬",
  },
];

interface Lab { title: string; description: string; tags: string[]; link?: string; color: string; icon: string; }

const labs: Lab[] = [
  {
    title: "ICT + Footprint Research Engine",
    description: "Research engine for market structure analysis, footprint patterns, and institutional-level context detection.",
    tags: ["Python", "Research", "Market Structure", "Data Analysis"],
    link: "https://github.com/ShrPaw/ict-footprint-paper-trader",
    color: "#6366F1",
    icon: "🔬",
  },
  {
    title: "DTC Funnel & Shopify Conversion System",
    description: "Direct-to-consumer funnel concept with Shopify integration, conversion tracking, and landing page flow.",
    tags: ["E-commerce", "Funnel", "Conversion", "Shopify"],
    link: "https://github.com/ShrPaw/stormshield-funnel",
    color: "#96CEB4",
    icon: "🛒",
  },
  {
    title: "Pet E-commerce Store Concept",
    description: "E-commerce store concept for pet products, with product display, cart flow, and responsive layout.",
    tags: ["HTML", "CSS", "E-commerce", "UI Concept"],
    link: "https://github.com/ShrPaw/pawsolace-store",
    color: "#FFEAA7",
    icon: "🐾",
  },
  {
    title: "Crypto Microstructure Intelligence Platform",
    description: "Platform for analyzing crypto market microstructure, order flow, and liquidity patterns.",
    tags: ["Python", "Crypto", "Microstructure", "Data Analysis"],
    link: "https://github.com/ShrPaw/chipusdt-platform",
    color: "#DDA0DD",
    icon: "📈",
  },
  {
    title: "Prediction Market Orderbook Automation Lab",
    description: "Experimental lab for prediction market orderbook analysis, automation logic, and event-driven workflows.",
    tags: ["Python", "Automation", "Prediction Markets", "Research"],
    link: "https://github.com/ShrPaw/polymarket-arb",
    color: "#A0D2DB",
    icon: "⚡",
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
          <div className="flex items-start gap-4 mb-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm" style={{ backgroundColor: `${project.color}10` }}>{project.icon}</div>
            <h3 className="text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#1A73E8] transition-colors duration-300">{project.title}</h3>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed mb-3">{project.description}</p>
          <p className="text-xs text-[#1A73E8] font-medium italic mb-4">{project.emotionalValue}</p>
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

function LabCard({ lab, index }: { lab: Lab; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href={lab.link}
        target={lab.link ? "_blank" : undefined}
        rel={lab.link ? "noopener noreferrer" : undefined}
        className="block bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg hover:border-transparent transition-all duration-400 p-5"
        whileHover={{ y: -2 }}
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: `${lab.color}15` }}>{lab.icon}</div>
          <div>
            <h3 className="text-sm font-bold text-[#0F172A] leading-snug group-hover:text-[#1A73E8] transition-colors duration-300">{lab.title}</h3>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F1F5F9] text-[#94A3B8] tracking-wide uppercase mt-1 inline-block">Lab / Experiment</span>
          </div>
        </div>
        <p className="text-xs text-[#64748B] leading-relaxed mb-3">{lab.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {lab.tags.map((tag, i) => <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F1F5F9] text-[#64748B] tracking-wide uppercase">{tag}</span>)}
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4">Projects that prove the system-building ability</h2>
          <p className="text-[#64748B] mt-4 max-w-lg mx-auto">Real projects built around automation, dashboards, data workflows, alert systems, websites, and operational clarity.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => <ProjectCard key={idx} project={project} index={idx} />)}
        </div>

        {/* Technical Labs & Experiments */}
        <motion.div className="mt-20" initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">Technical Labs & Experiments</h3>
            <p className="text-[#64748B] mt-2 text-sm">Deeper experiments, research engines, prototypes, and technical labs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {labs.map((lab, idx) => <LabCard key={idx} lab={lab} index={idx} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
