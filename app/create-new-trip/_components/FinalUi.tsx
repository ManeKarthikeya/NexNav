import { Button } from '@/components/ui/button'
import { Globe2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function FinalUi({viewTrip,disable,tripid}:any) {
  return (
    <div className="flex flex-col items-center justify-center mt-4 sm:mt-6 p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md">
        <Globe2 className="text-primary text-3xl sm:text-4xl animate-bounce"/>
        <h2 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-primary text-center">
            🛩️ Planning your dream trip...
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
            Gathering best destinations, activities, and travel details for you.
        </p>
        <Link href={`/view-trip/${tripid}`}>
        <Button disabled={disable} onClick={viewTrip} className='mt-2 w-full text-sm sm:text-base'>View Trip</Button>
        </Link>
    </div>
  )
}

export default FinalUi