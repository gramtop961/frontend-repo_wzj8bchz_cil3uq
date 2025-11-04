import React, { useState } from 'react';
import { Calendar, Clock, Stethoscope, Shield } from 'lucide-react';

const AppointmentPanel = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    visitType: 'In‑person',
    date: '',
    time: '',
    consent: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert('Please accept the privacy notice to continue.');
      return;
    }
    // In a full implementation, this would call a backend endpoint.
    alert(`Request received for ${form.name}.\nWe will confirm your ${form.visitType.toLowerCase()} visit on ${form.date} at ${form.time}.`);
  };

  return (
    <section id="appointment" className="relative py-16 md:py-24 bg-slate-50 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Book an appointment
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A guided, accessible process with reminders and calendar sync.
          </p>

          <form onSubmit={onSubmit} className="mt-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-slate-700 dark:text-slate-300">Full name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-700 dark:text-slate-300">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="(555) 555‑1234"
                  aria-label="Phone number"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm text-slate-700 dark:text-slate-300">Email (optional)</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="jane@example.com"
                  aria-label="Email address"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-700 dark:text-slate-300">Visit type</span>
                <select
                  name="visitType"
                  value={form.visitType}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label="Visit type"
                >
                  <option>In‑person</option>
                  <option>Telemedicine</option>
                  <option>Follow‑up</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm text-slate-700 dark:text-slate-300">Preferred date</span>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label="Preferred date"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-700 dark:text-slate-300">Time</span>
                <input
                  type="time"
                  name="time"
                  required
                  value={form.time}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label="Preferred time"
                />
              </label>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={onChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-sky-600 focus:ring-sky-500"
                aria-describedby="consent-desc"
              />
              <label htmlFor="consent" className="text-sm text-slate-600 dark:text-slate-300">
                I agree to the privacy notice and consent to secure processing of my health information for scheduling purposes.
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-white hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Submit appointment request"
            >
              <Calendar className="h-5 w-5" /> Submit request
            </button>

            <p id="consent-desc" className="sr-only">
              Your data is used only for booking and will not be shared without permission.
            </p>
          </form>
        </div>

        <div className="lg:pl-6">
          <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-violet-500/10 border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-300">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Faster care</p>
                <h3 className="text-slate-900 dark:text-white font-medium">Guided scheduling flow</h3>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-sky-500" /> Calendar sync with reminders</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-sky-500" /> Smart slots to reduce wait time</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-sky-500" /> Secure, consent‑first design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPanel;
