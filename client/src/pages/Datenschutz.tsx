import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Datenschutz() {
  return (
    <div className="bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GradientCircle className="w-[300px] h-[300px] top-[20%] left-[-150px] opacity-20" />
          <GradientCircle className="w-[350px] h-[350px] bottom-[10%] right-[-150px] opacity-20" />
          
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
            
            <GlassCard className="p-8 mb-12">
              <p className="mb-6">
                Diese Datenschutzerklärung erläutert Art, Umfang und Zweck der Erhebung und Verarbeitung personenbezogener Daten auf dieser Website.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">1. Verantwortlicher</h2>
              <p className="mb-4">
                <strong>Name/Firma:</strong> Moritz Béla Meier, vertreten durch seinen gesetzlichen Vertreter Andreas Meier<br />
                <strong>Anschrift:</strong> Am Weidengraben 65, 54296 Trier, Deutschland<br />
                <strong>Kontakt:</strong> E-Mail: <a href="mailto:moritz@moritxius.de" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">moritz@moritxius.de</a>, Telefon: +49 651 6860593
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">2. Datenschutzbeauftragter</h2>
              <p className="mb-4">
                Wir haben keinen Datenschutzbeauftragten benannt, da wir nicht gesetzlich dazu verpflichtet sind.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">3. Erhobene Daten und Verarbeitungszwecke</h2>
              
              <h3 className="text-lg font-medium mb-3 mt-6">3.1 Registrierung und Nutzerverwaltung</h3>
              <p className="mb-4">
                <strong>Datenarten:</strong> Name, E-Mail-Adresse, Passwort sowie technische Metadaten.<br />
                <strong>Zweck:</strong> Authentifizierung und Kontoverwaltung.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
              </p>
              
              <h3 className="text-lg font-medium mb-3 mt-6">3.2 Hosting und Server-Logs</h3>
              <p className="mb-4">
                <strong>Datenarten:</strong> Server-Logfiles (IP-Adresse, Zugriffszeit, Browsertyp o. Ä.).<br />
                <strong>Zweck:</strong> Betriebssicherheit, Performance und Analyse zur Optimierung.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
              
              <h3 className="text-lg font-medium mb-3 mt-6">3.3 Cookies und Tracking</h3>
              <p className="mb-4">
                <strong>Session-Cookies:</strong> Technisch erforderlich, um Nutzer-Sessions aufrechtzuerhalten.<br />
                <strong>Analyse-Cookies oder Tracking</strong> sind nicht in Verwendung.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">4. Datenweitergabe an Dritte</h2>
              <p className="mb-4">
                Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet grundsätzlich nicht statt. Ausnahmen gelten nur, soweit dies für die Vertragsabwicklung erforderlich ist.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">5. Aufbewahrungsdauer</h2>
              <p className="mb-4">
                <strong>Registrierungsdaten:</strong> Bis zur Kontolöschung oder Widerruf, höchstens 3 Jahre nach letzter Anmeldung.<br />
                <strong>Server-Logs:</strong> Automatisch nach 30 Tagen gelöscht (länger bei Sicherheitsvorfällen).
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">6. Betroffenenrechte</h2>
              <p className="mb-4">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch und Widerruf erteilter Einwilligungen sowie das Beschwerderecht bei einer Aufsichtsbehörde.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">7. Sicherheit</h2>
              <p className="mb-4">
                Es werden technische und organisatorische Maßnahmen wie TLS-Verschlüsselung, Firewalls und Zugangskontrollen eingesetzt, um Ihre Daten zu schützen.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8">8. Aktualität und Änderungen</h2>
              <p className="mb-4">
                Diese Datenschutzerklärung gilt ab dem 20. Mai 2025 und kann bei Bedarf aktualisiert werden. Änderungen werden auf dieser Seite veröffentlicht.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}