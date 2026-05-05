import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const paragraphs = [
  "I'm Nicolas Bustamante, a bilingual Operations Automation Specialist from Cochabamba, Bolivia.",
  "My background combines customer success, sales operations, account management, and self-taught Python development. I have worked in multinational environments where clear communication, fast problem-solving, and client trust mattered every day.",
  "At AB InBev, I helped open approximately 100 new points of sale in a competitive sales environment. At Intcomex Bolivia, I worked with major technology wholesalers, managed high-value client relationships, coordinated activations and trainings, and supported daily commercial operations.",
  "On the technical side, I build Python automation tools, data workflows, API integrations, alert systems, dashboards, and simple internal tools designed to reduce manual work and organize messy processes.",
  "My strongest value is not just writing code. It is understanding real business operations and turning repetitive, manual, or chaotic workflows into simple systems that work.",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 bg-white border-b border-[#E2E8F0]">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <motion.span className="inline-block text-xs font-bold tracking-[0.25em] text-[#1A73E8] uppercase mb-4 px-4 py-2 bg-[#1A73E8]/5 rounded-full" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            Who I Am
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4">About Me</h2>
        </motion.div>

        <div className="space-y-6">
          {paragraphs.map((text, idx) => (
            <motion.p
              key={idx}
              className={`text-lg leading-relaxed ${idx === 0 ? "text-[#0F172A] font-semibold text-xl" : idx === paragraphs.length - 1 ? "text-[#1A73E8] font-medium" : "text-[#64748B]"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.9 }}>
          {[
            { icon: "⚙️", label: "Automation Builder", desc: "Python, APIs & workflows" },
            { icon: "📊", label: "Data Operations", desc: "Reports, dashboards & cleanup" },
            { icon: "🤝", label: "Client-Side Operator", desc: "Sales, support & account management" },
          ].map((item, idx) => (
            <motion.div key={idx} className="flex items-center gap-4 p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#1A73E8]/20 hover:shadow-md transition-all duration-300" whileHover={{ y: -2 }}>
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-semibold text-[#0F172A] text-sm">{item.label}</div>
                <div className="text-xs text-[#64748B]">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
