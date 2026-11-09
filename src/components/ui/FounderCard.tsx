import Image from 'next/image';
import type { FounderItem } from '@/types';

export function FounderCard({ founder }: { founder: FounderItem }) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_12px_32px_rgba(11,49,66,0.04)]">
      <div className="relative h-[330px] w-full overflow-hidden bg-sage-light">
        <Image
          src={founder.photo}
          alt={founder.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Founding team</p>
        <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-primary">{founder.name}</h3>
        <p className="mt-2 text-sm font-medium text-secondary">{founder.role}</p>
        <p className="mt-4 text-base leading-7 text-text-muted">{founder.introduction}</p>
        <ul className="mt-5 space-y-2 text-sm text-text">
          {founder.responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
