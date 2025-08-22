"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // Add hamburger menu icon

const menuOptions = [
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Pricing',
        path:'/pricing'
    },
    {
        name:'Contact us',
        path:'/contact-us'
    }
]

function Header() {
  const {user} = useUser();
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex justify-between items-center p-3 md:p-4'>
      {/* Logo */}
      <div className='flex gap-2 items-center'>
        <Link href="/" className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} alt='logo' width={30} height={30} className='w-8 h-8 md:w-10 md:h-10' />
        <h2 className='font-semibold text-3xl md:text-4xl animate-shine'>NexNav</h2>
      </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className='md:hidden p-2'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu options - Desktop */}
      <div className='hidden md:flex gap-6 lg:gap-8 items-center'>
        {menuOptions.map((menu,index)=>(
            <Link key={index} href={menu.path}>
                <h2 className='text-base lg:text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
            </Link>
        ))}
      </div>

      {/*Get Started Button - Desktop */}
      <div className='hidden md:flex gap-4 lg:gap-5 items-center'>
        {!user ? (
          <SignInButton mode='modal'>
            <Button size="sm" className='text-sm'>Get Started</Button>
          </SignInButton>
        ) : path == '/create-new-trip' ? (
          <Link href={'/my-trips'}>
            <Button size="sm"
            className="relative overflow-hidden group bg-gradient-to-r from-primary via-primary/90 to-primary bg-[length:200%_100%] hover:animate-shine hover:animate-blink transition-all duration-300"
            >
              <span className="relative z-10"><span className='animate-shine'>My Trips</span></span>
    {/* Shimmer effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
  </Button>
          </Link>
        ) : (
          
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
        )}
        <UserButton/>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-opacity-100 bg-opacity-50 z-50 md:hidden' onClick={() => setIsMenuOpen(false)}>
          <div className='absolute top-0 right-0 h-full w-3/4 bg-white p-6' onClick={(e) => e.stopPropagation()}>
            <div className='flex flex-col space-y-6 mt-10'>
              {menuOptions.map((menu,index)=>(
                <Link key={index} href={menu.path} onClick={() => setIsMenuOpen(false)}>
                  <h2 className='text-lg hover:text-primary'>{menu.name}</h2>
                </Link>
              ))}
              
              <div className='border-t pt-4'>
                {!user ? (
                  <SignInButton mode='modal'>
                    <Button className='w-full'>Get Started</Button>
                  </SignInButton>
                ) : path == '/create-new-trip' ? (
                  <Link href={'/my-trips'} onClick={() => setIsMenuOpen(false)}>
                    <Button className='w-full'>My Trips</Button>
                  </Link>
                ) : (
                  <Link href={'/create-new-trip'} onClick={() => setIsMenuOpen(false)}>
                    <Button className='w-full'>Create Trip</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile User Button (visible only on mobile) */}
      <div className='md:hidden'>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header