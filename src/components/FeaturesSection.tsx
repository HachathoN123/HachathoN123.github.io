import { MapPin, Book, Route, MessageCircle, Users, Heart, HelpCircle, Gift, Plus, Handshake } from "lucide-react";
const FeaturesSection = () => {
  const supportFeatures = [{
    icon: <MapPin className="w-6 h-6" />,
    title: "Mapa pomocy",
    description: "Geolokalizacja miejsc wsparcia: noclegownie, ośrodki, jadłodajnie w Twojej okolicy"
  }, {
    icon: <Book className="w-6 h-6" />,
    title: "Poradnik przetrwania",
    description: "Praktyczne wskazówki jak zadbać o siebie w sytuacji kryzysowej"
  }, {
    icon: <Route className="w-6 h-6" />,
    title: "Kroki do samodzielności",
    description: "Interaktywny plan działania: prawa, dokumenty, mieszkanie, edukacja"
  }, {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Chatbot 24/7",
    description: "Całodobowe wsparcie do pytań i kierowania do odpowiednich instytucji"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Chat z konsultantem",
    description: "Rozmowy z ekspertami dostępne codziennie w godzinach 16:00–22:00"
  }, {
    icon: <Heart className="w-6 h-6" />,
    title: "Historie innych",
    description: "Inspirujące artykuły i nagrania osób, które wyszły z kryzysu"
  }, {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Quiz samooceny",
    description: "Delikatnie sformułowany test: \"Czy jestem zagrożony bezdomnością?\""
  }, {
    icon: <Gift className="w-6 h-6" />,
    title: "Kącik rzeczy drugiego życia",
    description: "Darmowe przedmioty do odebrania od innych użytkowników"
  }];
  const helpFeatures = [{
    icon: <Plus className="w-6 h-6" />,
    title: "Dodawanie miejsc pomocy",
    description: "Możliwość dodania nowych lokalizacji wsparcia na mapę pomocy"
  }, {
    icon: <Handshake className="w-6 h-6" />,
    title: "Wsparcie rzeczowe",
    description: "Oferowanie darmowych przedmiotów w kąciku drugiego życia"
  }];
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Funkcje aplikacji <span className="text-pomoc-blue">pomoc.tu</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Kompleksowe narzędzia wspierające osoby w trudnej sytuacji życiowej 
            oraz umożliwiające pomoc innym
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Funkcje dla osób szukających wsparcia */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-pomoc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">
              </span>
              </div>
              <h3 className="text-2xl font-bold text-pomoc-blue mb-2">Szukam wsparcia</h3>
              <p className="text-gray-600">Funkcje dedykowane osobom potrzebującym pomocy</p>
            </div>
            
            <div className="space-y-6">
              {supportFeatures.map((feature, index) => <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-pomoc-light-blue transition-colors">
                  <div className="w-12 h-12 bg-pomoc-blue rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Funkcje dla osób chcących pomagać */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-pomoc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">
              </span>
              </div>
              <h3 className="text-2xl font-bold text-pomoc-orange mb-2">Chcę pomóc innym</h3>
              <p className="text-gray-600">Funkcje dla osób oferujących wsparcie</p>
            </div>
            
            <div className="space-y-6">
              {helpFeatures.map((feature, index) => <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-pomoc-light-orange transition-colors">
                  <div className="w-12 h-12 bg-pomoc-orange rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>)}
            </div>
            
            <div className="mt-8 p-6 bg-pomoc-light-orange rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Buduj społeczność pomocy</h4>
              <p className="text-gray-700 text-sm">
                Twoja pomoc tworzy sieć wsparcia, która może zmienić życie wielu osób. 
                Każdy gest ma znaczenie - od dodania miejsca pomocy po oferowanie rzeczy drugiego życia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;