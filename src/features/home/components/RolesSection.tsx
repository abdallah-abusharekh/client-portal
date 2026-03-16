import { Container } from "@/src/shared/components/Container";

import { HiCheckCircle } from "react-icons/hi2";
import { roles } from "../utils/constants";

export function RolesSection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col items-center text-center">
        <span className="bg-purple-500/10 mb-4 px-4 py-1 rounded-full font-medium text-purple-500 text-sm">
          For Everyone
        </span>

        <h2 className="font-bold text-text text-3xl md:text-4xl">
          Built for all roles
        </h2>

        <div className="gap-8 grid md:grid-cols-3 mt-16 w-full">
          {roles.map((role, i) => {
            const Icon = role.icon;

            return (
              <div
                key={i}
                className={`p-8 border ${role.border} ${role.bg} rounded-xl text-left`}
              >
                <div
                  className={`flex justify-center items-center mb-6 rounded-lg w-12 h-12 ${role.color} bg-white`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="mb-6 font-semibold text-text text-lg">
                  {role.title}
                </h3>

                <ul className="space-y-4">
                  {role.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-text/70 text-sm"
                    >
                      <HiCheckCircle
                        className={`${role.color} mt-0.5`}
                        size={18}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
