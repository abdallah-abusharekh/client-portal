import { Button } from "@/src/shared/components/Button";
import { Container } from "@/src/shared/components/Container";
import { features } from "../utils/constants";

export function FeaturesSection() {
  return (
    <section className="bg-(--color-background-sky) py-28">
      <Container>
        <h2 className="mb-16 font-semibold text-gray-900 text-2xl text-center">
          Everything you need to deliver on time
        </h2>

        <div className="gap-8 grid md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white shadow-sm hover:shadow-md p-6 border border-gray-200 rounded-2xl transition-shadow"
            >
              <p className="font-semibold text-gray-900">{feature.title}</p>
              <p className="mt-2 text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button href="/login" size="lg">
            Log in to get started
          </Button>
        </div>
      </Container>
    </section>
  );
}
