import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function Versand() {
  const shippingPartners = [
    {
      name: "DHL",
      logo: "https://i.pinimg.com/736x/32/e2/98/32e2981c72d0dce77ad6dd0096929a28.jpg",
      description: "Standard-Lieferung innerhalb Deutschlands und weltweit"
    },
    {
      name: "FedEx",
      logo: "https://www.designenlassen.de/blog/wp-content/uploads/2024/02/FedEx-logo-700x394-1.jpg",
      description: "Express-Lieferung international"
    },
    {
      name: "UPS",
      logo: "https://about.ups.com/content/dam/upsstories/images/logo/ups-logo-wo-text.svg",
      description: "Schnelle und zuverlässige weltweite Lieferung"
    },
    {
      name: "GLS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/GLS_Logo_2021.svg/2560px-GLS_Logo_2021.svg.png",
      description: "Zuverlässige Lieferung in ganz Europa"
    },
    {
      name: "Hermes",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSSkWfdvU_uvfHOJzuVEO8mJr2-q6pLg2fA&s",
      description: "Kostengünstige Lieferung in Deutschland und Europa"
    },
    {
      name: "DPD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png",
      description: "Paketzustellung in ganz Europa"
    },
    {
      name: "US Postal Service",
      logo: "https://images.ctfassets.net/l7hyhixwl1s2/3xltoEX3xoMtuaT4URrHk5/0574527fe313c24a41dda8b68b3ec769/usps-servicio-postal-de-los-estados-unidos.jpg?w=640&h=427&fl=progressive&q=50&fm=jpg",
      description: "Lieferung in die USA und von USA-Standorten aus"
    }
  ];

  const paymentMethods = [
    {
      name: "SEPA-Überweisung",
      logo: "https://einzelhandel.de/images/zahlungssysteme/lastschriftlogo-qf_rgb.png",
      description: "Sichere Banküberweisung für Kunden aus der SEPA-Zone"
    },
    {
      name: "PayPal",
      logo: "https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-1.png",
      description: "Schnelle und sichere Online-Zahlungen"
    },
    {
      name: "Klarna",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png",
      description: "Kauf auf Rechnung oder in Raten"
    },
    {
      name: "Sofortüberweisung",
      logo: "https://getlogo.net/wp-content/uploads/2020/03/sofort-logo-vector.png",
      description: "Direkte Überweisung von Ihrem Bankkonto"
    },
    {
      name: "Amazon Pay",
      logo: "https://smartstore.com/media/4435/content/Amazon_Pay_PNG_Logo_3000x800px.jpg",
      description: "Bezahlen mit Ihrem Amazon-Konto"
    },
    {
      name: "Kreditkarte",
      logo: "https://cdn-icons-png.flaticon.com/512/179/179431.png",
      description: "Visa, Mastercard, American Express"
    }
  ];

  return (
    <div className="bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GradientCircle className="w-[300px] h-[300px] top-[20%] left-[-150px] opacity-20" />
          <GradientCircle className="w-[350px] h-[350px] bottom-[30%] right-[-150px] opacity-20" />
          
          <Tabs defaultValue="versand" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto mb-12">
              <TabsTrigger value="versand">Versand</TabsTrigger>
              <TabsTrigger value="zahlung">Zahlungsmethoden</TabsTrigger>
              <TabsTrigger value="käuferschutz">Käuferschutz</TabsTrigger>
            </TabsList>
            
            <TabsContent value="versand">
              <Reveal>
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Versandinformationen</h1>
                
                <GlassCard className="p-8 mb-12">
                  <h2 className="text-2xl font-semibold mb-6">Weltweiter Gratisversand</h2>
                  <p className="text-gray-300 mb-8">
                    Bei Matsuda-Projekt bieten wir weltweiten Gratisversand für alle Bestellungen an. Wir arbeiten mit renommierten Logistikpartnern zusammen, um Ihre Bestellung sicher und schnell zu liefern. Jede Sendung wird versichert und mit einer Tracking-Nummer versehen, damit Sie den Versandstatus jederzeit verfolgen können.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {shippingPartners.map((partner, index) => (
                      <Reveal key={index} delay={index * 1} direction="up">
                        <GlassCard className="p-4 text-center h-full flex flex-col items-center justify-between" hoverable>
                          <div className="bg-white rounded-lg p-3 w-full h-24 flex items-center justify-center mb-4">
                            <img 
                              src={partner.logo} 
                              alt={`${partner.name} Logo`} 
                              className="max-h-16 max-w-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium mb-2">{partner.name}</h3>
                            <p className="text-sm text-gray-400">{partner.description}</p>
                          </div>
                        </GlassCard>
                      </Reveal>
                    ))}
                  </div>
                </GlassCard>
                
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Lieferzeiten</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-dark-600 pb-3">
                      <span className="font-medium">Deutschland</span>
                      <span className="text-primary-400">1-3 Werktage</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dark-600 pb-3">
                      <span className="font-medium">EU-Länder</span>
                      <span className="text-primary-400">3-5 Werktage</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dark-600 pb-3">
                      <span className="font-medium">Europa (Nicht-EU)</span>
                      <span className="text-primary-400">5-7 Werktage</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dark-600 pb-3">
                      <span className="font-medium">Nordamerika</span>
                      <span className="text-primary-400">5-10 Werktage</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dark-600 pb-3">
                      <span className="font-medium">Asien</span>
                      <span className="text-primary-400">7-14 Werktage</span>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                      <span className="font-medium">Rest der Welt</span>
                      <span className="text-primary-400">10-20 Werktage</span>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            </TabsContent>
            
            <TabsContent value="zahlung">
              <Reveal>
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Zahlungsmethoden</h1>
                
                <GlassCard className="p-8 mb-12">
                  <h2 className="text-2xl font-semibold mb-6">Flexible Zahlungsoptionen</h2>
                  <p className="text-gray-300 mb-8">
                    Bei Matsuda-Projekt bieten wir verschiedene sichere Zahlungsmethoden an, damit Sie die für Sie bequemste Möglichkeit wählen können. Alle Zahlungsinformationen werden über verschlüsselte Verbindungen übertragen und sicher verarbeitet.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paymentMethods.map((method, index) => (
                      <Reveal key={index} delay={index * 1} direction="up">
                        <GlassCard className="p-4 text-center h-full flex flex-col items-center justify-between" hoverable>
                          <div className="bg-white rounded-lg p-3 w-full h-20 flex items-center justify-center mb-4">
                            <img 
                              src={method.logo} 
                              alt={`${method.name} Logo`} 
                              className="max-h-14 max-w-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium mb-2">{method.name}</h3>
                            <p className="text-sm text-gray-400">{method.description}</p>
                          </div>
                        </GlassCard>
                      </Reveal>
                    ))}
                  </div>
                </GlassCard>
                
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Zahlungsbedingungen</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Der Gesamtbetrag wird erst nach erfolgreicher Lieferung und Ihrer Bestätigung abgebucht.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Bei Zahlung per Klarna oder auf Rechnung haben Sie bis zu 14 Tage Zeit, um die Zahlung vorzunehmen.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Alle Preise sind Endpreise und beinhalten die gesetzliche Mehrwertsteuer sowie Versandkosten.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Währungsumrechnungen erfolgen automatisch zum aktuellen Tageskurs.</span>
                    </li>
                  </ul>
                </GlassCard>
              </Reveal>
            </TabsContent>
            
            <TabsContent value="käuferschutz">
              <Reveal>
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Käuferschutz</h1>
                
                <GlassCard className="p-8 mb-12">
                  <h2 className="text-2xl font-semibold mb-6">Umfassender Käuferschutz bei Matsuda-Projekt</h2>
                  <p className="text-gray-300 mb-8">
                    Der Käuferschutz bei Matsuda-Projekt bietet Ihnen maximale Sicherheit beim Kauf von Amateurfunk-Equipment. Unser Treuhandsystem stellt sicher, dass Sie als Käufer geschützt sind und nur für erhaltene und zufriedenstellende Waren zahlen müssen.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <Reveal delay={1}>
                      <GlassCard className="p-6 h-full" hoverable>
                        <h3 className="text-xl font-semibold mb-4 text-primary-300">So funktioniert es</h3>
                        <ol className="space-y-3 list-decimal pl-5">
                          <li>Sie bestellen ein Produkt und autorisieren die Zahlung.</li>
                          <li>Der Betrag wird zunächst auf einem Treuhandkonto gesichert.</li>
                          <li>Der Verkäufer versendet die Ware an Sie.</li>
                          <li>Sie erhalten die Ware und prüfen sie innerhalb von 14 Tagen.</li>
                          <li>Nach Ihrer Bestätigung oder Ablauf der Frist wird die Zahlung an den Verkäufer freigegeben.</li>
                        </ol>
                      </GlassCard>
                    </Reveal>
                    
                    <Reveal delay={2}>
                      <GlassCard className="p-6 h-full" hoverable>
                        <h3 className="text-xl font-semibold mb-4 text-primary-300">Ihre Vorteile</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-primary-400 mr-2">✓</span>
                            <span>Zahlung erst nach erfolgreicher Lieferung und Prüfung</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-400 mr-2">✓</span>
                            <span>14 Tage Zeit zur Überprüfung der Ware</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-400 mr-2">✓</span>
                            <span>Erstattungsgarantie bei nicht erhaltener oder fehlerhafter Ware</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-400 mr-2">✓</span>
                            <span>Transparente Kommunikation mit dem Verkäufer</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-400 mr-2">✓</span>
                            <span>Unterstützung durch unser Support-Team bei Problemen</span>
                          </li>
                        </ul>
                      </GlassCard>
                    </Reveal>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">Was ist abgedeckt?</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Nicht gelieferte Artikel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Artikel, die erheblich von der Beschreibung abweichen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Defekte oder nicht funktionierende Geräte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Unvollständige Lieferungen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Transportschäden (durch Versicherung abgedeckt)</span>
                    </li>
                  </ul>
                  
                  <div className="bg-primary-900/20 rounded-lg p-6 border border-primary-500/20">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Garantie ohne Kleingedrucktes
                    </h3>
                    <p className="text-gray-300">
                      Unser Käuferschutz gilt für alle Transaktionen auf dem Matsuda Marketplace ohne versteckte Bedingungen oder komplizierte Prozesse. Wir stehen für Transparenz, Fairness und Sicherheit in der Amateurfunk-Community.
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}