import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-ink-muted">
            <a href="#plans" className="transition-colors hover:text-accent">Plans</a>
            <a href="#benefits" className="transition-colors hover:text-accent">Benefits</a>
            <a href="#compare" className="transition-colors hover:text-accent">Compare</a>
            <a href="#process" className="transition-colors hover:text-accent">Process</a>
            <a href="#faq" className="transition-colors hover:text-accent">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink/5 text-ink transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-glow"
                aria-label="Social link"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-line pt-8 text-sm text-ink-muted md:flex-row">
          <p>© 2026. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">Privacy</a>
            <a href="#" className="transition-colors hover:text-accent">Terms</a>
            <a href="#" className="transition-colors hover:text-accent">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
