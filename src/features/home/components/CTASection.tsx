import Button from "@/src/shared/components/Button";
import { Container } from "@/src/shared/components/Container";

export function CTASection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl font-bold text-text text-3xl md:text-4xl leading-tight">
          Ready to transform your workflow?
        </h2>

        <p className="mt-4 max-w-xl text-text/70 text-lg">
          Join thousands of teams already using Client Portal to manage their
          projects
        </p>

        <div className="flex sm:flex-row flex-col gap-4 mt-8">
          <Button href="/sign-up">Start Managing Projects →</Button>
        </div>
      </Container>
    </section>
  );
}
