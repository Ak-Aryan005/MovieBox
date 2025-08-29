import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { MoviesProvider } from './context/MoviesContext'
import { Outlet } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'
function App() {
  let [count, setCount] = useState(1)
  // const [populerMovie, setpop] = useState([])
  const [gentype,setgen] = useState()
   const [box,setbox] = useState([])
const [fav,setfav] = useState([])

const [search,setsearch] = useState("")
const [searchData,setsearchData] = useState("")
 const [dataID,setdata] = useState('')
  const navigate = useNavigate();
const [mid,setid] = useState([])


const check=(id)=>{
    setid(id? id : "ol")   
      setdata(id)
      console.log("aryan")
         navigate(`/MovieDetail`);
  }



const add=(movietitle,img,movieid)=>{
  setfav(prev=>[...prev,{title:movietitle,poster:img,id:movieid}])
  // setval('')
  console.log(fav)
}
const removeitems=(id)=>{
  setfav(prev=> prev.filter((data)=> data.id!==id ))
}
 
useEffect(()=>{
const get= JSON.parse(localStorage.getItem("note"))
if(get && get.length>0){
  setfav(get)
}
},[])

useEffect(()=>{
  localStorage.setItem("note",JSON.stringify(fav))
},[fav])


  return (
    <MoviesProvider value={{check,mid,dataID,setdata,search,setsearch,searchData,setsearchData,add,fav,setfav,removeitems,gentype,setgen,count,setCount,box,setbox}} >
        <Header/>
    <Outlet />
    </MoviesProvider>
  )
}

export default App
