
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

// Logo stored in the Next.js public folder.
const LOGO_PATH = "/assets/logo.png";

// Anchor links should work from other pages too.
function resolveHref(href: string): string {
  return href.startsWith("#") ? `/${href}` : href;
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const reviewHref = resolveHref(siteConfig.cta.reviewHref);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!mobileOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  function isActiveLink(href: string): boolean {
    const resolved = resolveHref(href);

    if (resolved === "/" || resolved === "/#top") {
      return pathname === "/";
    }

    // Highlight page links, not individual section anchors.
    return !resolved.includes("#") && pathname === resolved;
  }

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        border-b border-[#DCE5E1]
        bg-white/95 backdrop-blur-xl
        shadow-[0_6px_24px_rgba(11,49,66,0.06)]
      "
    >
      {/* Light background from Design 03 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(110deg,#FFFFFF_0%,#FFFFFF_62%,#F1F7EF_100%)]
        "
      />

      {/* Diagonal right-hand accent inspired by Design 04 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 right-0
          hidden w-[28%]
          bg-[#C4D8C5]/90
          [clip-path:polygon(38px_0,100%_0,100%_100%,0_100%)]
          xl:block
        "
      />

      <Container
        className="
          relative z-10
          flex h-[72px] items-center
          justify-between gap-10
          sm:h-[78px]
        "
      >
        {/* LOGO */}
        
<Link
  href="/"
  aria-label="Talkreach Media - Home"
  onClick={() => setMobileOpen(false)}
  className="flex shrink-0 items-center"
>
  <span className="relative block h-[48px] w-[180px] sm:h-[56px] sm:w-[220px]">
    <Image
      src="/images/talkreach-logo.png"
      alt="Talkreach Media"
      fill
      priority
      sizes="(max-width: 640px) 180px, 220px"
      className="object-contain object-left"
    />
  </span>
</Link>


        {/* Premium vertical separator */}
        <div
          aria-hidden="true"
          className="
            hidden h-9 w-px shrink-0
            bg-[#DCE5E1]
            xl:block
          "
        />

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="
            ml-auto hidden items-center
            gap-5 xl:flex 2xl:gap-7
          "
        >
          {siteConfig.navigation.map((item) => {
            const href = resolveHref(item.href);
            const active = isActiveLink(item.href);

            return (
              <Link
                key={`${item.label}-${href}`}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`
                  group relative
                  whitespace-nowrap
                  rounded-sm py-2
                  text-[14px] font-semibold
                  transition-colors duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#176978]
                  focus-visible:ring-offset-4
                  ${
                    active
                      ? "text-[#3E5D30]"
                      : "text-[#172C34] hover:text-[#176978]"
                  }
                `}
              >
                {item.label}

                {/* Active / hover underline */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute -bottom-1 left-0
                    h-[2px] w-full
                    origin-left rounded-full
                    bg-[#648349]
                    transition-transform duration-200
                    ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="ml-9 -mr-6 hidden shrink-0 xl:flex">
          <Link
            href={reviewHref}
            className="
              group inline-flex min-h-[48px]
              items-center justify-center
              gap-2.5 whitespace-nowrap
              rounded-xl
              bg-[#3E5D30]
              px-5 py-3
              text-[14px] font-semibold text-white
              shadow-[0_4px_12px_rgba(62,93,48,0.14)]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-[#2B4926]
              hover:shadow-[0_8px_18px_rgba(62,93,48,0.18)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#176978]
              focus-visible:ring-offset-4
              active:translate-y-0
            "
          >
            <span>Request a Profile Review</span>

            <ArrowRight
              aria-hidden="true"
              size={17}
              strokeWidth={2}
              className="
                shrink-0
                transition-transform duration-200
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="
            ml-auto inline-flex
            h-11 w-11 shrink-0
            items-center justify-center
            rounded-xl
            border border-[#DCE5E1]
            bg-white/90 text-[#0B3142]
            transition-colors duration-200
            hover:bg-[#DCE9DF]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#176978]
            focus-visible:ring-offset-2
            xl:hidden
          "
        >
          {mobileOpen ? (
            <X aria-hidden="true" size={22} strokeWidth={1.9} />
          ) : (
            <Menu aria-hidden="true" size={22} strokeWidth={1.9} />
          )}
        </button>
      </Container>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="
            relative z-20
            border-t border-[#DCE5E1]
            bg-[#F6F8F6]
            shadow-[0_12px_24px_rgba(11,49,66,0.08)]
            xl:hidden
          "
        >
          <Container className="py-5">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-1"
            >
              {siteConfig.navigation.map((item) => {
                const href = resolveHref(item.href);
                const active = isActiveLink(item.href);

                return (
                  <Link
                    key={`mobile-${item.label}-${href}`}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      flex min-h-[46px]
                      items-center
                      rounded-xl px-4 py-3
                      text-[15px] font-semibold
                      transition-colors duration-200
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#176978]
                      ${
                        active
                          ? "bg-[#DCE9DF] text-[#0B3142]"
                          : "text-[#172C34] hover:bg-[#EDF3EE]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href={reviewHref}
                onClick={() => setMobileOpen(false)}
                className="
                  mt-4 flex min-h-[48px]
                  items-center justify-center gap-2
                  rounded-xl bg-[#3E5D30]
                  px-5 py-3
                  text-center text-sm font-semibold text-white
                  transition-colors duration-200
                  hover:bg-[#2B4926]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#176978]
                  focus-visible:ring-offset-2
                "
              >
                Request a Profile Review
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
