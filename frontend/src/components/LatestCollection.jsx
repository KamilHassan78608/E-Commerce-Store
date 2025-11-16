import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contents/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 8));
    }, [products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1="Latest" text2="Collection"/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo omnis deleniti quos doloremque?</p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-10'>
            {
                latestProducts.map((item) => (
                    <ProductItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
