import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCircle } from "@/components/ui/gradient-circle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein." }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
  message: z.string().optional(),
  newsletter: z.boolean().default(true)
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const faqs = [
  {
    question: "Wann genau startet das Projekt?",
    answer: "Der geplante Start des Matsuda-Projekts ist im Herbst 2027. Wir halten Sie über wichtige Meilensteine auf dem Laufenden."
  },
  {
    question: "Wie kann ich das Projekt unterstützen?",
    answer: "Sie können sich für Updates anmelden und später an unseren Beta-Tests teilnehmen. Wir sind offen für Feedback und Ideen der Community."
  },
  {
    question: "Wird es eine App geben?",
    answer: "Ja, neben der Webplattform planen wir auch native Apps für iOS und Android, um den Zugang so einfach wie möglich zu gestalten."
  },
  {
    question: "Wie werden Käufer geschützt?",
    answer: "Durch unser einzigartiges Treuhandsystem wird Ihre Zahlung erst freigegeben, wenn Sie die Ware erhalten und akzeptiert haben."
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      newsletter: true
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihr Interesse! Wir werden uns in Kürze bei Ihnen melden.",
        variant: "default"
      });
      
      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Fehler",
        description: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <GradientCircle className="w-[350px] h-[350px] bottom-[20%] right-[5%] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bleiben Sie <span className="text-primary-400">informiert</span></h2>
            <p className="text-lg text-gray-300 mb-8">
              Melden Sie sich an, um Updates zum Projekt zu erhalten und als einer der Ersten Zugang zur Beta zu bekommen.
            </p>
            
            <GlassCard className="p-8 mb-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                  <Input
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors duration-300"
                    placeholder="Ihr Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="mb-5">
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail Adresse</Label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors duration-300"
                    placeholder="ihre.email@beispiel.de"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="mb-5">
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht (optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors duration-300"
                    placeholder="Ihre Nachricht an unser Team..."
                    {...register("message")}
                  />
                </div>
                
                <div className="mb-5 flex items-center space-x-2">
                  <Switch id="newsletter" {...register("newsletter")} />
                  <Label htmlFor="newsletter">Newsletter abonnieren</Label>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-gradient-purple hover:opacity-90 transition-opacity duration-300 font-medium shadow-lg"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isSubmitting ? "Wird gesendet..." : "Absenden"}
                </motion.button>
              </form>
            </GlassCard>
          </Reveal>
          
          <Reveal direction="right">
            <GlassCard className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Häufig gestellte Fragen</h3>
              
              <div className="space-y-6 flex-grow">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium mb-2 text-primary-300">{faq.question}</h4>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-dark-600">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sie haben weitere Fragen?</h4>
                    <p className="text-gray-400">Kontaktieren Sie uns unter <a href="mailto:info@matsuda-projekt.com" className="text-primary-400 hover:text-primary-300">info@matsuda-projekt.com</a></p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
