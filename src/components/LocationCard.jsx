import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';

export default function LocationCard({ item, onSelect }) {
  const {
    name,
    city,
    sector,
    category,
    tokenBeingServed,
    nextToken,
    avgServiceMins,
  } = item;

  const pending = Math.max(0, nextToken - tokenBeingServed);
  const eta = pending * avgServiceMins;

  return (
    <button
      onClick={() => onSelect(item)}
      className="group w-full text-left rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:bg-slate-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white">{name}</h3>
          <p className="text-sm text-slate-400">{city} • {sector} • {category}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-slate-300" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-slate-950/70 p-3 text-center ring-1 ring-slate-800">
          <div className="text-[11px] uppercase tracking-wide text-slate-400">Being Served</div>
          <div className="mt-1 text-xl font-bold text-sky-400">{tokenBeingServed}</div>
        </div>
        <div className="rounded-lg bg-slate-950/70 p-3 text-center ring-1 ring-slate-800">
          <div className="text-[11px] uppercase tracking-wide text-slate-400">Next Token</div>
          <div className="mt-1 text-xl font-bold text-fuchsia-400">{nextToken}</div>
        </div>
        <div className="rounded-lg bg-slate-950/70 p-3 text-center ring-1 ring-slate-800">
          <div className="flex items-center justify-center gap-1 text-[11px] uppercase tracking-wide text-slate-400">
            <Clock className="h-3.5 w-3.5" /> ETA
          </div>
          <div className="mt-1 text-xl font-bold text-emerald-400">{eta}m</div>
        </div>
      </div>
    </button>
  );
}
