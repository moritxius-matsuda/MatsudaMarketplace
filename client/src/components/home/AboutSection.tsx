import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import { CloudLightning, Globe, Shield } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <CloudLightning className="h-6 w-6" />,
      title: "Fair & Transparent",
      description: "Feste, transparente Preise ohne versteckte Kosten. Keine Auktionen, sondern faire Handelspreise für alle."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Globaler Zugang",
      description: "Weltweiter Gratisversand und Zugang zu Produkten, die lokal nicht erhältlich sind. Die ganze Welt des Amateurfunks an einem Ort."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Käuferschutz",
      description: "Starker Käuferschutz mit Zahlung erst nach erfolgreicher Lieferung. Sicherheit und Vertrauen stehen an erster Stelle."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <GradientCircle className="w-[300px] h-[300px] top-[20%] left-[10%] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Über das <span className="text-primary-400">Matsuda</span>-Projekt</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Unsere Vision ist es, die Welt der Amateurfunk-Community zu revolutionieren. Mit innovativen Lösungen schaffen wir neue Möglichkeiten für Enthusiasten weltweit.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 2}>
              <GlassCard className="p-6" hoverable>
                <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        
        <Reveal className="mt-16 text-center" delay={6}>
          <a href="#marketplace" className="text-primary-400 inline-flex items-center font-medium hover:text-primary-300 transition-colors duration-300">
            Mehr erfahren
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
