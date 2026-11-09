
"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

/**
 * Decorative background.
 * Uses only CSS and inline SVG.
 */
function FAQDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      {/* Upper-right green curve */}
      <div
        className="
          absolute -right-[150px] -top-[235px]
          h-[340px] w-[540px]
          rotate-[14deg] rounded-[50%]
          bg-[#E1F8E4]/80
          sm:-right-[130px] sm:-top-[270px]
          sm:h-[425px] sm:w-[700px]
          xl:-right-[180px] xl:-top-[330px]
          xl:h-[460px] xl:w-[700px]
        "
      />

      {/* Soft mint background glow */}
      <div
        className="
          absolute -right-[4%] top-[22%]
          h-[420px] w-[65%]
          rounded-full bg-[#DFF5EE]/30
          blur-[80px] xl:top-[8%]
        "
      />

      {/* Lower-left decorative shape */}
      <div
        className="
          absolute -bottom-[220px] -left-[160px]
          h-[360px] w-[620px]
          rotate-[-13deg] rounded-[50%]
          bg-[#E4F9E8]/55
          xl:-bottom-[270px] xl:left-[22%]
          xl:h-[385px] xl:w-[620px]
        "
      />

      {/* Layered green landscape */}
      <svg
        className="
          absolute inset-x-0 bottom-0
          h-[118px] w-full
          sm:h-[150px] xl:h-[125px]
        "
        viewBox="0 0 1600 180"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          d="M0 82 C180 30 260 150 460 114 S770 70 920 126 S1210 152 1410 74 S1520 60 1600 83 L1600 180 L0 180 Z"
          fill="#ECF9EF"
        />

        <path
          d="M0 118 C170 52 295 151 440 135 S750 58 960 119 S1250 145 1450 88 S1530 77 1600 97 L1600 180 L0 180 Z"
          fill="#D7F2DC"
          opacity="0.85"
        />

        <path
          d="M0 154 C155 103 255 181 420 154 S710 105 910 148 S1250 162 1420 125 S1520 106 1600 120 L1600 180 L0 180 Z"
          fill="#ABE0BF"
          opacity="0.57"
        />
      </svg>
    </div>
  );
}

export function FAQSection() {
  // First FAQ expanded by default
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const instanceId = useId();

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="
        bg-white px-3 py-8 text-[#061A2D]
        sm:px-5 sm:py-11
        xl:px-7 xl:py-14
      "
    >
      {/* Main rounded section */}
      <div
        className="
          relative isolate mx-auto w-full
          max-w-[1920px] overflow-hidden
          rounded-[30px]
          border border-[#ECF5EE]
          bg-[#F9FDFC]
          shadow-[0_18px_55px_rgba(9,60,38,0.045)]
          sm:rounded-[36px]
        "
      >
        <FAQDecorations />

        {/* Desktop: 2 columns. Mobile: stacked */}
        <div
          className="
            relative z-10 grid gap-y-9
            px-5 pb-[160px] pt-10
            sm:px-10 sm:pb-[185px] sm:pt-14
            lg:px-14
            xl:min-h-[570px]
            xl:grid-cols-[minmax(0,0.83fr)_minmax(0,1.42fr)]
            xl:grid-rows-[auto_1fr]
            xl:gap-x-14 xl:gap-y-0
            xl:px-[clamp(45px,4.7vw,100px)]
            xl:pb-[90px]
            xl:pt-[clamp(48px,4vw,78px)]
            2xl:gap-x-20
          "
        >
          {/* LEFT: Heading and description */}
          <div
            className="
              min-w-0
              xl:col-start-1 xl:row-start-1
            "
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 sm:gap-5">
              <span
                className="
                  text-[14px] font-extrabold
                  uppercase tracking-[0.28em]
                  text-[#286F15]
                  sm:text-[17px]
                "
              >
                FAQs
              </span>

              <span
                aria-hidden="true"
                className="
                  h-[2px] w-[52px]
                  bg-[#29821C]
                  sm:w-[65px]
                "
              />
            </div>

            {/* Main heading */}
            <h2
              id="faqs-heading"
              className="
                mt-5
                text-[clamp(2.55rem,7vw,4.5rem)]
                font-extrabold
                leading-[1.055]
                tracking-[-0.058em]
                text-[#061A2D]
                xl:text-[clamp(2.65rem,3.75vw,4.7rem)]
              "
            >
              Frequently
              <br />
              Asked{" "}
              <span className="text-[#277416]">
                Questions
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6 max-w-[570px]
                text-[16px] leading-[1.52]
                text-[#152D41]
                sm:text-[20px]
                xl:max-w-[440px]
                xl:text-[clamp(17px,1.35vw,25px)]
              "
            >
              Quick answers to common questions about
              our process, services and working model.
            </p>
          </div>

          {/* RIGHT: FAQ accordion */}
          <div
            className="
              min-w-0 space-y-3
              sm:space-y-3.5
              xl:col-start-2
              xl:row-span-2
              xl:row-start-1
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              const questionId =
                `${instanceId}-question-${index}`;

              const answerId =
                `${instanceId}-answer-${index}`;

              return (
                <article
                  key={faq.id}
                  className="
                    overflow-hidden rounded-[21px]
                    bg-white
                    shadow-[0_8px_24px_rgba(6,66,42,0.07)]
                    sm:rounded-[24px]
                  "
                >
                  <h3>
                    <button
                      type="button"
                      id={questionId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenIndex(
                          isOpen ? null : index
                        )
                      }
                      className={[
                        "flex min-h-[68px] w-full",
                        "items-center justify-between",
                        "gap-5 rounded-[21px]",
                        "px-5 py-4 text-left",
                        "text-[16px] font-bold leading-[1.34]",
                        "text-[#071A2D]",
                        "sm:min-h-[76px] sm:rounded-[24px]",
                        "sm:px-7 sm:text-[19px]",
                        "xl:min-h-[66px] xl:px-7 xl:py-4",
                        "xl:text-[clamp(17px,1.23vw,25px)]",
                        "transition-colors duration-200",
                        "focus-visible:outline-none",
                        "focus-visible:ring-2",
                        "focus-visible:ring-inset",
                        "focus-visible:ring-[#1F7B31]",
                        isOpen
                          ? "bg-[linear-gradient(100deg,#E3F9DA_0%,#E4F9DE_100%)]"
                          : "bg-white hover:bg-[#F3FAF4]",
                      ].join(" ")}
                    >
                      <span>
                        {faq.question}
                      </span>

                      {/* Accordion arrow */}
                      <ChevronDown
                        aria-hidden="true"
                        className={`
                          h-6 w-6 shrink-0
                          stroke-[2.7]
                          transition-transform duration-200
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      />
                    </button>
                  </h3>

                  {/* Expandable answer */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    hidden={!isOpen}
                  >
                    <p
                      className="
                        px-5 pb-6 pt-4
                        text-[15px] leading-[1.63]
                        text-[#14283D]
                        sm:px-7 sm:text-[18px]
                        xl:px-9 xl:pb-6 xl:pt-3
                        xl:text-[clamp(16px,1.15vw,23px)]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA: left on desktop, bottom on mobile */}
          <div
            className="
              flex justify-center
              xl:col-start-1
              xl:row-start-2
              xl:items-start
              xl:justify-start
              xl:pt-10
            "
          >
            <Link
              href="#contact"
              className="
                group inline-flex min-h-[56px]
                items-center justify-center gap-5
                rounded-full bg-[#21730F]
                px-8 py-3.5
                text-[17px] font-bold text-white
                shadow-[0_8px_18px_rgba(19,92,31,0.12)]
                transition-colors duration-200
                hover:bg-[#145A0B]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#247B25]
                focus-visible:ring-offset-4
                sm:min-h-[62px]
                sm:px-10 sm:text-[20px]
              "
            >
              Ask a Question

              <ArrowRight
                aria-hidden="true"
                className="
                  h-5 w-5
                  transition-transform duration-200
                  group-hover:translate-x-1
                  sm:h-6 sm:w-6
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
