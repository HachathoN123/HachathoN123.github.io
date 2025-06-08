
import { Download, Smartphone, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pomoc-blue to-pomoc-orange text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Smartphone className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pobierz aplikację <br />
              <span className="text-yellow-200">pomoc.tu</span>
            </h2>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Dołącz do społeczności wzajemnej pomocy. Znajdź wsparcie lub pomóż innym - 
              każdy krok ma znaczenie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Heart className="w-8 h-8 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-lg font-semibold mb-2">Dla osób szukających wsparcia</h3>
              <p className="text-sm opacity-90">
                Mapa pomocy, poradniki, chatbot 24/7 i wsparcie konsultantów
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Users className="w-8 h-8 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-lg font-semibold mb-2">Dla osób chcących pomóc</h3>
              <p className="text-sm opacity-90">
                Dodawaj miejsca pomocy i wspieraj innych rzeczowo
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-white text-pomoc-blue hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Pobierz z Google Play
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pomoc-blue text-lg px-8 py-6 rounded-full font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Pobierz z App Store
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-8">
            Aplikacja dostępna na urządzenia Android i iOS
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
