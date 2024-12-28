import React from 'react';
import banner from "../../../public/banner.png"
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='relative bg-gradient-to-tr from-black to-gray-700 px-6 py-12 '>
            <div className='absolute inset-0 opacity-20 '>
                <Image src={banner} alt='bannner image' className='w-full h-full object-cover'></Image>
            </div>
            <div className='relative z-10 text-white font-bold container max-w-auto flex flex-col items-center justify-center'>
                <h2 className='mb-8 sm:text-5xl font-bold'>Discover Our Menu</h2>
                <p className='text-white text-center mb-6 max-w-xl text-lg'>Shop Now For Exclusive Burger Discount!</p>
                <button type='button'
                className='bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-amber-600 transition duration-300'>
                    Exciting Deals Launch at 12PM 
                </button>
            </div>
        </div>
    );
}

export default Banner;
