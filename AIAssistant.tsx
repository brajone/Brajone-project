"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, Phone, Clock, Globe, ShieldCheck, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "assistant" | "user";
  content: string;
  type?: "form" | "text" | "choice";
  options?: string[];
  lang?: "en" | "hi";
};

export default function AdvancedSalesAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState({ name: "", phone: "", budget: "", intent: "" });
  
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "Radhe Radhe! Welcome to Brajone. I am your Senior Investment Advisor. I specialize in high-ROI spiritual luxury in Vrindavan. Shall we speak in English or Hindi?",
      options: ["English", "Hindi"]
    }
  ]);

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  // High-Conversion Sales Scripts
  const script = {
    en: {
      askName: "Excellent choice. May I know your name to personalize your investment plan?",
      askPhone: "Beautiful name! To send you our 'Hidden Gems' portfolio and rental yield projections via WhatsApp, what's your best contact number?",
      askBudget: "Vrindavan is seeing 20% annual appreciation. What is your preferred investment range?",
      optionsBudget: ["50L - 1Cr", "1Cr - 3Cr", "3Cr+", "Plots"],
      closing: "I've identified 2 exclusive units matching your profile with high ROI. Our Director will call you in 5 minutes for a private briefing. Ready for a site visit?",
      visit: ["Yes, Book VIP Visit", "Send Brochure First"]
    },
    hi: {
      askName: "बहुत बढ़िया। आपका शुभ नाम क्या है ताकि हम आपके लिए एक व्यक्तिगत निवेश योजना बना सकें?",
      askPhone: "सुंदर नाम! हमारे एक्सक्लूसिव प्रोजेक्ट्स और रेंटल इनकम की जानकारी WhatsApp पर भेजने के लिए, आपका नंबर क्या है?",
      askBudget: "वृंदावन में प्रॉपर्टी की कीमतें तेज़ी से बढ़ रही हैं। आपका बजट क्या है?",
      optionsBudget: ["50 लाख - 1 करोड़", "1 करोड़ - 3 करोड़", "3 करोड़ से ज्यादा", "प्लॉट्स"],
      closing: "मैंने आपके लिए 2 बेहतरीन विकल्प चुने हैं जिनमें शानदार रिटर्न मिलेगा। हमारे सीनियर मैनेजर 5 मिनट में आपको कॉल करेंगे। क्या आप साइट विजिट करना चाहेंगे?",
      visit: ["हाँ, विजिट बुक करें", "पहले ब्रोशर भेजें"]
    }
  };

  const handleSend = (text?: string) => {
    const userInput = text || input;
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: "user" as const, content: userInput }];
    setMessages(newMessages);
    setInput("");

    // Advanced Conversion Engine
    setTimeout(() => {
      let reply = "";
      let options: string[] | undefined = undefined;

      if (userInput === "Hindi" || userInput === "English") {
        const selectedLang = userInput === "Hindi" ? "hi" : "en";
        setLang(selectedLang);
        reply = script[selectedLang].askName;
        setStep(1);
      } else if (step === 1) {
        setLead({ ...lead, name: userInput });
        reply = script[lang].askPhone;
        setStep(2);
      } else if (step === 2) {
        setLead({ ...lead, phone: userInput });
        reply = script[lang].askBudget;
        options = script[lang].optionsBudget;
        setStep(3);
      } else if (step === 3) {
        setLead({ ...lead, budget: userInput });
        reply = script[lang].closing;
        options = script[lang].visit;
        setStep(4);
        console.log("HIGH-CONVERT LEAD:", { ...lead, budget: userInput });
      } else {
        reply = lang === "en" ? "Our team is connecting with you now. Radhe Radhe!" : "हमारी टीम अभी आपसे संपर्क कर रही है। राधे राधे!";
      }

      setMessages([...newMessages, { role: "assistant", content: reply, options }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-28 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="bg-[#080808] border border-gold/40 w-[380px] h-[550px] flex flex-col shadow-[0_0_60px_rgba(212,175,55,0.25)] rounded-2xl overflow-hidden"
          >
            {/* Sales Header */}
            <div className="bg-gold p-5 flex justify-between items-center border-b border-black/10">
              <div className="flex items-center gap-4">
                <div className="relative">
                   <img src="/logo.jpg" className="h-12 w-12 rounded-full border-2 border-black/20 object-cover" alt="Brajone AI" />
                   <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-gold shadow-lg" />
                </div>
                <div>
                  <h4 className="text-black font-extrabold text-sm uppercase tracking-tight">Luxury Advisor AI</h4>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-black animate-pulse" />
                    <span className="text-[10px] text-black/80 font-bold uppercase tracking-[0.2em]">High Priority Support</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-black hover:rotate-90 transition-transform"><X size={24} /></button>
            </div>

            {/* Live Market Pulse */}
            <div className="bg-luxury-charcoal/50 px-4 py-2 border-b border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-gold font-bold">
               <span className="flex items-center gap-1"><TrendingUp size={12}/> Market Growth: +18.4%</span>
               <span className="text-white/40">Verified by Brajone</span>
            </div>
            
            {/* Conversion Chat Area */}
            <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-5 bg-black/80 custom-scrollbar">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[88%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-xl ${
                    m.role === 'user' 
                      ? 'bg-gold text-black font-bold rounded-tr-none' 
                      : 'bg-luxury-charcoal text-white font-light rounded-tl-none border border-white/10'
                  }`}>
                    {m.content}
                    
                    {m.options && (
                      <div className="mt-5 grid grid-cols-1 gap-2">
                        {m.options.map(opt => (
                          <button 
                            key={opt}
                            onClick={() => handleSend(opt)}
                            className="w-full text-left bg-black/40 border border-gold/30 text-gold text-[11px] uppercase tracking-wider px-4 py-3 rounded-lg hover:bg-gold hover:text-black transition-all duration-300 font-bold"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="p-4 bg-luxury-charcoal border-t border-white/5 grid grid-cols-2 gap-4">
               <div className="flex items-center gap-2 text-gray-400 text-[10px] uppercase tracking-tighter">
                  <ShieldCheck size={14} className="text-gold" /> 100% Safe Investment
               </div>
               <div className="flex items-center gap-2 text-gray-400 text-[10px] uppercase tracking-tighter">
                  <Clock size={14} className="text-gold" /> Priority Callback
               </div>
            </div>

            {/* Input Engine */}
            <div className="p-4 border-t border-white/10 flex gap-3 bg-black">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-grow bg-luxury-charcoal border border-white/10 px-5 py-4 rounded-xl text-xs text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                placeholder={lang === "hi" ? "अपना मैसेज लिखें..." : "Type your message..."}
              />
              <button 
                onClick={() => handleSend()} 
                className="bg-gold text-black p-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Floating UI */}
      <div className="flex flex-col gap-4 items-end">
        {/* Dynamic Trust Banner */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/80 backdrop-blur-xl border border-gold/30 p-4 rounded-2xl flex items-center gap-5 shadow-2xl"
        >
          <div className="flex flex-col items-end">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span className="text-[10px] text-gold font-black uppercase tracking-[0.3em]">AI Agent Live</span>
             </div>
             <a href="tel:7900780022" className="text-white font-serif font-bold text-base mt-1 hover:text-gold transition-colors">Speak to Advisor</a>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <button onClick={() => setIsOpen(true)} className="bg-gold text-black p-3.5 rounded-full shadow-lg hover:rotate-12 transition-transform">
             <Globe size={24} />
          </button>
        </motion.div>

        {/* Primary Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gold p-6 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:scale-110 active:scale-90 transition-all group"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            className="text-black"
          >
            <Send size={32} />
          </motion.div>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-black">1</span>
        </button>
      </div>
    </div>
  );
}
