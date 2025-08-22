"use client"
import GlobalMap from '@/app/create-new-trip/_components/GlobalMap';
import Itinerary from '@/app/create-new-trip/_components/Itinerary';
import { Trip } from '@/app/my-trips/page';
import { useTripDetail, useUserDetail } from '@/app/provider';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function ViewTrip() {
    const {tripid} = useParams();
    const {userDetail} = useUserDetail();
    const convex = useConvex();
    const [tripData,setTripData] = useState<Trip>();
    //@ts-ignore
    const {setTripDetailInfo} = useTripDetail();
    
    useEffect(()=>{
        userDetail && GetTrip()
    },[userDetail])

    const GetTrip=async()=>{
        const result = await convex.query(api.tripDetail.GetTripById,{
            uid:userDetail?._id,
            tripid:tripid+''
        });
        console.log(result);
        setTripData(result);
        setTripDetailInfo(result?.tripDetail)
    }

  return (
    <div className='flex flex-col lg:flex-row h-screen p-2 md:p-4 gap-2 md:gap-4'>
       {/* Itinerary Section - Full width on mobile, 3/5 on desktop */}
       <div className='lg:w-3/5 h-1/2 lg:h-full overflow-auto bg-white rounded-lg md:rounded-xl shadow-sm'>
         <Itinerary />
       </div>
       
       {/* GlobalMap Section - Full width on mobile, 2/5 on desktop */}
       <div className='lg:w-2/5 h-1/2 lg:h-full overflow-auto bg-white rounded-lg md:rounded-xl shadow-sm'>
         <GlobalMap/>
       </div>
    </div>
  )
}

export default ViewTrip