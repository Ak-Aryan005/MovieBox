import React from 'react'
import { useMovieContext } from '../context/MoviesContext'
function Details({poster,title,overview,background,genres,country,vote,language,detail,id}) {

  const {add,removeitems,fav} = useMovieContext()

const handle = () => {
  if (!fav) return;

  // Check if the id already exists in the fav array
  const exists = fav.some(item => item.id === id);

  if (exists) {
    // If already exists → remove
    removeitems(id);
  } else {
    // If not exists → add
    add(title, poster, id);
  }
};



  return (
   <>

    <div className='m-5 w-fit text-shadow-pink-500   ' >

     <img className='w-full md:h-[550px] md:pr-[10px] md:pl-[10px] ' loading="lazy" src={`https://image.tmdb.org/t/p/original${background}`   } alt="poster" />

      <div className='flex w-full h-full mt-7'>
        <img className=' w-32 h-36 md:w-[400px] md:h-[400px] rounded-[7px] md:mr-2.5  ' src={`https://image.tmdb.org/t/p/w780${poster}`} alt="poster" />
        <span className='ml-4 text-shadow-pink-500 self-center'>
      <button className='h-fit bg-[#FF0000] p-2 rounded-[5px]  mb-2.5 cursor-pointer' onClick={handle } >
         {fav.some(item => item.id === id) ? "Remove from Favourites"   : "Add to Favourites"}
 </button>
        <p className=' text-[15px] md:text-[20px] ml-2' >{title} </p>
          <p  className="m-2 " > Genre : {genres} </p>
          <p className="m-2 " > Country : {country} </p>
          <p className="m-2 " > Rating : {vote} </p>
          <p className="m-2 " > Available in : {language} </p>
     <p className='text-[13px] md:w-[50%] p-2 md:text-[15px] '> overview: {overview} </p>
          <a className='cursor-pointer text-[#FF0000] text-[15px] p-1 mb-3 ' href={detail} target="_blank" rel="noopener noreferrer">
        {detail ? " More Info : click here" : " "}  </a>

        </span>
      </div>
    </div> 
   </>
  )
}

export default Details
