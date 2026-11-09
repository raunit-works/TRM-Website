"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Clapperboard,
  Heart,
  Lightbulb,
  Play,
  type LucideIcon,
} from "lucide-react";
import { ReelGalleryModal } from "@/components/portfolio/ReelGalleryModal";
import {
  reelGallery,
  type GalleryReel,
  type ReelFilter,
} from "@/data/reelGallery";

const FILTERS: ReadonlyArray<{ id: ReelFilter; label: string; Icon: LucideIcon }> = [
  { id: "all", label: "All Reels", Icon: Clapperboard },
  { id: "patient-education", label: "Patient Education", Icon: Heart },
  { id: "treatments", label: "Treatments", Icon: ChartNoAxesColumnIncreasing },
  { id: "health-tips", label: "Health Tips", Icon: Lightbulb },
];

/** 3 visible cards on desktop, 2 on tablet, 1 on mobile. */
function useReelsPerPage() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const tablet = window.matchMedia("(min-width: 640px)");
    const update = () => setPerPage(desktop.matches ? 3 : tablet.matches ? 2 : 1);
    update();
    desktop.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return perPage;
}

function formatViews(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function ReelTile({ reel, onOpen }: { reel: GalleryReel; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${reel.illustrative ? "View design preview" : "Play reel"}: ${reel.title}`}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-[#E8F1EE] text-left shadow-[0_10px_26px_rgba(11,49,66,0.09)] outline-none transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-[#648349] focus-visible:ring-offset-4 sm:aspect-[4/5] lg:aspect-[1.2/1]"
    >
      <Image
        src={reel.posterSrc}
        alt=""
        fill
        sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 45vw, 30vw"
        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.035] motion-reduce:transform-none"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#081D23]/95 via-[#081D23]/10 to-transparent" />

      {reel.illustrative ? (
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-[#0B3142] shadow-sm">
          Design preview
        </span>
      ) : (
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-[#0B3142] shadow-sm">
          Doctor reel
        </span>
      )}

      {/* Demo thumbnail crops already contain a play glyph. Real assets get a live play overlay. */}
      {!reel.illustrative && (
        <span aria-hidden="true" className="absolute left-1/2 top-1/2 grid size-[66px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-[#082E39]/70 text-white shadow-xl backdrop-blur-sm transition-transform group-hover:-translate-y-1/2 group-hover:scale-110">
          <Play className="ml-1 size-7 fill-current" />
        </span>
      )}

      <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
        <span className="text-sm font-bold leading-snug sm:text-base">{reel.title}</span>
        {typeof reel.verifiedViews === "number" && !reel.illustrative && (
          <span className="flex shrink-0 items-center gap-1 text-xs font-bold">
            <Play aria-hidden="true" className="size-3 fill-current" />
            {formatViews(reel.verifiedViews)} views
          </span>
        )}
      </span>
    </button>
  );
}

export function DoctorReelsSection() {
  const [filter, setFilter] = useState<ReelFilter>("all");
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [selectedReel, setSelectedReel] = useState<GalleryReel | null>(null);
  const perPage = useReelsPerPage();

  const matchingReels = useMemo(
    () => reelGallery.filter((reel) => filter === "all" || reel.category === filter),
    [filter],
  );
  const totalPages = Math.max(1, Math.ceil(matchingReels.length / perPage));
  const currentPage = Math.min(page, totalPages - 1);
  const visibleReels = showAll
    ? matchingReels
    : matchingReels.slice(currentPage * perPage, (currentPage + 1) * perPage);

  function chooseFilter(nextFilter: ReelFilter) {
    setFilter(nextFilter);
    setPage(0);
  }

  return (
    <section
      id="reels"
      aria-labelledby="reels-heading"
      className="relative isolate overflow-hidden bg-[#FCFDFB] pb-20 pt-14 text-[#0B3142] sm:pt-20 lg:pb-24"
    >
      {/* Decorative pale-sage waves, matching the supplied reference. */}
      <svg aria-hidden="true" viewBox="0 0 1440 138" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[95px] w-full sm:h-[135px]">
        <path d="M0 43 C135 14 190 142 320 118 S570 70 740 130 S1040 124 1180 96 S1360 9 1440 30 L1440 138 L0 138Z" fill="#E4EFE6" opacity=".62" />
        <path d="M0 102 C125 62 210 136 380 135 S730 108 910 136 S1210 80 1440 117 L1440 138 L0 138Z" fill="#D9E8DD" opacity=".35" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px] text-center">
          <div className="flex items-center justify-center gap-5 text-[13px] font-extrabold uppercase tracking-[0.32em] text-[#184D2C] sm:text-[15px] sm:tracking-[0.4em]">
            <span aria-hidden="true" className="h-px w-12 bg-[#A7C7B3] sm:w-24" />
            Our Reels
            <span aria-hidden="true" className="h-px w-12 bg-[#A7C7B3] sm:w-24" />
          </div>

          <h2 id="reels-heading" className="mt-6 text-[clamp(2rem,4.3vw,4.2rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
            Reels that Build Trust &amp;{" "}
            <span className="text-[#235B12]">Attract Patients.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[1020px] text-[16px] leading-relaxed text-[#263954] sm:text-[19px]">
            Expert insights, patient education, and practice updates — all in quick, engaging reels.
          </p>
        </div>

        {/* Filter buttons, not navigation links: each changes the displayed media. */}
        <div aria-label="Filter doctor reels" className="mx-auto mt-9 flex max-w-[1220px] flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
          {FILTERS.map(({ id, label, Icon }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => chooseFilter(id)}
                className={`inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border px-4 py-3 text-[13px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#235B12] sm:min-h-[56px] sm:gap-3 sm:px-7 sm:text-[16px] ${
                  active
                    ? "border-[#245D0C] bg-gradient-to-b from-[#57972C] to-[#205A02] text-white shadow-[0_8px_18px_rgba(34,94,10,.13)]"
                    : "border-[#CDD9D9] bg-white text-[#0B3142] hover:border-[#87B28C] hover:bg-[#F3F9F1]"
                }`}
              >
                <Icon aria-hidden="true" className={`size-[19px] sm:size-[23px] ${active ? "text-white" : "text-[#23650E]"}`} strokeWidth={2} />
                {label}
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="mt-10 sm:mt-12">
          {matchingReels.length ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {visibleReels.map((reel) => (
                <ReelTile key={reel.id} reel={reel} onOpen={() => setSelectedReel(reel)} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-[#D7E6DF] bg-white p-10 text-center text-[#586B70]">
              No reels are available in this category yet.
            </p>
          )}
        </div>

        {!showAll && totalPages > 1 && (
          <nav aria-label="Reel gallery pages" className="mt-8 flex items-center justify-center gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Show reels page ${index + 1} of ${totalPages}`}
                aria-current={currentPage === index ? "page" : undefined}
                className={`size-3 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#235B12] sm:size-3.5 ${currentPage === index ? "bg-[#296400]" : "bg-[#B8C6C3] hover:bg-[#718D7C]"}`}
              />
            ))}
          </nav>
        )}

        <div className="mt-9 flex justify-center sm:mt-10">
          <button
            type="button"
            onClick={() => {
              setShowAll((current) => !current);
              setPage(0);
            }}
            className="inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full border-2 border-[#276416] bg-white px-7 py-3 text-[17px] font-extrabold text-[#235B12] shadow-sm transition-colors hover:bg-[#F0F7ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#235B12] sm:min-h-[64px] sm:px-10 sm:text-[21px]"
          >
            {showAll ? "Show Featured Reels" : "Explore All Reels"}
            <ArrowRight aria-hidden="true" className="size-5 sm:size-6" />
          </button>
        </div>
      </div>

      <ReelGalleryModal reel={selectedReel} onClose={() => setSelectedReel(null)} />
    </section>
  );
}
