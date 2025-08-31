"use client"
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { ArrowDown, Globe2, Landmark, Plane, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const suggestions = [
    {
        title: 'Create New Trip',
        icon: <Globe2 className='text-blue-400 h-4 w-4 md:h-5 md:w-5' />
    },
    {
        title: 'Inspire me where to go',
        icon: <Plane className='text-green-500 h-4 w-4 md:h-5 md:w-5' />
    },
    {
        title: 'Discover Hidden gems',
        icon: <Landmark className='text-orange-500 h-4 w-4 md:h-5 md:w-5' />
    },
    {
        title: 'Adventure Destination',
        icon: <Globe2 className='text-yellow-600 h-4 w-4 md:h-5 md:w-5' />
    }
]

function Hero() {
    const { user } = useUser();
    const router = useRouter();
    const [query, setQuery] = useState('');
    
    const onSend = () => {
        if (!user) {
            router.push('/sign-in')
            return;
        }
        // You could pass the query as a parameter if needed
        router.push('/create-new-trip')
    }

    const handleSuggestionClick = () => {
        if (!user) {
            router.push('/sign-in');
            return;
        }
        router.push('/create-new-trip');
    }

    return (
        <div className='mt-12 md:mt-24 w-full flex justify-center px-4'>
            {/* content */}
            <div className='max-w-3xl w-full text-center space-y-4 md:space-y-6'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
                    Hey, I'm your personal <span className='text-primary'>Trip Planner</span>
                </h1>
                
                <p className='text-sm md:text-lg text-muted-foreground'>
                    Tell me what you want, and I'll handle the rest: Flights, Hotels, trip Planner - all in seconds
                </p>
                
                {/* input box */}
                <div className='px-2 md:px-0'>
                    <div className='border rounded-xl md:rounded-2xl p-3 md:p-4 shadow relative'>
                        <Textarea 
                            placeholder='Create a trip for Paris from New York'
                            className='w-full h-20 md:h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none text-sm md:text-base'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button 
                            size={'icon'} 
                            className='absolute bottom-3 right-3 md:bottom-6 md:right-6 h-8 w-8 md:h-10 md:w-10'
                            onClick={onSend}
                        >
                            <Send className='h-3 w-3 md:h-4 md:w-4'/>
                        </Button>
                    </div>
                </div>
                
                {/* suggestion list */}
                <div className='flex flex-wrap justify-center gap-2 md:gap-3 px-2'>
                    {suggestions.map((suggestion, index) => (
                        <div 
                            key={index} 
                            className='flex items-center gap-1 border rounded-full px-3 py-1.5 cursor-pointer hover:bg-primary hover:text-white text-xs md:text-sm transition-colors'
                            onClick={handleSuggestionClick}
                        >
                            {suggestion.icon}
                            <span>{suggestion.title}</span>
                        </div>
                    ))}
                </div>
                
                <div className='flex items-center justify-center flex-col pt-4 md:pt-0'>
                    <h2 className='my-4 md:my-7 mt-8 md:mt-14 flex flex-col md:flex-row gap-1 md:gap-2 text-center text-sm md:text-base'>
                        <span>Not Sure where to start?</span>
                        <strong className='text-primary'>See how it works</strong>
                        <ArrowDown className='hidden md:inline self-center'/>
                        <ArrowDown className='md:hidden self-center mx-auto'/>
                    </h2>
                </div>

                {/* video section */}
                <div className='px-2'>
                    <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/rY7z7IUAHYM"
                        thumbnailSrc="https://img.youtube.com/vi/rY7z7IUAHYM/maxresdefault.jpg"
                        thumbnailAlt="Mindtrip AI Travel Assistant Demo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero