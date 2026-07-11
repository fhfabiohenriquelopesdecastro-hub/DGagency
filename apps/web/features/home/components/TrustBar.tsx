import { Award, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "150+", label: "Projetos Entregues" },
  { icon: Users, value: "98%", label: "Clientes Satisfeitos" },
  { icon: Clock, value: "8+", label: "Anos de Experiência" },
  { icon: TrendingUp, value: "+40%", label: "Aumento Médio de Conversão" },
];

export function TrustBar() {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}