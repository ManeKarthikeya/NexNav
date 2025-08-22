"use client"
import React, { useEffect, useState } from 'react'
import ChatBox from './_components/ChatBox'
import Itinerary from './_components/Itinerary'
import { useTripDetail } from '../provider'
import GlobalMap from './_components/GlobalMap'
import { Button } from '@/components/ui/button'
import { Globe2, Plane, Home } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'

function CreateNewTrip() {
  //@ts-ignore
  const{ tripDetailInfo, setTripDetailInfo } = useTripDetail();
  const [activeIndex, setActiveIndex] = useState(1);
  
  useEffect(()=>{
    setTripDetailInfo(null);
  },[])
  
  return (
    <div className='flex flex-col lg:flex-row h-screen p-2 md:p-4 gap-3 md:gap-5'>
        {/* Chat Box - Left Side - Always visible */}
        <div className='lg:w-2/5 h-1/2 lg:h-full overflow-auto'>
            <ChatBox />
        </div>
        
        {/* Map/Itinerary - Right Side - Always visible */}
        <div className='lg:w-3/5 h-1/2 lg:h-full relative bg-gray-100 rounded-xl overflow-hidden'>
            {activeIndex === 0 ? <Itinerary /> : <GlobalMap/>}
            
            {/* Switch Button - Centered at bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <Tooltip>
                    <TooltipTrigger>
                        <Button 
                            size={'lg'} 
                            className='bg-black hover:bg-gray-700 shadow-lg'
                            onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
                        >
                            {activeIndex === 0 ? <Plane className="h-5 w-5"/> : <Globe2 className="h-5 w-5"/>}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Switch Between Map and Trip</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    </div>
  )
}

export default CreateNewTrip