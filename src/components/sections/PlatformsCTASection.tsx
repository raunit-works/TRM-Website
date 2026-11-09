
import {
  ArrowRight,
  Users,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';

// --------------------------------------------------
// BENEFITS
// --------------------------------------------------

const benefitItems = [
  {
    icon: Users,
    title: 'Be Discoverable',
    description: 'by the Right Audience',
  },
  {
    icon: ShieldCheck,
    title: 'Build Trust',
    description: 'with Quality Content',
  },
  {
    icon: TrendingUp,
    title: 'Create Practice',
    description: 'Growth',
  },
];

// --------------------------------------------------
// CUSTOM BRAND ICONS
// Avoid unavailable lucide-react brand exports.
// --------------------------------------------------

type BrandIconProps = {
  className?: string;
};

function InstagramBrandIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="platform-instagram-gradient"
          x1="7"
          y1="41"
          x2="41"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD600" />
          <stop offset="0.35" stopColor="#FF7A00" />
          <stop offset="0.62" stopColor="#FF0069" />
          <stop offset="0.82" stopColor="#D300C5" />
          <stop offset="1" stopColor="#7638FA" />
        </linearGradient>
      </defs>

      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="10"
        stroke="url(#platform-instagram-gradient)"
        strokeWidth="4.5"
      />

      <circle
        cx="24"
        cy="24"
        r="8.5"
        stroke="url(#platform-instagram-gradient)"
        strokeWidth="4.5"
      />

      <circle
        cx="35"
        cy="13"
        r="2.7"
        fill="#D300C5"
      />
    </svg>
  );
}

function MetaBrandIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 29C7.5 18.5 13.1 8 19 8C26 8 29.5 25.5 34 32C35.7 34.4 37.4 36 39.2 36C43.1 36 45 30.1 45 23.5C45 16.1 41.5 10 36.5 10C30.5 10 25.4 20 21.2 26.8C18.1 31.8 15.5 36 11.7 36C7.5 36 4 30.8 4 23.7C4 16.5 7.5 10.5 12.5 10.5C18.6 10.5 24 24 28 30.7"
        stroke="#0866FF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function YouTubeBrandIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="9"
        width="42"
        height="30"
        rx="8"
        fill="#FF0000"
      />

      <path
        d="M20 16.5L32 24L20 31.5V16.5Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedInBrandIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="6"
        fill="#0A66C2"
      />

      <circle
        cx="14"
        cy="15"
        r="3"
        fill="white"
      />

      <path
        d="M11 20H17V37H11V20ZM21 20H27V22.4C28.2 20.7 30.1 19.5 32.7 19.5C37.5 19.5 38 23 38 27V37H32V28.3C32 26.2 31.9 23.7 29.2 23.7C26.5 23.7 26 25.9 26 28.1V37H21V20Z"
        fill="white"
      />
    </svg>
  );
}

function WhatsAppBusinessBrandIcon({
  className,
}: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 5.5C14.1 5.5 6.2 13.4 6.2 23.2C6.2 26.7 7.2 30 9 32.8L6.5 41L15 38.7C17.7 40.2 20.8 41 24 41C33.8 41 41.8 33 41.8 23.2C41.8 13.4 33.8 5.5 24 5.5Z"
        stroke="#25D366"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill="#25D366"
      >
        B
      </text>
    </svg>
  );
}

// --------------------------------------------------
// PLATFORMS
// --------------------------------------------------

const platformItems = [
  {
    name: 'Instagram',
    icon: InstagramBrandIcon,
  },
  {
    name: 'Meta',
    icon: MetaBrandIcon,
  },
  {
    name: 'YouTube',
    icon: YouTubeBrandIcon,
  },
  {
    name: 'LinkedIn',
    icon: LinkedInBrandIcon,
  },
  {
    name: 'WhatsApp Business',
    icon: WhatsAppBusinessBrandIcon,
  },
];

// --------------------------------------------------
// MAIN SECTION
// --------------------------------------------------

export function PlatformsCTASection() {
  const consultationHref =
    siteConfig.cta.reviewHref || '#contact';

  return (
    <section
      id="contact"
      className="bg-white py-6 sm:py-10 xl:py-14"
    >
      <Container>
        <div
          className="
            relative isolate overflow-hidden
            rounded-[26px] border border-[#E5EDE3]
            bg-white
            shadow-[0_8px_35px_rgba(20,50,20,0.06)]
            sm:rounded-[30px]
          "
        >
          {/* Subtle background accents */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-24 -top-32 z-0
              h-80 w-80 rounded-full
              bg-[#D8EEDC]/70 blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -bottom-32 -left-24 z-0
              h-80 w-80 rounded-full
              bg-[#C8EBD3]/60 blur-3xl
            "
          />

          <div
            className="
              relative z-10 grid grid-cols-1
              items-stretch
              xl:grid-cols-[minmax(0,1.12fr)_minmax(0,1.55fr)_minmax(0,1.2fr)]
            "
          >
            {/* ---------------------------------- */}
            {/* LEFT: MAIN HEADLINE */}
            {/* ---------------------------------- */}

            <div
              className="
                flex flex-col justify-center
                border-b border-[#DDE6DA]
                px-5 py-8
                sm:px-8 sm:py-10
                xl:border-b-0 xl:border-r
                xl:px-8 xl:py-10
                2xl:px-10
              "
            >
              {/* Section label */}

              <div
                className="
                  mx-auto flex w-full
                  items-center justify-center gap-3
                  xl:mx-0 xl:justify-start
                "
              >
                <span className="h-[2px] w-8 shrink-0 bg-[#34751B]" />

                <p
                  className="
                    whitespace-nowrap
                    text-[11px] font-bold uppercase
                    tracking-[0.18em]
                    text-[#34751B]
                    sm:text-sm
                    xl:text-xs
                  "
                >
                  Go Multi-Platform
                </p>

                <span className="h-[2px] w-8 shrink-0 bg-[#34751B]" />
              </div>

              {/* Main heading */}

              <h2
                className="
                  mx-auto mt-5 w-full
                  text-center
                  text-[clamp(2rem,7.5vw,4rem)]
                  font-extrabold
                  leading-[1.06]
                  tracking-[-0.055em]
                  text-[#10263E]
                  xl:mx-0
                  xl:text-left
                  xl:text-[clamp(2rem,3vw,3.35rem)]
                "
              >
                <span className="block">
                  Let’s Build Your
                </span>

                <span className="block">
                  Digital Presence
                </span>

                <span className="block text-[#34751B]">
                  Across Platforms.
                </span>
              </h2>

              {/* Green underline */}

              <div
                className="
                  mt-5 flex justify-center
                  xl:justify-end
                "
              >
                <div
                  className="
                    h-[5px] w-[58%]
                    -rotate-2 rounded-full
                    bg-gradient-to-r
                    from-[#34751B] to-[#48B52A]
                  "
                />
              </div>
            </div>

            {/* ---------------------------------- */}
            {/* CENTER: BENEFITS */}
            {/* ---------------------------------- */}

            <div
              className="
                border-b border-[#DDE6DA]
                px-5 py-7
                sm:px-8 sm:py-10
                xl:border-b-0 xl:border-r
                xl:px-6 xl:py-10
                2xl:px-8
              "
            >
              <div
                className="
                  grid grid-cols-1 gap-5
                  sm:gap-6
                  xl:grid-cols-3 xl:gap-3
                "
              >
                {benefitItems.map(
                  ({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="
                        flex items-center gap-4
                        text-left
                        xl:flex-col
                        xl:gap-0
                        xl:text-center
                      "
                    >
                      {/* Benefit icon */}

                      <div
                        className="
                          flex h-[68px] w-[68px]
                          shrink-0 items-center justify-center
                          rounded-[20px]
                          bg-gradient-to-br
                          from-[#F1F8F0] to-[#E3F3E3]
                          text-[#34751B]
                          shadow-[0_5px_16px_rgba(52,117,27,0.07)]
                          sm:h-[88px] sm:w-[88px]
                          xl:h-[72px] xl:w-[72px]
                        "
                      >
                        <Icon
                          className="
                            h-8 w-8
                            sm:h-10 sm:w-10
                            xl:h-8 xl:w-8
                          "
                          strokeWidth={2.1}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Benefit text */}

                      <div
                        className="
                          min-w-0
                          xl:mt-4
                        "
                      >
                        <h3
                          className="
                            text-lg font-bold
                            leading-snug
                            tracking-[-0.035em]
                            text-[#10263E]
                            sm:text-2xl
                            xl:text-base
                          "
                        >
                          {title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-sm
                            leading-snug
                            tracking-[-0.02em]
                            text-[#263A50]
                            sm:text-lg
                            xl:text-sm
                          "
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* ---------------------------------- */}
            {/* RIGHT: SOCIAL PLATFORMS + CTA */}
            {/* ---------------------------------- */}

            <div
              className="
                flex flex-col justify-center
                px-5 py-7
                sm:px-8 sm:py-10
                xl:px-7 xl:py-10
                2xl:px-8
              "
            >
              {/* Social platform icons */}

              <div
                className="
                  grid grid-cols-5
                  items-center
                  gap-1.5
                  sm:gap-3
                  xl:gap-2
                "
              >
                {platformItems.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    role="img"
                    aria-label={name}
                    title={name}
                    className="
                      mx-auto flex aspect-square
                      w-full max-w-[108px]
                      items-center justify-center
                      rounded-[15px]
                      border border-[#F0F3EF]
                      bg-white
                      shadow-[0_5px_15px_rgba(20,50,20,0.06)]
                      transition duration-200
                      hover:-translate-y-1
                      hover:shadow-[0_8px_20px_rgba(20,50,20,0.10)]
                      sm:rounded-[22px]
                      xl:rounded-[18px]
                    "
                  >
                    <Icon
                      className="
                        h-8 w-8
                        sm:h-14 sm:w-14
                      "
                    />
                  </div>
                ))}
              </div>

              {/* Consultation CTA */}

              <a
                href={consultationHref}
                className="
                  group mt-6
                  inline-flex min-h-[58px]
                  w-full items-center
                  justify-center gap-3
                  rounded-full
                  bg-[#34751B]
                  px-4 py-4
                  text-center
                  text-base font-semibold
                  tracking-[-0.02em]
                  text-white
                  shadow-[0_5px_16px_rgba(52,117,27,0.14)]
                  transition duration-200
                  hover:bg-[#285C14]
                  hover:shadow-[0_8px_22px_rgba(52,117,27,0.20)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#34751B]
                  focus-visible:ring-offset-2
                  sm:min-h-[76px]
                  sm:gap-4
                  sm:px-6
                  sm:text-2xl
                  xl:mt-7
                  xl:text-lg
                "
              >
                <span>
                  Book a Consultation
                </span>

                <ArrowRight
                  size={24}
                  strokeWidth={2}
                  className="
                    shrink-0
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                    sm:h-8 sm:w-8
                  "
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
