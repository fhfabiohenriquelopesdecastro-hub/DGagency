"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "E-commerce Premium",
    client: "Marca de Moda",
    category: "E-commerce",
    image: "/cases/ecommerce.jpg",
    color: "#7C3AED",
    href: "/cases/ecommerce-premium",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    client: "Startup Tech",
    category: "Aplicação Web",
    image: "/cases/saas.jpg",
    color: "#22C55E",
    href: "/cases/saas-dashboard",
  },
  {
    id: 3,
    title: "Portal Institucional",
    client: "Grupo Empresarial",
    category: "Site Institucional",
    image: "/cases/portal.jpg",
    color: "#3B82F6",
    href: "/cases/portal-institucional",
  },
];

export function Cases() {
  return (
    <section className="py-24 md:py-32 bg-black-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block"
            >
              Cases
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Projetos que{" "}
              <span className="text-purple-400">geraram resultados</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/portfolio"
            className="mt-4 md:mt-0 text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
          >
            Ver todos os projetos
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <motion.a
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              href={caseItem.href}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-800"
            >
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{ backgroundColor: `${caseItem.color}20`, color: caseItem.color }}
                  >
                    {caseItem.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{caseItem.title}</h3>
                  <p className="text-gray-400 text-sm">{caseItem.client}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}