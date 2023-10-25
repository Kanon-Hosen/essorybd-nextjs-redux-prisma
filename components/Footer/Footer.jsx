import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white md:px-12 px-6 mt-10 py-10'>
            <div className='grid grid-cols-4 gap-6 mb-8'>
                <div>
                    <h1 className='font-bold text-black text-xl'>EssoryBD</h1>
                    <p className='mt-4 text-neutral-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.</p>
                </div>
                <div>
                    <h1 className='font-semibold'>Link</h1>
                    <ul className='flex flex-col gap-3 mt-4'>
                    <Link className='text-neutral-700 inline-block hover:text-orange-500 transition-colors' href='/'>Home</Link>
                    <Link className='text-neutral-700 inline-block hover:text-orange-500 transition-colors' href='/'>Shop</Link>
                    <Link className='text-neutral-700 inline-block hover:text-orange-500 transition-colors' href='/'>About</Link>
                    <Link className='text-neutral-700 inline-block hover:text-orange-500 transition-colors' href='/'>Contact</Link>
                    </ul>
                </div>
                <div>
                    <h1 className='font-semibold'>Help</h1>
                    <ul className='flex flex-col gap-3 mt-4'>
                    <Link className='text-neutral-700 inline-block hover:text-orange-500 transition-colors' href='/'>Payment Options</Link>
                    <Link className='text-neutral-700 inline-block hover:text-orange-500 transition-colors' href='/'>Returns</Link>
                    <Link className='text-neutral-700 inline-block hover:text-orange-500 transition-colors' href='/'>Privacy Policies</Link>
                    </ul>
                </div>
                <div>
                    <h1 className='font-semibold'>Newsletter</h1>
                    <div className='flex gap-3 mt-4'>
                        <input className='border-b-2 border-black py-1 text-sm font-normal  focus:outline-none' type="text" placeholder='Enter Your Email Address' />
                        <button className='py-1 border-b-2 border-black uppercase font-semibold hover:text-orange-500 hover:border-orange-500 '>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='text-black  bg-black' />
            <h1 className='mt-6 text-black'>2023 Kanon Hosen. All rights reverved</h1>
        </div>
    );
};

export default Footer;