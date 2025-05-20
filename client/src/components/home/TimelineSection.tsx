import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import { motion } from "framer-motion";

export default function TimelineSection() {
  const timelineItems = [
    {
      year: "2023-2024",
      title: "Konzeptionsphase",
      description: "Entwicklung des Grundkonzepts, Marktforschung und Einrichtung des ersten Entwicklerteams.",
      position: "right"
    },
    {
      year: "2025",
      title: "Entwicklungsphase",
      description: "Aufbau der Plattform, Entwicklung des Marketplace und erster Prototypen für Matsuda Radio.",
      position: "left"
    },
    {
      year: "2026",
      title: "Testphase",
      description: "Closed Beta mit ausgewählten Community-Mitgliedern, Optimierung der Plattform und Verbesserung der Produkte.",
      position: "right"
    },
    {
      year: "Herbst 2027",
      title: "Launch",
      description: "Offizieller Start des Matsuda Marketplace und der ersten Produkte von Matsuda Radio.",
      position: "left",
      isActive: true
    }
  ];

  return (
    <section className="py-20 relative bg-dark-800">
      <GradientCircle className="w-[300px] h-[300px] top-[30%] right-[10%] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap bis zum <span className="text-primary-400">Launch</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Bis zum Start im Herbst 2027 haben wir eine klare Vision und einen strukturierten Plan.
          </p>
        </Reveal>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-900"></div>
          
          <div className="space-y-16">
            <div className="relative flex justify-center items-center">
              <div className="w-10 h-10 rounded-full bg-primary-600 z-10 flex items-center justify-center shadow-lg">
                <span className="font-bold">1</span>
              </div>
            </div>
            
            {timelineItems.map((item, index) => (
              <Reveal key={index} delay={index * 3}>
                <div className="flex flex-col md:flex-row items-center">
                  {item.position === "right" ? (
                    <>
                      <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                        <GlassCard className={`p-6 inline-block ${item.isActive ? "glow-border" : ""}`}>
                          <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                          <h4 className="text-lg text-primary-400 mb-3">{item.title}</h4>
                          <p className="text-gray-300">{item.description}</p>
                        </GlassCard>
                      </div>
                      <motion.div 
                        className={`w-10 h-10 rounded-full ${item.isActive ? "bg-primary-600 animate-pulse" : "bg-primary-700"} absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center shadow-lg`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="font-bold">{index + 2}</span>
                      </motion.div>
                      <div className="md:w-1/2 md:pl-16"></div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0"></div>
                      <motion.div 
                        className={`w-10 h-10 rounded-full ${item.isActive ? "bg-primary-600 animate-pulse" : "bg-primary-700"} absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center shadow-lg`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="font-bold">{index + 2}</span>
                      </motion.div>
                      <div className="md:w-1/2 md:pl-16">
                        <GlassCard className={`p-6 inline-block ${item.isActive ? "glow-border" : ""}`}>
                          <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                          <h4 className="text-lg text-primary-400 mb-3">{item.title}</h4>
                          <p className="text-gray-300">{item.description}</p>
                        </GlassCard>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
