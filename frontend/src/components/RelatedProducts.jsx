import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contents/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {

    const { products } = useContext(ShopContext);
    const [related, setrelated] = useState([]);
    
    useEffect(() => {
        if (products.length > 0) {
            
            let CopyProducts = products.slice();

            CopyProducts = CopyProducts.filter((item) => category === item.category);
            CopyProducts = CopyProducts.filter((item) => subCategory === item.subCategory);

            setrelated(CopyProducts.slice(0, 5));
        }
    }, [products, category, subCategory])

  return (
    <div className='my-24'>
      <div className='text-center py-2'>
        <Title text1={'Related'} text2={'Products'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          related.map((item) => (
            <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image}/>
          ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts
