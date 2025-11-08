import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10 md:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-sky-400" />
              Digital Tokens • Real-time Queues
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Queueless
              <span className="block bg-gradient-to-tr from-sky-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                Skip the wait. Own your time.
              </span>
            </h1>
            <p className="text-slate-300/90 md:text-lg">
              Join queues remotely across banks, government offices, stations, and restaurants in Pakistan. Get a token, track live progress, and arrive right on time.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Explore nearby locations
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-900"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-xl overflow-hidden ring-1 ring-slate-800/70 bg-slate-900">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
