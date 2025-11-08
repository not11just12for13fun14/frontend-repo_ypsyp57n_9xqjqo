import React, { useMemo, useState } from 'react';
import { X, Clock, CheckCircle2 } from 'lucide-react';

export default function ReservationModal({ open, onClose, selected }) {
  const [people, setPeople] = useState(1);
  const [confirm, setConfirm] = useState(false);

  const nextToken = selected?.nextToken ?? 0;
  const eta = useMemo(() => {
    if (!selected) return 0;
    const pending = Math.max(0, nextToken - selected.tokenBeingServed);
    return pending * selected.avgServiceMins;
  }, [selected, nextToken]);

  if (!open || !selected) return null;

  const handleReserve = () => {
    setConfirm(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 p-4">
          <h3 className="text-lg font-semibold text-white">Reserve Token</h3>
          <button onClick={onClose} className="rounded-md p-1 text-slate-300 hover:bg-slate-800">
            <X className="h-5 w-5" />
          </button>
        </div>

        {!confirm ? (
          <div className="p-4 space-y-4">
            <div>
              <div className="text-sm text-slate-400">Location</div>
              <div className="text-base font-medium text-white">{selected.name}</div>
              <div className="text-xs text-slate-400">{selected.city} • {selected.sector} • {selected.category}</div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-slate-950/70 p-3 text-center ring-1 ring-slate-800">
                <div className="text-[11px] uppercase tracking-wide text-slate-400">Being Served</div>
                <div className="mt-1 text-xl font-bold text-sky-400">{selected.tokenBeingServed}</div>
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

            {selected.category === 'Food' && (
              <div className="space-y-1">
                <label className="text-sm text-slate-300">Party size</label>
                <input
                  type="number"
                  min={1}
                  value={people}
                  onChange={(e) => setPeople(parseInt(e.target.value || '1'))}
                  className="w-28 rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 outline-none"
                />
              </div>
            )}

            <button
              onClick={handleReserve}
              className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-600"
            >
              Get digital token
            </button>
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle2 className="h-7 w-7 text-emerald-400" />
            </div>
            <h4 className="text-xl font-semibold text-white">You're in the queue</h4>
            <p className="mt-1 text-slate-300">
              Your token number is <span className="font-semibold text-fuchsia-300">{nextToken}</span> for <span className="font-medium">{selected.name}</span>.
            </p>
            <p className="text-slate-400">Estimated time to be served: ~{eta} minutes.</p>
            <button
              onClick={onClose}
              className="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
