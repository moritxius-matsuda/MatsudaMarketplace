import { useEffect } from "react";
import { Route, Switch } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MarketplaceSection from "@/components/home/MarketplaceSection";
import RadioSection from "@/components/home/RadioSection";
import TimelineSection from "@/components/home/TimelineSection";
import ContactSection from "@/components/home/ContactSection";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import NotFound from "@/pages/not-found";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import FAQ from "@/pages/FAQ";
import Versand from "@/pages/Versand";
import About from "@/pages/About";

function HomePage() {
  useSmoothScroll();
  
  useEffect(() => {
    // Set scroll behavior on the HTML element directly
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MarketplaceSection />
        <RadioSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/faq" component={FAQ} />
      <Route path="/versand" component={Versand} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
