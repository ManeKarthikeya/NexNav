"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destination to Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Paris,France",
    title: "Explore the City of Lights-Eiffel Tower,Loure & more",
    src: "https://images.pexels.com/photos/2675268/pexels-photo-2675268.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <p>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.</p>
  },
  {
    category: "New York, USA",
    title: "Experience NYC - Times Square, Central Park, Broadway",
    src: "https://images.pexels.com/photos/19803228/pexels-photo-19803228.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.</p>
  },
  {
    category: "Tokyo,Japan",
    title: "Discover Tokyo - Shibuya, Cherry Blossoms, Temples",
    src: "https://images.pexels.com/photos/31239492/pexels-photo-31239492.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <p>Central Park is an urban park in New York City located between the Upper West and Upper East Sides of Manhattan.</p>
  },
  {
    category: "Rome, Italy",
    title: "Walk through History - Colosseum, Vatican, Roman Forum",
    src: "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <p>Rome, the Eternal City, stands as a timeless crossroads of history, faith, and art. As the capital of Italy and the heart of the ancient Roman Empire, it boasts 2,800 years of continuous civilization— from the ruins of the Colosseum and the Roman Forum to the Renaissance masterpieces spread across its winding streets and piazzas.</p>
  },
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation - Burj Khalifa, Desert Safari",
    src: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <p>The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates.</p>
  },
  {
    category: "India",
    title: "Incredible India - Taj Mahal, Jaipur, Kerala & More to Explore",
    src: "https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <p>India, the world’s largest democracy, is a land of vibrant diversity, blending ancient traditions with modern growth. From the majestic Himalayas in the north to the serene beaches in the south, it offers a kaleidoscope of cultures, languages, and landscapes. Famous for landmarks like the Taj Mahal, Jaipur’s palaces, Kerala’s backwaters, and Varanasi’s ghats, India is a journey through history, spirituality, and natural beauty. Festivals such as Diwali, Holi, and Eid showcase the country’s colorful spirit, while its cuisine—ranging from spicy curries to delicate sweets—delights food lovers worldwide.</p>
  }
];


