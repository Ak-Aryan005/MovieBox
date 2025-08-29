import { useEffect, useState } from "react";
import { useMovieContext } from "../context/MoviesContext";

let key="bdb48e358f0c17e1bda1367a9bb75ced"

export function usepopulerMovies(){
    const [pop,setp]=useState([])
    useEffect(()=>{
            let link = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`;
             let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>setp(get.results))
        },[])
       
    return pop
}

export function useScifiMovies(){
  const [tmovie,settm]= useState([])

    useEffect(()=>{
            let link = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878&page=1`;
             let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
    },[])
    return tmovie
}




export function useTrendingMovies(){
    const [tmovie,settm]= useState([])
   useEffect(()=>{
     let link=`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
   },[])
  return   tmovie
}

export function useActionMovies(){

    const [tmovie,settm]= useState([])
   useEffect(()=>{
  const link =`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28&page=1`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
   },[])
  return   tmovie
}



export function useAdventureMovies(){
    const [tmovie,settm]= useState([])
   useEffect(()=>{
  const link =`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=12&page=1`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
   },[])
  return   tmovie
}


export function useAniTypes(){
    const [tmovie,settm]= useState([])
   useEffect(()=>{
  const link =`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16&page=1`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
   },[])
  return   tmovie
}


export function useComTypes(){
    const [tmovie,settm]= useState([])
   useEffect(()=>{
  const link =`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35&page=1`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
   },[])
  return   tmovie
}


export function useMarvelTypes(){
    const [tmovie,settm]= useState([])
   useEffect(()=>{
const link =`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_companies=420`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
   },[])
  return   tmovie
}


export function useDCTypes(){
    const [tmovie,settm]= useState([])
   useEffect(()=>{
const link =`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_companies=9993`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
   },[])
  return   tmovie
}


export const useDetail=()=>{
      const [tmovie,settm]= useState([])
      const {dataID,setdata}  = useMovieContext()
   useEffect(()=>{
const link =`https://api.themoviedb.org/3/movie/${dataID ||"575265" }?api_key=${key}`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get))
   },[setdata])
  return   tmovie
}




export function useMoviesearch(){
    const [tmovie,settm]= useState([])
    const {searchData,count} = useMovieContext()
   useEffect(()=>{
const link =` https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${ searchData ||"batman"}&page=${count}`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results)).catch(error=> console.log("error",error))
   },[searchData,count])
  return   tmovie
}





export function useGenres(){
    const [tmovie,settm]= useState([])
    const {gentype,count} = useMovieContext()
   useEffect(()=>{
  const link =`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${ gentype||878}&page=${count}`
    let ak=fetch(link)
           ak.then(res=>res.json()).then(get=>settm(get.results))
   },[gentype,count])

  return   tmovie
}