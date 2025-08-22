import { suggestions } from '@/app/_components/Hero'
import React from 'react'

function EmptyBoxState({onSelectOption}:any) {
  return (
    <div className='mt-4 sm:mt-7 px-2'>
      <h2 className='font-bold text-xl sm:text-2xl md:text-3xl text-center'>Start Planning new <strong className='text-primary'>Trip</strong> using AI</h2>
      <p className='text-center text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base'>Discover personalized travel itineraries, find the best destinations, and plan your dream vacation effortlessly with the power of Al. Let our smart assistant do the hard work while you enjoy the journey.</p>
    
    <div className='flex flex-col gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-7'>
        {suggestions.map((suggestion,index)=>(
           <div key={index} 
           onClick={()=>onSelectOption(suggestion.title)}
           className='flex items-center gap-2 border rounded-lg sm:rounded-xl p-2 sm:p-3 cursor-pointer hover:border-primary hover:text-primary text-sm sm:text-base'
           >
               {suggestion.icon}
               <h2>{suggestion.title}</h2>
           </div>
       ))}
    </div>
    </div>
  )
}

export default EmptyBoxState