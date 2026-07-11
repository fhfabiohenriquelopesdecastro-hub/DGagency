"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Layout,
  BarChart3,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites premium que transmitem credibilidade e geram orçamentos.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de alta conversão para campanhas e lançamentos.",
  },
  {
    icon: Smartphone,
    title: "Aplicações Web",
    description: "Sistemas sob medida para automatizar processos do seu negócio.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais com performance e experiência de compra premium.",
  },
  {
    icon: BarChart3,
    title: "SEO & Performance",
    description: "Otimização técnica para ranqueamento e Core Web Vitals.",
  },
  {
    icon: Palette,
    title: "Branding Digital",
    description: "Identidade visual que comunica valor e diferenciação.",
  },
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-black-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Serviços
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            O que fazemos de{" "}
            <span className="text-purple-400">melhor</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Soluções completas para cada etapa da sua presença digital
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-purple-500/10 w-fit mb-6 group-hover:bg-purple-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}