import React from 'react';
import { Stethoscope, Video, MessageSquare, Pill, FileText, Shield, Calendar, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Primary & Specialty Care',
    desc: 'Comprehensive consultations with a focus on prevention and whole‑person care.'
  },
  {
    icon: Video,
    title: 'Telemedicine',
    desc: 'One‑click video consults with smart reminders and secure session links.'
  },
  {
    icon: MessageSquare,
    title: 'Secure Messaging',
    desc: 'HIPAA‑minded, encrypted chat for follow‑ups, files, and voice notes.'
  },
  {
    icon: Pill,
    title: 'e‑Prescriptions',
    desc: 'Fast prescription uploads, refills, and adherence tracking.'
  },
  {
    icon: FileText,
    title: 'Records & Labs',
    desc: 'Centralized access to labs, reports, and visit summaries.'
  },
  {
    icon: HeartPulse,
    title: 'Health Tracking',
    desc: 'Interactive charts for vitals, activity, and progress over time.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Guided booking flow with calendar sync and wait‑list options.'
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    desc: 'Best practices for healthcare data privacy and access control.'
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Services designed for real life
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Clear, accessible care with tools that reduce friction for patients and clinicians alike.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5 md:p-6 hover:shadow-lg transition focus-within:ring-2 focus-within:ring-sky-400"
              tabIndex={0}
              role="article"
              aria-label={`${s.title} service card`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-300 p-2.5">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
