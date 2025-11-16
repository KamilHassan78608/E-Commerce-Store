import React, { useContext } from 'react'
import { ShopContext } from '../contents/ShopContext'
import Title from '../components/Title';

const TotalCart = () => {

    const {Currency, delivery_fee, getTotalAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-3xl'>
            <h1 className='prata-regular font-extrabold'>Total Amount</h1>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{Currency}{getTotalAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{Currency}{delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Total Amount</p>
                <p>{getTotalAmount() === 0 ? 0 : getTotalAmount() + delivery_fee}.00</p>
            </div>
        </div>
    </div>
  )
}

export default TotalCart
