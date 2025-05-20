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
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
