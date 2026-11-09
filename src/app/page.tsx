import { HeroSection } from '@/components/sections/HeroSection';
import { DoctorReelsSection } from '@/components/sections/DoctorReelsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FoundersSection } from '@/components/sections/FoundersSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { PlatformsCTASection } from '@/components/sections/PlatformsCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DoctorReelsSection />
      <ServicesSection />
      <FoundersSection />
      <CaseStudySection />
      <ProcessSection />
      <TrustSection />
      <FAQSection />
      <PlatformsCTASection />
    </>
  );
}
