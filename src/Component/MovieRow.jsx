import React, { useState } from 'react';
import {FaHeart, FaRegHeart } from "react-icons/fa";


const MovieRow =({item, id}) => {

    const [ like , setLike] = useState(false);

  return (
    <div key={id} className='relative cursor-pointer inline-block w-[160px] md:w-[240px] lg:w-[280px] p-1'>
        <img className='w-full h-full block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.name}/>
        <div className='absolute top-0 left-0 w-full h-full  hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='items-center text-xs md:text-sm text-center whitespace-normal flex justify-center h-full w-full font-bold'>{ item.title }{item.name}</p>
            <p>{ like ? <FaHeart className='absolute bottom-3 left-3' /> : <FaRegHeart className='absolute top-3 left-3' />}</p>
        </div>
    </div>
  )
}

export default MovieRow
