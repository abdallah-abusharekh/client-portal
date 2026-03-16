import Reveal from "@/src/shared/animation/Reveal";
import { CTASection } from "./components/CTASection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ProductPreviewSection } from "./components/ProductPreviewSection";
import { RolesSection } from "./components/RolesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

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
