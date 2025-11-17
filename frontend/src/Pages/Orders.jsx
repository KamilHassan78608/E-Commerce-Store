import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../contents/ShopContext'

const Orders = () => {

  const { products, Currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
      <Title text1="My" text2="Orders"/>
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6'>
                <img className="w-16 sm:w-20 "src={item.image} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{Currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p>Date: <span className='text-gray-400'>15-November-2025</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to Shipment</p>
                </div>
                <button className='bg-gray-700 px-8 py-3 text-white cursor-pointer font-bold active:bg-black rounded-xl shadow-2xl mt-10 transition-all duration-300 hover:-translate-y-2'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Orders
