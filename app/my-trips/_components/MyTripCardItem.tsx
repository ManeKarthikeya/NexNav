"use client"
import React, { useEffect, useState } from 'react'
import { Trip } from '../page'
import Image from 'next/image'
import { ArrowBigRightIcon } from 'lucide-react'
import axios from 'axios'
import Link from 'next/link'

type Props = {
    trip:Trip
}

function MyTripCardItem({trip}:Props) {
    const [photoUrl,setPhotoUrl] = useState<string>();
    useEffect(()=>{
    trip && GetGooglePlaceDetail();
    },[trip])
  
    const GetGooglePlaceDetail = async() => {
      const result = await axios.post('/api/google-place-detail', {
        placeName: trip?.tripDetail?.destination
      });
      if(result?.data?.e)
      {
        return;
      }
      setPhotoUrl(result?.data);
    }
  return (
    <Link href={'/view-trip/'+trip?.tripId} className='p-3 sm:p-4 md:p-5 shadow rounded-xl sm:rounded-2xl block'>
         <Image src={photoUrl?photoUrl:'/placeholder.jpg'} alt={trip.tripId} width={400} height={400}
         className='rounded-lg sm:rounded-xl object-cover w-full h-[150px] sm:h-[200px] md:h-[270px]'
         />
         <h2 className='flex gap-1 sm:gap-2 font-semibold text-base sm:text-lg md:text-xl mt-2 items-center'>
           {trip?.tripDetail?.origin} 
           <ArrowBigRightIcon className='w-4 h-4 sm:w-5 sm:h-5'/> 
           {trip?.tripDetail?.destination}
         </h2>
         <h2 className='mt-1 sm:mt-2 text-gray-500 text-sm sm:text-base'>{trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget} Budget</h2>
     </Link>
  )
}

export default MyTripCardItem