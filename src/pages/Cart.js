import React from 'react';
import useTitle from '../hook/useTitle';
import CartCard from '../components/CartCard'
// import CartContext from '../context/CartContext'
// import UseCart from '../context/CartContext'
import { useSelector } from 'react-redux';

export default function Cart() {
  // const products=[
  //   {'id':1, 'name':'Bag', 'image':'/assets/photo1.avif', 'price':350},
  //   {'id':2, 'name':'Bag', 'image':'/assets/photo2.avif', 'price':550},
  //   {'id':3, 'name':'Bag', 'image':'/assets/photo3.avif', 'price':349}
  // ]

// const { total } = UseCart(CartContext)

  useTitle("Cart")


  const cartList=useSelector(state => state.cartState.cartList)
  const total=useSelector(state => state.cartState.total)
  return (
    <main>
      <h1 className='text-xl font-medium'>Cart Items:{cartList.length}/${total}</h1>
      <section className='flex flex-row flex-wrap'>
      {cartList.map((product)=>(
        <CartCard key={product.id} product={product} />
      ))}
      </section>
      
    </main>
  )
}
