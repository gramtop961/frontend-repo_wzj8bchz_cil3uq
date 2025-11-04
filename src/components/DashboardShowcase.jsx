import React from 'react';
import { Calendar, MessageSquare, Pill, FileText } from 'lucide-react';

const Stat = ({ label, value, tone = 'sky' }) => (
  <div className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4`}>
    <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
    <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
  </div>
);

const MiniChart = () => {
  const values = [30, 45, 38, 60, 50, 72, 65];
  return (
    <div className="flex items-end gap-1 h-24">
      {values.map((v, i) => (
        <div key={i} className="flex-1 bg-gradient-to-t from-sky-500/20 to-sky-500/60 rounded" style={{ height: `${v}%` }} />
      ))}
    </div>
  );
};

const DashboardShowcase = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-slate-950" aria-label="Dashboard preview section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            A dashboard that adapts to you
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Modular widgets for appointments, labs, prescriptions, and messages — drag to arrange, tap to focus.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Calendar className="h-5 w-5 text-sky-500" />
                <h3 className="font-medium">Upcoming appointments</h3>
              </div>
              <button className="text-xs rounded-md px-3 py-1 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                Drag & drop
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Mon 9:00 AM • Jane D.", "Tue 1:30 PM • Sam R.", "Wed 11:00 AM • Televisit", "Fri 3:15 PM • Alex P."].map((t, i) => (
                <div key={i} className="rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 p-3 text-sm text-slate-700 dark:text-slate-300">
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <MiniChart />
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Weekly appointment volume</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MessageSquare className="h-5 w-5 text-emerald-500" />
                <h3 className="font-medium">New messages</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300" id="messages">
                <li className="rounded-md bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 p-2">Refill request — Taylor</li>
                <li className="rounded-md bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 p-2">Lab results question — Lee</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Pill className="h-5 w-5 text-violet-500" />
                <h3 className="font-medium">Prescriptions</h3>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                <Stat label="Active" value="18" />
                <Stat label="Refills due" value="4" />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <FileText className="h-5 w-5 text-rose-500" />
                <h3 className="font-medium">Latest labs</h3>
              </div>
              <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                • A1c improved to 6.8% • BP trends stable • HDL up 8%
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-slate-600 dark:text-slate-400">
          Haptic micro‑interactions, voice input, and multi‑language support are planned to further enhance accessibility.
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
