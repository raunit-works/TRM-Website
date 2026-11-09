"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink, Video, X } from "lucide-react";
import type { GalleryReel } from "@/data/reelGallery";

type ReelGalleryModalProps = {
  reel: GalleryReel | null;
  onClose: () => void;
};

/** Native dialog provides Escape handling and a modal focus boundary. */
export function ReelGalleryModal({ reel, onClose }: ReelGalleryModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (reel && !dialog.open) dialog.showModal();
    if (!reel && dialog.open) dialog.close();
  }, [reel]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={reel ? `Reel preview: ${reel.title}` : "Reel preview"}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      className="w-[min(94vw,540px)] max-h-[92dvh] overflow-y-auto rounded-[24px] border border-[#DCE9DF] bg-white p-0 text-[#0B3142] shadow-2xl backdrop:bg-[#031E2A]/80 backdrop:backdrop-blur-sm"
    >
      {reel && (
        <div className="relative">
          <button
            type="button"
            aria-label="Close reel preview"
            onClick={() => dialogRef.current?.close()}
            className="absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full bg-[#0B3142]/90 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X aria-hidden="true" size={20} />
          </button>

          <div className="relative mx-auto aspect-[9/12] w-full max-w-[440px] overflow-hidden bg-[#DCE9DF] sm:aspect-[9/13]">
            {reel.videoSrc ? (
              <video
                key={reel.videoSrc}
                src={reel.videoSrc}
                poster={reel.posterSrc}
                controls
                playsInline
                autoPlay
                preload="metadata"
                className="absolute inset-0 h-full w-full object-contain bg-[#092936]"
              />
            ) : (
              <>
                <Image
                  src={reel.posterSrc}
                  alt={`Illustrative reel cover: ${reel.title}`}
                  fill
                  sizes="(max-width: 540px) 94vw, 440px"
                  className="object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-[#0B3142]/90 p-4 text-center text-sm font-medium text-white backdrop-blur-sm">
                  <Video aria-hidden="true" className="mx-auto mb-2 size-6" />
                  {reel.illustrative
                    ? "Design preview only. Replace this with an approved doctor reel."
                    : "Video preview is not available yet."}
                </div>
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 p-5">
            <div className="min-w-0">
              <p className="text-base font-bold">{reel.title}</p>
              <p className="mt-1 text-xs text-[#586B70]">
                {reel.illustrative ? "Illustrative concept, not client work" : "Doctor reel"}
              </p>
            </div>
            {reel.publishedUrl && (
              <a
                href={reel.publishedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border border-[#176978] px-3 text-xs font-bold text-[#176978] hover:bg-[#EDF6F2]"
              >
                View post <ExternalLink aria-hidden="true" size={14} />
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
