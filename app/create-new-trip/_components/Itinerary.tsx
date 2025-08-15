"use client"
import React, { useEffect, useState } from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from 'next/image';
import { ArrowLeft, Clock, ExternalLink, Star, Ticket, Timer, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { title } from 'process';
import Link from 'next/link';
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';
import { useTripDetail } from '@/app/provider';
import { TripInfo } from './ChatBox';

// const TRIP_DATA = {
//         "destination": "Pune",
//         "duration": "2 Days",
//         "origin": "Mumbai",
//         "budget": "Moderate",
//         "group_size": "3 to 5 People (Family)",
//         "hotels": [
//             {
//                 "hotel_name": "The O Hotel, Pune",
//                 "hotel_address": "North Main Road, Koregaon Park, Pune, Maharashtra 411001",
//                 "price_per_night": "INR 6500 - 8000",
//                 "hotel_image_url": "https://example.com/the_o_hotel.jpg",
//                 "geo_coordinates": {
//                     "latitude": 18.535805,
//                     "longitude": 73.896796
//                 },
//                 "rating": 4.5,
//                 "description": "A stylish and comfortable boutique hotel located in the upscale Koregaon Park, offering modern amenities, excellent dining options, and a rooftop pool. Ideal for families seeking a blend of comfort and convenience."
//             },
//             {
//                 "hotel_name": "Lemon Tree Hotel, Hinjawadi, Pune",
//                 "hotel_address": "Plot No. 15, Rajiv Gandhi Infotech Park, Phase-1, Hinjawadi, Pune, Maharashtra 411057",
//                 "price_per_night": "INR 4500 - 6000",
//                 "hotel_image_url": "https://example.com/lemon_tree_hinjawadi.jpg",
//                 "geo_coordinates": {
//                     "latitude": 18.599723,
//                     "longitude": 73.749502
//                 },
//                 "rating": 4.2,
//                 "description": "A vibrant and cheerful hotel offering comfortable rooms, a multi-cuisine restaurant, and good connectivity. While slightly further from the city center attractions, it offers good value for money for families."
//             },
//             {
//                 "hotel_name": "Sayaji Hotel Pune",
//                 "hotel_address": "Mumbai-Bangalore Bypass, Wakad, Pune, Maharashtra 412702",
//                 "price_per_night": "INR 5000 - 7000",
//                 "hotel_image_url": "https://example.com/sayaji_hotel_pune.jpg",
//                 "geo_coordinates": {
//                     "latitude": 18.598502,
//                     "longitude": 73.766465
//                 },
//                 "rating": 4.3,
//                 "description": "Known for its spacious rooms, multiple dining venues, and excellent service. Located conveniently on the highway bypass, offering easy access to various parts of Pune. Suitable for families looking for a comprehensive hotel experience."
//             }
//         ],
//         "itinerary": [
//             {
//                 "day": 1,
//                 "day_plan": "Explore the historical and cultural heart of Pune, followed by a visit to a popular shopping and dining district.",
//                 "best_time_to_visit_day": "Morning to Evening",
//                 "activities": [
//                     {
//                         "place_name": "Shaniwar Wada",
//                         "place_details": "A historic fortification in the city of Pune, built in 1732. Once the seat of the Peshwas of the Maratha Empire, it is now one of the most popular tourist destinations in Pune. Known for its grand architecture and historical significance.",
//                         "place_image_url": "https://example.com/shaniwar_wada.jpg",
//                         "geo_coordinates": {
//                             "latitude": 18.5186,
//                             "longitude": 73.855
//                         },
//                         "place_address": "Qilla Rd, Shaniwar Peth, Pune, Maharashtra 411030",
//                         "ticket_pricing": "INR 15 (Indians), INR 125 (Foreigners). Free for children under 15.",
//                         "time_travel_each_location": "1.5 - 2 hours",
//                         "best_time_to_visit": "9:00 AM - 12:00 PM (to avoid crowds and heat)"
//                     },
//                     {
//                         "place_name": "Aga Khan Palace",
//                         "place_details": "A majestic historic building considered to be one of the greatest marvels of India. It was built by Sultan Muhammed Shah Aga Khan III in 1892. It holds significant importance as Mahatma Gandhi, his wife Kasturba Gandhi, and secretary Mahadev Desai were interned here during the Quit India Movement.",
//                         "place_image_url": "https://example.com/aga_khan_palace.jpg",
//                         "geo_coordinates": {
//                             "latitude": 18.5634,
//                             "longitude": 73.8966
//                         },
//                         "place_address": "Nagar Road, Kalyani Nagar, Pune, Maharashtra 411014",
//                         "ticket_pricing": "INR 25 (Indians), INR 300 (Foreigners). Free for children below 15.",
//                         "time_travel_each_location": "1 - 1.5 hours",
//                         "best_time_to_visit": "2:00 PM - 4:00 PM"
//                     },
//                     {
//                         "place_name": "Laxmi Road / FC Road (Shopping & Dinner)",
//                         "place_details": "Laxmi Road is one of Pune's oldest and busiest shopping streets, offering traditional clothing, jewelry, and electronics. FC Road (Fergusson College Road) is a vibrant hub known for its trendy boutiques, cafes, and restaurants, popular among youngsters and families alike for a relaxed evening.",
//                         "place_image_url": "https://example.com/fc_road_pune.jpg",
//                         "geo_coordinates": {
//                             "latitude": 18.5147,
//                             "longitude": 73.8447
//                         },
//                         "place_address": "Laxmi Road / Fergusson College Road, Pune",
//                         "ticket_pricing": "Free to enter; cost depends on shopping and dining choices.",
//                         "time_travel_each_location": "2 - 3 hours",
//                         "best_time_to_visit": "5:30 PM onwards (for shopping, street food, and dinner)"
//                     }
//                 ]
//             },
//             {
//                 "day": 2,
//                 "day_plan": "Embrace nature and spirituality in the morning, followed by an evening of relaxation or an optional visit to a unique temple.",
//                 "best_time_to_visit_day": "Morning to Evening",
//                 "activities": [
//                     {
//                         "place_name": "Sinhagad Fort",
//                         "place_details": "A historic fort located about 35 km southwest of the city of Pune. Perched on a hill, it offers panoramic views of the surrounding landscape. Known for its historical significance and as a popular trekking destination.",
//                         "place_image_url": "https://example.com/sinhagad_fort.jpg",
//                         "geo_coordinates": {
//                             "latitude": 18.3697,
//                             "longitude": 73.7533
//                         },
//                         "place_address": "Sinhagad Ghat Road, Thoptewadi, Pune, Maharashtra 411025",
//                         "ticket_pricing": "INR 50 (Car entry fee), INR 20 (Two-wheeler entry fee). Free for individuals once inside.",
//                         "time_travel_each_location": "3 - 4 hours (including travel from Pune city)",
//                         "best_time_to_visit": "7:00 AM - 11:00 AM (to enjoy the views before it gets too hot and crowded)"
//                     },
//                     {
//                         "place_name": "ISCKON Temple, Pune (New Vedic Cultural Center)",
//                         "place_details": "A sprawling spiritual complex renowned for its beautiful architecture, tranquil atmosphere, and devotional activities. It features a grand temple, a vegetarian restaurant (Govinda's), and offers a serene experience for visitors.",
//                         "place_image_url": "https://example.com/iskcon_pune.jpg",
//                         "geo_coordinates": {
//                             "latitude": 18.520486,
//                             "longitude": 73.743126
//                         },
//                         "place_address": "Katraj-Kondhwa Bypass, Opposite D.Y. Patil College of Engineering & Technology, Ambegaon Bk., Pune, Maharashtra 411046",
//                         "ticket_pricing": "Free entry; donations welcome. Cost for food at Govinda's restaurant.",
//                         "time_travel_each_location": "1 - 1.5 hours",
//                         "best_time_to_visit": "1:00 PM - 3:00 PM (afternoon tranquility) or 7:00 PM for evening Aarti"
//                     },
//                     {
//                         "place_name": "Koregaon Park (Leisure/Dinner)",
//                         "place_details": "A posh area in Pune known for its tree-lined streets, upscale bungalows, boutique shops, and a wide array of cafes and fine-dining restaurants. It's a great place to relax, enjoy a final meal, or just soak in the ambiance.",
//                         "place_image_url": "https://example.com/koregaon_park.jpg",
//                         "geo_coordinates": {
//                             "latitude": 18.536,
//                             "longitude": 73.8967
//                         },
//                         "place_address": "Koregaon Park, Pune, Maharashtra",
//                         "ticket_pricing": "Free to enter; cost depends on dining/shopping choices.",
//                         "time_travel_each_location": "2 - 3 hours",
//                         "best_time_to_visit": "6:00 PM onwards (for evening stroll and dinner)"
//                     }
//                 ]
//             }
//         ]
//     }




function Itinerary() {
    //@ts-ignore
    const {tripDetailInfo,setTripDetailInfo} = useTripDetail();
    const [tripData,setTripData] = useState<TripInfo | null>(null)

    useEffect(()=>{
        tripDetailInfo && setTripData(tripDetailInfo)
    },[tripDetailInfo])

  const data = tripData?[
    {
      title: "Hotels",
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {tripData?.hotels.map((hotel,index)=>(
                <HotelCardItem hotel={hotel}/>
            ))}
        </div>
      ),
    },
    ...tripData?.itinerary.map((dayData)=>({
        title:`Day ${dayData?.day}`,
        content:(
            <div>
                <p className='font-bold text-xl text-primary mb-3'>Best Time : {dayData?.best_time_to_visit_day}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {dayData?.activities.map((activity,index)=>(
                        <PlaceCardItem activity={activity}/>
                ))}
                </div>
            </div>
        )
    }))
    
  ]:[];
  return (
    <div className="relative w-full h-[83vh] overflow-auto">
        {/* @ts-ignore */}
      {tripData ? <Timeline data={data} tripData={tripData} />
        :
        <div>
            <h2 className='flex gap-2 text-3xl text-white left-20 items-center absolute bottom-20'><ArrowLeft/>Getting to Know to build perfect trip here...</h2>

        <Image src={'/travel.png'} alt='travel' 
        width={'800'} height={800}
        className='w-full h-full object-cover rounded-3xl'
        />  

        </div>
    }
    </div>
  );
}

export default Itinerary
