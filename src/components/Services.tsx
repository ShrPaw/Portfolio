// Services.tsx — Automation services with emotional positioning
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Service { icon: string; title: string; emotionalAngle: string; description: string; features: string[]; color: string; bgColor: string; }

const services: Service[] = [
  {
    icon: "⚙️",
    title: "Python Automation",
    emotionalAngle: "Stop repeating the same task every week.",
    description: "Custom Python scripts that reduce repetitive work, process files, organize data, and turn manual steps into simple automated workflows.",
    features: ["Custom Python scripts", "File and folder automation", "CSV / Excel processing", "Scheduled task workflows"],
    color: "#3776AB",
    bgColor: "#3776AB10",
  },
  {
    icon: "📊",
    title: "Data Processing & Reports",
    emotionalAngle: "Messy data should not block decisions.",
    description: "Turn messy CSV, Excel, or operational data into clean outputs, automated reports, and dashboard-ready files.",
    features: ["CSV / Excel cleanup", "Data transformation", "Automated reports", "Dashboard-ready outputs"],
    color: "#22C55E",
    bgColor: "#22C55E10",
  },
  {
    icon: "🔌",
    title: "API Integration & Alerts",
    emotionalAngle: "Your tools should talk to each other.",
    description: "Connect APIs, collect data, send notifications, and move information between tools so you do not have to check everything manually.",
    features: ["API data collection", "Webhook workflows", "Telegram / email alerts", "Simple backend automation"],
    color: "#1A73E8",
    bgColor: "#1A73E810",
  },
  {
    icon: "🏢",
    title: "Business Workflow Automation",
    emotionalAngle: "If the process lives only in someone's head, it is fragile.",
    description: "Automation for sales, customer support, reporting, follow-up, and internal operations — built to reduce errors and make daily work easier.",
    features: ["Sales operations workflows", "Customer follow-up systems", "CRM-ready processes", "Manual process cleanup"],
    color: "#F59E0B",
    bgColor: "#F59E0B10",
  },
  {
    icon: "💬",
    title: "Website + Chatbot Lead Flow",
    emotionalAngle: "Guide visitors instead of leaving them confused.",
    description: "Simple client-facing websites with chatbot-style interaction, service presentation, and contact or lead capture flow.",
    features: ["Responsive landing page", "Chatbot-style assistant", "Contact / lead flow", "Service presentation"],
    color: "#EC4899",
    bgColor: "#EC489910",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#1A73E8]/20 hover:shadow-xl transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: service.bgColor }}>{service.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-[#0F172A]">{service.title}</h3>
            <p className="text-sm text-[#64748B] mt-1 italic">{service.emotionalAngle}</p>
          </div>
        </div>
        <p className="text-sm text-[#64748B] leading-relaxed mb-5">{service.description}</p>
        <ul className="space-y-2.5">
          {service.features.map((feature, i) => (
            <motion.li key={i} className="flex items-center gap-3 text-sm text-[#0F172A]" initial={{ opacity: 0, x: -10 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.1 + i * 0.08 + 0.3 }}>
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 px-6 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: "#FACC15" }} />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: "#1A73E8" }} />
      <div ref={ref} className="max-w-5xl mx-auto relative">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <motion.span className="inline-block text-xs font-bold tracking-[0.25em] text-[#1A73E8] uppercase mb-4 px-4 py-2 bg-[#1A73E8]/5 rounded-full" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>What I Offer</motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4">Services that remove manual work</h2>
          <p className="text-[#64748B] mt-4 max-w-lg mx-auto">If your business depends on repetitive tasks, messy spreadsheets, disconnected tools, or manual follow-up, I can help turn that into a simple working system.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => <ServiceCard key={idx} service={service} index={idx} />)}
        </div>
        <motion.div className="mt-14 text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}>
          <motion.a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F172A] text-white font-semibold text-base rounded-xl hover:bg-[#0F172A]/90 transition-colors duration-200 shadow-lg shadow-[#0F172A]/20" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            Tell me what you are doing manually →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
