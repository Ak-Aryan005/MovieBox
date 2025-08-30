import React from 'react'
import { usepopulerMovies,useDetail, useMoviesearch } from '../../api/index'
import Details from './Details'
function MovieDetail() {
const data = usepopulerMovies()

const data2= useDetail()
const sea=useMoviesearch()
let ak=sea.map((m)=> m.title)

let genres=data2.genres
let gdata= genres? genres.map((md)=>md.name) : ""
let ar=Array.from(gdata)
let st=ar.join(", ")
const languages=data2.spoken_languages
const lang=languages?languages.map((lan)=> lan.english_name ) : ""
let str=Array.from(lang).join(", ")

  return (
    <>     
       < Details  key={data2.id}
        title={data2.title}
         poster={data2.poster_path}
          background={data2.backdrop_path} 
          overview={data2.overview}
          genres={st}  
          country={data2.origin_country}
          vote={data2.vote_average}
          language={str}
          detail={data2.homepage}
          id={data2.id}  
       /> 
 </>
  )
}

export default MovieDetail
