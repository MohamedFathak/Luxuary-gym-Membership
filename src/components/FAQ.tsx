import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'Can I cancel or freeze my membership anytime?',
    a: 'Yes. All memberships are flexible — cancel or freeze your plan with one tap in the member app, no questions asked. No long-term lock-in, no hidden fees.',
  },
  {
    q: 'Is there a free trial before I commit?',
    a: 'Every new member gets a complimentary 7-day pass to experience the facilities, classes, and trainer support before choosing a plan. No credit card required to start.',
  },
  {
    q: 'Can I upgrade or downgrade my plan later?',
    a: 'Absolutely. You can switch plans at any time from your account. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
  },
  {
    q: 'Are personal trainer sessions included?',
    a: 'Premium members receive 2 personal training sessions per month, and Elite members get unlimited PT. Standard and Basic members can add PT sessions as a bolt-on.',
  },
  {
    q: 'Do you offer corporate or family memberships?',
    a: 'Yes. We offer tailored corporate wellness packages and family plans with multi-member discounts. Contact our membership team for a custom quote.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, Apple Pay, Google Pay, and bank transfers. Billing is monthly or annual — annual plans include two months free.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            FAQ
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-5 text-balance text-lg text-ink-muted">
            Everything you need to know about joining.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl ring-1 transition-all duration-300 ${
                    isOpen
                      ? 'bg-neutral-50 ring-accent/30 shadow-premium'
                      : 'bg-white ring-ink-line hover:ring-accent/20'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-ink sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 bg-accent text-white shadow-glow'
                          : 'bg-ink/5 text-ink'
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-muted">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
