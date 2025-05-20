import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <GradientCircle className="w-[350px] h-[350px] bottom-[20%] right-[5%] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Kontakt <span className="text-primary-400">aufnehmen</span></h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">E-Mail</h4>
                    <a href="mailto:moritz@moritxius.de" className="text-primary-400 hover:text-primary-300">moritz@moritxius.de</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <a href="tel:+496516860593" className="text-primary-400 hover:text-primary-300">+49 651 6860593</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-gray-300">Am Weidengraben 65<br />54296 Trier<br />Deutschland</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.9261493455824!2d6.6289924!3d49.7456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47957ca2d5f7f58d%3A0x9f64c19437cc3bf4!2sAm%20Weidengraben%2065%2C%2054296%20Trier!5e0!3m2!1sde!2sde!4v1635789012345!5m2!1sde!2sde"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}