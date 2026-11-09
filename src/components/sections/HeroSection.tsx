
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Layers3,
  Monitor,
  Play,
  Target,
  UserRound,
  UsersRound,
  Video,
  type LucideIcon,
} from "lucide-react";

type HeroSectionProps = {
  posterSrc?: string;
  introVideoSrc?: string;
};

type DisplayItem = {
  label: string;
  Icon: LucideIcon;
};

const benefits: readonly DisplayItem[] = [
  { label: "Improve Visibility", Icon: Target },
  { label: "Build Credibility", Icon: UsersRound },
  { label: "Attract More Patients", Icon: ChartNoAxesCombined },
];

const services: readonly DisplayItem[] = [
  { label: "Profile Management", Icon: Monitor },
  { label: "Reels & Video Production", Icon: Video },
  { label: "Content Strategy", Icon: Layers3 },
  { label: "Practice Growth", Icon: ChartNoAxesCombined },
];

function HeroWaves() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1600 250"
      preserveAspectRatio="none"
      className="
        pointer-events-none absolute inset-x-0 bottom-0
        h-[130px] w-full sm:h-[175px] lg:h-[210px]
      "
    >
      <path
        d="M0 70 C115 165 190 145 310 187 S545 223 680 203 S905 186 1060 220 S1325 152 1460 102 S1545 67 1600 92 V250 H0 Z"
        fill="#EAF9F0"
        opacity="0.92"
      />
      <path
        d="M0 118 C145 215 260 188 390 222 S665 236 815 230 S1080 215 1265 193 S1480 157 1600 125 V250 H0 Z"
        fill="#CFF2DF"
        opacity="0.72"
      />
      <path
        d="M0 172 C160 233 235 219 392 244 S765 237 930 241 S1285 232 1430 208 S1535 205 1600 184 V250 H0 Z"
        fill="#AEE6C9"
        opacity="0.45"
      />
    </svg>
  );
}

function Benefit({ label, Icon }: DisplayItem) {
  return (
    <li
      className="
        flex min-w-0 flex-col items-start gap-2
        px-2 py-3
        sm:flex-row sm:items-center sm:gap-3 sm:px-4
        xl:gap-4 xl:px-0 xl:py-4
      "
    >
      <span
        className="
          flex h-[46px] w-[46px] shrink-0
          items-center justify-center rounded-full
          border border-[#E0F5E9] bg-[#ECFFF3]
          text-[#159B27]
          shadow-[0_5px_14px_rgba(17,143,61,0.08)]
          sm:h-[56px] sm:w-[56px]
          xl:h-[64px] xl:w-[64px]
        "
      >
        <Icon
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8"
          strokeWidth={2.1}
        />
      </span>

      <span
        className="
          text-[12px] font-bold leading-[1.25]
          tracking-[-0.025em] text-[#0B2234]
          sm:text-[15px] xl:text-[17px] 2xl:text-[19px]
        "
      >
        {label}
      </span>
    </li>
  );
}

function ServiceTile({
  label,
  Icon,
  index,
}: DisplayItem & { index: number }) {
  return (
    <li
      className={[
        "flex min-h-[92px] min-w-0 items-center gap-3",
        "px-3 py-4",
        "sm:min-h-[112px] sm:gap-4 sm:px-6",
        "lg:gap-5 lg:px-7",
        index % 2 === 0
          ? "border-r border-[#C4DED3] lg:border-r"
          : "lg:border-r",
        index < 2
          ? "border-b border-[#C4DED3] lg:border-b-0"
          : "",
        index === 1 || index === 3 ? "border-r-0" : "",
        index === 2 ? "lg:border-r" : "",
        index === 3 ? "lg:border-r-0" : "",
      ].join(" ")}
    >
      <Icon
        aria-hidden="true"
        className="
          h-8 w-8 shrink-0 text-[#0F9B21]
          sm:h-10 sm:w-10 lg:h-11 lg:w-11
        "
        strokeWidth={2}
      />

      <span
        className="
          max-w-[225px] text-[13px]
          font-semibold leading-[1.25]
          tracking-[-0.035em] text-[#0B2234]
          sm:text-[17px] lg:text-[18px] 2xl:text-[20px]
        "
      >
        {label}
      </span>
    </li>
  );
}

export function HeroSection({
  posterSrc = "/images/hero/doctor-cover.png",
  introVideoSrc,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const canPlayVideo = Boolean(introVideoSrc) && !videoFailed;

  async function playIntro() {
    if (!canPlayVideo || !videoRef.current) return;

    try {
      await videoRef.current.play();
    } catch {
      setVideoFailed(true);
      setIsPlaying(false);
    }
  }

  return (
    <section
      id="top"
      aria-labelledby="talkreach-hero-title"
      className="
        relative isolate overflow-hidden
        bg-[#FCFEFD] text-[#0B2234]
      "
    >
      {/* Soft medical background shapes */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-[13%] -top-[370px]
          h-[520px] w-[740px]
          rounded-[50%] bg-[#DDF8E6]/80
          blur-[1px]
          sm:-right-[7%] sm:-top-[430px]
          sm:h-[650px] sm:w-[820px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[18%] -top-[340px]
          h-[450px] w-[550px]
          rounded-[50%] bg-[#EDFBF2]/70 blur-2xl
        "
      />

      <HeroWaves />

      <div
        className="
          relative z-10 mx-auto w-full max-w-[1820px]
          px-5 pb-14 pt-10
          sm:px-8 sm:pb-16 sm:pt-14
          lg:px-10 lg:pt-16
          xl:px-12 xl:pb-[78px]
          2xl:px-16
        "
      >
        {/* Main responsive layout */}
        <div
          className="
            grid min-w-0 items-center gap-8
            lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]
            lg:gap-x-9 lg:gap-y-6
            xl:grid-cols-[minmax(0,1.02fr)_minmax(0,1.22fr)_minmax(205px,0.52fr)]
            xl:gap-x-8
            2xl:gap-x-10
          "
        >
          {/* LEFT CONTENT */}
          <div className="min-w-0 lg:pr-1">
            <div
              className="
                mb-6 inline-flex items-start gap-4
                text-[11px] font-semibold uppercase
                tracking-[0.065em] text-[#14313B]
                sm:text-[13px]
                lg:text-[12px]
                2xl:text-[14px]
              "
            >
              <span
                className="
                  relative pb-3
                  after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:w-full
                  after:bg-[#139B29]
                "
              >
                Content
              </span>

              <span aria-hidden="true" className="text-[#7BB8A2]">
                |
              </span>

              <span className="pb-3">Strategy</span>

              <span aria-hidden="true" className="text-[#7BB8A2]">
                |
              </span>

              <span
                className="
                  relative pb-3
                  after:absolute after:bottom-0 after:left-1/2
                  after:h-0 after:w-0
                  after:-translate-x-1/2
                  after:border-x-[5px] after:border-t-[5px]
                  after:border-x-transparent
                  after:border-t-[#0B5154]
                "
              >
                Visibility
              </span>
            </div>

            <h1
              id="talkreach-hero-title"
              className="
                text-[clamp(2.55rem,7.8vw,4.15rem)]
                font-extrabold leading-[1.055]
                tracking-[-0.056em] text-[#061D2D]
                lg:text-[clamp(2.7rem,4.1vw,4.2rem)]
                xl:text-[clamp(2.85rem,3.45vw,4.45rem)]
              "
            >
              Digital Growth
              <br />
              for Doctors,
              <br />
              <span className="text-[#139B25]">
                Made Simple.
              </span>
            </h1>

            <p
              className="
                mt-5 max-w-[520px]
                text-[16px] leading-[1.55] text-[#27555B]
                sm:text-[18px]
                lg:text-[17px]
                2xl:text-[21px]
              "
            >
              We help doctors build a professional,
              trustworthy, and high-performing digital
              presence.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                mt-6 flex flex-col items-start gap-3
                sm:flex-row sm:flex-wrap sm:items-center
                lg:mt-7
              "
            >
              <Link
                href="#contact"
                className="
                  inline-flex min-h-[49px] w-full
                  items-center justify-center gap-2
                  rounded-full bg-[#0AA522]
                  px-5 py-3 text-center
                  text-[13px] font-bold text-white
                  shadow-[0_5px_15px_rgba(15,143,41,0.18)]
                  transition-colors hover:bg-[#087D1C]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#126A32]
                  sm:w-auto sm:text-[14px]
                  2xl:text-[15px]
                "
              >
                <UserRound
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                />
                Request a Profile Review
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                />
              </Link>

              {canPlayVideo ? (
                <button
                  type="button"
                  onClick={playIntro}
                  className="
                    inline-flex min-h-[49px] w-full
                    items-center justify-center gap-2
                    rounded-full border border-[#E0EEE8]
                    bg-white px-5 py-3
                    text-[13px] font-semibold text-[#0C2435]
                    shadow-[0_4px_12px_rgba(30,88,65,0.08)]
                    transition-colors hover:bg-[#EFFAF2]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#126A32]
                    sm:w-auto sm:text-[14px]
                    2xl:text-[15px]
                  "
                >
                  <Play
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  />
                  Watch Intro (1 min)
                </button>
              ) : (
                <Link
                  href="#reels"
                  className="
                    inline-flex min-h-[49px] w-full
                    items-center justify-center gap-2
                    rounded-full border border-[#E0EEE8]
                    bg-white px-5 py-3
                    text-[13px] font-semibold text-[#0C2435]
                    shadow-[0_4px_12px_rgba(30,88,65,0.08)]
                    transition-colors hover:bg-[#EFFAF2]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#126A32]
                    sm:w-auto sm:text-[14px]
                    2xl:text-[15px]
                  "
                >
                  <Play
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  />
                  See Doctor Reels
                </Link>
              )}
            </div>
          </div>

          {/* CENTER VIDEO / IMAGE */}
          <div className="relative min-w-0">
            <div
              className="
                relative aspect-[16/10] w-full
                overflow-hidden rounded-[23px]
                border-[3px] border-white bg-[#CEE3E4]
                shadow-[0_0_0_1px_rgba(88,222,174,0.15),0_0_27px_rgba(46,227,160,0.34),0_15px_33px_rgba(6,78,58,0.1)]
                sm:rounded-[28px]
              "
            >
              {canPlayVideo ? (
                <video
                  ref={videoRef}
                  src={introVideoSrc}
                  poster={posterSrc}
                  preload="none"
                  playsInline
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => {
                    setVideoFailed(true);
                    setIsPlaying(false);
                  }}
                  className="
                    absolute inset-0 h-full w-full
                    object-cover
                  "
                />
              ) : (
                <Image
                  src={posterSrc}
                  alt="Illustrative preview of a healthcare video"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 42vw"
                  className="object-cover object-center"
                />
              )}

              {/* PLAY BUTTON */}
              {!isPlaying &&
                (canPlayVideo ? (
                  <button
                    type="button"
                    onClick={playIntro}
                    aria-label="Play Talkreach Media introduction video"
                    className="
                      absolute left-1/2 top-1/2
                      flex h-[66px] w-[66px]
                      -translate-x-1/2 -translate-y-1/2
                      items-center justify-center
                      rounded-full border-[3px]
                      border-white bg-[#075653]/90
                      text-white
                      shadow-[0_5px_14px_rgba(0,0,0,0.2)]
                      transition-transform hover:scale-105
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#0AA522]
                      sm:h-[78px] sm:w-[78px]
                    "
                  >
                    <Play
                      aria-hidden="true"
                      className="ml-1 h-7 w-7 fill-current"
                    />
                  </button>
                ) : (
                  <Link
                    href="#reels"
                    aria-label="See Talkreach Media doctor reels"
                    className="
                      absolute left-1/2 top-1/2
                      flex h-[66px] w-[66px]
                      -translate-x-1/2 -translate-y-1/2
                      items-center justify-center
                      rounded-full border-[3px]
                      border-white bg-[#075653]/90
                      text-white
                      shadow-[0_5px_14px_rgba(0,0,0,0.2)]
                      transition-transform hover:scale-105
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#0AA522]
                      sm:h-[78px] sm:w-[78px]
                    "
                  >
                    <Play
                      aria-hidden="true"
                      className="ml-1 h-7 w-7 fill-current"
                    />
                  </Link>
                ))}
            </div>
          </div>

          {/* RIGHT BENEFITS */}
          <aside
            aria-label="What our digital services aim to improve"
            className="
              min-w-0
              lg:col-span-2 xl:col-span-1
            "
          >
            <ul
              className="
                grid grid-cols-3
                divide-x divide-[#B8D7C9]
                xl:relative xl:grid-cols-1
                xl:divide-x-0 xl:divide-y-0
                xl:before:absolute
                xl:before:bottom-[15%]
                xl:before:left-[31px]
                xl:before:top-[15%]
                xl:before:w-px
                xl:before:bg-[#9FDCC1]
              "
            >
              {benefits.map((benefit) => (
                <Benefit
                  key={benefit.label}
                  {...benefit}
                />
              ))}
            </ul>
          </aside>
        </div>

        {/* BOTTOM SERVICES STRIP */}
        <div
          className="
            mt-10 overflow-hidden
            rounded-[26px]
            border border-[#DCECE6]
            bg-white/95
            shadow-[0_12px_31px_rgba(37,121,81,0.085)]
            sm:mt-12 lg:mt-12 xl:mt-11
          "
        >
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceTile
                key={service.label}
                index={index}
                {...service}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
