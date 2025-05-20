import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import { Users, Lightbulb, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function RadioSection() {
  const features = [
    {
      icon: <Users className="h-4 w-4" />,
      title: "Community-basierte Entwicklung",
      description: "Entwicklung nach den Wünschen und Bedürfnissen der Nutzer. Ihre Ideen werden Realität."
    },
    {
      icon: <Lightbulb className="h-4 w-4" />,
      title: "Innovative Produkte",
      description: "Zunächst Zubehör, später auch eigene Transceiver. Immer mit Fokus auf Funktionalität und Qualität."
    },
    {
      icon: <Zap className="h-4 w-4" />,
      title: "Hoher Qualitätsanspruch",
      description: "Moderne Technik und hochwertige Verarbeitung stehen an erster Stelle für eine lange Lebensdauer."
    }
  ];

  return (
    <section id="radio" className="py-20 relative">
      <GradientCircle className="w-[350px] h-[350px] bottom-[10%] left-[5%] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Reveal direction="left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Electronics workbench" 
                  className="rounded-2xl shadow-2xl"
                />
                
                <GlassCard className="rounded-xl p-6 max-w-md mx-auto transform -translate-y-16 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Community-basierte Entwicklung</h3>
                      <p className="text-gray-400">Von Funkamateuren für Funkamateure</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          </div>
          
          <div className="order-1 md:order-2">
            <Reveal>
              <div className="inline-block text-sm font-medium text-primary-400 mb-3 px-3 py-1 bg-primary-900/40 rounded-full">MATSUDA RADIO</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Eigene Funkgeräte und Zubehör mit der Community entwickeln
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Matsuda Radio ist die Vision, eigene Funkgeräte und Zubehör zu entwickeln – mit und für die Amateurfunk-Community. Im Mittelpunkt stehen Qualität, innovative Features und ein attraktives Preis-Leistungs-Verhältnis.
              </p>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <Reveal key={index} delay={index * 2}>
                    <GlassCard className="p-5" hoverable>
                      <h4 className="text-lg font-medium mb-2 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center mr-3 flex-shrink-0">
                          {feature.icon}
                        </span>
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 ml-11">{feature.description}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
              
              <motion.button 
                className="px-6 py-3 rounded-full bg-transparent border border-primary-600 hover:bg-primary-900/30 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projekt unterstützen
              </motion.button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
