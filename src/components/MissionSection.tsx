
import { Target, Heart, Users, Globe } from "lucide-react";

const MissionSection = () => {
  const goals = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Dostępność pomocy",
      description: "Ułatwiamy dostęp do miejsc wsparcia poprzez geolokalizację i mapę interaktywną"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wsparcie emocjonalne",
      description: "Oferujemy całodobowy chatbot i możliwość rozmowy z konsultantami"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Społeczność wzajemnej pomocy",
      description: "Łączymy osoby potrzebujące z tymi, którzy chcą pomóc"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Kompleksowe rozwiązanie",
      description: "Od podstawowych potrzeb po długoterminowe plany powrotu do samodzielności"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nasza <span className="text-pomoc-blue">misja</span> i <span className="text-pomoc-orange">cele</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong className="text-pomoc-blue">pomoc.tu</strong> to więcej niż aplikacja - to cyfrowy most łączący osoby 
              w trudnej sytuacji życiowej z konkretną pomocą w ich okolicy. Wierzymy, że technologia 
              może być narzędziem pozytywnej zmiany społecznej.
            </p>
            <blockquote className="text-2xl font-medium text-gray-800 italic border-l-4 border-pomoc-orange pl-6">
              "Każdy zasługuje na wsparcie i szansę na lepsze jutro"
            </blockquote>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {goals.map((goal, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pomoc-blue to-pomoc-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                {goal.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{goal.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dlaczego pomoc.tu?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-pomoc-blue mb-3">Neutralność językowa</h4>
              <p className="text-gray-700 mb-4">
                Unikamy stygmatyzujących określeń. Zamiast "potrzebuję pomocy" mówimy "szukam wsparcia".
              </p>
              
              <h4 className="text-lg font-semibold text-pomoc-blue mb-3">Dostępność 24/7</h4>
              <p className="text-gray-700">
                Kryzys nie czeka na godziny urzędowe. Nasza aplikacja jest dostępna zawsze, gdy jest potrzebna.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-pomoc-orange mb-3">Lokalna społeczność</h4>
              <p className="text-gray-700 mb-4">
                Skupiamy się na pomocy w najbliższej okolicy, budując lokalne sieci wsparcia.
              </p>
              
              <h4 className="text-lg font-semibold text-pomoc-orange mb-3">Perspektywa długoterminowa</h4>
              <p className="text-gray-700">
                Nie tylko rozwiązujemy doraźne problemy, ale pomagamy planować drogę do samodzielności.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
