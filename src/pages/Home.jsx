import React, { useState } from 'react'
import MovieList from '../components/MovieList'
import avengers from  "../assets/back/avengers.jpg"
import ironman from "../assets/691515.jpg"
import got  from '../assets/back/peakpx.jpg'
import batman from '../assets/back/batman.jpg'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Home() {

  let images = [ironman, batman,got, avengers];

  let [i, setI] = useState(0);
  let [pic, setPic] = useState(images[0]);

  const increaser = () => {
    setI((prev) => {
      let next = prev + 1;
      if (next >= images.length) next = 0; // loop back
      setPic(images[next]);
      return next;
    });
  };

  const decreaser = () => {
    setI((prev) => {
      let next = prev - 1;
      if (next < 0) next = images.length - 1; // go to last
      setPic(images[next]);
      return next;
    });
  };





  return (
    <div>
      <div className='m-4 relative' > 
        <img className='w-full md:h-[650px]   md:pr-[10px] md:pl-[10px] ' src={pic} alt="" />
 <h1 id='h1ak' className="  absolute max-w-[600px] top-1/2 left-6 md:left-16 
 sm:text-3xl   md:text-5xl font-bold leading-snug 
bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent 
  drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
  Welcome! <br /> Search and discover your favorite movies
</h1>
  <button onClick={increaser} className="absolute cursor-pointer top-1/2 right-0  md:right-2 -translate-y-1/2 md:bg-black/60 text-white md:px-2 py-2 rounded-full hover:bg-black/80">
<FaAngleRight />
 </button>
   <button onClick={decreaser}
   className="absolute cursor-pointer  top-1/2 left-0 md:left-2 -translate-y-1/2 md:bg-black/60 text-white md:px-2 py-2 rounded-full hover:bg-black/80">
<FaAngleLeft />
 </button>
      </div>
     <MovieList />
    </div>
  ) 
}

export default Home
