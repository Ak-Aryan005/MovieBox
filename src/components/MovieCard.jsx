import React from 'react'
import { useMovieContext } from '../context/MoviesContext'

function MovieCard({title,img,id,movie}) {
    const {check} = useMovieContext() 

  return (
    <div style={{ display: img ? "block" : "none" }}
 className='  w-fit h-full text-amber-50  md:m-1  ' onClick={()=>check(id)} >
       <img src={`https://image.tmdb.org/t/p/w300${img}`} className=' w-32 h-36 md:w-36 md:h-44 rounded-[7px] mb-1 cursor-pointer '  alt="" /> 
        <p className='flex flex-wrap  w-[100px] md:w-[150px]  text-[15px]' >   {title}   </p>
    </div>
  )
}

export default MovieCard
