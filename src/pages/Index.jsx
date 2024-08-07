import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cat, Paw, Heart, Info, Star, Sparkles, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const catBreeds = [
  { name: "Siamese", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg", personality: "Vocal and affectionate", intelligence: 90 },
  { name: "Persian", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg", personality: "Calm and gentle", intelligence: 75 },
  { name: "Maine Coon", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG", personality: "Friendly and playful", intelligence: 85 },
  { name: "British Shorthair", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg", personality: "Easygoing and loyal", intelligence: 80 },
  { name: "Sphynx", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg", personality: "Energetic and mischievous", intelligence: 88 },
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
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-purple-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} p-8`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end mb-4">
          <div className="flex items-center space-x-2">
            <Sun className="h-5 w-5" />
            <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            <Moon className="h-5 w-5" />
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-7xl font-bold mb-8 flex items-center justify-center ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Cat className="mr-4 h-16 w-16" />
          </motion.div>
          Purrfect Cats
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 overflow-hidden rounded-xl shadow-2xl"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[600px]"
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-transparent p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Welcome to Cat Paradise!</h2>
            <p className="text-xl text-purple-100">Discover the fascinating world of our feline friends.</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>Explore the Feline Universe</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dive into a world of purrs, whiskers, and endless curiosity!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-xl`}>
              <CardContent>
                <h2 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'} flex items-center`}>
                  <Info className="mr-2" /> Fascinating Feline Fact
                </h2>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentFact}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {currentFact}
                  </motion.p>
                </AnimatePresence>
                <Button onClick={getRandomFact} className="bg-purple-500 hover:bg-purple-600">
                  <Paw className="mr-2 h-4 w-4" /> Get Another Fact
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-xl`}>
              <CardContent>
                <h2 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'} flex items-center`}>
                  <Star className="mr-2" /> Cat Breed Spotlight
                </h2>
                {selectedBreed ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={selectedBreed.image} alt={selectedBreed.name} className="w-full h-48 object-cover rounded-lg mb-4 shadow-md" />
                    <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{selectedBreed.name}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{selectedBreed.personality}</p>
                    <div className="flex items-center mb-2">
                      <span className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Intelligence:</span>
                      <Progress value={selectedBreed.intelligence} className="w-1/2" />
                      <span className={`ml-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedBreed.intelligence}%</span>
                    </div>
                    <Button onClick={() => setSelectedBreed(null)} variant="outline" className={isDarkMode ? 'text-white' : ''}>
                      Back to Breeds
                    </Button>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {catBreeds.map((breed) => (
                      <Button key={breed.name} onClick={() => setSelectedBreed(breed)} variant="outline" className={`h-auto py-2 ${isDarkMode ? 'text-white hover:text-purple-300' : ''}`}>
                        {breed.name}
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-semibold mb-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'} flex items-center justify-center`}
        >
          <Sparkles className="mr-2" /> Popular Cat Breeds
        </motion.h2>
        <Carousel className="w-full max-w-3xl mx-auto mb-12">
          <CarouselContent>
            {catBreeds.map((breed, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`border-2 ${isDarkMode ? 'border-purple-500 bg-gray-800' : 'border-purple-300 bg-white'} hover:border-purple-500 transition-all duration-300`}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="text-center">
                        <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-lg mb-4 shadow-md" />
                        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{breed.name}</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{breed.personality}</p>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => toggleLike(breed.name)}
                                className={`transition-colors duration-300 ${likedBreeds[breed.name] ? 'bg-red-100' : ''} ${isDarkMode ? 'border-purple-500' : ''}`}
                              >
                                <Heart className={`h-4 w-4 ${likedBreeds[breed.name] ? 'fill-red-500 text-red-500' : isDarkMode ? 'text-purple-300' : 'text-gray-500'}`} />
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
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>Your Favorite Breeds</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(likedBreeds).map(([breed, liked]) => 
              liked && (
                <motion.div
                  key={breed}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Badge variant="secondary" className={`text-lg py-2 px-4 ${isDarkMode ? 'bg-purple-700 text-purple-100' : ''}`}>
                    {breed}
                  </Badge>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
