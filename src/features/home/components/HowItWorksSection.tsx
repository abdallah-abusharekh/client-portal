import { Container } from "@/src/shared/components/Container";
import { steps } from "../utils/constants";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-24">
      <Container className="flex flex-col items-center text-center">
        <span className="bg-yellow-500/10 mb-4 px-4 py-1 rounded-full font-medium text-yellow-500 text-sm">
          How It Works
        </span>

        <h2 className="font-bold text-text text-3xl md:text-4xl">
          Simple steps to get started
        </h2>

        <p className="mt-4 max-w-xl text-text/70 text-lg">
          Get up and running in minutes with our intuitive platform
        </p>

        <div className="relative gap-12 grid md:grid-cols-3 mt-16 w-full">
          <div className="hidden md:block top-8 left-[16%] absolute bg-primary/20 w-[68%] h-0.5"></div>

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="z-10 flex justify-center items-center bg-white shadow-md mb-6 border border-gray-200 rounded-xl w-16 h-16 font-bold text-primary text-xl">
                {step.number}
              </div>

              <h3 className="mb-2 font-semibold text-text text-lg">
                {step.title}
              </h3>

              <p className="max-w-xs text-text/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
