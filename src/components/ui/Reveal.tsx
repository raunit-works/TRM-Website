import type { ReactNode } from 'react';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`animate-[fadeUp_0.7s_ease-out] ${className}`}>{children}</div>;
}
