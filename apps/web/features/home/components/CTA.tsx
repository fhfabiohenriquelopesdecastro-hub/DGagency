"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@repo/ui";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-purple-500/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para elevar sua{" "}
            <span className="text-purple-400">presença digital</span>?
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar seu negócio a alcançar
            resultados extraordinários. Sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Solicitar Orçamento Grátis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary" className="group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Resposta em até 24 horas • Sem compromisso
          </p>
        </motion.div>
      </div>
    </section>
  );
}