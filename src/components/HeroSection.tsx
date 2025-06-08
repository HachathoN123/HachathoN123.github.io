import { Heart, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="min-h-screen bg-gradient-to-br from-pomoc-light-blue to-white flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-pomoc-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 md:text-[251F5F] text-[#272162]">
              pomoc<span className="text-pomoc-orange text-[251F5F] text-[#251f60]">.tu</span>
            </h1>
            <p className="text-lg text-gray-600 mb-2">gdzie pomoc ma swoje miejsce</p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aplikacja mobilna łącząca <br />
              <span className="text-pomoc-blue">potrzebujących</span> z <span className="text-pomoc-orange">pomocą</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Nasza misja to stworzenie cyfrowego mostu między osobami w trudnej sytuacji życiowej 
              a dostępną pomocą w ich okolicy. Wierzymy, że każdy zasługuje na wsparcie i szansę na lepsze jutro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pomoc-blue hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pomoc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">
              </span>
              </div>
              <h3 className="text-xl font-bold text-pomoc-blue mb-3">Szukam wsparcia</h3>
              <p className="text-gray-600">
                Znajdź miejsca pomocy, skorzystaj z poradników i otrzymaj wsparcie 24/7
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pomoc-orange hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pomoc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">
              </span>
              </div>
              <h3 className="text-xl font-bold text-pomoc-orange mb-3">Chcę pomóc innym</h3>
              <p className="text-gray-600">
                Dodaj miejsca pomocy, wspieraj rzeczowo i buduj społeczność wzajemnej pomocy
              </p>
            </div>
          </div>

          <Button size="lg" className="bg-pomoc-orange hover:bg-pomoc-orange/90 text-white text-lg px-8 py-6 rounded-full">
            Pobierz aplikację pomoc.tu
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;