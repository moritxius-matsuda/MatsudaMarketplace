import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <div className="bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GradientCircle className="w-[300px] h-[300px] top-[20%] left-[-150px] opacity-20" />
          <GradientCircle className="w-[350px] h-[350px] bottom-[10%] right-[-150px] opacity-20" />
          
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
            
            <GlassCard className="p-8 mb-12">
              <h2 className="text-xl font-semibold mb-4">Anbieterkennzeichnung nach § 5 DDG:</h2>
              <p className="mb-4">
                Andreas Meier<br />
                Am Weidengraben 65<br />
                54296 Trier<br />
                Deutschland
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">Verantwortlich gemäß § 18 MStV:</h2>
              <p className="mb-4">Andreas Meier</p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">Betrieben durch:</h2>
              <p className="mb-4">
                Moritz Béla Meier, vertreten durch seinen gesetzlichen Vertreter Andreas Meier
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">Kontakt:</h2>
              <p className="mb-4">
                E-Mail: <a href="mailto:moritz@moritxius.de" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">moritz@moritxius.de</a><br />
                Telefon: +49 651 6860593
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">Verbraucherstreitbeilegung/Universalschlichtungsstelle:</h2>
              <p className="mb-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">Hinweis zur Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO:</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">https://ec.europa.eu/consumers/odr/</a> finden.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">Urheberrechtlicher Hinweis:</h2>
              <p className="mb-4">
                Die Inhalte dieser Website sind urheberrechtlich geschützt. Jegliche Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">Haftungsausschluss:</h2>
              <p className="mb-4">
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">Änderungen:</h2>
              <p className="mb-4">
                Wir behalten uns vor, dieses Impressum jederzeit zu ändern. Es gilt stets die zum Zeitpunkt des Besuchs unserer Website aktuelle Fassung.
              </p>
              
              <p className="mt-8 text-sm text-gray-400">
                <strong>Stand:</strong> 20.05.2025
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}