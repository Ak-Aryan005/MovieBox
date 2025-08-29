import { createContext, useContext } from "react";

export const moviesContext = createContext()
export const MoviesProvider = moviesContext.Provider
export const  useMovieContext= ()=>{
    return useContext(moviesContext)
}