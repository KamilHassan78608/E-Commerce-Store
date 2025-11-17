import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import TotalCart from './TotalCart'
import { motion } from "framer-motion"
import { ShopContext } from '../contents/ShopContext'

const PlaceOrder = () => {
  
  const [selectedPayment, setSelectedPayment] = useState(null);

  const { navigate } = useContext(ShopContext);

  const paymentMethods = ["EasyPaisa", "Jazz Cash", "Bank Transfer", "Cash On Delivery"];

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-0'>

      {/* Left Side - Delivery Info */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1="Delivery" text2="Information" />
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="email" placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Zip Code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="number" placeholder='Phone Number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>

      {/* Right Side - Cart & Payment */}
      <div className='mt-8 sm:mt-0 flex-1 sm:max-w-[380px]'>

        <div className='mt-5 min-w-80'>
          <TotalCart />
        </div>

        <div className='mt-12'>
          <h1 className='text-2xl sm:text-4xl'>Payment Methods</h1>

          <div className="flex flex-wrap gap-4 mt-4">
            {paymentMethods.map((method, i) => (
              <motion.div
                key={i}
                onClick={() => setSelectedPayment(method)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition-all duration-300
        ${selectedPayment === method ? 'border-gray-500 shadow-lg' : 'border-gray-300 hover:border-gray-500 hover:shadow-md'}
        w-full sm:w-auto  /* force each card to full width on mobile, auto on larger screens */
      `}
              >
                <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 relative">
                  <span
                    className={`w-2 h-2 bg-green-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            ${selectedPayment === method ? 'opacity-100' : 'opacity-0'}
          `}
                  ></span>
                </span>
                <h1 className="font-extrabold text-gray-800 truncate">{method}</h1>
              </motion.div>
            ))}
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('orders')} className='bg-gray-700 px-8 py-3 text-white cursor-pointer text-lg font-bold active:bg-black rounded-xl shadow-2xl mt-10 transition-all duration-300 hover:-translate-y-2'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
