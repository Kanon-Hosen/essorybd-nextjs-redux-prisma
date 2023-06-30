import Image from 'next/image';
import React from 'react';
import Bg from '../images/bg.png'
import Link from 'next/link';
const Hero = () => {
    return (
        <div className='bg-orange-300 lg:h-[90vh] lg:flex items-center justify-between gap-10 lg:px-0 px-6'>
            <div className='lg:pl-24 pl-6'>
                <Image src={Bg} width={500} height={500} alt=''/>
            </div>
            <div className='bg-gray-100  h-full lg:w-1/2 flex flex-col gap-5 p-10 justify-center'>
                <p className='text-xl font-semibold text-slate-900'>New Arrival</p>
                <h1 className='text-5xl font-bold text-orange-500 leading-snug'>Discover Our New Collection</h1>
                <p className='text-slate-900 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br> Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <Link href='/' className='px-2 flex items-center justify-center font-semibold mt-4 hover:bg-black transition-colors focus:bg-black py-4 bg-orange-500 text-white w-44'>Shop Now</Link>
            </div>
        </div>
    );
};

export default Hero;