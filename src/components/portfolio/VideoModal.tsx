'use client';

import { X } from 'lucide-react';

export function VideoModal({
  isOpen,
  videoSrc,
  onClose,
}: {
  isOpen: boolean;
  videoSrc?: string;
  onClose: () => void;
}) {
  if (!isOpen || !videoSrc) return null;

  const source = (() => {
    try {
      const url = new URL(videoSrc);
      if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
        const videoId = url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).at(-1);
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return videoSrc;
    } catch {
      return videoSrc;
    }
  })();

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#061319]/80 p-4 backdrop-blur-sm" aria-modal="true" role="dialog">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/10 bg-[#081d29] p-2 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <X size={18} />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-[18px]">
          <iframe
            src={source}
            title="Selected reel"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
