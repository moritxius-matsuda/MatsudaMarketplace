import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import { Check, DollarSign, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function MarketplaceSection() {
  const features = [
    "Feste, transparente Preise – keine Auktionen",
    "Weltweiter Gratisversand",
    "Starker Käuferschutz: Zahlung erst nach erfolgreicher Lieferung",
    "Einfache Registrierung mit bestehenden Konten"
  ];

  const categories = [
    {
      title: "Transceiver",
      description: "Hochwertige Geräte für alle Frequenzbereiche",
      image: "https://www.funkshop.com/thumbnail/cb/6f/2e/1741680694/icom-ic-7610_1f6xozsnmakm5g_600x600.jpg?ts=1741680699"
    },
    {
      title: "Antennen",
      description: "Verschiedene Antennen für optimale Signalübertragung",
      image: "https://ae01.alicdn.com/kf/H82041e8cdf1a439880f8549a5f5b624aN.jpg"
    },
    {
      title: "Zubehör",
      description: "Wichtiges Zubehör für Ihre Funkausrüstung",
      image: "https://m.media-amazon.com/images/I/614limDEAlL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Spezialitäten",
      description: "Seltene und schwer zu findende Nischenprodukte",
      image: "https://www.mdr.de/ratgeber/neu-ab/amateurfunk-102_v-variantBig16x9_wm-true_zc-ecbbafc6.jpg?version=35546"
    }
  ];

  return (
    <section id="marketplace" className="py-20 relative bg-dark-800">
      <GradientCircle className="w-[400px] h-[400px] top-[10%] right-[5%] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Reveal>
              <div className="inline-block text-sm font-medium text-primary-400 mb-3 px-3 py-1 bg-primary-900/40 rounded-full">MATSUDA MARKETPLACE</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Der globale Marktplatz für Amateurfunk-Equipment
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Matsuda Marketplace ist eine globale Online-Plattform für den fairen, transparenten und sicheren Handel mit Amateurfunk-Equipment. Unser Ziel ist es, Funkamateuren weltweit einen zentralen, vertrauenswürdigen Marktplatz zu bieten – unabhängig von Erfahrung oder Spezialisierung.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button 
                className="px-6 py-3 rounded-full bg-gradient-purple hover:opacity-90 transition-opacity duration-300 font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mehr erfahren
              </motion.button>
            </Reveal>
          </div>
          
          <div className="md:w-1/2">
            <Reveal direction="right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1520170350707-b2da59970118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Amateur radio equipment" 
                  className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
                
                <GlassCard 
                  className="absolute -bottom-6 -left-6 p-4 max-w-xs"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center mr-3">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Flexible Zahlungen</h4>
                      <p className="text-xs text-gray-400">PayPal, SEPA, Klarna & mehr</p>
                    </div>
                  </div>
                </GlassCard>
                
                <GlassCard 
                  className="absolute -top-6 -right-6 p-4 max-w-xs"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center mr-3">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Kompetenter Support</h4>
                      <p className="text-xs text-gray-400">Mit Feedbacksystem</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          </div>
        </div>
        
        <div className="mt-24">
          <Reveal className="text-center mb-8">
            <h3 className="text-2xl font-bold">Große Auswahl an Amateurfunk-Equipment</h3>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Reveal key={index} delay={index * 2}>
                <GlassCard className="overflow-hidden" hoverable>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-medium mb-2">{category.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-400 font-medium">Entdecken</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
