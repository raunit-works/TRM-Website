/**
 * Reels presented on the Talkreach Media home page.
 *
 * The bundled images below are cropped from the supplied design reference.
 * They are illustrative, NOT verified client work. Replace with approved
 * thumbnail images and real video files before publication.
 *
 * Keep categories explicitly assigned. Never guess categories from titles.
 */
export type ReelCategory = "patient-education" | "treatments" | "health-tips";
export type ReelFilter = "all" | ReelCategory;

export type GalleryReel = {
  id: string;
  title: string;
  category: ReelCategory;
  posterSrc: string;
  /** URL rooted in /public, such as /videos/reels/my-reel.mp4 */
  videoSrc?: string;
  /** Set this to false ONLY after real assets and portfolio permissions exist. */
  illustrative: boolean;
  /** Optional verified value, never use guessed views. */
  verifiedViews?: number;
  /** Optional link to the actual public post, if permitted. */
  publishedUrl?: string;
};

export const reelGallery: readonly GalleryReel[] = [
  { id: "preview-01", title: "Understanding common symptoms", category: "patient-education", posterSrc: "/images/reels/demo-reel-1.webp", illustrative: true },
  { id: "preview-02", title: "Everyday health conversations", category: "health-tips", posterSrc: "/images/reels/demo-reel-2.webp", illustrative: true },
  { id: "preview-03", title: "Explaining treatment options", category: "treatments", posterSrc: "/images/reels/demo-reel-3.webp", illustrative: true },
  { id: "preview-04", title: "Answering patient questions", category: "patient-education", posterSrc: "/images/reels/demo-reel-2.webp", illustrative: true },
  { id: "preview-05", title: "Treatment information explained", category: "treatments", posterSrc: "/images/reels/demo-reel-1.webp", illustrative: true },
  { id: "preview-06", title: "Helpful everyday health tips", category: "health-tips", posterSrc: "/images/reels/demo-reel-3.webp", illustrative: true },
  { id: "preview-07", title: "Making medical topics simpler", category: "patient-education", posterSrc: "/images/reels/demo-reel-3.webp", illustrative: true },
  { id: "preview-08", title: "Preparing for a consultation", category: "treatments", posterSrc: "/images/reels/demo-reel-2.webp", illustrative: true },
  { id: "preview-09", title: "Preventive care essentials", category: "health-tips", posterSrc: "/images/reels/demo-reel-1.webp", illustrative: true },
];
