import React from 'react';
import { MapPin, Filter } from 'lucide-react';

export default function SearchBar({ query, setQuery, filters, setFilters, onSearch }) {
  return (
    <div className="w-full rounded-xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2">
          <MapPin className="h-5 w-5 text-sky-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city, area or institution (e.g., Lahore, HBL, NADRA)"
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 outline-none"
          />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => setFilters((f) => ({ ...f, typeOpen: !f.typeOpen }))}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>
          <button
            onClick={onSearch}
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
          >
            Search
          </button>
        </div>
      </div>
      {filters.typeOpen && (
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {['Banks', 'Government', 'Transport', 'Food'].map((label) => (
            <label key={label} className="flex items-center gap-2 rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={filters.types.includes(label)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters((f) => ({ ...f, types: [...f.types, label] }));
                  } else {
                    setFilters((f) => ({ ...f, types: f.types.filter((t) => t !== label) }));
                  }
                }}
              />
              {label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
