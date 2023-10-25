import Link from 'next/link'
import React from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { BsBell, BsSearch } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function TopNav() {
  return (
    <div className='flex items-center justify-between w-full h-full'>
      <div>
        <Link href='/' className='text-neutral-900 font-semibold hover:text-[#5C59E8]' >Go to home</Link>
      </div>
      <div className='flex items-center gap-8'>
        <div className='text-neutral-800 text-2xl'>
          <BsSearch/>
        </div>
        <div className='text-neutral-800 text-2xl'>
          <BsBell/>
        </div>
        <div className='text-neutral-800 text-2xl'>
          <MdOutlineEmail/>
        </div>
        <div className='flex items-center gap-4 ml-5'>
          <div className='w-10 h-10 bg-gray-300 rounded-full'>
          </div>
          <div className='flex gap-3 items-center cursor-pointer'>
            <div className='flex flex-col '>
              <p className='font-semibold'>Kanon Hosen</p>
              <p className='text-sm'>Admin</p>
            </div>
            <div className='text-xl '>
              <BiChevronDown/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav