import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contents/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestproducts = products.filter((item) => item.bestseller);
        setBestSeller(bestproducts.slice(0, 4));
    }, [products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1="Best" text2="Sellers"/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo omnis deleniti quos doloremque?</p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-10'>
            {
                bestSeller.map((item) => (
                    <ProductItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller
