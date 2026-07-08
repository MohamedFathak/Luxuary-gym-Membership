type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'dark';
  size?: 'md' | 'lg';
  className?: string;
};

export function Button({
  children,
  href = '#',
  variant = 'primary',
  size = 'md',
  className = '',
}: Props) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2';

  const sizes = {
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-10 py-5 text-base',
  };

  const variants = {
    primary:
      'bg-accent text-white shadow-premium hover:shadow-glow hover:-translate-y-0.5 hover:bg-accent-400 active:translate-y-0',
    outline:
      'bg-transparent text-ink ring-1 ring-ink/15 hover:ring-accent hover:text-accent hover:-translate-y-0.5',
    dark:
      'bg-ink text-white shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0',
  };

  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-[.glow-btn]:block" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}
