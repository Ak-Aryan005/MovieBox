import React from 'react'
import { LuSearch } from "react-icons/lu";
import {NavLink, useParams,useNavigate} from 'react-router-dom'
import { useMovieContext } from '../context/MoviesContext';
function Header() {
 const {search,setsearch,setsearchData,setCount} = useMovieContext()
  const navigate = useNavigate();
const okay=()=>{
  setsearchData(search)
  setsearch("")
  setCount(1)
  navigate(`/SearchPage`);
}

  return (
   
<header className="bg-black h-18 flex items-center w-full px-4">
  <nav className="flex flex-wrap justify-between items-center w-full gap-4">
    {/* Menu Items */}
    <ul className="flex flex-wrap gap-4 text-[#F5F5F5] pt-4 cursor-pointer md:gap-10 md:text-[20px] ">
         
           <li> <NavLink to="/" className={({isActive})=> `hover:text-red-500 cursor-pointer ${isActive ? "text-red-500"  :"text-[#F5F5F5]" }`  } >
            Home
            </NavLink> </li>
               <li> <NavLink to="/Movies" className={({isActive})=> `hover:text-red-500 cursor-pointer ${isActive ? "text-red-500"  :"text-[#F5F5F5]" }`  } >
            Movies
            </NavLink> </li>
               <li> <NavLink to="/Genres" className={({isActive})=> `hover:text-red-500 cursor-pointer ${isActive ? "text-red-500"  :"text-[#F5F5F5]" }`  } >
            Genres
            </NavLink> </li>
               <li> <NavLink to="/Favourite" className={({isActive})=> `hover:text-red-500 cursor-pointer ${isActive ? "text-red-500"  :"text-[#F5F5F5]" }`  } >
            Favourite
            </NavLink> </li>
               </ul>

    {/* Search */}
    <div className="flex  items-center relative w-full sm:w-auto">
      <input
        type="text"
        className="w-full sm:w-60 h-8 bg-[#F5F5F5] rounded-2xl pl-3 pr-8 text-black outline-0"
        placeholder="Search..."
        value={search}
        onChange={(e)=> setsearch(e.target.value)}
      onKeyDown={(e) => {
    if (e.key === "Enter") {
     search.trim()? okay(): ""
    }
  }}  />
      <LuSearch onClick={()=> search.trim()? okay(): ""} className="absolute right-3 text-black sm:text-base text-xl sm:text-black cursor-pointer " />
    </div>
  </nav>
</header>








    // <header className="bg-black h-16 flex items-center w-full px-6">
    //   <nav className="flex justify-between items-center w-full  flex-wrap ">
    //     {/* Left Menu */}
    //     <ul className="flex gap-6 text-white text-sm font-medium">
    //       <li className="hover:text-red-500 cursor-pointer">Home</li>
    //         <li className="hover:text-red-500 cursor-pointer">Movies</li>
    //       <li className="hover:text-red-500 cursor-pointer">Series</li>
    //       <li className="hover:text-red-500 cursor-pointer">Animation</li>
    //       <li className="hover:text-red-500 cursor-pointer">Favourites</li>
    //     </ul>

    //     {/* Search Bar (Center) */}
    //     <div className="relative w-72">
    //       <input
    //         type="text"
    //         className="w-full h-10 bg-white rounded-full pl-4 pr-10 text-black placeholder-gray-500 outline-none"
    //         placeholder="Search movies......."
    //       />
    //       <LuSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-lg cursor-pointer" />
    //     </div>

    //     {/* Right Menu */}
     
    //   </nav>
    // </header>
  




  )
}

export default Header
