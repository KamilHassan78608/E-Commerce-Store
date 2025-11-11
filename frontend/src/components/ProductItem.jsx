import React, { useContext } from 'react'
import { ShopContext } from '../contents/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, name, description, price, imgUrl }) => {

  const { Currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='flex flex-col gap-2 w-full lg:w-120 text-gray-600 cursor-pointer transition-all duration-500 shadow-md hover:shadow-2xl hover:translate-y-0.5 rounded-xl mt-10'>
      <div className='overflow-hidden'>
        <img src={imgUrl} alt={name} className='transition-all duration-500 hover:scale-110 ease-in-out w-full lg:w-120 h-100 object-cover'/>
      </div>
      <div className='p-5'>
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <h3 className="text-sm text-gray-500 line-clamp-2">{description}</h3>
        <h3 className="text-gray-600 font-bold text-base mt-1">{Currency} {price}</h3>
      </div>
    </Link>

  )
}

export default ProductItem
