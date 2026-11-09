import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChartNoAxesCombined,
  Circle,
} from "lucide-react";

/**
 * Talkreach Media – profile-audit / case-study section.
 *
 * All values in DEMO_CASE_STUDY are fictional visual examples.
 * Replace them with approved, sourced client evidence before publishing
 * anything as a verified case study.
 */

type ProfileSnapshot = {
  posts: string;
  followers: string;
  reels: string;
  observations: readonly string[];
  statusLabel: string;
};

type MetricTone = "green" | "blue" | "purple" | "orange";

type GrowthMetric = {
  label: string;
  value: string;
  tone: MetricTone;
};

type ChartPoint = {
  label: string;
  value: number;
};

export type CaseStudyData = {
  /** Use true only for substantiated, client-approved results. */
  verified: boolean;
  title: string;
  summary: string;
  doctorName: string;
  specialty: string;
  avatarSrc?: string;
  before: ProfileSnapshot;
  after: ProfileSnapshot;
  metrics: readonly GrowthMetric[];
  chart: readonly ChartPoint[];
  /** Optional URL for an actual published case study or data report. */
  detailsHref?: string;
};

export const DEMO_CASE_STUDY: CaseStudyData = {
  verified: false,
  title: "Example Profile Audit & Growth Impact",
  summary:
    "An illustrative comparison showing how a structured digital strategy could change a doctor's online presence.",
  doctorName: "Dr. Rohan Shah",
  specialty: "Consultant Cardiologist",
  avatarSrc: "/images/case-study/demo-doctor-avatar.png",
  before: {
    posts: "14",
    followers: "1.2K",
    reels: "3",
    observations: [
      "Irregular posting",
      "Limited visibility",
      "No clear content strategy",
    ],
    statusLabel: "Low Visibility",
  },
  after: {
    posts: "286",
    followers: "24.6K",
    reels: "122",
    observations: [
      "Consistent, well-planned content",
      "Clearer audience engagement",
      "Goal-driven content strategy",
    ],
    statusLabel: "Improved Professional Presence",
  },
  metrics: [
    { label: "Follower Growth", value: "+1,950%", tone: "green" },
    { label: "Reel Views", value: "+1,943%", tone: "blue" },
    { label: "Profile Visits", value: "+1,700%", tone: "purple" },
    { label: "Enquiries", value: "+1,633%", tone: "orange" },
  ],
  chart: [
    { label: "Jan", value: 4700 },
    { label: "Feb", value: 8000 },
    { label: "Mar", value: 11500 },
    { label: "Apr", value: 14500 },
    { label: "May", value: 18700 },
    { label: "Jun", value: 25000 },
  ],
};

const toneStyles: Record<MetricTone, { card: string; number: string }> = {
  green: { card: "bg-[#EAF8EE]", number: "text-[#087539]" },
  blue: { card: "bg-[#E8F1FF]", number: "text-[#125FCA]" },
  purple: { card: "bg-[#F4EBFF]", number: "text-[#7927C9]" },
  orange: { card: "bg-[#FFF0E7]", number: "text-[#D6490D]" },
};

function LandscapeWaves() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 160"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[86px] w-full sm:h-[120px]"
    >
      <path
        d="M0 50C175 90 245 155 423 120S715 90 867 145 1180 147 1370 87 1510 48 1600 76V160H0Z"
        fill="#EDF9F1"
      />
      <path
        d="M0 92C210 132 340 166 514 142S780 121 980 156 1320 108 1600 115V160H0Z"
        fill="#DDF4E5"
      />
      <path
        d="M0 132C180 157 360 163 570 151S945 162 1120 149 1470 124 1600 137V160H0Z"
        fill="#BDE8CB"
        opacity="0.5"
      />
    </svg>
  );
}

function DoctorAvatar({
  src,
  name,
}: {
  src?: string;
  name: string;
}) {
  const initials = name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase();

  return (
    <div className="relative h-[66px] w-[66px] shrink-0 overflow-hidden rounded-full border border-[#E2E9EA] bg-[#E8EDEF] sm:h-[78px] sm:w-[78px]">
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#567077]">
        {initials}
      </span>
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes="78px"
          className="object-cover"
        />
      ) : null}
    </div>
  );
}

function ProfileCard({
  snapshot,
  person,
  specialty,
  avatarSrc,
  after,
}: {
  snapshot: ProfileSnapshot;
  person: string;
  specialty: string;
  avatarSrc?: string;
  after: boolean;
}) {
  const statItems = [
    { label: "Posts", value: snapshot.posts },
    { label: "Followers", value: snapshot.followers },
    { label: "Reels", value: snapshot.reels },
  ];

  return (
    <article className="flex h-full min-w-0 flex-col rounded-[23px] border border-[#E6EBED] bg-white p-[9px] shadow-[0_12px_30px_rgba(14,38,49,0.075)] sm:rounded-[26px]">
      <div
        className={[
          "flex min-h-[48px] items-center justify-between rounded-t-[16px] px-4 py-3 sm:px-5",
          after ? "bg-[#DFF3E6]" : "bg-[#F0F1F3]",
        ].join(" ")}
      >
        <h3 className="text-[17px] font-extrabold tracking-[-0.035em] text-[#101B2D] sm:text-[20px]">
          {after ? "After (With Talkreach Media)" : "Before"}
        </h3>
        {after ? (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8DD9AB] text-[#075D2C]">
            <Check aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={3} />
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-5">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <DoctorAvatar src={avatarSrc} name={person} />
          <div className="grid min-w-0 flex-1 grid-cols-3 gap-1 border-l border-[#E3E9EC] pl-3 sm:gap-2 sm:pl-4">
            {statItems.map((stat) => (
              <div key={stat.label} className="min-w-0 text-center">
                <p
                  className={[
                    "text-[18px] font-extrabold leading-tight tracking-[-0.04em] sm:text-[24px]",
                    after ? "text-[#08763B]" : "text-[#101827]",
                  ].join(" ")}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] leading-tight text-[#536274] sm:text-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-t border-[#EEF1F2] pt-4">
          <p className="text-[18px] font-bold leading-tight tracking-[-0.035em] text-[#111C2C] sm:text-[20px]">
            {person}
          </p>
          <p className="mt-1 text-[13px] font-medium text-[#4F5D6C] sm:text-[14px]">
            {specialty}
          </p>
        </div>

        <ul className="mt-4 space-y-2.5">
          {snapshot.observations.map((observation) => (
            <li key={observation} className="flex items-start gap-2.5 text-[13px] leading-[1.45] text-[#455467] sm:text-[14px]">
              {after ? (
                <span className="mt-[1px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border-2 border-[#08763B] text-[#08763B]">
                  <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                </span>
              ) : (
                <Circle aria-hidden="true" className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#778797]" strokeWidth={2.2} />
              )}
              <span>{observation}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <div
            className={[
              "flex min-h-[42px] items-center justify-center rounded-full px-3 py-2.5 text-center text-[12px] font-bold sm:text-[13px]",
              after
                ? "bg-[#00843D] text-white"
                : "border border-[#CAD3D9] bg-white text-[#5A6875]",
            ].join(" ")}
          >
            {snapshot.statusLabel}
          </div>
        </div>
      </div>
    </article>
  );
}

function GrowthChart({ points, verified }: { points: readonly ChartPoint[]; verified: boolean }) {
  if (points.length === 0) {
    return <p className="py-10 text-center text-sm text-[#60707B]">No chart data available.</p>;
  }

  const plot = { x: 57, y: 17, w: 630, h: 193 };
  const highest = Math.max(1, ...points.map((point) => point.value));
  const axisMax = Math.ceil(highest / 5000) * 5000;
  const ticks = Array.from({ length: 6 }, (_, i) => axisMax * (5 - i) / 5);
  const xFor = (i: number) =>
    plot.x + (points.length === 1 ? plot.w / 2 : (i / (points.length - 1)) * plot.w);
  const yFor = (value: number) => plot.y + plot.h - (value / axisMax) * plot.h;
  const line = points.map((point, i) => `${i === 0 ? "M" : "L"}${xFor(i).toFixed(1)},${yFor(point.value).toFixed(1)}`).join(" ");
  const area = `${line} L${xFor(points.length - 1).toFixed(1)},${plot.y + plot.h} L${xFor(0).toFixed(1)},${plot.y + plot.h} Z`;
  const formatTick = (num: number) =>
    num >= 1000 ? `${Number((num / 1000).toFixed(1))}K` : String(num);

  return (
    <svg
      role="img"
      aria-label={`${verified ? "Growth trend" : "Illustrative growth trend"}: ${points.map((p) => `${p.label} ${p.value.toLocaleString("en-US")}`).join(", ")}`}
      viewBox="0 0 735 260"
      preserveAspectRatio="xMidYMid meet"
      className="block h-auto w-full"
    >
      <defs>
        <linearGradient id="talkreach-case-growth-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9EDDB8" stopOpacity="0.65" />
          <stop offset="1" stopColor="#EFF9F2" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {ticks.map((tick) => {
        const y = yFor(tick);
        return (
          <g key={tick}>
            <line x1={plot.x} x2={plot.x + plot.w} y1={y} y2={y} stroke="#E8ECEF" strokeWidth="1" />
            <text x={plot.x - 12} y={y + 5} textAnchor="end" fontSize="17" fill="#667485">
              {formatTick(tick)}
            </text>
          </g>
        );
      })}
      <path d={area} fill="url(#talkreach-case-growth-fill)" />
      <path d={line} fill="none" stroke="#07803B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((point, i) => (
        <g key={`${point.label}-${i}`}>
          <circle cx={xFor(i)} cy={yFor(point.value)} r="6" fill="#07803B" stroke="#FFFFFF" strokeWidth="2.5" />
          <text x={xFor(i)} y="246" textAnchor="middle" fontSize="17" fill="#667485">
            {point.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function GrowthOverview({
  metrics,
  chart,
  verified,
}: {
  metrics: readonly GrowthMetric[];
  chart: readonly ChartPoint[];
  verified: boolean;
}) {
  return (
    <article
      id="case-study-growth"
      className="min-w-0 rounded-[23px] border border-[#E6EBED] bg-white p-4 shadow-[0_12px_30px_rgba(14,38,49,0.075)] sm:rounded-[26px] sm:p-5 lg:col-span-2 xl:col-span-1"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-[19px] font-extrabold tracking-[-0.035em] text-[#101B2D] sm:text-[21px]">
          Growth Overview
        </h3>
        {!verified ? (
          <span className="rounded-full bg-[#F3F6F4] px-2.5 py-1 text-[10px] font-semibold text-[#59686F]">
            Sample data
          </span>
        ) : null}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
        {metrics.map((metric) => {
          const tone = toneStyles[metric.tone];
          return (
            <div key={metric.label} className={`min-w-0 rounded-[15px] px-3 py-3 sm:px-3.5 ${tone.card}`}>
              <p className={`text-[17px] font-extrabold leading-tight tracking-[-0.045em] sm:text-[19px] ${tone.number}`}>
                <span aria-hidden="true">↗ </span>{metric.value}
              </p>
              <p className="mt-1 text-[11px] leading-[1.3] text-[#46566A] sm:text-[12px]">
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 sm:mt-6">
        <GrowthChart points={chart} verified={verified} />
      </div>
      {!verified ? (
        <p className="mt-1 text-[11px] leading-4 text-[#667685]">
          All figures above are illustrative and do not represent an actual client outcome.
        </p>
      ) : null}
    </article>
  );
}

export function CaseStudySection({
  data = DEMO_CASE_STUDY,
}: {
  data?: CaseStudyData;
}) {
  const { verified } = data;
  return (
    <section
      id="case-studies"
      aria-labelledby="case-study-heading"
      className="relative isolate overflow-hidden bg-[#FCFDFD] py-10 text-[#101D32] sm:py-14 lg:py-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-44 h-[340px] w-[420px] rounded-full bg-[#E5F8E9]/65" />
      <LandscapeWaves />

      <div className="relative z-10 mx-auto w-full max-w-[1840px] px-4 sm:px-7 lg:px-10 xl:px-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex min-w-0 items-start gap-4 sm:gap-5">
            <span className="hidden h-[62px] w-[62px] shrink-0 items-center justify-center border-r border-[#B5C5CC] pr-4 text-[#08743B] sm:flex">
              <ChartNoAxesCombined className="h-9 w-9" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#08743B] sm:text-[11px]">
                {verified ? "Client Case Study" : "Illustrative Example · Demo Only"}
              </p>
              <h2
                id="case-study-heading"
                className="mt-1 text-[clamp(1.6rem,3vw,2.35rem)] font-extrabold leading-[1.1] tracking-[-0.05em] text-[#091B31]"
              >
                {data.title}
              </h2>
              <p className="mt-2 max-w-3xl text-[13px] leading-[1.55] text-[#516174] sm:text-[15px]">
                {data.summary}
              </p>
            </div>
          </div>
          <Link
            href={verified && data.detailsHref ? data.detailsHref : "#case-study-growth"}
            className="inline-flex min-h-[46px] w-full shrink-0 items-center justify-center gap-3 self-start rounded-full border border-[#CDE8D5] bg-white/90 px-5 py-2.5 text-[13px] font-bold text-[#08743B] shadow-[0_3px_10px_rgba(9,70,38,0.04)] transition-colors hover:bg-[#EFF9F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B7C3A] focus-visible:ring-offset-2 sm:w-auto sm:text-[14px] lg:self-center"
          >
            {verified && data.detailsHref ? "View Detailed Analytics" : "View Growth Overview"}
            <ArrowRight aria-hidden="true" className="h-[18px] w-[18px]" />
          </Link>
        </div>

        <div className="mt-7 grid min-w-0 grid-cols-1 gap-4 sm:mt-9 sm:gap-5 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.56fr)] xl:gap-6">
          <div className="relative min-w-0">
            <ProfileCard
              snapshot={data.before}
              person={data.doctorName}
              specialty={data.specialty}
              avatarSrc={data.avatarSrc}
              after={false}
            />
            {/* Transition arrow between desktop profile cards */}
            <span aria-hidden="true" className="absolute -right-[31px] top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#E2F5E9] text-[#08743B] lg:flex">
              <ArrowRight className="h-6 w-6" strokeWidth={2.7} />
            </span>
          </div>

          <span aria-hidden="true" className="-my-1 flex justify-center lg:hidden">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E2F5E9] text-[#08743B]">
              <ArrowDown className="h-6 w-6" strokeWidth={2.7} />
            </span>
          </span>

          <ProfileCard
            snapshot={data.after}
            person={data.doctorName}
            specialty={data.specialty}
            avatarSrc={data.avatarSrc}
            after
          />

          <GrowthOverview metrics={data.metrics} chart={data.chart} verified={verified} />
        </div>
      </div>
    </section>
  );
}
