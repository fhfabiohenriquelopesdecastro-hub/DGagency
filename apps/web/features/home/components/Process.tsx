"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description:
      "Entendemos seu negócio, público e objetivos antes de escrever uma linha de código.",
  },
  {
    icon: Search,
    number: "02",
    title: "Estratégia & Design",
    description:
      "Criamos a arquitetura, wireframes e design system alinhados com sua marca.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Código limpo, performático e acessível — seguindo as melhores práticas.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lançamento & Evolução",
    description:
      "Deploy, monitoramento e iteração contínua baseada em dados reais.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Processo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Como trabalhamos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Um processo claro e previsível do início ao fim
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-purple-500/10 mb-6 relative">
                  <step.icon className="w-8 h-8 text-purple-400" />
                  <span className="absolute -top-2 -right-2 text-xs font-mono text-purple-400 bg-black-900 px-2 py-1 rounded">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}