"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "Depende da complexidade, mas um site institucional leva de 4 a 8 semanas. Um e-commerce ou sistema sob medida pode levar de 8 a 16 semanas. Sempre entregamos um cronograma claro no início do projeto.",
  },
  {
    question: "Vocês trabalham com templates ou é código 100% original?",
    answer:
      "Todo o nosso código é 100% original, desenvolvido sob medida para cada projeto. Não utilizamos templates genéricos. Isso garante performance, escalabilidade e uma experiência única para sua marca.",
  },
  {
    question: "Como funciona o processo de orçamento?",
    answer:
      "Após o primeiro contato, realizamos uma sessão de discovery gratuita para entender suas necessidades. Em seguida, enviamos uma proposta detalhada com escopo, cronograma e investimento.",
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer:
      "Sim! Oferecemos planos de suporte e manutenção que incluem atualizações, monitoramento de performance, correções e pequenas melhorias. Também temos opções de evolução contínua.",
  },
  {
    question: "Trabalham com empresas de outros estados?",
    answer:
      "Sim, trabalhamos com empresas de todo o Brasil. Nosso processo é 100% remoto, com reuniões por videochamana e comunicação assíncrona eficiente.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block"
            >
              FAQ
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Perguntas{" "}
              <span className="text-purple-400">frequentes</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/[0.02] border border-white/5 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-purple-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}