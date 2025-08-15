"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Hotel } from './ChatBox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Star, Wallet } from 'lucide-react'
import axios from 'axios'

type Props = {
    hotel:Hotel
}

function HotelCardItem({hotel}:Props) {

  const [photoUrl,setPhotoUrl] = useState<string>();
  useEffect(()=>{
    hotel && GetGooglePlaceDetail();
  },[hotel])

  const GetGooglePlaceDetail = async() => {
    const result = await axios.post('/api/google-place-detail', {
      placeName:hotel?.hotel_name
    });
    if(result?.data?.e)
    {
      return;
    }
    setPhotoUrl(result?.data);
  }

  return (
    <div className='flex flex-col gap-2 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg p-3 w-full'>
                        <Image src={photoUrl?photoUrl:'/placeholder.jpg'} 
                        alt={hotel?.hotel_name || 'Hotel Image'}
                         width={400} height={200}
                        className='rounded-xl shadow object-cover mb-2 w-full h-[270px]'
                        />
                        <h2 className='font-semibold text-lg'>{hotel?.hotel_name}</h2>
                        <h2 className='text-gray-500'>{hotel.hotel_address}</h2>
                        <div className='flex justify-between items-center'>
                            <p className='flex gap-2 text-green-600'> <Wallet/> {hotel.price_per_night}</p>
                            <p className='text-yellow-500 flex gap-2'> <Star/> {hotel.rating}</p>
                        </div>
                        <Link href={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotel_name} target='_blank'>
                        <Button variant={'outline'} className='mt-1 w-full'>View</Button>
                        </Link>
                        {/* <p className='line-clamp-2 text-gray-500 '>{hotel?.description}</p> */}
                    </div>
  )
}

export default HotelCardItem
