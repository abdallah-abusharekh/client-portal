import { Container } from "@/src/shared/components/Container";
import { logos } from "../utils/constants";

export function FeaturedInSection() {
  return (
    <section className="py-20">
      <Container>
        <p className="mb-10 text-gray-400 text-xs text-center tracking-widest">
          FEATURED IN
        </p>

        <div className="gap-6 grid grid-cols-2 md:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="bg-white shadow-sm py-3 border border-gray-200 rounded-lg text-gray-500 text-sm text-center"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
