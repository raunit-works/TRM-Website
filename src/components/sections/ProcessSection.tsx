
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Layers3,
  Search,
  Target,
  Video,
  type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  title: string;
  description: string;
  Icon: LucideIcon;
  desktopPosition: string;
};

const steps: readonly ProcessStep[] = [
  {
    title: "Discover",
    description: "Understand & align goals.",
    Icon: Search,
    desktopPosition: "xl:left-[1%] xl:top-[39%]",
  },
  {
    title: "Strategy",
    description: "Plan the right approach.",
    Icon: Target,
    desktopPosition: "xl:left-[20%] xl:top-[28%]",
  },
  {
    title: "Create",
    description: "Produce meaningful content.",
    Icon: Video,
    desktopPosition: "xl:left-[40%] xl:top-[18%]",
  },
  {
    title: "Publish",
    description: "Share consistently & professionally.",
    Icon: Layers3,
    desktopPosition: "xl:left-[60%] xl:top-[10%]",
  },
  {
    title: "Measure & Grow",
    description: "Track results & improve.",
    Icon: ChartNoAxesCombined,
    desktopPosition: "xl:left-[79%] xl:top-0",
  },
];

function ProcessCard({ step }: { step: ProcessStep }) {
  const Icon = step.Icon;

  return (
    <li
      className={[
        "relative flex min-h-[116px] items-center gap-4",
        "rounded-[26px] border border-[#E9F2EC] bg-white/95",
        "px-4 py-4 shadow-[0_16px_36px_rgba(12,67,49,0.08)]",
        "sm:gap-5 sm:px-6",
        "xl:absolute xl:z-20 xl:min-h-[172px]",
        "xl:w-[clamp(136px,11.7vw,190px)] xl:flex-col",
        "xl:justify-center xl:gap-2 xl:rounded-[29px]",
        "xl:px-3 xl:py-5 xl:text-center",
        step.desktopPosition,
      ].join(" ")}
    >
      {/* Mobile timeline node */}
      <span
        aria-hidden="true"
        className="absolute -left-[48px] top-1/2 z-20 h-6 w-6 -translate-y-1/2 rounded-full border-[5px] border-[#218E1F] bg-white xl:hidden"
      />

      {/* Icon */}
      <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[19px] bg-[#F0FAF1] text-[#239E13] sm:h-[72px] sm:w-[72px] xl:h-auto xl:w-auto xl:bg-transparent">
        <Icon
          aria-hidden="true"
          className="h-10 w-10 sm:h-11 sm:w-11"
          strokeWidth={2.15}
        />
      </span>

      <div className="min-w-0">
        <h3 className="text-[21px] font-extrabold leading-[1.13] tracking-[-0.035em] text-[#071B2F] sm:text-[23px] xl:text-[19px] 2xl:text-[21px]">
          {step.title}
        </h3>

        <p className="mt-1.5 text-[15px] leading-[1.36] text-[#14273B] sm:text-[17px] xl:mt-2 xl:text-[14px] 2xl:text-[15px]">
          {step.description}
        </p>
      </div>

      {/* Desktop card pointer */}
      <span
        aria-hidden="true"
        className="absolute -bottom-[7px] left-1/2 hidden h-[15px] w-[15px] -translate-x-1/2 rotate-45 border-b border-r border-[#E9F2EC] bg-white xl:block"
      />
    </li>
  );
}

function DesktopJourneyLine() {
  const nodes = [
    [110, 398],
    [315, 340],
    [535, 286],
    [755, 242],
    [960, 195],
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full overflow-visible xl:block"
      viewBox="0 0 1100 510"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M -30 480 C 45 427 52 402 110 398 S 245 404 315 340 S 455 338 535 286 S 650 293 755 242 S 885 249 960 195 S 1046 177 1130 105"
        fill="none"
        stroke="#238C20"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 11"
        vectorEffect="non-scaling-stroke"
      />

      {nodes.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="13"
          fill="white"
          stroke="#238C20"
          strokeWidth="6"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function MobileJourneyLine() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 top-0 z-0 w-[64px] xl:hidden"
      height="100%"
      viewBox="0 0 64 660"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M 32 58 C -2 99 65 142 32 194 S 2 277 32 330 S 65 412 32 466 S -2 550 32 602"
        fill="none"
        stroke="#238C20"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 10"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function PeakFlag({ mobile = false }: { mobile?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 52 78"
      className={
        mobile
          ? "absolute bottom-[62%] right-[14%] h-[54px] w-[36px] xl:hidden"
          : "absolute bottom-[76%] right-[8%] hidden h-[65px] w-[44px] xl:block"
      }
    >
      <path
        d="M10 7 V76"
        stroke="#0A2C2F"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M12 8 C23 1 35 12 48 8 L43 24 C30 21 24 31 12 26 Z"
        fill="#168A12"
      />
    </svg>
  );
}

function MountainLandscape() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[205px] sm:h-[235px] xl:h-[74%]"
      aria-hidden="true"
    >
      {/* Desktop mountain landscape */}
      <svg
        className="hidden h-full w-full xl:block"
        viewBox="0 0 1600 500"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="process-wide-hill"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0" stopColor="#A4DBB8" />
            <stop offset="1" stopColor="#E3F6E9" />
          </linearGradient>

          <linearGradient
            id="process-wide-peak"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0" stopColor="#73C7AB" />
            <stop offset="1" stopColor="#C5ECD5" />
          </linearGradient>
        </defs>

        <path
          d="M0 305 C140 265 230 365 350 300 S500 215 650 263 S830 195 963 241 S1200 273 1325 153 S1500 205 1600 160 L1600 500 L0 500 Z"
          fill="#EDF9F4"
        />

        <path
          d="M0 415 C115 350 170 465 278 410 S430 319 550 390 S745 401 858 342 S1045 450 1192 334 S1410 211 1600 330 L1600 500 L0 500 Z"
          fill="url(#process-wide-hill)"
          opacity="0.75"
        />

        <path
          d="M0 469 C142 391 224 507 390 445 S585 365 745 452 S1030 483 1140 410 S1330 347 1600 385 L1600 500 L0 500 Z"
          fill="#A4DABE"
          opacity="0.6"
        />

        {/* Summit and mountain facets */}
        <path
          d="M1105 500 L1470 118 L1600 330 L1600 500 Z"
          fill="url(#process-wide-peak)"
        />

        <path
          d="M1470 118 L1600 330 L1600 500 L1420 500 Z"
          fill="#67BFA4"
          opacity="0.66"
        />

        <path
          d="M1470 118 L1290 395 L1395 355 Z"
          fill="#C4EDDA"
          opacity="0.75"
        />

        <path
          d="M0 490 C160 442 290 507 410 480 S730 455 870 488 S1165 458 1315 480 S1470 493 1600 460 L1600 500 L0 500 Z"
          fill="#E7F7EC"
          opacity="0.58"
        />
      </svg>

      {/* Mobile mountain landscape */}
      <svg
        className="h-full w-full xl:hidden"
        viewBox="0 0 600 300"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="process-mobile-hill"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0" stopColor="#CEEDDB" />
            <stop offset="1" stopColor="#7DCBAD" />
          </linearGradient>
        </defs>

        <path
          d="M0 155 Q 90 88 175 163 T345 151 T600 135 L600 300 L0 300 Z"
          fill="#F0FAF4"
        />

        <path
          d="M0 220 C 78 182 113 280 200 221 S350 188 420 240 L505 85 L600 235 L600 300 L0 300 Z"
          fill="url(#process-mobile-hill)"
        />

        <path
          d="M0 276 C 128 219 171 316 280 267 S390 265 505 85 L600 240 L600 300 L0 300 Z"
          fill="#8BCDB2"
          opacity="0.45"
        />

        <path
          d="M505 85 L600 239 L600 300 L490 300 Z"
          fill="#5CB69A"
          opacity="0.55"
        />

        <path
          d="M505 85 L418 264 L466 235 Z"
          fill="#D4F1E1"
          opacity="0.75"
        />
      </svg>

      <PeakFlag />
      <PeakFlag mobile />
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative isolate overflow-hidden bg-[#FCFEFD] text-[#071B2F]"
    >
      {/* Soft background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-52 h-[400px] w-[400px] rounded-full bg-[#E3F7E9]/70 blur-3xl sm:h-[550px] sm:w-[550px]"
      />

      <MountainLandscape />

      <div
        className="
          relative z-10 mx-auto max-w-[1900px]
          px-5 pb-[180px] pt-14
          sm:px-8 sm:pb-[200px] sm:pt-16
          xl:grid xl:min-h-[660px]
          xl:grid-cols-[34%_66%]
          xl:gap-0 xl:px-12 xl:pb-10 xl:pt-8
        "
      >
        {/* Heading and CTA */}
        <div
          className="
            relative z-20 mx-auto max-w-[780px] text-center
            xl:mx-0 xl:max-w-[530px] xl:pt-14 xl:text-left
          "
        >
          <p className="text-[13px] font-extrabold uppercase tracking-[0.23em] text-[#1C7B23] sm:text-[16px]">
            Our Process
          </p>

          <h2
            id="process-heading"
            className="
              mt-5 text-[clamp(2.35rem,6vw,4.2rem)]
              font-extrabold leading-[1.04]
              tracking-[-0.055em]
              xl:text-[clamp(2.65rem,3.4vw,4.35rem)]
            "
          >
            How We Worked
            <span className="block">
              With <span className="text-[#207F17]">Doctors</span>
            </span>
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[590px]
              text-[16px] leading-[1.65] text-[#263A4A]
              sm:text-[19px]
              xl:mx-0 xl:mt-7 xl:text-[19px]
            "
          >
            A guided, step-by-step process to build a stronger,
            more visible and trusted digital presence.
          </p>

          <Link
            href="#contact"
            className="
              mt-7 inline-flex min-h-[50px]
              items-center justify-center gap-3
              rounded-full bg-[#0E7813]
              px-7 py-3 text-[16px]
              font-bold text-white
              shadow-[0_8px_20px_rgba(13,95,28,0.13)]
              transition-colors hover:bg-[#07590D]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#0E7813]
              sm:text-[17px] xl:mt-8
            "
          >
            Get Started
            <ArrowRight
              aria-hidden="true"
              className="h-5 w-5"
            />
          </Link>
        </div>

        {/* Process cards and connecting paths */}
        <div
          className="
            relative z-10 mx-auto mt-12
            w-full max-w-[780px]
            xl:mx-0 xl:mt-5
            xl:h-[510px] xl:max-w-none
          "
        >
          <DesktopJourneyLine />

          {/* Mobile/tablet: vertical timeline */}
          <div className="relative xl:hidden">
            <MobileJourneyLine />

            <ol
              aria-label="Our five-step working process"
              className="relative z-10 flex flex-col gap-5 pl-[68px]"
            >
              {steps.map((step) => (
                <ProcessCard
                  key={step.title}
                  step={step}
                />
              ))}
            </ol>
          </div>

          {/* Desktop: ascending floating cards */}
          <ol
            aria-label="Our five-step working process"
            className="relative hidden h-full w-full xl:block"
          >
            {steps.map((step) => (
              <ProcessCard
                key={step.title}
                step={step}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
