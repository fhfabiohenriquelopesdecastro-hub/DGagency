"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco em Resultado",
    description:
      "Cada decisão técnica é tomada com base no impacto mensurável no negócio do cliente.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Pragmática",
    description:
      "Tecnologia de ponta aplicada de forma inteligente — sem complexidade desnecessária.",
  },
  {
    icon: Rocket,
    title: "Execução Premium",
    description:
      "Padrão de qualidade de produto SaaS, entregue com agilidade de agência.",
  },
];

export function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block"
            >
              Sobre Nós
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Construímos{" "}
              <span className="text-purple-400">experiências digitais</span>{" "}
              que convertem
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-8"
            >
              Somos um time técnico que combina engenharia de software com
              design estratégico. Não criamos "sites bonitos" — construímos
              ferramentas digitais que geram resultado mensurável para o seu
              negócio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-8"
            >
              <div>
                <span className="text-3xl font-bold text-white">100%</span>
                <p className="text-sm text-gray-400">Código Original</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-white">Zero</span>
                <p className="text-sm text-gray-400">Templates Genéricos</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <value.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}