import React, { useEffect, useState } from 'react';
import axios from "axios"
import MovieRow from './MovieRow';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

const Rows = ({title, fetchUrl, rowId}) => {

    const [movies , setMovies] = useState([])

    const slideLeft = () =>{
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () =>{
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    }



    // const key = "f9264d4d92764954be013b1865857980"

    useEffect(() =>{
        axios.get(fetchUrl).then((response) =>{
            setMovies(response?.data?.results)
        })
    },[fetchUrl])

    console.log(movies)

  return (
    <>
        <h2 className='text-white font-bold md:xl p-4'>{title}</h2>
        <div className='relative items-center flex'>
            <MdChevronLeft 
            onClick={slideLeft}
            size={40} className='bg-white rounded-full absolute z-10 opacity-40 hover:opacity-100 cursor-pointer hidden hover:block'/>
                <div id={'slider' + rowId} className='w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth '>
                    {
                        movies?.map((item, id)=>{
                            return(
                                <MovieRow item={item} id={id}/>
                            )
                        })
                    }
                </div>
            <MdChevronRight
            onClick={slideRight}
            size={40} className='bg-white rounded-full absolute z-10 opacity-40 hover:opacity-100 cursor-pointer right-0 hidden group-hover:block'/>
        </div>
    </>
  )
}

export default Rows
