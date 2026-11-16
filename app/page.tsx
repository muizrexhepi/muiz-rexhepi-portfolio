import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StudioOverviewSection } from "@/components/sections/studio-overview-section";
import { pageMetadata, site } from "@/lib/site";

export const metadata = {
  ...pageMetadata("/", "Muiz Rexhepi — Independent Software Developer", site.description),
  title: { absolute: "Muiz Rexhepi — Independent Software Developer" },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Independent Full-Stack Software Developer",
  sameAs: Object.values(site.profiles),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      <HeroSection />
      <SelectedWorkSection />
      <ServicesSection />
      <StudioOverviewSection />
      <ProcessSection />
    </>
  );
}
