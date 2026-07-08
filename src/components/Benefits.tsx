import {
  Dumbbell,
  Salad,
  Users,
  Lock,
  ClipboardCheck,
  UserRound,
} from 'lucide-react';
import { Reveal } from './Reveal';

const benefits = [
  {
    icon: Dumbbell,
    title: 'Unlimited Gym Access',
    desc: 'Train on your schedule with 24/7 entry to premium equipment and facilities.',
  },
  {
    icon: UserRound,
    title: 'Personal Trainer Support',
    desc: 'One-on-one coaching from certified trainers tailored to your goals.',
  },
  {
    icon: Salad,
    title: 'Nutrition Guidance',
    desc: 'Customized meal plans and ongoing dietary support from experts.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    desc: 'From HIIT to yoga, join energizing sessions led by top instructors.',
  },
  {
    icon: Lock,
    title: 'Locker Facility',
    desc: 'Secure, premium lockers with fresh towels and spa-grade amenities.',
  },
  {
    icon: ClipboardCheck,
    title: 'Free Fitness Assessment',
    desc: 'A full-body baseline evaluation to track progress from day one.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Membership Benefits
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mt-5 text-balance text-lg text-ink-muted">
            Premium amenities and expert support included across every
            membership — because results come from the details.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-premium ring-1 ring-ink-line transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-premium-lg hover:ring-accent/30">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-glow">
                  <b.icon className="h-7 w-7" strokeWidth={2} />
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight text-ink">
                  {b.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {b.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
