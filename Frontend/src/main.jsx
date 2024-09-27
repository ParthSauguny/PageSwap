import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import "./index.css"
import Layout from './Layout';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import { ToastContainer } from 'react-toastify';
import AddBook from './Components/Add-Book';
import ViewBooks from './Components/ViewBooks';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/user/login' element={<Login/>}/>
    <Route path='/user/signup' element={<Signup/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/book/add-book' element={<AddBook/>}/>
    <Route path='/ll1' element={<ViewBooks/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
    <ToastContainer/>
  </>
)