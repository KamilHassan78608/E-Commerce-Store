import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contents/ShopContext'
import Title from '../components/Title'
import { Trash2 } from "lucide-react";
import TotalCart from './TotalCart';


const Cart = () => {
  const {products , cart , Currency, updateQuantity} = useContext(ShopContext);
  const [cartData, setcartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const items in cart){
      for(const item in cart[items]){
        if(cart[items][item] > 0){
          tempData.push({
            _id: items,
            size: item,
            quantity: cart[items][item]
          })
        }
      }
    }
    setcartData(tempData);
  }, [cart]);

 return (
  <>
  <div className='border-t pt-14'>
    <div className='text-2xl mb-3'>
      <Title text1="Your" text2="Cart"/>
    </div>
    <div>
      {
        cartData.map((item, index)=>{
          const product = products.find((prod) => prod._id === item._id);
          return(
            <div key={index} className='py-4 border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img src={product.image} className='w-16 sm:w-20' alt="" />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{product.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{Currency}{product.price}</p>
                    <h1 className='px-2 sm:px-3 sm:py-1 border bg-slate-100'>Total Price {product.price * item.quantity} {Currency}</h1>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-100'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input type="number"min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
              onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
              />
              <Trash2 onClick={() => updateQuantity(item._id, item.size, 0)} className='cursor-pointer' />
            </div>
          )
        })
      }
    </div>
    <div className='flex justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
        <TotalCart />
        <div className='w-full text-end'>
          <button className='bg-gray-700 px-8 py-3 text-white cursor-pointer text-lg font-bold active:bg-black rounded-xl shadow-2xl mt-10 transition-all duration-300 hover:-translate-y-2'>Proceed to CheckOut</button>

        </div>
      </div>
    </div>
  </div>
  </>
);

}

export default Cart
