import { ArrowRight, Check, Crown } from 'lucide-react';
import { Reveal } from './Reveal';

type Plan = {
  name: string;
  price: number;
  tagline: string;
  access: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Basic',
    price: 29,
    tagline: 'Start your fitness journey',
    access: 'Off-peak gym access',
    features: [
      'Gym access (6am–4pm)',
      '2 group classes / month',
      'Locker facility',
      'Free fitness assessment',
      'Mobile app workouts',
    ],
  },
  {
    name: 'Standard',
    price: 59,
    tagline: 'Train with flexibility',
    access: 'Full-day gym access',
    features: [
      '24/7 gym access',
      '8 group classes / month',
      'Locker facility',
      'Free fitness assessment',
      'Nutrition guidance basics',
      'Mobile app workouts',
    ],
  },
  {
    name: 'Premium',
    price: 99,
    tagline: 'The complete experience',
    access: 'All-access + trainer',
    features: [
      '24/7 unlimited gym access',
      'Unlimited group classes',
      '2 PT sessions / month',
      'Personalized nutrition plan',
      'Premium locker & spa',
      'Priority booking',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: 179,
    tagline: 'Unlimited, elevated, private',
    access: 'All-access + unlimited PT',
    features: [
      '24/7 unlimited gym access',
      'Unlimited group classes',
      'Unlimited personal training',
      'Custom nutrition + supplements',
      'Private locker & spa access',
      'Recovery suite & sauna',
      'Guest passes (2 / month)',
    ],
  },
];

export function Plans() {
  return (
    <section id="plans" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Membership Plans</SectionLabel>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Plans built for every level
          </h2>
          <p className="mt-5 text-balance text-lg text-ink-muted">
            Transparent pricing. Premium value. Cancel or upgrade anytime — your
            membership adapts as you progress.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const hot = plan.highlighted;

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 ease-out lg:hover:-translate-y-2 ${
        hot
          ? 'bg-ink text-white shadow-premium-lg ring-1 ring-accent/40 lg:scale-[1.04]'
          : 'bg-white text-ink shadow-premium ring-1 ring-ink-line hover:shadow-premium-lg hover:ring-accent/30'
      }`}
    >
      {hot && (
        <>
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/30 blur-3xl transition-opacity duration-500 group-hover:bg-accent/50" />
          <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow">
            <Crown className="h-3.5 w-3.5" />
            Popular
          </div>
        </>
      )}

      <div className="relative">
        <h3
          className={`font-display text-xl font-bold tracking-tight ${
            hot ? 'text-white' : 'text-ink'
          }`}
        >
          {plan.name}
        </h3>
        <p
          className={`mt-1 text-sm ${
            hot ? 'text-white/60' : 'text-ink-muted'
          }`}
        >
          {plan.tagline}
        </p>

        <div className="mt-6 flex items-end gap-1">
          <span
            className={`font-display text-5xl font-extrabold tracking-tight ${
              hot ? 'text-white' : 'text-ink'
            }`}
          >
            ${plan.price}
          </span>
          <span
            className={`mb-1.5 text-sm font-medium ${
              hot ? 'text-white/60' : 'text-ink-muted'
            }`}
          >
            /month
          </span>
        </div>

        <div
          className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
            hot
              ? 'bg-white/10 text-accent-200'
              : 'bg-accent/10 text-accent-600'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              hot ? 'bg-accent' : 'bg-accent'
            }`}
          />
          {plan.access}
        </div>

        <ul className="mt-7 space-y-3.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  hot ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                }`}
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className={hot ? 'text-white/85' : 'text-ink-soft'}>
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#cta"
        className={`group/btn relative mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all duration-300 ${
          hot
            ? 'bg-accent text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5'
            : 'bg-ink text-white hover:bg-accent hover:shadow-glow hover:-translate-y-0.5'
        }`}
      >
        Join {plan.name}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </a>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}
