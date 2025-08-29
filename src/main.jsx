import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Genres from './pages/Genres'
import Favourite from './pages/Favourite'
import MovieDetail from './pages/MovieDetail.jsx'
import SearchPage from './pages/SearchPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home />} /> 
      <Route path='Movies' element={<Movies />} /> 
      <Route path='Genres' element={<Genres />} /> 
      <Route path='Favourite' element={<Favourite />} /> 
      <Route path='MovieDetail' element={<MovieDetail />} /> 
     <Route path='SearchPage' element={<SearchPage />} /> 
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
  
)
