import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import "./index.css"
import Layout from './Layout';
import GiveBook from "./Components/GiveBook"
import Login from './Components/Login';
import Signup from './Components/Signup';
import BorrowBook from './Components/BorrowBook';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ExchangeBook from './Components/Exchange-book';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/user/login' element={<Login/>}/>
    <Route path='/user/signup' element={<Signup/>}/>
    <Route path='/book/donate' element={<GiveBook/>}/>
    <Route path='/book/borrow' element={<BorrowBook/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/book/exchange' element={<ExchangeBook/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
