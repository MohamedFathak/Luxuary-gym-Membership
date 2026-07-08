import { ClipboardList, UserPlus, CreditCard, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  {
    icon: ClipboardList,
    title: 'Choose Plan',
    desc: 'Pick the membership that matches your fitness goals and lifestyle.',
  },
  {
    icon: UserPlus,
    title: 'Register',
    desc: 'Create your member profile in under two minutes — no paperwork.',
  },
  {
    icon: CreditCard,
    title: 'Payment',
    desc: 'Secure checkout with flexible monthly or annual billing options.',
  },
  {
    icon: Rocket,
    title: 'Start Training',
    desc: 'Get your access pass and begin your transformation on day one.',
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Membership Process
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Join in four simple steps
          </h2>
          <p className="mt-5 text-balance text-lg text-ink-muted">
            From sign-up to first workout in minutes. A frictionless onboarding
            built for momentum.
          </p>
        </Reveal>

        <div className="relative mt-20">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-ink-line to-transparent lg:block" />
          {/* Progress overlay */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px bg-gradient-to-r from-accent/0 via-accent to-accent/0 lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120} className="relative">
                <div className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-white text-ink shadow-premium ring-1 ring-ink-line transition-all duration-500 group-hover:bg-ink group-hover:text-accent group-hover:shadow-glow group-hover:ring-accent/40">
                      <s.icon className="h-8 w-8" strokeWidth={2} />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-white shadow-glow">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
