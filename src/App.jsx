import React from 'react';
import HeroCover from './components/HeroCover';
import ServicesGrid from './components/ServicesGrid';
import AppointmentPanel from './components/AppointmentPanel';
import DashboardShowcase from './components/DashboardShowcase';
import { HeartPulse } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-300">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="text-slate-900 dark:text-white">CareFlow</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
            <a className="hover:text-sky-600" href="#services">Services</a>
            <a className="hover:text-sky-600" href="#appointment">Appointments</a>
            <a className="hover:text-sky-600" href="#">Blog</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroCover />
        <ServicesGrid />
        <AppointmentPanel />
        <DashboardShowcase />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-medium text-slate-900 dark:text-white">CareFlow</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">A modern, secure platform for patient‑centered care.</p>
          </div>
          <div>
            <p className="font-medium text-slate-900 dark:text-white">Contact</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">123 Wellness Ave, Suite 100
              <br /> support@careflow.health
            </p>
          </div>
          <div>
            <p className="font-medium text-slate-900 dark:text-white">Accessibility</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Designed for clarity, readable type, and high contrast in dark or light modes.</p>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} CareFlow. For demonstration purposes only.</div>
      </footer>
    </div>
  );
}

export default App;
