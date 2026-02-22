import { Container } from "@/src/shared/Container";
import { about } from "../utils/constants";

export function AboutSection() {
  return (
    <section className="bg-(--color-background-sky) py-24">
      <Container className="items-start gap-16 grid md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-semibold text-gray-900 text-2xl">
            About Client Portal
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Client Portal streamlines collaboration between service providers
            and their clients. Share milestones, files, and progress updates
            with role-based access (Freelancer & Customer), while your admin
            tools stay private.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• Tasks, milestones, and progress tracking</li>
            <li>• File sharing with comments and approvals</li>
            <li>• Simple, secure access for your clients</li>
          </ul>
        </div>

        <div className="space-y-6 bg-white shadow-lg p-8 border border-gray-200 rounded-2xl">
          <h3 className="font-semibold text-gray-900">Why teams choose us</h3>

          <div className="gap-6 grid sm:grid-cols-2">
            {about.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-4 border border-gray-200 rounded-xl"
              >
                <p className="font-medium text-gray-900">{item.title}</p>
                <p className="mt-1 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
