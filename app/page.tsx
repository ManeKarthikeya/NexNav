import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import { PopularCityList } from "./_components/PopularCityList";
import Earth from "./_components/Earth";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Earth/>
      <PopularCityList/>
    </div>
  );
}
