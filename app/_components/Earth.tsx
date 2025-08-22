import Spline from '@splinetool/react-spline'
import React from 'react'

function Earth() {
  return (
    <div className="relative w-full h-[600px] sm:h-[600px] md:h-[600px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Spline
          className="w-full h-full scale-[0.8] sm:scale-100 md:scale-100 lg:scale-100"
          scene="https://prod.spline.design/KHTPCL2TSo6WcDnZ/scene.splinecode" 
        />
      </div>
    </div>
  )
}

export default Earth