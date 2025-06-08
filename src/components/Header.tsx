
import { Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-pomoc-blue rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-pomoc-blue">pomoc.tu</h1>
              <p className="text-xs text-gray-600">gdzie pomoc ma swoje miejsce</p>
            </div>
          </div>
          
          <Button className="bg-pomoc-orange hover:bg-pomoc-orange/90 text-white">
            <Download className="w-4 h-4 mr-2" />
            Pobierz aplikację
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
