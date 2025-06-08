
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pomoc-blue rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">pomoc.tu</h3>
                <p className="text-sm">gdzie pomoc ma swoje miejsce</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Aplikacja mobilna łącząca osoby w trudnej sytuacji życiowej 
              z dostępną pomocą w ich okolicy.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pomoc-orange" />
                <span>kontakt@pomoc.tu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pomoc-orange" />
                <span>+48 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pomoc-orange" />
                <span>Polska</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">O projekcie</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-pomoc-orange transition-colors">Polityka prywatności</a>
              <a href="#" className="block hover:text-pomoc-orange transition-colors">Regulamin</a>
              <a href="#" className="block hover:text-pomoc-orange transition-colors">Jak pomóc?</a>
              <a href="#" className="block hover:text-pomoc-orange transition-colors">Partnerzy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            © 2024 pomoc.tu. Wszelkie prawa zastrzeżone. 
            <span className="text-pomoc-orange ml-2">Stworzone z ❤️ dla potrzebujących.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
