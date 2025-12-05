import React from "react";
import { motion } from "framer-motion";

export default function OutreachHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              v2.0 Now Available
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Outbound outreach that actually{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                books meetings.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Multi-channel outreach, tested copy, and clean workflows — all set up
            for you so your team only focuses on talking to qualified prospects.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Request outreach audit
            </a>
            <a
              href="#workflow"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              See workflow
            </a>
          </motion.div>

          <div className="mt-8 pt-8 border-t border-slate-200 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-indigo-600" />
              Cold Email & LinkedIn
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-indigo-600" />
              Playbooks Included
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-indigo-600" />
              CRM Sync
            </div>
          </div>
        </div>

        {/* Right Visual (Interactive Card) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:max-w-full"
        >
          {/* Main Card */}
          <div className="relative rounded-2xl bg-white shadow-2xl shadow-indigo-100 border border-slate-100 p-6 z-20">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Live Sequence</div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="group flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-200">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Day 1 — Intro</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-100 text-green-700">Sent</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Value proposition + Case study</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Day 3 — Connect</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-700">Queued</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Profile visit + Soft touch</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-200">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Day 6 — Bump</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 text-slate-600">Scheduled</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">"Did you see this?"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Success Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -right-4 top-12 md:-right-12 md:top-24 bg-white p-4 rounded-xl shadow-xl shadow-slate-200 border border-slate-100 z-30 flex items-center gap-4 max-w-[240px]"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Just now</p>
              <p className="text-sm font-bold text-slate-800">Demo Booked 🎉</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

// Simple Icons to avoid external dependencies
function MailIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  )
}

function CalendarIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  )
}

function CheckIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>
  )
}