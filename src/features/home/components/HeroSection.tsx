import { Button } from "@/src/shared/components/Button";
import { Container } from "@/src/shared/components/Container";

export function HeroSection() {
  return (
    <section className="bg-(--color-background-sky) py-28">
      <Container className="items-start gap-16 grid md:grid-cols-2">
        <div className="space-y-8">
          <h1 className="font-bold text-gray-900 lg:text-[3.5rem] text-4xl md:text-4xl leading-[1.1] tracking-tight">
            Professional project management for teams and clients
          </h1>

          <p className="max-w-xl text-gray-600 text-lg leading-relaxed">
            Track projects, share progress, and collaborate securely in one
            place-built for freelancers, agencies, and their customers.
          </p>

          <div className="flex gap-4">
            <Button href="/login">Log in</Button>
            <Button href="/features" variant="secondary">
              Learn more
            </Button>
          </div>

          <div className="hidden sm:flex gap-16 pt-10">
            <div>
              <p className="font-semibold text-3xl">5,000+</p>
              <p className="text-gray-500 text-sm">Teams onboarded</p>
            </div>
            <div>
              <p className="font-semibold text-3xl">98%</p>
              <p className="text-gray-500 text-sm">On-time delivery rate</p>
            </div>
            <div>
              <p className="font-semibold text-3xl">24/7</p>
              <p className="text-gray-500 text-sm">Secure & available</p>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="hidden sm:block bg-white shadow-xl p-6 border border-gray-200 rounded-2xl">
          <div className="flex justify-center items-center bg-gray-100 rounded-xl aspect-video text-gray-500 text-sm">
            Dashboard Preview Placeholder
          </div>
          <p className="mt-4 text-gray-500 text-sm text-center">
            Preview of your client workspace
          </p>
        </div>
      </Container>
    </section>
  );
}
