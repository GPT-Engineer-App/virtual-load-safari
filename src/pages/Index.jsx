import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cat, Paw, Heart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const catBreeds = [
  { name: "Siamese", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
  { name: "Persian", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
  { name: "Maine Coon", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
  { name: "British Shorthair", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg" },
];

const catFacts = [
  "Cats have been domesticated for over 4,000 years.",
  "They can make over 100 different vocal sounds.",
  "A group of cats is called a 'clowder'.",
  "Cats spend 70% of their lives sleeping.",
  "They have an excellent sense of balance and flexible bodies.",
  "A cat's hearing is much more sensitive than a human's or dog's.",
  "Cats have 32 muscles in each ear.",
  "A cat's nose print is unique, like a human's fingerprint.",
];

const Index = () => {
  const [currentFact, setCurrentFact] = useState(catFacts[0]);
  const [likedBreeds, setLikedBreeds] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomFact();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getRandomFact = () => {
    const newFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCurrentFact(newFact);
  };

  const toggleLike = (breedName) => {
    setLikedBreeds(prev => ({...prev, [breedName]: !prev[breedName]}));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-8 flex items-center justify-center text-purple-600"
        >
          <Cat className="mr-2" /> Purrfect Cats
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-purple-600">Welcome to Cat Paradise!</h2>
            <p className="text-gray-700">Discover the fascinating world of our feline friends.</p>
          </motion.div>
        </motion.div>

        <Card className="bg-white p-6 rounded-lg shadow-md mb-12">
          <CardContent>
            <h2 className="text-3xl font-semibold mb-4 text-purple-600 flex items-center">
              <Info className="mr-2" /> Fascinating Feline Fact
            </h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg mb-4"
              >
                {currentFact}
              </motion.p>
            </AnimatePresence>
            <Button onClick={getRandomFact} className="bg-purple-500 hover:bg-purple-600">
              <Paw className="mr-2 h-4 w-4" /> Get Another Fact
            </Button>
          </CardContent>
        </Card>

        <h2 className="text-4xl font-semibold mb-6 text-purple-600">Popular Cat Breeds</h2>
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {catBreeds.map((breed, index) => (
              <CarouselItem key={index}>
                <Card className="border-2 border-purple-300">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center">
                      <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-lg mb-4 shadow-md" />
                      <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => toggleLike(breed.name)}
                              className={`transition-colors duration-300 ${likedBreeds[breed.name] ? 'bg-red-100' : ''}`}
                            >
                              <Heart className={`h-4 w-4 ${likedBreeds[breed.name] ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{likedBreeds[breed.name] ? 'Unlike' : 'Like'} this breed</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">Your Favorite Breeds</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(likedBreeds).map(([breed, liked]) => 
              liked && <Badge key={breed} variant="secondary">{breed}</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
