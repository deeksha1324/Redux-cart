import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../store/CartSlice';

export default function CartCard({product}) {
    const {name, image, price} = product;
    const dispatch =useDispatch()


  return (
    <div>
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow m-5 p-3'>
            <img src={image} alt={name} />
            <span className='text-xl font-medium'>{name}</span>
            <div className='flex flex-wrap justify-between mt-5 font-medium'>
                <span>${price}</span>
                <button onClick={() => dispatch(remove(product)) } className='bg-red-600 p-2 text-lg rounded-lg'>Remove</button>
            </div>
        </div>
    </div>
  )
}
