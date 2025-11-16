import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../contents/ShopContext';
import { Star } from "lucide-react";
import RelatedProducts from '../components/RelatedProducts';

const Products = () => {

  const { productId } = useParams();
  const { products, Currency, addToCart  } = useContext(ShopContext);
  const [productData, setproductData] = useState([]);
  const [image, setimage] = useState('');
  const [size, setsize] = useState('');

  const fetchProductdata = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductData(item);
        setimage(item.image);
      }
    })
  }

  useEffect(() => {
    fetchProductdata();
  }, [productId, products])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

      <div className="flex flex-col sm:flex-row gap-12">

        {/* Images Section */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">

          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto w-full sm:w-[18%] gap-3">
            <img src={image} alt='image' className="w-[24%] sm:w-full cursor-pointer shrink-0" />
            <img src={image} alt='image' className="w-[24%] sm:w-full cursor-pointer shrink-0" />
            <img src={image} alt='image' className="w-[24%] sm:w-full cursor-pointer shrink-0" />
            <img src={image} alt='image' className="w-[24%] sm:w-full cursor-pointer shrink-0" />
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[82%]">
            <img src={image} alt='image' className="w-full h-auto rounded" />
          </div>
        </div>

        {/* Product Data */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <Star size={20} strokeWidth={1.5} color="#f59e0b" />
            <Star size={20} strokeWidth={1.5} color="#f59e0b" />
            <Star size={20} strokeWidth={1.5} color="#f59e0b" />
            <Star size={20} strokeWidth={1.5} color="#f59e0b" />
            <Star size={20} strokeWidth={1.5} color="#f59e0b" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{Currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setsize(item)}
                    className={`py-4 px-4 bg-gray-100 w-16 font-bold rounded-full cursor-pointer ${item === size ? 'bg-gray-700 text-white text-xl' : ''}`}
                  >
                    {item}
                  </button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className='bg-gray-700 px-8 py-3 text-white cursor-pointer text-lg font-bold active:bg-black rounded-xl shadow-2xl'>Add to Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on Delivery.</p>
            <p>Easy Return and Exchange Policy.</p>
          </div>
        </div>
      </div>

      {/* Description and review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore autem sit delectus aliquid, consectetur sunt iusto deleniti maiores labore laudantium vel sint deserunt minus, facere repudiandae, magnam maxime dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore autem sit delectus aliquid, consectetur sunt iusto deleniti maiores labore laudantium vel sint deserunt minus, facere repudiandae, magnam maxime dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore autem sit delectus aliquid, consectetur sunt iusto deleniti maiores labore laudantium vel sint deserunt minus, facere repudiandae, magnam maxime dolorum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore autem sit delectus aliquid, consectetur sunt iusto deleniti maiores labore laudantium vel sint deserunt minus, facere repudiandae, magnam maxime dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore autem sit delectus aliquid, consectetur sunt iusto deleniti maiores labore laudantium vel sint deserunt minus, facere repudiandae, magnam maxime dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore autem sit delectus aliquid, consectetur sunt iusto deleniti maiores labore laudantium vel sint deserunt minus, facere repudiandae, magnam maxime dolorum.</p>
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>


  ) : (
    <div className='opacity-0 '>

    </div>
  )
}

export default Products
