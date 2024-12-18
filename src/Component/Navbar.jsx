import React from 'react';
import { Link } from 'react-router-dom';


const  Navbar = () =>{

  return (
    <div className='flex w-full item-center justify-between p-3 absolute z-10'>
        <Link to='/'>
          <h1 className='text-red-600 font-bold cursor-pointer text-3xl uppercase'>Netflix</h1>
        </Link>
        <div>
          <Link className='link' to='/login'> 
            <button 
            className='text-white pr-2'>Log In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 text-white rounded py-2 px-6 '>Sign Up</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar