import { AboutSection } from "./components/AboutSection";
import { FeaturedInSection } from "./components/FeaturedInSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HeroSection } from "./components/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedInSection />
      <AboutSection />
      <FeaturesSection />
    </>
  );
}
