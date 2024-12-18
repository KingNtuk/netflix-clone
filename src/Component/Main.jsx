import React, { useEffect, useState } from 'react';
import axios  from "axios";
import requests from '../Request';

const Main = () => {

    const [movies , setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() =>{
        axios.get(requests.requestTrending).then((response)=>{
            setMovies(response?.data?.results)
        })
    },[])

    const truked = (str , num) =>{
        if(str?.length > num){
            return str.slice(0, num) * "...";
        }else{
            return str
        }
    }
 
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.name}/>
            <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                <h1 className='text-3xl md:text-5xl font-bold my-4'>{movie?.name}</h1>
                <div className='my-4'>
                    <button className='bg-gray-300 text-black py-2 px-5 border-gray-300 ' >Play</button>
                    <button className='text-white py-2 px-5 ml-4 border border-gray-300'>Watch Later</button>
                </div>
                <p className='text-gray-300 text-sm'>Realease: {movie?.release_date}</p>
                <p className='w-full  md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truked(movie?.overview , 200 )}</p>
            </div>
        </div>
    </div>
  )
}

export default Main
