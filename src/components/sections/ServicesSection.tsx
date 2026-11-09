"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  Check,
  Clapperboard,
  Layers3,
  MessagesSquare,
  Plus,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";

import { ServiceVisual } from "@/components/services/ServiceVisual";
import { serviceTabs, type ServiceTabId } from "@/data/serviceTabs";

const SERVICE_ICONS: Record<ServiceTabId, LucideIcon> = {
  profile: UserRoundCheck,
  reels: Clapperboard,
  strategy: Layers3,
  consultation: MessagesSquare,
};

type ServicesSectionProps = {
  /** Optional approved local asset, e.g. /images/services/doctor.jpg */
  doctorImageSrc?: string;
};

export function ServicesSection({ doctorImageSrc }: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = serviceTabs[activeIndex];
  const ActiveIcon = SERVICE_ICONS[active.id];

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % serviceTabs.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + serviceTabs.length) % serviceTabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = serviceTabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#F7FBFA] py-7 text-[#0B3142] sm:py-10 lg:py-12"
    >
      {/* Restrained medical motifs; no external image requests. */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-28 h-[360px] w-[360px] rounded-full bg-[#DDEDE8]/70 blur-[3px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-36 h-[360px] w-[360px] rounded-full bg-[#E0F4F2]" />
      <Activity aria-hidden="true" className="pointer-events-none absolute right-4 top-10 hidden h-20 w-20 text-[#8AD0CA]/25 sm:block lg:right-16" strokeWidth={1} />

      <div
  className="
    relative z-10
    mx-auto w-full max-w-[1600px]
    px-5 sm:px-8 lg:px-10
  "
>
        {/* SECTION HEADING */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E0F3F1] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[#176978] sm:text-sm">
            <Plus aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
            Our Services
          </span>

          <h2 id="services-heading" className="mt-5 text-[clamp(1.9rem,3.6vw,3.15rem)] font-extrabold leading-[1.14] tracking-[-0.04em]">
            End-to-End Digital Growth <span className="text-[#176978]">for Doctors</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-[#586B70] sm:text-[17px] sm:leading-8">
            From a stronger online presence to useful medical content and practical guidance, we help doctors communicate clearly and manage their digital profiles more effectively.
          </p>
        </div>

        {/* INTERACTIVE SERVICE TABS */}
        <div
          role="tablist"
          aria-label="Talkreach Media services"
          className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-6 lg:grid-cols-4 lg:gap-5"
        >
          {serviceTabs.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id];
            const selected = index === activeIndex;

            return (
              <button
                key={service.id}
                ref={(node) => { tabRefs.current[index] = node; }}
                type="button"
                role="tab"
                id={`service-tab-${service.id}`}
                aria-controls="services-detail-panel"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                
className={[
  "group relative flex min-h-[54px] items-center gap-2.5",
  "rounded-[14px] border px-3 py-2 text-left",
  "transition-colors duration-200",
  "focus-visible:outline-none focus-visible:ring-2",
  "focus-visible:ring-[#176978] focus-visible:ring-offset-4",
  "sm:min-h-[59px] sm:gap-3 sm:px-4",
  selected
    ? "border-[#176978] bg-[#176978] text-white shadow-[0_8px_20px_rgba(23,105,120,.15)]"
    : "border-[#D7E6E6] bg-white text-[#0B3142] hover:border-[#8FC7C2] hover:bg-[#F2FAF9]",
].join(" ")}

              >
                <Icon aria-hidden="true" className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 ${
  selected ? "text-white" : "text-[#176978]"
}`} strokeWidth={1.8} />
                <span className="text-[12px] font-bold leading-tight sm:text-[14px] lg:text-[15px]">
                  {service.title}
                </span>
                {selected && (
                  <span aria-hidden="true" className="absolute -bottom-2 left-1/2 z-0 h-4 w-4 -translate-x-1/2 rotate-45 bg-[#176978]" />
                )}
              </button>
            );
          })}
        </div>

        {/* DETAIL PANEL — changes with the selected tab */}
        <div
          key={active.id}
          id="services-detail-panel"
          role="tabpanel"
          aria-labelledby={`service-tab-${active.id}`}
          tabIndex={0}
          className="relative mt-4 grid gap-8 overflow-hidden rounded-[24px] border border-[#D8E9E7] bg-white p-5 shadow-[0_14px_40px_rgba(12,62,70,.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176978] sm:p-8 lg:mt-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:items-center lg:gap-8 lg:p-10"
        >
          <div className="min-w-0">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#E2F5F2] text-[#176978] sm:h-16 sm:w-16">
                <ActiveIcon aria-hidden="true" className="h-8 w-8" strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-[23px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0B3142] sm:text-[30px]">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-[600px] text-[15px] leading-7 text-[#51656D] sm:text-[16px]">
                  {active.summary}
                </p>
              </div>
            </div>

            <ul className="mt-7 space-y-4 sm:mt-8">
              {active.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-[14px] leading-[1.55] text-[#243E47] sm:text-[16px]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#159F95] text-white">
                    <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={active.ctaHref} className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#176978] px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#105261] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176978] focus-visible:ring-offset-2 sm:text-[15px]">
                {active.ctaLabel}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link href="#process" className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border border-[#C9DCDE] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0B3142] transition-colors hover:bg-[#EEF7F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176978] focus-visible:ring-offset-2 sm:text-[15px]">
                <CalendarDays aria-hidden="true" className="h-4 w-4 text-[#176978]" />
                How We Work
              </Link>
            </div>
          </div>

          {/* Each service gets a different data-appropriate visual. */}
          <ServiceVisual serviceId={active.id} doctorImageSrc={doctorImageSrc} />
        </div>
      </div>
    </section>
  );
}
