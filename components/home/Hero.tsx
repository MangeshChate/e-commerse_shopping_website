import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import shopping from '@/public/images/shopping.svg';

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-12vh)] flex justify-center flex-col'>
      {/* Define Grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content */}
        <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black font-bold uppercase">
                Mega Sale <span className='text-rose-600'>Special</span> Offer up to <span className='text-orange-500'>60%</span> off
            </h1>
            <p className='text-sm md:text-base lf:text-lg text-black text-opacity-70 mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem tempore sunt temporibus molestiae ut quisquam mollitia tempora, reprehenderit sint modi fugit corporis? Rerum, provident voluptatibus. Vitae eius enim in nesciunt eaque.
            </p>
            <div className='flex mt-6 items-center space-x-4'>
                <Button size={"lg"} className='bg-blue-700'>Shop Now</Button>
                <Button size={"lg"}>Explore More</Button>

            </div>
        </div>
        {/* Image content */}
        <div className='hidden lg:flex w-full  justify-center'>
            <Image src={shopping} alt="shopping img" width={"500"} height={"500"}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
