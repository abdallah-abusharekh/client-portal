"use client";

import { Container } from "@/src/shared/components/Container";
import { motion } from "framer-motion";
import { cardVariants, containerVariants, features } from "../utils/constants";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-24">
      <Container className="flex flex-col items-center text-center">
        <span className="bg-green-500/10 mb-4 px-4 py-1 rounded-full font-medium text-green-500 text-sm">
          Features
        </span>

        <h2 className="font-bold text-text text-3xl md:text-4xl">
          Everything you need to succeed
        </h2>

        <p className="mt-4 mb-16 max-w-2xl text-text/70 text-lg">
          Powerful tools designed to streamline your workflow and boost
          productivity
        </p>

        <motion.div
          className="gap-8 grid md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white p-8 border border-gray-200 rounded-xl"
              >
                <div className="flex justify-center items-center bg-primary/10 mb-6 rounded-lg w-12 h-12 text-primary">
                  <Icon size={22} />
                </div>

                <h3 className="mb-2 font-semibold text-text text-lg">
                  {feature.title}
                </h3>

                <p className="text-text/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
