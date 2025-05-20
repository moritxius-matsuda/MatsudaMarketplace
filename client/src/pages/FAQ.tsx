import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "Was ist das Matsuda-Projekt?",
      answer: "Das Matsuda-Projekt ist eine globale Online-Plattform für den fairen, transparenten und sicheren Handel mit Amateurfunk-Equipment. Unser Ziel ist es, Funkamateuren weltweit einen zentralen, vertrauenswürdigen Marktplatz zu bieten – unabhängig von Erfahrung oder Spezialisierung."
    },
    {
      question: "Wann startet das Matsuda-Projekt?",
      answer: "Der voraussichtliche Start ist im Herbst 2027. Bis dahin arbeiten wir intensiv an der Entwicklung der Plattform und ersten Produkten. Sie können sich gerne für Updates anmelden, um über wichtige Meilensteine informiert zu werden."
    },
    {
      question: "Welche Vorteile bietet der Matsuda Marketplace?",
      answer: "Der Matsuda Marketplace bietet zahlreiche Vorteile, darunter feste und transparente Preise ohne Auktionen, weltweiten Gratisversand, starken Käuferschutz mit Zahlung erst nach erfolgreicher Lieferung, einfache Registrierung mit bestehenden Konten, eine große Auswahl an Amateurfunk-Equipment, kompetenten Support und flexible Zahlungsmethoden."
    },
    {
      question: "Was ist der Käuferschutz bei Matsuda?",
      answer: "Der Käuferschutz bei Matsuda garantiert, dass Ihre Zahlung erst freigegeben wird, nachdem Sie die Ware erhalten und akzeptiert haben. Dies schützt Sie vor betrügerischen Verkäufern und stellt sicher, dass Sie genau das bekommen, was Sie bestellt haben. Bei Problemen steht Ihnen unser Support-Team zur Seite und hilft bei der Lösung."
    },
    {
      question: "Welche Zahlungsmethoden werden akzeptiert?",
      answer: "Wir akzeptieren verschiedene Zahlungsmethoden, darunter PayPal, SEPA-Überweisung, Klarna, Sofortüberweisung, Amazon Pay, Kreditkarten und andere gängige Zahlungsmittel. Die Zahlungsabwicklung erfolgt über sichere, verschlüsselte Verbindungen."
    },
    {
      question: "Wie funktioniert der Versand?",
      answer: "Wir bieten weltweiten Gratisversand an. Die Lieferung erfolgt je nach Region über verschiedene Versanddienstleister wie DHL, TNT, FedEx, UPS, GLS, Hermes, DPD und US Post. Alle Sendungen werden versichert und mit Tracking-Nummern versehen, damit Sie Ihre Bestellung jederzeit verfolgen können."
    },
    {
      question: "Was ist Matsuda Radio?",
      answer: "Matsuda Radio ist unsere Vision, eigene Funkgeräte und Zubehör zu entwickeln – mit und für die Amateurfunk-Community. Im Mittelpunkt stehen Qualität, innovative Features und ein attraktives Preis-Leistungs-Verhältnis. Zunächst werden wir Zubehör anbieten, später auch eigene Transceiver."
    },
    {
      question: "Wie kann ich die Community unterstützen?",
      answer: "Sie können die Community unterstützen, indem Sie sich für Updates anmelden, Feedback geben und später an Beta-Tests teilnehmen. Ihre Ideen und Vorschläge sind für die Entwicklung des Projekts sehr wertvoll. Sobald wir starten, können Sie auch durch den Kauf von Produkten das Projekt unterstützen."
    },
    {
      question: "Wird es eine Mobile App geben?",
      answer: "Ja, neben der Webplattform planen wir auch native Apps für iOS und Android, um den Zugang so einfach wie möglich zu gestalten. Diese werden alle Funktionen der Website bieten und zusätzlich mobile Funktionen wie Push-Benachrichtigungen und QR-Code-Scanning."
    },
    {
      question: "Wie steht es um die Sicherheit meiner Daten?",
      answer: "Der Schutz Ihrer Daten hat für uns höchste Priorität. Wir verwenden modernste Verschlüsselungstechnologien und sichere Server. Personenbezogene Daten werden nur für die notwendigen Zwecke gespeichert und nicht an Dritte weitergegeben. Weitere Informationen finden Sie in unserer Datenschutzerklärung."
    }
  ];

  return (
    <div className="bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GradientCircle className="w-[300px] h-[300px] top-[20%] left-[-150px] opacity-20" />
          <GradientCircle className="w-[350px] h-[350px] bottom-[10%] right-[-150px] opacity-20" />
          
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Häufig gestellte Fragen</h1>
            
            <GlassCard className="p-8 mb-12">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-primary-300 hover:text-primary-200">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
            
            <GlassCard className="p-8 text-center">
              <h2 className="text-xl font-semibold mb-4">Haben Sie weitere Fragen?</h2>
              <p className="text-gray-300 mb-6">
                Unser Team steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns über das Kontaktformular oder per E-Mail.
              </p>
              <a 
                href="mailto:moritz@moritxius.de" 
                className="px-6 py-3 rounded-full bg-gradient-purple hover:opacity-90 transition-opacity duration-300 font-medium shadow-lg inline-block"
              >
                E-Mail senden
              </a>
            </GlassCard>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}