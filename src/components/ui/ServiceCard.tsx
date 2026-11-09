import type { ServiceItem } from '@/types';
import {
  ChartNoAxesCombined,
  Clapperboard,
  MessagesSquare,
  NotebookPen,
  UserRoundCog,
  type LucideIcon,
} from 'lucide-react';

const serviceIcons: Record<ServiceItem['icon'], LucideIcon> = {
  profile: UserRoundCog,
  reels: Clapperboard,
  strategy: NotebookPen,
  consultation: MessagesSquare,
};

export function ServiceCard({ item }: { item: ServiceItem }) {
  const Icon = serviceIcons[item.icon];

  return (
    <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgba(11,49,66,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sage-light text-secondary ring-1 ring-inset ring-sage/60">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-primary">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-text-muted md:text-[15px]">{item.description}</p>
      {item.href ? (
        <a href={item.href} className="mt-6 inline-flex items-center text-sm font-semibold text-secondary transition-colors hover:text-secondary-hover">
          Learn more
          <span aria-hidden="true" className="ml-2">→</span>
        </a>
      ) : null}
    </div>
  );
}
