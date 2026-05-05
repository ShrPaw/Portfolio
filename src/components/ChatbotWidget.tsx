import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message { id: string; text: string; isUser: boolean; }

// Offline chatbot with pre-built responses — no live AI API connected
const RESPONSES: Record<string, string> = {
  default: "Hey! I'm Nicolas' portfolio assistant. I can tell you about his business operations background, customer success experience, Python automation work, data pipelines, dashboards, alert systems, and bilingual EN/ES communication. You can also reach him directly through the contact section.",

  skills: "Nicolas brings a practical mix of business operations and technical automation:\n\n⚙️ Python Automation — scripts, reports, data workflows, APIs, and alert systems\n📊 Data Operations — CSV/Excel cleanup, dashboards, market data pipelines, and reporting\n🤝 Customer Success — account management, client communication, issue resolution, and sales operations\n🌎 Bilingual — Spanish native + English C1 for international/remote teams\n🧩 Business Workflow Thinking — he understands real operational pain points and builds tools to reduce manual work.",

  experience: "Here's Nicolas' career journey:\n\n🏦 2019 — Banco Nacional de Bolivia (BNB): Selected among hundreds for the Pasaporte BNB program. Rotated through Retail Banking, Corporate Banking, Credit Risk, HR, Operations, Financial Leasing, and more.\n\n🍺 2020–2022 — Cervecería Boliviana Nacional (AB InBev): Sales Executive during the Direct Sales launch. Opened approximately 100 points of sale, consistently ranked among top performers out of 50+ executives.\n\n💼 2022–2025 — Intcomex Bolivia: Key Account Manager handling the region's largest wholesalers. Managed high-value client relationships, organized activations and trainings, and built Python scripts to automate sales reports and dashboards.\n\n🚀 Now — Focused on Python automation, data workflows, API integrations, and freelance projects via Upwork.",

  bnb: "In 2019, Nicolas was selected among hundreds of applicants for the Pasaporte BNB program at Banco Nacional de Bolivia — the country's second-largest bank. Only 4 candidates were chosen for this intensive 6-month rotational program. He rotated through every key department: Retail Banking, Corporate & Institutional Banking, Credit Risk, HR, Operations & Systems, Financial Leasing, Teller Operations, and large-scale credit approvals.",

  abinbev: "Nicolas joined Cervecería Boliviana Nacional (CBN – AB InBev), Bolivia's largest beverage company, as a Sales Executive during the launch of their Direct Sales project. He opened and coded approximately 100 points of sale across his region, managed a diverse portfolio of small stores to wholesalers, and consistently met or exceeded monthly targets. He was frequently recognized as one of the top salespeople among approximately 50 executives.",

  intcomex: "At Intcomex, a leading Latin American technology distributor, Nicolas combined Customer Success with sales and technical automation. He managed enterprise accounts — resellers, integrators, and companies buying hardware, software, and cloud solutions. He ensured high post-sale satisfaction, resolved issues efficiently, and maintained bilingual communication (Spanish/English) with clients and regional teams. On the technical side, he built custom Python scripts for automated sales reports and account performance dashboards.",

  projects: "Key projects Nicolas has built:\n\n🌐 Business Automation Portfolio Website — Built with React, TypeScript, Tailwind, Framer Motion, and an offline chatbot widget.\n\n📡 Real-Time Monitoring Dashboard (MANTIS) — Live data ingestion, event detection, dashboard logic, and alert-style architecture.\n\n📊 Python Market Data Pipeline — Data pipelines to collect, clean, aggregate, and structure high-volume market data.\n\n🔔 Automated Signal & Alert System — Continuous monitoring with Telegram notifications and execution-ready architecture.\n\n⚙️ Enterprise Process Automation — Python scripts for commercial operations, account tracking, and sales reporting.\n\n🛒 Conversion-Focused Business Websites — Landing page and e-commerce projects with clear CTAs and conversion flow.\n\n📈 TradingView Multi-Timeframe Indicator — Session open/close levels across timeframes as proof of scripting ability.",

  trading: "Nicolas has built trading-related tools as technical automation projects, including alert systems, market data pipelines, dashboards, and monitoring workflows. He does not promise trading profits or sell guaranteed trading strategies. These projects demonstrate his ability to work with real-time data, APIs, and automated monitoring — skills that transfer directly to business automation.",

  hire: "You can hire Nicolas for freelance projects through Upwork or contact him directly for remote contract opportunities.\n\nBest-fit projects:\n• Python automation scripts\n• Data cleaning and reporting workflows\n• API integrations\n• Telegram/alert systems\n• Business workflow automation\n• Simple dashboards and internal tools\n\nAll work is done personally by Nicolas — no outsourcing.",

  contact: "Here's how to reach Nicolas:\n\n📧 Email: nbustamante.work@gmail.com\n💬 WhatsApp: +59172512525\n🔗 LinkedIn: linkedin.com/in/nicolas-bustamante-526464184/\n💼 Upwork: upwork.com/freelancers/~015e58af861eafe53c\n🐙 GitHub: github.com/ShrPaw\n\n📍 Based in Cochabamba, Bolivia (GMT-4). Bilingual EN/ES. Currently available for freelance, contract & remote roles!",

  price: "Pricing depends on project scope:\n\n⚙️ Python automation scripts: $50–200\n📊 Data processing & reports: $50–300\n🔌 API integration & alerts: $100–400\n🏢 Business workflow automation: $100–400\n💬 Website + chatbot demo: $150–500\n\nAll work is done personally by Nicolas — no outsourcing, no middlemen. For custom quotes, reach out at nbustamante.work@gmail.com or WhatsApp +59172512525.",

  python: "Nicolas has been working with Python for several years. His Python work spans:\n\n⚙️ Process Automation — Custom scripts that saved hours of manual work (sales reports, account dashboards)\n📊 Data Pipelines — Automated report generation, data cleaning, performance tracking\n🔗 API Integrations — REST APIs, Telegram bots, webhooks, data collection\n🔔 Alert Systems — Automated monitoring with notification workflows\n\nHe's comfortable with libraries like pandas, requests, openpyxl, and various API/HTTP libraries.",

  ai: "Nicolas builds practical chatbot-style and automation-ready tools for business use. This portfolio currently uses an offline assistant with smart pre-built responses, designed as a fast demo of client-facing interaction.\n\nFor client projects, he can help structure chatbot flows, knowledge-base style responses, and automation-ready contact or support workflows.",

  languages: "Nicolas is fully bilingual with an official certification:\n\n🇧🇴 Spanish — Native speaker (Bolivia)\n🇺🇸 English — C1 Advanced (EF SET Certified, 63/100)\n  • Reading: C2 Proficient\n  • Listening: C1 Advanced\n\nHe used English daily in multinational environments (AB InBev, Intcomex) for client communication, technical documentation, and regional team coordination.",

  portfolio: "This portfolio website was built entirely from scratch by Nicolas. Here's the tech stack:\n\n⚛️ React 19 + TypeScript — Modern component architecture\n⚡ Vite 6 — Lightning-fast builds\n🎨 Tailwind CSS 4 — Utility-first styling\n✨ Framer Motion — Smooth animations\n💬 Offline chatbot widget (me!) with keyword-based smart responses\n📱 Fully responsive — mobile, tablet, desktop\n\nThe whole site is a project in itself — clean code, production-ready, deployable to Vercel/Netlify.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.match(/portfolio|website|this site|built this|tech stack|stack|react|framer/)) return RESPONSES.portfolio;
  if (lower.match(/skill|what.*do|capabil|technolog/)) return RESPONSES.skills;
  if (lower.match(/bnb|banco|bank|pasaporte/)) return RESPONSES.bnb;
  if (lower.match(/ab ?inbev|cbn|cervecer|beer|beverage/)) return RESPONSES.abinbev;
  if (lower.match(/intcomex|distribut|wholesale/)) return RESPONSES.intcomex;
  if (lower.match(/experienc|background|history|career|journey|timeline/)) return RESPONSES.experience;
  if (lower.match(/project|built|showcase/)) return RESPONSES.projects;
  if (lower.match(/trad|bot|crypto|scalp|pine|indicator/)) return RESPONSES.trading;
  if (lower.match(/hire|freelance|job|employ|available|work|upwork/)) return RESPONSES.hire;
  if (lower.match(/contact|email|reach|location|where|whatsapp/)) return RESPONSES.contact;
  if (lower.match(/price|cost|how much|budget|quote|rate/)) return RESPONSES.price;
  if (lower.match(/python|script|automat|ccxt|pandas/)) return RESPONSES.python;
  if (lower.match(/ai|chatbot|llm|gemini|openai|gpt/)) return RESPONSES.ai;
  if (lower.match(/language|bilingual|spanish|english/)) return RESPONSES.languages;
  if (lower.match(/hi|hello|hey|sup|greet/)) return RESPONSES.default;
  return "That's a great question! I'd recommend reaching out to Nicolas directly for detailed answers — you can email him at nbustamante.work@gmail.com or WhatsApp: +59172512525. Click 'Hire Me on Upwork' in the Contact section for freelance projects. Is there anything specific about his skills or projects I can help with?";
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: RESPONSES.default, isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), text: inputValue, isUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getResponse(inputValue);
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: reply, isUser: false }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button onClick={() => setIsOpen(!isOpen)} className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl group" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div className="absolute -inset-1 rounded-full opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300" style={{ background: "conic-gradient(from 0deg, #00D99F, #1A73E8, #FACC15, #00D99F)", animation: "spin-slow 4s linear infinite" }} />
        <div className="relative w-12 h-12 rounded-full bg-[#00D99F] flex items-center justify-center text-white">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg key="close" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg key="chat" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Chat with my assistant</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl w-[340px] sm:w-[380px] h-[520px] flex flex-col overflow-hidden border border-[#E2E8F0]" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
            <div className="h-1" style={{ background: "linear-gradient(90deg, #1A73E8, #00D99F, #FACC15, #1A73E8)", backgroundSize: "300% 100%", animation: "gradient-shift 4s ease infinite" }} />
            <div className="bg-[#0F172A] text-white px-5 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1A73E8] flex items-center justify-center text-xs font-bold">NB</div>
                <div>
                  <h3 className="font-semibold text-sm">Nicolas' Assistant</h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/60">
                    <motion.div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    Online
                  </div>
                </div>
              </div>
              <motion.button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-all duration-200" whileTap={{ scale: 0.9 }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </motion.button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-[#F8FAFC] space-y-4">
              {messages.map((msg) => (
                <motion.div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`} initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.3 }}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.isUser ? "bg-[#1A73E8] text-white rounded-br-md" : "bg-white text-[#0F172A] rounded-bl-md border border-[#E2E8F0] shadow-sm"}`}>{msg.text}</div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div className="flex justify-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="bg-white text-[#0F172A] px-4 py-3 rounded-2xl rounded-bl-md border border-[#E2E8F0] shadow-sm flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => <motion.span key={i} className="w-2 h-2 bg-[#94A3B8] rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />)}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-[#E2E8F0] bg-white">
              <div className="flex gap-2">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())} placeholder="Ask me anything..." disabled={isTyping} className="flex-1 px-4 py-3 bg-[#F8FAFC] text-[#0F172A] rounded-xl text-sm placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:bg-white transition-all duration-200 disabled:opacity-50" />
                <motion.button onClick={sendMessage} disabled={isTyping || !inputValue.trim()} className="bg-[#1A73E8] text-white w-11 h-11 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
