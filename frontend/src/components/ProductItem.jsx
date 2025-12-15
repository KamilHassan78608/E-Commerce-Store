import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../contents/ShopContext'
import { Link, Navigate } from 'react-router-dom'
import { motion } from "framer-motion";

const ProductItem = ({ id, name, description, price, image }) => {

  
  const { Currency, navigate } = useContext(ShopContext);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}// animate when visible
      viewport={{ once: true, amount: 0.2 }}  // animate once only
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link to={`/product/${id}`} className='flex flex-col gap-2 w-full text-gray-600 bg-[#efeeee] cursor-pointer transition-all duration-500 shadow-md hover:shadow-2xl hover:translate-y-0.5 rounded-xl mt-10'>
      <div className='overflow-hidden'>
        <img src={image} alt={name} className='transition-all duration-500 hover:scale-110 ease-in-out w-full lg:w-120 h-100 object-cover'/>
      </div>
      <div className='p-5'>
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <h3 className="text-sm text-gray-500 line-clamp-2">{description}</h3>
        <h3 className="text-gray-600 font-bold text-base mt-1">{Currency} {price}</h3>
      </div>
    </Link>
    </motion.div>
    

  )
}

export default ProductItem
