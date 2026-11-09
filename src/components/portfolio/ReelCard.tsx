import Image from 'next/image';
import { Play, Video } from 'lucide-react';
import type { ReelItem } from '@/types';

export function ReelCard({
  reel,
  onSelect,
}: {
  reel: ReelItem;
  onSelect: (reel: ReelItem) => void;
}) {
  return (
    <article className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/5 text-left shadow-[0_16px_35px_rgba(4,18,32,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <div className="relative aspect-[9/16] overflow-hidden bg-primary-dark">
        <Image src={reel.thumbnail} alt={reel.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081d29]/80 via-transparent to-transparent" />
        <button
          type="button"
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={() => (reel.videoSrc ? onSelect(reel) : undefined)}
          disabled={!reel.videoSrc}
          aria-label={reel.videoSrc ? `Play ${reel.title}` : `Preview unavailable for ${reel.title}`}
        >
          {reel.videoSrc ? <Play size={20} className="ml-1 fill-current" /> : <Video size={20} />}
        </button>
        {!reel.videoSrc ? (
          <div className="absolute bottom-4 left-4 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.13em] text-white/90">
            Preview unavailable
          </div>
        ) : null}
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-white/70">
          <span>{reel.category}</span>
          <span>{reel.platform}</span>
        </div>
        <h3 className="text-lg font-semibold leading-6 text-white">{reel.title}</h3>
      </div>
    </article>
  );
}
