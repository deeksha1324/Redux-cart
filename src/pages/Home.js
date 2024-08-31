import React from 'react'
import ProductCard from '../components/ProductCard';
import useTitle from '../hook/useTitle';

export default function Home() {
  const products=[
    {'id':1, 'name':'Bag', 'image':'/assets/photo1.avif', 'price':350},
    {'id':2, 'name':'Bag', 'image':'/assets/photo1.avif', 'price':450},
    {'id':3, 'name':'Bag', 'image':'/assets/photo2.avif', 'price':550},
    {'id':4, 'name':'Bag', 'image':'/assets/photo3.avif', 'price':349},
    {'id':5, 'name':'Bag', 'image':'/assets/photo4.avif', 'price':359},
    {'id':6, 'name':'Bag', 'image':'/assets/photo3.avif', 'price':559},
    {'id':7, 'name':'Bag', 'image':'/assets/photo3.avif', 'price':250},
    {'id':8, 'name':'Bag', 'image':'/assets/photo4.avif', 'price':459},
    {'id':9, 'name':'Bag', 'image':'/assets/photo2.avif', 'price':399},
  ]

useTitle("Home")

  return (
    <main>
      <section className='flex flex-wrap justify-between'>
        {products.map((product)=>(
            <ProductCard key={product.id} product={product} />
        ))}
        
      </section>
    </main>
  )
}
