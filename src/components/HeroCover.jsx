import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Calendar, Video, MessageSquare } from 'lucide-react';

const HeroCover = () => {
  return (
    <section
      aria-label="Hero section with animated medical 3D background"
      className="relative w-full h-[68vh] md:h-[85vh] overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/80" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-900/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-slate-50">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-sky-300 ring-1 ring-inset ring-sky-500/30 text-xs font-medium">
            <Shield className="h-3.5 w-3.5" /> HIPAA‑minded • Secure by design
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Your Health, Streamlined.
          </h1>
          <p className="mt-4 md:mt-6 text-slate-200/90 text-sm md:text-base leading-relaxed">
            Book appointments, message your doctor securely, and join video consults — all in one accessible, mobile‑first platform.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900 transition"
              aria-label="Book an appointment"
            >
              <Calendar className="h-5 w-5" /> Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-slate-900 transition"
              aria-label="Explore services"
            >
              <Video className="h-5 w-5" /> Telemedicine
            </a>
            <a
              href="#messages"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-slate-900 transition"
              aria-label="Open secure messages"
            >
              <MessageSquare className="h-5 w-5" /> Messages
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-200/80">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Accessible by design</span>
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400" /> Light & Dark modes</span>
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-400" /> Mobile‑first UI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
