import { Container } from "@/src/shared/components/Container";
import Nav from "./Nav";
import { IntegrationsCard } from "./hero/IntegrationsCard";
import { RemindersCard } from "./hero/RemindersCard";
import { TasksCard } from "./hero/TasksCard";
import { StickyNote } from "./hero/StickyNote";
import {
  CalendarBubble,
  ChatBubble,
  CheckBubble,
  TimeBubble,
} from "./hero/Bubbles";
import Stats from "./hero/Stats";
import { HeroTitle } from "./hero/HeroTitle";

export function HeroSection() {
  return (
    <section className="relative bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-background-sky min-h-screen bg-size-[22px_22px]">
      <Nav />

      <Container className="flex flex-col sm:items-center pt-56 md:pt-38 pb-16 h-dvh sm:text-center">
        <div className="bg-primary/10 mb-6 px-4 py-1.5 rounded-full w-fit font-medium text-primary text-sm">
          ⚡ Now with new integrated features
        </div>

        <HeroTitle />

        <p className="mt-6 mb-8 max-w-2xl text-text/70 sm:text-[16px] text-sm md:text-lg leading-relaxed">
          The modern collaboration platform that brings customers and
          freelancers together. Manage projects, track progress, and deliver
          exceptional results.
        </p>

        <div className="flex gap-4 md:mt-8">
          <a
            href="/sign-up"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark shadow px-4 sm:px-6 py-3 sm:py-3 rounded-xl font-medium text-white sm:text-[16px] text-sm transition"
          >
            Start Free Trial →
          </a>

          <a
            href="#product-preview"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 px-4 sm:px-6 py-3 sm:py-3 border border-gray-200 rounded-xl text-text sm:text-[16px] text-sm transition"
          >
            ▶ Watch Demo
          </a>
        </div>

        <Stats />
      </Container>
      <StickyNote />
      <CheckBubble />
      <ChatBubble />
      <CalendarBubble />
      <TimeBubble />
      <TasksCard />
      <RemindersCard />
      <IntegrationsCard />
    </section>
  );
}
