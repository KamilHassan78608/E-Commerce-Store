import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contents/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));

    }, [])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1="Latest" text2="Collection"/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo omnis deleniti quos doloremque?</p>
        </div>
        {/* Rendering Products */}
        <div className='flex flex-wrap gap-5 justify-between my-10'>
            {
                latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} imgUrl={item.imgUrl} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
