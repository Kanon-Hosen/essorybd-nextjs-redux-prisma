import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryCard = ({title, image, link}) => {
    return (
        <Link href={link} className='flex relative group overflow-hidden flex-col gap-3 items-center justify-center'>
            <div className=' w-full overflow-hidden border-2 shadow-md border-gray-200 h-[480px]'>
            <Image className='group-hover:scale-105 transition-transform duration-300 object-cover bg-center bg-cover w-full h-full' src={image} width={600} height={300} alt={title} />
            </div>
            <div className='absolute bottom-0 w-full'>
            <h1  className='text-xl font-semibold bg-gray-200 w-full p-4  text-center text-slate-900'>{title}</h1>
            </div>
        </Link>
    );
};

export default CategoryCard;