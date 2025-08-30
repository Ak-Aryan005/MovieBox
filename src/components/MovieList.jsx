import MovieSection from './MovieSection';
import { useAniTypes, useComTypes, useDCTypes, useMarvelTypes, useActionMovies, usepopulerMovies,useScifiMovies, useTrendingMovies, useAdventureMovies } from '../../api/index'
function MovieList() {
    
     const popular = usepopulerMovies();
     const trending = useTrendingMovies();
     const action = useActionMovies();
     const Scifi= useScifiMovies()
     const Adventure = useAdventureMovies()
     const comedy= useComTypes()
     const marvel=useMarvelTypes()   
     const Animation = useAniTypes()
     const dc= useDCTypes()
  return (
    <>
    
      <MovieSection title="Popular Movies" movies={popular}  />
      <MovieSection title="Trending Movies" movies={trending} />
      <MovieSection title="Sci-Fi  Movies" movies={Scifi} />
      <MovieSection title="Action Movies" movies={action} />
      <MovieSection title="Animation" movies={Animation} />
      <MovieSection title="Adventure Movies" movies={Adventure} />
      <MovieSection title="Comedy Movies" movies={comedy} />
      <MovieSection title="Marvel Movies" movies={marvel} />
      <MovieSection title="DC Pictures" movies={dc} />

   </>
  )
}

export default MovieList
