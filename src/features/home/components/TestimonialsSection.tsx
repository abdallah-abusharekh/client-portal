import { Container } from "@/src/shared/components/Container";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../utils/constants";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#0f1c33] py-24">
      <Container className="flex flex-col items-center text-center">
        {/* Badge */}
        <span className="bg-white/10 mb-4 px-4 py-1 rounded-full font-medium text-white text-sm">
          Testimonials
        </span>

        {/* Title */}
        <h2 className="font-bold text-white text-3xl md:text-4xl">
          Loved by teams worldwide
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-white/70 text-lg">
          See what our users have to say about Client Portal
        </p>

        {/* Cards */}
        <div className="gap-8 grid md:grid-cols-3 mt-16 w-full">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 p-8 border border-white/10 rounded-xl text-left transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-white/80 text-sm leading-relaxed">
                "{item.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  className="rounded-full w-10 h-10 object-cover"
                  width={10}
                  height={10}
                />

                <div>
                  <p className="font-medium text-white text-sm">{item.name}</p>
                  <p className="text-white/60 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
