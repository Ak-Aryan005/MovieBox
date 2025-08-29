import React, {useEffect } from 'react'
import { useGenres } from '../api/api'
import { useMovieContext } from '../context/MoviesContext'
import MovieCard from '../components/MovieCard'
function Genres() {
const {setgen,count,setCount,box,setbox} = useMovieContext()
const genre=useGenres()
 const check = () => {
    setCount(prev => prev + 1)
    if (genre) {
      setbox(prev => [...prev, ...genre]) 
    }
  }
useEffect(() => {
  if (genre) {
    if (count === 1) {
      // New genre → replace box
      setbox(genre)
   
  }}
}, [genre])

const change=(val)=>{
 setgen(val)  
    setbox([])
    setCount(1)
}

  return (
    <>
<div className='text-white w-full h-fit  m-4'>
  <ul id='style-4' className='flex  border-b-2 sm:w-full sm:border-t-4 sm:border-b-4 md:border-t-4 md:border-b-4   md:w-full gap-2  md:gap-10 text-[13px] md:text-[20px] justify-center  overflow-x-scroll  '>
    <li className='hover:text-red-500 cursor-pointer' onClick={()=> change(28) } >Action</li>
    <li className='hover:text-red-500 cursor-pointer' onClick={()=> change(12) } >Adventure</li>
    <li className='hover:text-red-500 cursor-pointer' onClick={()=> change(35) } >Comedy</li>
     <li className='hover:text-red-500 cursor-pointer' onClick={()=> change(27) } > Horror</li>
    <li className='hover:text-red-500 cursor-pointer' onClick={()=> change(16) } > Animation</li>
  </ul>
</div>

<div id='style-4' className='text-amber-50 md:ml-16 m-3  justify-center   flex flex-wrap   gap-3     '>
 
       { box.map((movie, index) => (
        <MovieCard 
    key={`${movie.id}-${index}`} 
    title={movie.title} 
    img={movie.poster_path} 
    id={movie.id} 
  />
))}

<span className='w-full  flex justify-center'>
       <button className='text-[20px] w-fit rounded-[5px] p-1  cursor-pointer text-amber-50 h-full  justify-center  bg-red-700' onClick={check}  > Load More </button>

</span>
    </div>
    </>
  )
}

export default Genres

 
