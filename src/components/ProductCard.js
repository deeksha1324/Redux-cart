import React, { useEffect, useState } from 'react';
import { add, remove } from '../store/CartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function ProductCard({product}) {
    const {id,name, image, price} = product;
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartState.cartList)
    const [inCart, setInCart] = useState(false)

    useEffect(() =>{
      const productInCart = cartList.find(item => item.id === id)

      if(productInCart){
        setInCart(true)
      }
      else{
        setInCart(false)
      }
    },[cartList, id])
   
  return (
    <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-5 p-3">
            <img src={image} alt={name} /> 
            <p className='text-xl font-medium'>{name}</p>  
            <div className='flex flex-wrap justify-between mt-5 font-medium'>
                <p>${price}</p>
                {inCart ? <button onClick={() => dispatch(remove(product))}  className='bg-red-600 p-2 text-lg rounded-lg'>Remove</button>:<button onClick={() => dispatch(add(product))}  className='bg-blue-600 p-2 text-lg rounded-lg'>Add to cart</button> }
                
            </div>

        </div>



    </div>
  )
}
