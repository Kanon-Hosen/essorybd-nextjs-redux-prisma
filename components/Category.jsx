import Image from 'next/image';
import React from 'react';
import CategoryCard from './CategoryCard';
import Headphone from "../images/headphone.jpeg"
import watch from '../images/smart-watch.jpg'
import PowerBank from '../images/power-bank.jpg'
const Category = () => {
    return (
        <div className='lg:px-24 my-24 px-6'> 
            <h1 className='text-center font-bold text-slate-900 text-4xl mb-2'>Browse The Range</h1>
            <p className='text-center text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='grid lg:grid-cols-3 gap-8 mt-10'>
               <CategoryCard title="Headphone" image={Headphone} link="/"/>
               <CategoryCard title="Smart Watch" image={watch} link="/"/>
               <CategoryCard title="Power Bank" image={PowerBank} link="/"/>
            </div>
        </div>
    );
};

export default Category;