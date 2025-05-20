import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import { CloudLightning } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      <GradientCircle className="w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-40" />
      <GradientCircle className="w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal delay={0}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-primary-400">Matsuda</span>-Projekt
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Die Plattform für Funkamateure – fair, transparent, innovativ.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Der voraussichtliche Start ist im Herbst 2027.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#marketplace" 
                className="px-6 py-3 rounded-full bg-gradient-purple hover:opacity-90 transition-opacity duration-300 font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Marketplace entdecken
              </motion.a>
              <motion.a 
                href="#radio" 
                className="px-6 py-3 rounded-full bg-transparent border border-primary-600 hover:bg-primary-900/30 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Matsuda Radio
              </motion.a>
            </div>
          </Reveal>
          
          <Reveal delay={3} direction="left">
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-r from-primary-900/60 to-transparent rounded-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Modern amateur radio equipment" 
                    className="w-full h-full object-cover mix-blend-overlay rounded-2xl"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <div className="text-sm text-primary-200 mb-2 font-medium">FEATURED</div>
                  <h3 className="text-xl font-bold mb-1">Hochwertige Amateurfunk-Ausrüstung</h3>
                  <p className="text-gray-300">Globaler Zugang zu Spezialgeräten</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        
        <Reveal delay={6}>
          <div className="flex justify-center mt-16">
            <GlassCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-4xl">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-3">Warum Matsuda?</h2>
                <p className="text-gray-300">Eine revolutionäre Plattform, die die Lücke zwischen Funkenthusiasten weltweit schließt und einen fairen, transparenten Handel ermöglicht.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary-400 text-2xl font-bold">2027</div>
                  <div className="text-sm text-gray-400">Launch</div>
                </div>
                <div className="h-10 border-r border-primary-800"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary-400 text-2xl font-bold">Global</div>
                  <div className="text-sm text-gray-400">Reichweite</div>
                </div>
                <div className="h-10 border-r border-primary-800"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary-400 text-2xl font-bold">100%</div>
                  <div className="text-sm text-gray-400">Sicherheit</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
