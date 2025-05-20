
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GradientCircle className="w-[300px] h-[300px] top-[20%] left-[-150px] opacity-20" />
          <GradientCircle className="w-[350px] h-[350px] bottom-[10%] right-[-150px] opacity-20" />
          
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Über Mich</h1>
            
            <GlassCard className="p-8 mb-12">
              <div className="space-y-6">
                <p className="text-lg">
                  Ich bin Moritz Béla Meier, Funkamateur mit dem Rufzeichen DF5LC und lebe in Trier, Deutschland.
                </p>
                <p>
                  Seit meiner Kindheit beschäftige ich mich leidenschaftlich mit den Bereichen Netzwerk, Software und Funk. 
                  Diese Interessen haben mich nicht nur geprägt, sondern auch zu verschiedenen spannenden Projekten geführt.
                </p>
                <p>
                  Als aktives Mitglied der Amateurfunk-Community möchte ich mit dem Matsuda-Projekt eine Plattform schaffen, 
                  die den Austausch und Handel in unserer Community vereinfacht und sicherer macht.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
