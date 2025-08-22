"use client"
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useUserDetail } from '../provider';
import { TripInfo } from '../create-new-trip/_components/ChatBox';
import { ArrowBigRightIcon } from 'lucide-react';
import Image from 'next/image';
import MyTripCardItem from './_components/MyTripCardItem';

export type Trip = {
    tripId:any,
    tripDetail:TripInfo,
    _id:string
}

function MyTrips() {

    const [myTrips, setMyTrips] = useState<Trip[]>([]);
    const {userDetail,setUserDetail} = useUserDetail();
    const convex = useConvex();

    useEffect(()=>{
        userDetail && GetUserTrip();
    },[userDetail])

    const GetUserTrip = async() => {
        const result = await convex.query(api.tripDetail.GetUserTrips,{
            uid:userDetail?._id
        });
        setMyTrips(result);
        console.log(result);
    }

  return (
    <div className='px-4 p-5 md:px-10 md:p-10 lg:px-24 xl:px-48'>
        <h2 className='font-bold text-3xl'>My Trips</h2>

        {myTrips?.length==0 && 
        <div className='p-7 border rounded-2xl flex flex-col items-center justify-center gap-5  mt-6'>
            <h2>You don't have any trip plan created!</h2>
            <Link href={'/create-new-trip'}>
  <Button 
    size="sm" 
    className="relative overflow-hidden group bg-gradient-to-r from-primary via-primary/90 to-primary bg-[length:200%_100%] hover:animate-shine hover:animate-blink transition-all duration-300"
  >
    <span className="relative z-10"><span className='animate-shine'>Create New Trip</span></span>
    {/* Shimmer effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
  </Button>
</Link>
        </div>
        }

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
            {myTrips?.map((trip,index)=>(
                <MyTripCardItem trip={trip} key={index} />
            ))}
        </div>
    </div>
  )
}

export default MyTrips
