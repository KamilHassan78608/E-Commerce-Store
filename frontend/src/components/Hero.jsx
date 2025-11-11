import React from 'react'
import HeroPic from '/Users/mac/Documents/Web/E_Commerce_Store/frontend/src/assets/Hero.jpg'

const Hero = () => {
  return (
    // Using your border-gray-500
    <div className='flex flex-col sm:flex-row shadow-2xl'> 
      {/* Hero Left Side */}
      <div className='w-full bg-[#efeeee] sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className="flex items-center gap-2">
                {/* Added h-[2px] back from the image */}
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p> 
                {/* Using your title case "Our BestSellers" */}
                <p className='font-medium text-sm md:text-base prata-regular'>Our BestSellers</p> 
            </div>
            <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed michroma-regular'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold sm:text-sm md:text-base prata-regular'>Shop Now</p>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={HeroPic} />
    </div>
  )
}

export default Hero
            