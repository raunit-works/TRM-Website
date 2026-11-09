import { founders } from '@/data/founders';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FounderCard } from '@/components/ui/FounderCard';

export function FoundersSection() {
  return (
    <section id="about" className="bg-sage-light py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Meet the founders"
          heading="The People Behind Talkreach Media."
          description="Meet the people responsible for planning, producing and managing your professional content."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>

        <div className="mt-16 rounded-[28px] border border-border bg-white px-6 py-8 md:px-8">
          <p className="text-center text-2xl font-bold tracking-[-0.04em] text-primary md:text-3xl">
            “A Collaborative Team, Focused on Doctors.”
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-text-muted md:text-lg">
            We work closely with doctors to shape a better digital presence through thoughtful planning, content oversight and practical execution.
          </p>
        </div>
      </Container>
    </section>
  );
}
