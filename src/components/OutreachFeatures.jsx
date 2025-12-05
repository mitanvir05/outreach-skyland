import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <MailIcon />,
    title: "Cold email systems",
    desc: "Deliverability-safe setups, warmup, and proven campaign structures that land in the primary inbox.",
  },
  {
    icon: <UserCheckIcon />,
    title: "Ideal customer targeting",
    desc: "We scrape, verify, and filter your ICP data manually to ensure highly relevant outreach lists.",
  },
  {
    icon: <TargetIcon />,
    title: "Personalization at scale",
    desc: "Dynamic variables and researched first lines without slowing down your sending velocity.",
  },
  {
    icon: <ChartIcon />,
    title: "Clear reporting",
    desc: "Live dashboards tracking reply rates, meetings booked, and pipeline revenue generated.",
  },
];

export default function OutreachFeatures() {
  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background Decor: Subtle Grid */}
      <div className="absolute inset-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             opacity: 0.3
           }} 
      />
      
      {/* Background Decor: Glow Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-indigo-100 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-slate-600 uppercase">
              Why Skyland?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Everything you need to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              scale your outreach.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Stop wasting time on manual tasks. We handle the technical systems, copywriting, and experimentation — you just handle the closing.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(79,70,229,0.12)] hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 mb-6 rounded-2xl bg-indigo-50/50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm border border-indigo-100/50">
                <div className="transform transition-transform duration-300">
                  {f.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {f.title}
              </h3>
              
              <p className="text-sm leading-7 text-slate-500 group-hover:text-slate-600 transition-colors">
                {f.desc}
              </p>

              {/* Decorative Corner Gradient (Optional) */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom Icons matched to Skyland Design System
// Increased stroke width slightly for better visibility at small sizes

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );
}

function UserCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
  );
}

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  );
}

function ChartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
  );
}