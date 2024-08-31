import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {

// const activeClass= "text-xl block py-2 px-3 text-white bg-blue-700 md:bg-transparent md:text-blue-800 md:p-0 md:dark:text-orange-500"
//   const inactiveClass= "text-xl block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

const cartList = useSelector(state => state.cartState.cartList)


  return (
    <header className="bg-white border-b-2 border-gray-200" >
      
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={process.env.PUBLIC_URL + '/assets/favicon.ico.jpg'} className="h-20" alt="bag Logo" />
                  <span className=" self-center text-3xl font-semibold whitespace-nowrap">Redux Cart</span>
              </Link>
            </div>
          
        
            <nav className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">  
                <NavLink to="/"  aria-current="page" className='text-2xl font-medium rounded-md hover:bg-gray-300 p-2'>Home</NavLink>     
                <NavLink to="/cart" className='text-2xl font-medium rounded-md hover:bg-gray-300 p-2' >Cart</NavLink>
            </nav>
            <Link to="/cart">
            <span className='text-2xl'>Cart:{cartList.length}</span>
            </Link> 
        </div>
       

      

    </header>
  )
}


