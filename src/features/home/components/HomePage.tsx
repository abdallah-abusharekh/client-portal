import Reveal from "@/src/shared/animation/Reveal";
import { CTASection } from "./CTASection";
import { FeaturesSection } from "./FeaturesSection";
import { Footer } from ".//Footer";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { ProductPreviewSection } from "./ProductPreviewSection";
import { RolesSection } from "./RolesSection";
import { TestimonialsSection } from "./TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Reveal>
        <ProductPreviewSection />
      </Reveal>

      <Reveal>
        <FeaturesSection />
      </Reveal>

      <Reveal>
        <HowItWorksSection />
      </Reveal>

      <Reveal>
        <RolesSection />
      </Reveal>

      <Reveal>
        <TestimonialsSection />
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>

      <Footer />
    </>
  );
}
