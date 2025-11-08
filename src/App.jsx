import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import LocationCard from './components/LocationCard';
import ReservationModal from './components/ReservationModal';

// Mock dataset for MVP UI demo (backend endpoints will replace these later)
const DATA = [
  {
    id: 'hbl-gulberg',
    name: 'HBL - Gulberg III Branch',
    city: 'Lahore',
    sector: 'Bank',
    category: 'Banks',
    tokenBeingServed: 47,
    nextToken: 52,
    avgServiceMins: 4,
  },
  {
    id: 'nadra-township',
    name: 'NADRA Mega Center - Township',
    city: 'Lahore',
    sector: 'Government',
    category: 'Government',
    tokenBeingServed: 120,
    nextToken: 128,
    avgServiceMins: 6,
  },
  {
    id: 'karachi-cantt-rail',
    name: 'Pakistan Railways - Karachi Cantt Ticketing',
    city: 'Karachi',
    sector: 'Transport',
    category: 'Transport',
    tokenBeingServed: 18,
    nextToken: 23,
    avgServiceMins: 3,
  },
  {
    id: 'lahore-junction-rail',
    name: 'Pakistan Railways - Lahore Junction Ticketing',
    city: 'Lahore',
    sector: 'Transport',
    category: 'Transport',
    tokenBeingServed: 201,
    nextToken: 207,
    avgServiceMins: 2,
  },
  {
    id: 'salt-bae-express',
    name: 'Salt n Pepper - Liberty',
    city: 'Lahore',
    sector: 'Restaurant',
    category: 'Food',
    tokenBeingServed: 32,
    nextToken: 39,
    avgServiceMins: 5,
  },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ typeOpen: false, types: [] });
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const results = useMemo(() => {
    let list = DATA;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (i) => i.name.toLowerCase().includes(q) || i.city.toLowerCase().includes(q) || i.sector.toLowerCase().includes(q)
      );
    }
    if (filters.types.length) {
      list = list.filter((i) => filters.types.includes(i.category));
    }
    return list;
  }, [query, filters]);

  const handleSearch = () => {
    // For MVP UI only; real implementation will call backend
  };

  const onSelect = (item) => {
    setSelected(item);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero onExplore={() => {
        const el = document.getElementById('discover');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }} />

      <main id="discover" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-3xl">
          <SearchBar
            query={query}
            setQuery={setQuery}
            filters={filters}
            setFilters={setFilters}
            onSearch={handleSearch}
          />
        </div>

        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <LocationCard key={item.id} item={item} onSelect={onSelect} />
          ))}
          {results.length === 0 && (
            <div className="col-span-full rounded-xl border border-slate-800 bg-slate-900/60 p-8 text-center text-slate-300">
              No locations match your search. Try a different city or filter.
            </div>
          )}
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-slate-400">
        Built for Pakistan • English / Urdu coming soon • Privacy-first by design
      </footer>

      <ReservationModal open={modalOpen} onClose={() => setModalOpen(false)} selected={selected} />
    </div>
  );
}
