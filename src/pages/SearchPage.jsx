import React, { useEffect, useState } from 'react'
import { useMovieContext } from '../context/MoviesContext'
import MovieCard from '../components/MovieCard'
import { useMoviesearch } from '../api/api'
function SearchPage() {
    const {searchData} = useMovieContext()
    const sea=useMoviesearch()
   const [ak,setak] = useState([])
  const {setCount,count} = useMovieContext()

  const check = () => {
    setCount(prev => prev + 1)
    if (sea) {
      setak(prev => [...prev, ...sea]) 
    }
  }

  useEffect(()=>{
    if(count===1){
setak(sea)
    }
  },[sea])
    
  return (
    <>      
 <div id='style-4' className='text-amber-50 md:ml-16 m-4   flex flex-wrap   gap-3     '>
   {ak.length > 0? ak.map((movie,index) => searchData ? 
           <MovieCard key={movie.id+index} title={movie.title} img={movie.poster_path} id={movie.id}  /> : <p>not found</p>
         ) : "" }
<span className='w-full  flex justify-center'>
       <button className='text-[20px] w-fit rounded-[5px] p-1  cursor-pointer text-amber-50 h-full  justify-center  bg-red-700' onClick={check}  > Load More </button>

</span>
    </div>
    </>
  )
}

export default SearchPage

