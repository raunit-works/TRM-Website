/**
 * Content for the interactive services section only.
 * Kept separate from `services.ts` to avoid changing other service cards/pages.
 */
export type ServiceTabId =
  | "profile"
  | "reels"
  | "strategy"
  | "consultation";

export type ServiceTab = {
  id: ServiceTabId;
  title: string;
  summary: string;
  highlights: readonly string[];
  ctaLabel: string;
  ctaHref: string;
};

export const serviceTabs: readonly ServiceTab[] = [
  {
    id: "profile",
    title: "Profile Management",
    summary:
      "Build and maintain a clear, credible and consistent professional presence across the platforms that matter to your practice.",
    highlights: [
      "Organise professional profiles, bios, highlights and contact information.",
      "Keep your specialty, services and practice details accurate and up to date.",
      "Coordinate approved posts and profile updates across relevant platforms.",
      "Review profile activity and the quality of enquiries over time.",
    ],
    ctaLabel: "Discuss Profile Management",
    ctaHref: "#contact",
  },
  {
    id: "reels",
    title: "Reels & Content Creation",
    summary:
      "Turn doctor-approved expertise into clear educational videos, reels and supporting content with a reliable production workflow.",
    highlights: [
      "Develop specialty-relevant topics, scripts and clear messaging.",
      "Plan shoots and coordinate recording with your available time.",
      "Edit reels with readable captions, covers and consistent branding.",
      "Share drafts for clinical review and approval before publishing.",
    ],
    ctaLabel: "Discuss Video Production",
    ctaHref: "#contact",
  },
  {
    id: "strategy",
    title: "Content Strategy",
    summary:
      "Create a practical content roadmap grounded in your specialty, patient questions and professional communication goals.",
    highlights: [
      "Review your current profile, audience needs and communication gaps.",
      "Develop topic pillars, FAQs and a clear content calendar.",
      "Plan the right mix of educational videos, carousels and updates.",
      "Use relevant performance signals to improve future content.",
    ],
    ctaLabel: "Plan My Content Strategy",
    ctaHref: "#contact",
  },
  {
    id: "consultation",
    title: "Consultation & Training",
    summary:
      "Get focused, practical guidance on presenting your expertise online and creating a manageable content routine.",
    highlights: [
      "Review your professional positioning and digital profile together.",
      "Learn how to explain medical topics clearly and confidently on camera.",
      "Understand content approvals, workflows and account responsibilities.",
      "Leave with actionable priorities and a realistic next-step plan.",
    ],
    ctaLabel: "Request a Consultation",
    ctaHref: "#contact",
  },
] as const;
