import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  action,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
}) {
  const alignClasses = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl';

  return (
    <div className={alignClasses}>
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-primary md:text-4xl">{heading}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-text-muted md:text-lg">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
