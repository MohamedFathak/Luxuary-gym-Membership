import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-20 lg:pt-28 lg:pb-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md animate-fade-in"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Premium Fitness Membership
          </div>

          <h1
            className="text-balance font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ opacity: 0 }}
          >
            Choose Your
            <br className="hidden sm:block" />{' '}
            <span className="orange-text-gradient">Membership</span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted animate-fade-up sm:text-xl"
            style={{ animationDelay: '0.15s', opacity: 0 }}
          >
            Flexible fitness plans designed around your goals, your schedule, and
            your ambition. No lock-in. Just uncompromising training, premium
            facilities, and a community that pushes you forward.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <Button href="#plans" size="lg" className="glow-btn">
              Join Now
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="#compare" variant="outline" size="lg">
              Compare Plans
            </Button>
          </div>

          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-ink-muted animate-fade-in"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            <Stat value="12K+" label="Active Members" />
            <Divider />
            <Stat value="50+" label="Expert Trainers" />
            <Divider />
            <Stat value="24/7" label="Gym Access" />
            <Divider />
            <Stat value="4.9" label="Member Rating" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-2xl font-bold text-ink">{value}</span>
      <span className="mt-0.5 text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="hidden h-8 w-px bg-ink-line sm:block" />;
}
