import { Check, Minus } from 'lucide-react';
import { Reveal } from './Reveal';

type Cell = boolean | string;

const features: { label: string; basic: Cell; standard: Cell; premium: Cell; elite: Cell }[] = [
  { label: '24/7 gym access', basic: '6am–4pm', standard: true, premium: true, elite: true },
  { label: 'Group classes', basic: '2 / mo', standard: '8 / mo', premium: 'Unlimited', elite: 'Unlimited' },
  { label: 'Personal trainer', basic: false, standard: false, premium: '2 / mo', elite: 'Unlimited' },
  { label: 'Nutrition guidance', basic: false, standard: 'Basics', premium: 'Full plan', elite: 'Custom + supps' },
  { label: 'Locker facility', basic: 'Standard', standard: 'Standard', premium: 'Premium', elite: 'Private' },
  { label: 'Spa & recovery suite', basic: false, standard: false, premium: true, elite: true },
  { label: 'Sauna access', basic: false, standard: false, premium: false, elite: true },
  { label: 'Guest passes', basic: false, standard: false, premium: false, elite: '2 / mo' },
  { label: 'Priority booking', basic: false, standard: false, premium: true, elite: true },
  { label: 'Free fitness assessment', basic: true, standard: true, premium: true, elite: true },
];

type ColumnKey = 'basic' | 'standard' | 'premium' | 'elite';

type Column = {
  key: ColumnKey;
  name: string;
  price: string;
  hot?: boolean;
};

const columns: Column[] = [
  { key: 'basic', name: 'Basic', price: '$29' },
  { key: 'standard', name: 'Standard', price: '$59' },
  { key: 'premium', name: 'Premium', price: '$99', hot: true },
  { key: 'elite', name: 'Elite', price: '$179' },
];

export function Compare() {
  return (
    <section id="compare" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Compare Plans
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Side-by-side comparison
          </h2>
          <p className="mt-5 text-balance text-lg text-ink-muted">
            See exactly what each membership unlocks. No surprises, just clarity.
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl shadow-premium ring-1 ring-ink-line">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="sticky left-0 z-10 bg-neutral-50 px-6 py-6 font-display text-sm font-bold uppercase tracking-wider text-ink-muted">
                      Features
                    </th>
                    {columns.map((c) => (
                      <th
                        key={c.key}
                        className={`px-6 py-6 text-center align-bottom ${
                          c.hot ? 'bg-ink' : 'bg-neutral-50'
                        }`}
                      >
                        <div
                          className={`font-display text-lg font-bold ${
                            c.hot ? 'text-white' : 'text-ink'
                          }`}
                        >
                          {c.name}
                        </div>
                        <div
                          className={`mt-1 text-sm font-medium ${
                            c.hot ? 'text-accent-200' : 'text-ink-muted'
                          }`}
                        >
                          {c.price}/mo
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`transition-colors hover:bg-accent/5 ${
                        i % 2 === 1 ? 'bg-neutral-50/60' : 'bg-white'
                      }`}
                    >
                      <td className="sticky left-0 z-10 px-6 py-5 text-sm font-medium text-ink-soft">
                        {row.label}
                      </td>
                      {columns.map((c) => (
                        <td
                          key={c.key}
                          className={`px-6 py-5 text-center ${
                            c.hot ? 'bg-ink/[0.97]' : ''
                          }`}
                        >
                          <Cell value={row[c.key]} hot={c.hot} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="sticky left-0 z-10 bg-white px-6 py-7" />
                    {columns.map((c) => (
                      <td
                        key={c.key}
                        className={`px-6 py-7 text-center ${
                          c.hot ? 'bg-ink/[0.97]' : 'bg-white'
                        }`}
                      >
                        <a
                          href="#cta"
                          className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                            c.hot
                              ? 'bg-accent text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow-lg'
                              : 'bg-ink text-white hover:bg-accent hover:shadow-glow'
                          }`}
                        >
                          Choose
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Cell({ value, hot }: { value: Cell; hot?: boolean }) {
  if (value === true) {
    return (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
          hot ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
        }`}
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return <Minus className={`mx-auto h-4 w-4 ${hot ? 'text-white/30' : 'text-ink-line'}`} />;
  }
  return (
    <span
      className={`text-sm font-medium ${
        hot ? 'text-white/90' : 'text-ink-soft'
      }`}
    >
      {value}
    </span>
  );
}
