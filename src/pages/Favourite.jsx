import React from 'react'
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../context/MoviesContext'
function Favourite() {
  const {fav,setfav} = useMovieContext()
  console.log(fav)
  return (
    <div>

      {fav==""? <p className='w-full h-full md:text-5xl flex mt-8 justify-center md:m-10 ' >Add your Favourite Movies</p> : 
      <div  id='style-4' className='text-amber-50 md:ml-16 m-3 mt-5  flex flex-wrap   gap-3'    >
         {
      fav?  fav.map((data,index)=>
        
          <MovieCard  key={data.id-index} title={data.title} img={data.poster} id={data.id} movie={data.mvid} />
        ) : <p>no data</p>
      }
      </div>
}
    </div>
  )
}

export default Favourite
