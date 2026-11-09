import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function CaseStudySection() {
  return (
    <section className="bg-background py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Profile audits"
          heading="Profile Audits & Strategy in Practice."
          description="An illustrative overview of how a doctor profile can become clearer, stronger and more intentional in presentation."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr_0.9fr]">
          <div className="rounded-[24px] border border-border bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Before</p>
            <div className="mt-5 rounded-2xl bg-sage-light p-4">
              <div className="mb-4 h-12 w-24 rounded-full bg-white/80" />
              <div className="space-y-3">
                <div className="h-3 w-2/3 rounded-full bg-sage/80" />
                <div className="h-3 w-5/6 rounded-full bg-sage/60" />
                <div className="h-3 w-4/5 rounded-full bg-sage/60" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="h-12 rounded-xl bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-border bg-primary p-6 text-white shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Illustrative Profile Audit</p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-white/70">Profile positioning</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[58%] rounded-full bg-accent" />
                </div>
              </div>
              <div>
                <p className="text-sm text-white/70">Bio clarity</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-secondary" />
                </div>
              </div>
              <div>
                <p className="text-sm text-white/70">Content organisation</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-white" />
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-white/80">
              <li>• Clearer bio positioning and highlight structure</li>
              <li>• Better content categories for credibility and clarity</li>
              <li>• Stronger call-to-action and trust-building presentation</li>
            </ul>
          </div>

          <div className="rounded-[24px] border border-border bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">After</p>
            <div className="mt-5 rounded-2xl bg-[#edf3ee] p-4">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <div className="h-3 w-20 rounded-full bg-sage" />
                  <div className="mt-2 h-2 w-14 rounded-full bg-sage/70" />
                </div>
                <div className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  Featured
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-3 w-full rounded-full bg-sage/80" />
                <div className="h-3 w-5/6 rounded-full bg-sage/70" />
                <div className="h-3 w-4/5 rounded-full bg-sage/60" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="h-12 rounded-xl bg-white text-center text-[10px] font-semibold text-primary pt-4">
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
