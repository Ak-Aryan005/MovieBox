import MovieCard from './MovieCard'

function MovieSection({movies,title}) {
  
  return (
 <>
    <h1 className='m-5 text-amber-50' > {title} </h1>
 <div  id='style-4' className='text-amber-50 md:m-4 m-2   flex   gap-3   overflow-x-scroll  '>
        {movies.length > 0? movies.map((ele)=>(       
 <MovieCard key={ele.id} title={ele.title} img={ele.poster_path}   id={ele.id} />
         ))
          : <p>NOt found</p>
        } 
    </div>
   
 </>
  )
}

export default MovieSection
