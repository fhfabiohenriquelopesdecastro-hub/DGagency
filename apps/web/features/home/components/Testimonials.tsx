"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "TechStart",
    text: "A equipe transformou nossa ideia em um produto digital que superou todas as expectativas. O aumento de conversão foi de 45% no primeiro mês.",
    rating: 5,
  },
  {
    name: "Ana Santos",
    role: "Diretora de Marketing",
    company: "ModaExpress",
    text: "Profissionalismo e qualidade técnica em outro nível. Nosso e-commerce agora tem performance de primeria linha.",
    rating: 5,
  },
  {
    name: "Roberto Lima",
    role: "Fundador",
    company: "DataFlow",
    text: "O dashboard que desenvolveram para nós é rápido, intuitivo e nossos clientes adoraram. Recomendo fortemente.",
    rating: 5,
  },
];

export function Testimonials() {
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
            Depoimentos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            O que nossos clientes{" "}
            <span className="text-purple-400">dizem</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-xl bg-white/[0.02] border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-500/20" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-purple-400 text-purple-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}