"use client";

import { useId, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  HeartPulse,
  Layers3,
  Link2,
  Mail,
  MessageCircle,
  MonitorPlay,
  Play,
  Plus,
  ShieldPlus,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site";

type Panel = "links" | "services" | "contact";
type SocialName = "Instagram" | "YouTube" | "Facebook" | "WhatsApp";
type FooterProps = { logoSrc?: string };

const serviceLinks: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "Profile Management", href: "/#services", Icon: UserRound },
  { label: "Reels & Video", href: "/#reels", Icon: Play },
  { label: "Content Strategy", href: "/#services", Icon: Layers3 },
  { label: "YouTube Setup", href: "/#services", Icon: MonitorPlay },
  { label: "WhatsApp Business", href: "/#services", Icon: MessageCircle },
];

const permittedQuickLinks = new Set([
  "home",
  "services",
  "our work",
  "about",
  "contact",
]);

const quickLinks = siteConfig.navigation.filter((item) =>
  permittedQuickLinks.has(item.label.toLowerCase().trim()),
);

function hrefForSiteLink(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

function BrandLeaf() {
  const gradientId = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 64 64"
      className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2BBE38" />
          <stop offset="1" stopColor="#076A22" />
        </linearGradient>
      </defs>
      <path
        d="M31 58C10 51 4 33 10 9c18 2 31 11 30 31-1 9-5 14-9 18Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M36 58c-2-17 9-35 26-42 3 20-4 36-26 42Z"
        fill="#0B7734"
      />
      <path d="M31 58C30 37 24 28 16 20" stroke="#DDF7DF" strokeWidth="2.6" fill="none" />
      <path d="M36 58c4-17 12-27 22-36" stroke="#C9F3CE" strokeWidth="2" fill="none" />
    </svg>
  );
}

/** Decorative illustration: drawn in SVG, not loaded from any image service. */
function StethoscopeDrawing() {
  const tubeId = useId().replace(/:/g, "");
  const steelId = useId().replace(/:/g, "");
  const shadowId = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 450 180"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={tubeId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#07573F" />
          <stop offset="0.55" stopColor="#0B4938" />
          <stop offset="1" stopColor="#173F37" />
        </linearGradient>
        <linearGradient id={steelId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#F6FAFA" />
          <stop offset="0.3" stopColor="#8A9F9F" />
          <stop offset="0.65" stopColor="#F5FAFA" />
          <stop offset="1" stopColor="#5F7477" />
        </linearGradient>
        <filter id={shadowId} x="-30%" y="-30%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <ellipse cx="215" cy="155" rx="188" ry="13" fill="#40675A" opacity="0.16" filter={`url(#${shadowId})`} />
      <path
        d="M-22 145 C30 82 101 91 162 130 C224 171 255 108 321 111"
        fill="none"
        stroke="#B6C4BE"
        strokeWidth="19"
        strokeLinecap="round"
        opacity=".45"
      />
      <path
        d="M-22 140 C30 77 101 86 162 125 C224 166 255 103 321 106"
        fill="none"
        stroke={`url(#${tubeId})`}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M-22 137 C30 74 101 83 162 122 C224 163 255 100 321 103"
        fill="none"
        stroke="#2A8064"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".7"
      />
      <path d="M319 105l38-19" stroke={`url(#${steelId})`} strokeWidth="15" strokeLinecap="round" />
      <ellipse cx="373" cy="98" rx="52" ry="41" fill={`url(#${steelId})`} />
      <ellipse cx="373" cy="93" rx="41" ry="29" fill="#EDF3F2" stroke="#6E8587" strokeWidth="6" />
      <ellipse cx="373" cy="93" rx="31" ry="22" fill={`url(#${steelId})`} stroke="#D9E5E5" strokeWidth="4" />
      <ellipse cx="373" cy="93" rx="19" ry="13" fill="#D6E6E5" opacity="0.8" />
    </svg>
  );
}

function FooterLandscape() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1600 185"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full sm:h-32"
    >
      <path d="M0 54C160 85 250 185 470 122S760 156 980 100 1350 150 1600 71V185H0Z" fill="#E5F6E8" />
      <path d="M0 119C155 50 305 172 482 141S735 107 906 152 1304 102 1600 118V185H0Z" fill="#C8EDCF" opacity=".85" />
      <path d="M0 140C210 86 345 185 566 146S910 174 1145 142 1440 110 1600 134V185H0Z" fill="#A8DFBB" opacity=".48" />
    </svg>
  );
}

function FooterBrand({ logoSrc }: FooterProps) {
  return (
    <div className="relative min-w-0 pb-24 sm:pb-28 xl:pb-0">
      <Link href="/" aria-label="Talkreach Media, homepage" className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176978]">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt="Talkreach Media"
            width={235}
            height={64}
            className="h-auto max-h-[68px] w-[205px] object-contain object-left sm:w-[235px]"
          />
        ) : (
          <>
            <BrandLeaf />
            <span className="flex flex-col">
              <span className="text-[23px] font-extrabold leading-tight tracking-[-0.045em] text-[#091F35] sm:text-[27px]">Talkreach Media</span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#48596E] sm:text-[10px]">Healthcare · Content · Growth</span>
            </span>
          </>
        )}
      </Link>
      <h2 className="mt-8 max-w-[450px] text-[25px] font-extrabold leading-[1.24] tracking-[-0.035em] text-[#0A2037] sm:text-[29px] xl:mt-9 xl:text-[25px] 2xl:text-[28px]">
        Helping Doctors Build a Clearer, More <span className="text-[#148523]">Trusted Online Presence.</span>
      </h2>
      <p className="mt-6 max-w-[445px] border-l-[3px] border-[#148C26] pl-5 text-[15px] leading-[1.7] text-[#213246] sm:text-[17px] xl:text-[15px] 2xl:text-[17px]">
        A healthcare-focused content and digital communication agency helping doctors showcase their expertise, educate patients, and strengthen their professional presence ethically.
      </p>
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-3 right-0 h-24 w-[210px] opacity-95 sm:h-32 sm:w-[290px] xl:-bottom-24 xl:-left-10 xl:right-auto xl:h-40 xl:w-[370px]">
        <StethoscopeDrawing />
      </div>
    </div>
  );
}

function FooterTitle({ Icon, children }: { Icon: LucideIcon; children: ReactNode }) {
  return (
    <h3 className="inline-flex items-center gap-3 rounded-full bg-[#E5F5E9] px-4 py-2 text-[17px] font-extrabold text-[#0B4937] 2xl:text-[19px]">
      <Icon aria-hidden="true" className="h-6 w-6 text-[#12692B]" strokeWidth={2.1} />
      {children}
    </h3>
  );
}

function QuickLinks() {
  return (
    <ul className="mt-5 space-y-0">
      {quickLinks.map((item) => (
        <li key={`${item.label}-${item.href}`} className="border-b border-[#DBE7E1] last:border-b-0">
          <Link
            href={hrefForSiteLink(item.href)}
            className="flex min-h-[48px] items-center justify-between gap-2 py-2 text-[16px] text-[#1A2E3E] transition-colors hover:text-[#13792E] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[#13792E] 2xl:text-[17px]"
          >
            {item.label}
            <ChevronRight aria-hidden="true" className="h-5 w-5 shrink-0 text-[#0C5D41]" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterServices() {
  return (
    <ul className="mt-5 space-y-2">
      {serviceLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            className="flex min-h-12 items-center gap-4 rounded-xl bg-[#F0F7F2] px-3 py-2.5 text-[14px] font-medium text-[#172B3D] transition-colors hover:bg-[#E2F2E5] focus-visible:outline-2 focus-visible:outline-[#13792E] 2xl:text-[16px]"
          >
            <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-[#14762D]" strokeWidth={1.9} />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactDetails() {
  const { email, phone, whatsappNumber } = siteConfig.contact;
  const whatsappDigits = (whatsappNumber || "").replace(/\D/g, "");
  const displayPhone = phone?.trim() || (whatsappDigits ? `+${whatsappDigits}` : "");

  return (
    <div className="mt-5 space-y-4">
      {email ? (
        <a className="flex min-w-0 items-start gap-3 font-semibold text-[#0B2035] hover:text-[#126F30]" href={`mailto:${email}`}>
          <Mail aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-[#147A30]" />
          <span className="break-all text-[14px] sm:text-[16px]">{email}</span>
        </a>
      ) : null}
      {displayPhone ? (
        <div className="flex items-start gap-3">
          <MessageCircle aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-[#147A30]" />
          <div className="min-w-0">
            {whatsappDigits ? (
              <a className="font-semibold text-[#0B2035] hover:text-[#126F30]" href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noopener noreferrer">
                {displayPhone} <span className="font-normal text-[#596677]">(WhatsApp)</span>
              </a>
            ) : (
              <a className="font-semibold text-[#0B2035] hover:text-[#126F30]" href={`tel:${displayPhone.replace(/[^\d+]/g, "")}`}>
                {displayPhone}
              </a>
            )}
            <p className="mt-1 text-[13px] text-[#596677]">For professional enquiries only.</p>
          </div>
        </div>
      ) : null}
      {!email && !displayPhone && (
        <p className="text-sm text-[#586777]">Business contact details will appear here once configured.</p>
      )}
      <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#E8F5E8] px-4 py-4 text-[#0E4731]">
        <ShieldPlus aria-hidden="true" className="h-9 w-9 shrink-0 text-[#126B33]" strokeWidth={1.7} />
        <div className="border-l border-[#B0D6C0] pl-3">
          <p className="text-[14px] font-extrabold leading-snug sm:text-[15px]">Your patients’ privacy is our priority.</p>
          <p className="mt-1 text-[12px] leading-relaxed text-[#2E4C43] sm:text-[13px]">Medical content should use appropriate approvals and privacy safeguards.</p>
        </div>
      </div>
    </div>
  );
}

function SocialMark({ name }: { name: SocialName }) {
  const gradientId = useId().replace(/:/g, "");
  if (name === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="#F8C440" />
            <stop offset=".45" stopColor="#ED2456" />
            <stop offset="1" stopColor="#7937CE" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="26" height="26" rx="8" fill="none" stroke={`url(#${gradientId})`} strokeWidth="3.5" />
        <circle cx="16" cy="16" r="6" fill="none" stroke={`url(#${gradientId})`} strokeWidth="3" />
        <circle cx="23.5" cy="8.8" r="1.8" fill="#A632BB" />
      </svg>
    );
  }
  if (name === "YouTube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8">
        <rect x="2" y="6" width="28" height="20" rx="6" fill="#FF0033" />
        <path d="M13 11.3v9.4L22 16Z" fill="white" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8">
        <circle cx="16" cy="16" r="15" fill="#1877F2" />
        <path d="M18.7 29V18h3.2l.5-4h-3.7v-2.6c0-1.2.3-2 2-2h1.9V5.9a24 24 0 0 0-2.8-.2c-2.9 0-4.9 1.8-4.9 5.2V14h-3.2v4h3.2v11Z" fill="white" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8">
      <path d="M16 3a12.7 12.7 0 0 0-10.9 19.2A12.5 12.5 0 0 0 3.9 24L2 30l6.3-1.7A12.8 12.8 0 1 0 16 3Z" fill="none" stroke="#159D3A" strokeWidth="2.7" strokeLinejoin="round" />
      <path d="M11 10c-.8-.8-1.8-.5-2.3.2-1.4 1.8-.7 4.2 1.4 6.9 2.7 3.4 5.4 5 8.3 5.5 2.6.5 4.3-.5 4.7-1.9.2-.8-.2-1.1-.9-1.4l-3.3-1.5c-.5-.2-.8-.1-1 .2l-1.2 1.5a12.5 12.5 0 0 1-5-4.7l1.1-1.4c.3-.4.4-.7.2-1.2Z" fill="#159D3A" />
    </svg>
  );
}

function FooterSocials() {
  const phone = (siteConfig.contact.whatsappNumber || "").replace(/\D/g, "");
  const links: { name: SocialName; href: string }[] = [
    { name: "Instagram", href: siteConfig.contact.instagram || "" },
    { name: "YouTube", href: siteConfig.contact.youtube || "" },
    { name: "Facebook", href: siteConfig.contact.facebook || "" },
    { name: "WhatsApp", href: phone ? `https://wa.me/${phone}` : "" },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center gap-4 text-center">
        <span className="h-px flex-1 bg-[#C7D8D0]" />
        <h4 className="text-[18px] font-extrabold text-[#0A5239]">Follow Us</h4>
        <span className="h-px flex-1 bg-[#C7D8D0]" />
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-4 sm:gap-6">
        {links.map(({ name, href }) => {
          const icon = <SocialMark name={name} />;
          const classes = "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1F6F3] transition-colors hover:bg-[#E3F3E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176978]";
          return href.startsWith("https://") ? (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Talkreach Media on ${name}`} className={classes}>
              {icon}
            </a>
          ) : (
            <span key={name} aria-label={`${name} link not configured`} title={`${name} link not configured`} className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1F6F3] opacity-45 grayscale">
              {icon}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function MobileGroup({
  title,
  Icon,
  id,
  open,
  onToggle,
  children,
}: {
  title: string;
  Icon: LucideIcon;
  id: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_28px_rgba(11,65,49,0.07)]">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex min-h-[66px] w-full items-center justify-between gap-4 rounded-[24px] bg-[#E5F5E6] px-5 py-4 text-left text-[19px] font-extrabold text-[#0B4937] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#176978]"
        >
          <span className="flex items-center gap-4">
            <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-[#0D752E]" strokeWidth={2} />
            {title}
          </span>
          <ChevronDown aria-hidden="true" className={`h-6 w-6 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </h3>
      <div id={`${id}-panel`} hidden={!open} className="px-5 pb-6 pt-1">
        {children}
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="relative isolate overflow-hidden rounded-t-[28px] bg-[linear-gradient(120deg,#004A36_0%,#003F30_54%,#004D3A_100%)] text-white sm:rounded-t-[36px]">
      <svg aria-hidden="true" viewBox="0 0 1600 130" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full opacity-45">
        <path d="M0 40C170 0 265 136 455 94S790 123 970 67 1400 88 1600 40V130H0Z" fill="#037A59" />
        <path d="M0 90C200 34 315 141 555 94S955 121 1190 92 1475 61 1600 105V130H0Z" fill="#005A47" />
      </svg>
      <div className="relative mx-auto flex w-full max-w-[1880px] flex-col items-center gap-5 px-5 py-7 text-center sm:px-8 xl:flex-row xl:justify-between xl:gap-4 xl:px-12 xl:py-6 2xl:px-20">
        <p className="text-[13px] text-white/95 sm:text-[15px] xl:whitespace-nowrap">© {new Date().getFullYear()} Talkreach Media. All rights reserved.</p>
        <div className="flex items-center gap-6 text-[14px] sm:text-[15px] xl:border-l xl:border-white/30 xl:pl-6">
          <Link className="transition-colors hover:text-[#D9FFE3]" href={siteConfig.legalPages.privacy}>Privacy Policy</Link>
          <span aria-hidden="true" className="h-5 w-px bg-white/35" />
          <Link className="transition-colors hover:text-[#D9FFE3]" href={siteConfig.legalPages.terms}>Terms</Link>
        </div>
        <p className="flex items-center gap-3 text-[13px] italic text-white/90 sm:text-[15px] xl:border-l xl:border-white/30 xl:pl-6">
          <HeartPulse aria-hidden="true" className="h-7 w-7 shrink-0" strokeWidth={1.6} />
          Built for Doctors &amp; Healthcare Practitioners
        </p>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-[13px] font-semibold sm:text-[14px] xl:shrink-0">
          <Stethoscope aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
          Healthcare Focused
        </span>
      </div>
    </div>
  );
}

export function Footer({ logoSrc }: FooterProps) {
  const [mobilePanel, setMobilePanel] = useState<Panel | null>("contact");
  const baseId = useId();

  const togglePanel = (panel: Panel) => {
    setMobilePanel((current) => (current === panel ? null : panel));
  };

  return (
    <footer className="bg-white">
      <div className="relative isolate overflow-hidden bg-[linear-gradient(110deg,#FFFFFF_0%,#FFFFFF_58%,#F2FBF5_100%)]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-48 h-[420px] w-[590px] rounded-full bg-[#E2F8E8]/80 sm:-top-52" />
        <Plus aria-hidden="true" className="pointer-events-none absolute right-[5%] top-7 h-16 w-16 text-[#AEDFBE]/35" strokeWidth={6} />
        <FooterLandscape />

        <div className="relative z-10 mx-auto w-full max-w-[1880px] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 xl:px-12 xl:pb-[135px] 2xl:px-20">
          {/* Four-column layout for large desktops */}
          <div className="hidden xl:grid xl:grid-cols-[minmax(0,1.35fr)_minmax(0,.69fr)_minmax(0,1fr)_minmax(0,1.25fr)] xl:gap-9 2xl:gap-12">
            <FooterBrand logoSrc={logoSrc} />
            <div className="border-l border-[#D9E4DE] pl-7">
              <FooterTitle Icon={Link2}>Quick Links</FooterTitle>
              <QuickLinks />
            </div>
            <div className="border-l border-[#D9E4DE] pl-7">
              <FooterTitle Icon={Layers3}>Our Services</FooterTitle>
              <FooterServices />
            </div>
            <div className="border-l border-[#D9E4DE] pl-7">
              <FooterTitle Icon={Mail}>Get in Touch</FooterTitle>
              <ContactDetails />
              <FooterSocials />
            </div>
          </div>

          {/* Mobile and tablet layout: accordion + separate social row */}
          <div className="xl:hidden">
            <FooterBrand logoSrc={logoSrc} />
            <div className="mt-6 space-y-4">
              <MobileGroup id={`${baseId}-links`} title="Quick Links" Icon={Link2} open={mobilePanel === "links"} onToggle={() => togglePanel("links")}>
                <QuickLinks />
              </MobileGroup>
              <MobileGroup id={`${baseId}-services`} title="Our Services" Icon={Layers3} open={mobilePanel === "services"} onToggle={() => togglePanel("services")}>
                <FooterServices />
              </MobileGroup>
              <MobileGroup id={`${baseId}-contact`} title="Get in Touch" Icon={Mail} open={mobilePanel === "contact"} onToggle={() => togglePanel("contact")}>
                <ContactDetails />
              </MobileGroup>
            </div>
            <FooterSocials />
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
