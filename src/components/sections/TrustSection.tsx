
import Image from "next/image";
import {
  LockKeyhole,
  MessageCircleMore,
  ShieldCheck,
  ShieldPlus,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { trustItems } from "@/data/trust";
import type { TrustItem } from "@/types";

type TrustSectionProps = {
  medicalImageSrc?: string;
};

const trustIcons: Record<TrustItem["icon"], LucideIcon> = {
  ownership: UserRound,
  approval: ShieldCheck,
  confidentiality: LockKeyhole,
  communication: MessageCircleMore,
};

/* =========================================
   BOTTOM GREEN LANDSCAPE
========================================= */

function GreenLandscape() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1600 180"
      preserveAspectRatio="none"
      className="
        pointer-events-none absolute
        inset-x-0 bottom-0 z-0
        h-[95px] w-full
        sm:h-[130px] xl:h-[170px]
      "
    >
      <path
        d="M0 74 C175 130 230 171 420 143 S698 109 860 157 S1175 153 1370 111 S1527 68 1600 83 L1600 180 L0 180 Z"
        fill="#F0F8EC"
      />
      <path
        d="M0 104 C155 141 285 184 447 153 S730 134 916 171 S1264 143 1421 117 S1530 91 1600 98 L1600 180 L0 180 Z"
        fill="#D4EBCF"
        opacity="0.85"
      />
      <path
        d="M0 139 C165 164 271 178 393 172 S673 144 833 175 S1202 179 1373 143 S1546 118 1600 127 L1600 180 L0 180 Z"
        fill="#87B989"
        opacity="0.64"
      />
    </svg>
  );
}

/* =========================================
   MEDICAL ILLUSTRATION
========================================= */

function MedicalDecoration({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <aside
      aria-hidden="true"
      className="
        relative hidden min-h-[320px]
        overflow-visible 2xl:block
      "
    >
      <div
        className="
          absolute -right-16 top-0
          h-56 w-64 rounded-full
          bg-[#EDF8E9] blur-3xl
        "
      />

      {/* Medical cross */}
      <div className="absolute right-0 top-2 text-[#D5EDD8]">
        <svg
          viewBox="0 0 88 88"
          className="h-20 w-20"
          fill="currentColor"
        >
          <path d="M34 6h20a5 5 0 0 1 5 5v23h23a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H59v23a5 5 0 0 1-5 5H34a5 5 0 0 1-5-5V54H6a5 5 0 0 1-5-5V39a5 5 0 0 1 5-5h23V11a5 5 0 0 1 5-5Z" />
        </svg>
      </div>

      {imageSrc ? (
        <div className="absolute inset-x-0 bottom-0 h-[280px]">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(min-width: 1536px) 320px, 1px"
            className="object-contain object-right-bottom"
          />
        </div>
      ) : (
        <svg
          viewBox="0 0 320 300"
          className="
            absolute -right-3 bottom-0
            h-[310px] w-[320px]
          "
          focusable="false"
        >
          <defs>
            <linearGradient
              id="trust-tube"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#0B5346" />
              <stop offset="0.55" stopColor="#087C60" />
              <stop offset="1" stopColor="#063E35" />
            </linearGradient>

            <linearGradient
              id="trust-metal"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#F8FEFD" />
              <stop offset="0.36" stopColor="#93ADB0" />
              <stop offset="0.66" stopColor="#E7F2F1" />
              <stop offset="1" stopColor="#647C7E" />
            </linearGradient>
          </defs>

          <path
            d="M307 98C280 69 254 86 238 110C212 151 220 193 172 209C147 218 115 203 116 172C117 141 144 127 155 126"
            fill="none"
            stroke="#062F2A"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M307 98C280 69 254 86 238 110C212 151 220 193 172 209C147 218 115 203 116 172C117 141 144 127 155 126"
            fill="none"
            stroke="url(#trust-tube)"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M155 125L155 150"
            stroke="#A8C2BB"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <path
            d="M172 207L172 237"
            stroke="#6E9290"
            strokeWidth="9"
            strokeLinecap="round"
          />

          <ellipse
            cx="171"
            cy="240"
            rx="61"
            ry="29"
            fill="url(#trust-metal)"
            stroke="#728A8A"
            strokeWidth="2"
          />
          <ellipse
            cx="171"
            cy="233"
            rx="43"
            ry="20"
            fill="#C7DAD8"
            stroke="#F9FFFF"
            strokeWidth="3"
          />
          <ellipse
            cx="171"
            cy="230"
            rx="32"
            ry="14"
            fill="#2E5052"
            stroke="#B6CCCA"
            strokeWidth="4"
          />
        </svg>
      )}
    </aside>
  );
}

/* =========================================
   PLATFORM BRAND ICONS
========================================= */

type PlatformName =
  | "Instagram"
  | "Meta"
  | "YouTube"
  | "LinkedIn";

function BrandLogo({
  name,
}: {
  name: PlatformName;
}) {
  switch (name) {
    case "Instagram":
      return (
        <svg
          viewBox="0 0 48 48"
          className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="trust-instagram"
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop offset="0" stopColor="#FEDA75" />
              <stop offset=".35" stopColor="#FA7E1E" />
              <stop offset=".68" stopColor="#D62976" />
              <stop offset="1" stopColor="#962FBF" />
            </linearGradient>
          </defs>

          <rect
            x="6"
            y="6"
            width="36"
            height="36"
            rx="11"
            fill="none"
            stroke="url(#trust-instagram)"
            strokeWidth="5"
          />
          <circle
            cx="24"
            cy="24"
            r="9"
            fill="none"
            stroke="url(#trust-instagram)"
            strokeWidth="5"
          />
          <circle
            cx="34.5"
            cy="13.5"
            r="3"
            fill="url(#trust-instagram)"
          />
        </svg>
      );

    case "Meta":
      return (
        <svg
          viewBox="0 0 58 40"
          className="h-8 w-11 shrink-0 sm:h-9 sm:w-12"
          aria-hidden="true"
        >
          <path
            d="M6 27C11 13 16 7 23 7c9 0 19 26 27 26 5 0 5-9 2-16C49 9 44 7 40 7c-8 0-17 26-26 26C8 33 4 30 6 27Z"
            fill="none"
            stroke="#1877F2"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "YouTube":
      return (
        <svg
          viewBox="0 0 54 40"
          className="h-8 w-11 shrink-0 sm:h-9 sm:w-12"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="6"
            width="48"
            height="28"
            rx="8"
            fill="#FF0033"
          />
          <path
            d="M23 13.5 36 20 23 26.5Z"
            fill="#fff"
          />
        </svg>
      );

    case "LinkedIn":
      return (
        <svg
          viewBox="0 0 42 42"
          className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
          aria-hidden="true"
        >
          <rect
            width="42"
            height="42"
            rx="5"
            fill="#0A66C2"
          />
          <circle
            cx="10.6"
            cy="11"
            r="3.2"
            fill="#fff"
          />
          <rect
            x="7.6"
            y="17"
            width="6"
            height="18"
            fill="#fff"
          />
          <path
            d="M19 17h5.7v2.5c1.3-2 3.3-3 6-3 5 0 6.5 3.3 6.5 8V35h-6v-9.5c0-2.5-.5-4-2.8-4-2.1 0-3.4 1.4-3.4 4V35h-6Z"
            fill="#fff"
          />
        </svg>
      );
  }
}

/* =========================================
   SUPPORTED PLATFORMS STRIP
========================================= */

function PlatformsStrip() {
  const platforms = [
    "Instagram",
    "Meta",
    "YouTube",
    "LinkedIn",
  ] as const;

  return (
    <div
      className="
        relative z-10 mx-auto mt-9
        max-w-[1340px]
        rounded-[30px]
        border border-[#C7E4C8]
        bg-white/95 px-4 py-5
        shadow-[0_10px_30px_rgba(27,86,42,0.06)]
        sm:px-6
        lg:mt-8 lg:rounded-full
        lg:px-8 lg:py-4
      "
    >
      <div
        className="
          grid items-center gap-5
          lg:grid-cols-[minmax(185px,1fr)_minmax(0,3.2fr)]
          lg:gap-7
        "
      >
        <div
          className="
            flex items-center justify-center gap-3
            text-center
            lg:justify-start lg:border-r
            lg:border-[#9FB8A8]
            lg:pr-5 lg:text-left
          "
        >
          <span
            aria-hidden="true"
            className="text-[30px] text-[#236F29]"
          >
            ❧
          </span>

          <h3
            className="
              text-[17px] font-extrabold
              leading-tight text-[#071B2F]
              sm:text-[19px]
            "
          >
            Platforms We Support
          </h3>
        </div>

        <ul
          className="
            grid grid-cols-2
            gap-x-2 gap-y-4
            sm:grid-cols-4 sm:gap-3
          "
        >
          {platforms.map((name) => (
            <li
              key={name}
              className="
                flex min-w-0 items-center
                justify-center gap-2
                border-[#B6D5C4]
                sm:border-l
                sm:first:border-l-0
              "
            >
              <BrandLogo name={name} />

              <span
                className="
                  text-[13px] font-bold
                  text-[#091C2E]
                  sm:text-[14px]
                  xl:text-[18px]
                "
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* =========================================
   MAIN TRUST SECTION
========================================= */

export function TrustSection({
  medicalImageSrc,
}: TrustSectionProps) {
  return (
    <section
      id="trust"
      aria-labelledby="trust-title"
      className="
        relative isolate overflow-hidden
        bg-[#FCFEFC] py-12
        text-[#071B2F]
        sm:py-16 lg:py-[72px]
      "
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-48
          h-[400px] w-[580px]
          rounded-full bg-[#EAF7E9]/65
          blur-[55px]
        "
      />

      <GreenLandscape />

      <div
        className="
          relative z-10 mx-auto
          max-w-[1840px]
          px-5 pb-14
          sm:px-8 sm:pb-16
          xl:px-12 2xl:px-14
        "
      >
        {/* Main grid */}
        <div
          className="
            grid items-center gap-9
            lg:grid-cols-[minmax(0,.94fr)_minmax(0,1.35fr)]
            lg:gap-10
            2xl:grid-cols-[minmax(0,1.02fr)_minmax(0,1.55fr)_minmax(0,.52fr)]
            2xl:gap-8
          "
        >
          {/* Left content */}
          <div className="min-w-0 text-center lg:text-left">
            <div
              className="
                flex items-center justify-center
                gap-3 text-[#084F20]
                lg:justify-start
              "
            >
              <span
                aria-hidden="true"
                className="hidden h-px w-8 bg-[#084F20] sm:block"
              />

              <ShieldPlus
                aria-hidden="true"
                className="h-9 w-9 shrink-0"
                strokeWidth={1.75}
              />

              <span
                className="
                  text-[12px] font-extrabold
                  uppercase tracking-[.19em]
                  sm:text-sm 2xl:text-[15px]
                "
              >
                Trust &amp; Transparency
              </span>

              <span
                aria-hidden="true"
                className="hidden h-px w-8 bg-[#084F20] sm:block"
              />
            </div>

            {/* Main heading */}
            <h2
              id="trust-title"
              className="
                mt-6 font-serif
                text-[clamp(2.45rem,4.2vw,4.8rem)]
                font-bold leading-[1.06]
                tracking-[-.045em]
                lg:mt-7
                2xl:text-[clamp(3.2rem,3.6vw,5.2rem)]
              "
            >
              Built on Trust,
              <span className="mt-1 block text-[#07581F]">
                Always in Your{" "}
                <span className="relative inline-block whitespace-nowrap">
                  Control.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 170 15"
                    preserveAspectRatio="none"
                    className="
                      absolute -bottom-2 left-0
                      h-[10px] w-full
                    "
                  >
                    <path
                      d="M3 11 Q82 -3 168 10"
                      fill="none"
                      stroke="#07581F"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h2>

            <p
              className="
                mx-auto mt-8 max-w-[540px]
                text-[16px] leading-[1.65]
                text-[#243A4D]
                sm:text-[18px]
                lg:mx-0 xl:text-[19px]
              "
            >
              We work as your creative and digital partner —
              with transparent workflows, doctor-led content
              approvals and control of your own accounts.
            </p>
          </div>

          {/* Four trust cards */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {trustItems.map((item) => {
              const Icon = trustIcons[item.icon];

              return (
                <article
                  key={item.id}
                  className="
                    flex min-h-[140px] min-w-0
                    items-center gap-4
                    rounded-[24px]
                    border border-[#E4EBE5]
                    bg-white/95
                    px-4 py-5
                    shadow-[0_10px_24px_rgba(24,65,34,0.08)]
                    sm:min-h-[164px]
                    sm:gap-5 sm:px-5
                    2xl:min-h-[170px]
                  "
                >
                  <span
                    className="
                      flex h-[68px] w-[68px]
                      shrink-0 items-center
                      justify-center rounded-[17px]
                      bg-[#EFF8EC]
                      text-[#075C25]
                      sm:h-[76px] sm:w-[76px]
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-9 w-9 sm:h-10 sm:w-10"
                      strokeWidth={1.8}
                    />
                  </span>

                  {/* Vertical divider */}
                  <span
                    aria-hidden="true"
                    className="
                      h-[70px] w-px shrink-0
                      bg-[#A2BCC0]
                      sm:h-[80px]
                    "
                  />

                  <div className="min-w-0">
                    <h3
                      className="
                        text-[17px] font-extrabold
                        leading-[1.18]
                        tracking-[-.025em]
                        text-[#081B34]
                        sm:text-[19px]
                        2xl:text-[21px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2 text-[14px]
                        leading-[1.45]
                        text-[#152638]
                        sm:text-[15px]
                        2xl:text-[16px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Desktop medical illustration */}
          <MedicalDecoration imageSrc={medicalImageSrc} />
        </div>

        {/* Bottom platforms strip */}
        <PlatformsStrip />
      </div>
    </section>
  );
}
