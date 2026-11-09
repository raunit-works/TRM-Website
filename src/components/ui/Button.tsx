import type { ReactNode } from 'react';

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  icon,
  disabled = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
}) {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-secondary',
    secondary: 'bg-white text-primary ring-1 ring-border hover:bg-sage-light',
    outline: 'border border-white/20 bg-transparent text-white hover:bg-white/10',
  };

  const content = (
    <>
      {icon ? <span className="inline-flex items-center">{icon}</span> : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        className={`${baseClass} ${variantClasses[variant]} ${className}`}
        onClick={disabled ? (event) => event.preventDefault() : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={`${baseClass} ${variantClasses[variant]} ${className}`} disabled={disabled}>
      {content}
    </button>
  );
}
