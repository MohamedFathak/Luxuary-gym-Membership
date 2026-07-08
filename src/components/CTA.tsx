import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-ink px-8 py-16 text-center shadow-premium-lg sm:px-16 lg:py-24">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-accent/40 blur-[120px] animate-pulse-glow" />
              <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-accent/25 blur-[130px]" />
            </div>

            {/* Subtle grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '56px 56px',
                maskImage:
                  'radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)',
              }}
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-200 backdrop-blur-md">
                Limited Offer · 7-Day Free Trial
              </span>

              <h2 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Start Your Fitness
                <br />
                <span className="orange-text-gradient">Journey Today</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70">
                Join thousands of members transforming their lives with
                uncompromising training and premium facilities. Your first 7
                days are on us — no commitment, just results.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#plans"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-5 font-display text-base font-semibold text-white shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg hover:bg-accent-400 animate-pulse-glow"
                >
                  Get Started Now
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-5 font-display text-base font-semibold text-white transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  Have Questions?
                </a>
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/40">
                No credit card required · Cancel anytime
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
