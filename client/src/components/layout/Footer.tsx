import { Link } from "wouter";
import { GithubIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import { GradientCircle } from "@/components/ui/gradient-circle";

export default function Footer() {
  return (
    <footer className="bg-dark-900 py-12 relative">
      <GradientCircle className="w-[300px] h-[300px] top-0 left-1/2 transform -translate-x-1/2 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-purple flex items-center justify-center shadow-lg mr-3">
                <span className="text-xl font-bold">M</span>
              </div>
              <span className="text-xl font-bold">Matsuda-Projekt</span>
            </div>
            <p className="text-gray-400 mb-6">
              Die Plattform für Funkamateure – fair, transparent, innovativ. 
              Der voraussichtliche Start ist im Herbst 2027.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-primary-900 transition-colors duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-primary-900 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-primary-900 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-primary-900 transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Matsuda Marketplace</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Wie es funktioniert</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Käuferschutz</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Zahlungsmethoden</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Versand</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Matsuda Radio</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Über uns</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Community</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Produktentwicklung</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Roadmap</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-300">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-600 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Matsuda-Projekt. Alle Rechte vorbehalten. Dieses Projekt befindet sich in der Entwicklung.</p>
        </div>
      </div>
    </footer>
  );
}
