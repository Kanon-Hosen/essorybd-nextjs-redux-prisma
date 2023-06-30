import React from 'react';
import ProductCard from './ProductCard';
import Headphone from '../../images/headphone.jpeg'
import watch from '../../images/smart-watch.jpg'
const Product = () => {
    return (
        <div className='my-24 lg:px-24 px-6'>
            <h1 className='text-center text-slate-900 font-bold text-4xl'>Our Products</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-6 mt-10'>
                <ProductCard name="New Wireless Headphone" price="400" discountPrice="500" image={Headphone} />
                <ProductCard name="New Smart watch" price="1400" discountPrice="1600" image={watch} />
                <ProductCard name="New Smart watch" price="1400" discountPrice="1600" image={Headphone} />
                <ProductCard name="New Smart watch" price="1400" discountPrice="1600" image={watch} />
            </div>
        </div>
    );
};

export default Product;