import { useState } from "react";
import { motion } from "framer-motion";
import { Cat, Paw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

  const getRandomFact = () => {
    const newFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCurrentFact(newFact);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 flex items-center justify-center text-purple-600"
        >
          <Cat className="mr-2" /> All About Cats
        </motion.h1>
        
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg mb-8"
        />

        <Card className="bg-white p-6 rounded-lg shadow-md mb-8">
          <CardContent>
            <h2 className="text-3xl font-semibold mb-4 text-purple-600">Fascinating Feline Fact</h2>
            <p className="text-lg mb-4">{currentFact}</p>
            <Button onClick={getRandomFact} className="bg-purple-500 hover:bg-purple-600">
              <Paw className="mr-2 h-4 w-4" /> Get Another Fact
            </Button>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold mb-4 text-purple-600">Popular Cat Breeds</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {catBreeds.map((breed, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center">
                      <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h3 className="text-xl font-semibold">{breed.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Index;
