import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contents/ShopContext'
import Title from '../components/Title'
import { Trash2 } from "lucide-react";
import TotalCart from './TotalCart';


const Cart = () => {
  const {products , cart , Currency, updateQuantity, navigate} = useContext(ShopContext);
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
    <div className="flex flex-col gap-4">
  {
  cartData.map((item, index) => {
    const product = products.find((prod) => prod._id === item._id);
    return (
      <div
        key={index}
        className="py-4 border-t text-gray-700 grid grid-cols-1 sm:grid-cols-[4fr_1fr_0.5fr] items-center gap-4 sm:gap-6"
      >
        {/* Product Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <img src={product.image} className="w-20 sm:w-24 object-cover" alt={product.name} />
          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm sm:text-lg font-medium">{product.name}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 text-xs sm:text-sm">
              <p>{Currency}{product.price}</p>
              <h1 className="px-2 sm:px-3 py-1 border bg-slate-100">
                Total Price {product.price * item.quantity} {Currency}
              </h1>
              <p className="px-2 sm:px-3 py-1 border bg-slate-100">{item.size}</p>
            </div>
          </div>
        </div>

        {/* Quantity */}
        <input
          type="number"
          min={1}
          value={item.quantity}
          className="border w-full sm:max-w-[60px] px-2 py-1"
          onChange={(e) =>
            e.target.value === '' || e.target.value === '0'
              ? null
              : updateQuantity(item._id, item.size, Number(e.target.value))
          }
        />

        {/* Delete */}
        <Trash2
          onClick={() => updateQuantity(item._id, item.size, 0)}
          className="cursor-pointer w-5 h-5 mx-auto sm:mx-0"
        />
      </div>
    );
  })}
</div>

    <div className='flex justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
        <TotalCart />
        <div className='w-full text-end'>
          <button onClick={()=>navigate('/placeorder')} className='bg-gray-700 px-8 py-3 text-white cursor-pointer text-lg font-bold active:bg-black rounded-xl shadow-2xl mt-10 transition-all duration-300 hover:-translate-y-2'>Proceed to CheckOut</button>

        </div>
      </div>
    </div>
  </div>
  </>
);

}

export default Cart
