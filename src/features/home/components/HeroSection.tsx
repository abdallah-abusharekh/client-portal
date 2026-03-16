import { Container } from "@/src/shared/components/Container";
import Nav from "./Nav";

export function HeroSection() {
  return (
    <section className="bg-background-sky min-h-screen">
      <Nav />

      <Container className="flex flex-col items-center pt-38 pb-16 text-center">
        <div className="bg-primary/10 mb-6 px-4 py-1.5 rounded-full font-medium text-primary text-sm">
          ⚡ Now with AI-powered insights
        </div>

        <h1 className="max-w-4xl font-bold text-text text-4xl md:text-6xl leading-tight tracking-tight">
          Where Clients and <span className="text-primary">Freelancers</span>{" "}
          Build Success Together
        </h1>

        <p className="mt-6 max-w-2xl text-text/70 text-lg leading-relaxed">
          The modern collaboration platform that brings customers and
          freelancers together. Manage projects, track progress, and deliver
          exceptional results.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="/sign-up"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark shadow px-6 py-3 rounded-xl font-medium text-white transition"
          >
            Start Free Trial →
          </a>

          <button className="flex items-center gap-2 bg-white hover:bg-gray-50 px-6 py-3 border border-gray-200 rounded-xl text-text transition">
            ▶ Watch Demo
          </button>
        </div>

        <div className="gap-12 grid grid-cols-2 md:grid-cols-4 mt-16 text-center">
          <div>
            <p className="font-bold text-text text-2xl">10K+</p>
            <p className="text-text/60 text-sm">Active Users</p>
          </div>

          <div>
            <p className="font-bold text-text text-2xl">$5M+</p>
            <p className="text-text/60 text-sm">Projects Completed</p>
          </div>

          <div>
            <p className="font-bold text-text text-2xl">98%</p>
            <p className="text-text/60 text-sm">Satisfaction Rate</p>
          </div>

          <div>
            <p className="font-bold text-text text-2xl">150+</p>
            <p className="text-text/60 text-sm">Countries</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
