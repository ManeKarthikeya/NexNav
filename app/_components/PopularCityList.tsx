"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 md:py-30 px-3">
      <h2 className="max-w-7xl mx-auto text-lg md:text-2xl lg:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center md:text-left px-3 mb-6 md:mb-0">
           Popular Destinations to Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}


const data = [
  {
    category: "India",
    title: "Incredible India - Taj Mahal, Jaipur, Kerala & More to Explore",
    src: "https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-lg mb-2">Famous Tourist Spots:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Taj Mahal, Agra - Iconic white marble mausoleum and UNESCO World Heritage Site</li>
          <li>Varanasi Ghats - Spiritual capital on the banks of the Ganges River</li>
          <li>Jaipur's Amer Fort & City Palace - Stunning Rajput architecture</li>
          <li>Kerala Backwaters - Serene network of lagoons and lakes</li>
          <li>Goa Beaches - Pristine coastline with Portuguese heritage</li>
          <li>Golden Temple, Amritsar - Holiest shrine of Sikhism</li>
        </ul>
        <p className="font-semibold text-lg mb-2 mt-4">Specialties:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Diverse cuisine: Butter Chicken, Biryani, Masala Dosa, and street food like Pani Puri</li>
          <li>Traditional arts: Kathak dance, classical music, handicrafts</li>
          <li>Ayurveda and yoga practices</li>
          <li>Vibrant festivals: Diwali, Holi, Eid, Christmas celebrated with equal enthusiasm</li>
          <li>Varied landscapes: Himalayas, deserts, beaches, forests, and tea plantations</li>
        </ul>
      </div>
    )
  },
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation - Burj Khalifa, Desert Safari",
    src: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-lg mb-2">Famous Tourist Spots:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Burj Khalifa - World's tallest building with observation decks</li>
          <li>The Dubai Mall - One of the world's largest shopping centers</li>
          <li>Palm Jumeirah - Artificial archipelago with luxury resorts</li>
          <li>Dubai Marina - Modern waterfront with skyscrapers and yachts</li>
          <li>Desert Safari - Dune bashing, camel rides, and Bedouin camps</li>
          <li>Dubai Fountain - World's largest choreographed fountain system</li>
        </ul>
        <p className="font-semibold text-lg mb-2 mt-4">Specialties:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Luxury shopping with tax-free benefits</li>
          <li>Fusion cuisine: Traditional Arabic dishes alongside international gourmet options</li>
          <li>Year-round sunshine and warm weather</li>
          <li>Record-breaking architecture and engineering marvels</li>
          <li>Cultural mix of traditional Bedouin heritage and ultra-modern lifestyle</li>
        </ul>
      </div>
    )
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo - Shibuya, Cherry Blossoms, Temples",
    src: "https://images.pexels.com/photos/31239492/pexels-photo-31239492.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-lg mb-2">Famous Tourist Spots:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Shibuya Crossing - World's busiest pedestrian crossing</li>
          <li>Senso-ji Temple - Tokyo's oldest temple in Asakusa</li>
          <li>Tokyo Skytree - Tallest tower in Japan with observation decks</li>
          <li>Meiji Shrine - Dedicated to Emperor Meiji and Empress Shoken</li>
          <li>Tsukiji Outer Market - Fresh seafood and traditional foods</li>
          <li>Shinjuku Gyoen National Garden - Beautiful park especially during cherry blossom season</li>
        </ul>
        <p className="font-semibold text-lg mb-2 mt-4">Specialties:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Sushi, Ramen, Tempura, and other world-renowned cuisine</li>
          <li>Cherry blossom viewing (Hanami) in spring</li>
          <li>High-tech innovations alongside preserved traditions</li>
          <li>Efficient public transportation system</li>
          <li>Anime and pop culture hub: Akihabara, Harajuku</li>
          <li>Onsen (hot springs) culture and ryokan (traditional inns)</li>
        </ul>
      </div>
    )
  },
  {
    category: "Paris, France",
    title: "Explore the City of Lights - Eiffel Tower, Louvre & more",
    src: "https://images.pexels.com/photos/2675268/pexels-photo-2675268.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-lg mb-2">Famous Tourist Spots:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Eiffel Tower - Iconic iron lattice tower and symbol of Paris</li>
          <li>Louvre Museum - World's largest art museum home to Mona Lisa</li>
          <li>Notre-Dame Cathedral - Medieval Catholic cathedral (currently under restoration)</li>
          <li>Champs-Élysées - Famous avenue with theaters, cafés, and luxury shops</li>
          <li>Arc de Triomphe - Honoring those who fought for France</li>
          <li>Montmartre - Historic district with Sacré-Cœur Basilica and artist square</li>
        </ul>
        <p className="font-semibold text-lg mb-2 mt-4">Specialties:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>World-class cuisine: Croissants, baguettes, cheese, wine, and patisseries</li>
          <li>Fashion capital with haute couture and luxury brands</li>
          <li>Art and culture hub with countless museums and galleries</li>
          <li>Romantic atmosphere along the Seine River</li>
          <li>Cafe culture with charming sidewalk bistros</li>
          <li>Rich history from Roman times through revolutions to modern era</li>
        </ul>
      </div>
    )
  },
  {
    category: "Rome, Italy",
    title: "Walk through History - Colosseum, Vatican, Roman Forum",
    src: "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-lg mb-2">Famous Tourist Spots:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Colosseum - Ancient amphitheater and symbol of Imperial Rome</li>
          <li>Vatican City - St. Peter's Basilica and Sistine Chapel with Michelangelo's frescoes</li>
          <li>Roman Forum - Center of ancient Roman public life</li>
          <li>Trevi Fountain - Baroque masterpiece and coin-throwing tradition</li>
          <li>Pantheon - Best-preserved ancient Roman monument with massive dome</li>
          <li>Spanish Steps - Famous staircase with Trinità dei Monti church</li>
        </ul>
        <p className="font-semibold text-lg mb-2 mt-4">Specialties:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Authentic Italian cuisine: Carbonara, Amatriciana, Cacio e Pepe, and gelato</li>
          <li>Espresso culture and historic cafes</li>
          <li>Open-air museums with ancient ruins around every corner</li>
          <li>Piazzas as social gathering places with fountains and atmosphere</li>
          <li>Religious significance as center of Catholicism</li>
          <li>La Dolce Vita lifestyle of enjoyment and appreciation for beauty</li>
        </ul>
      </div>
    )
  },
  {
    category: "New York, USA",
    title: "Experience NYC - Times Square, Central Park, Broadway",
    src: "https://images.pexels.com/photos/19803228/pexels-photo-19803228.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-lg mb-2">Famous Tourist Spots:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Times Square - Bustling commercial intersection and entertainment hub</li>
          <li>Central Park - Vast urban park with lakes, trails, and attractions</li>
          <li>Statue of Liberty - Iconic symbol of freedom on Liberty Island</li>
          <li>Empire State Building - Art Deco skyscraper with observation decks</li>
          <li>Brooklyn Bridge - Historic suspension bridge connecting Manhattan and Brooklyn</li>
          <li>Metropolitan Museum of Art - One of the world's largest and finest art museums</li>
        </ul>
        <p className="font-semibold text-lg mb-2 mt-4">Specialties:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Broadway theater district with world-class performances</li>
          <li>Diverse culinary scene: NYC pizza, bagels, deli sandwiches, and international cuisine</li>
          <li>Cultural melting pot with distinct neighborhoods (Chinatown, Little Italy, etc.)</li>
          <li>Shopping from luxury Fifth Avenue to eclectic SoHo boutiques</li>
          <li>24/7 energy and "city that never sleeps" atmosphere</li>
          <li>World-renowned museums, galleries, and cultural institutions</li>
        </ul>
      </div>
    )
  }
];